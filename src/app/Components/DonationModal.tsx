"use client"

import React, { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import TicketModal from "./TicketModal";

// Razorpay types
declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

type RazorpayPaymentSuccess = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type RazorpayPaymentFailed = {
  error: {
    code: string;
    description: string;
    source: string;
    step: string;
    reason: string;
    metadata: Record<string, unknown>;
  };
};

type RazorpayOptions = {
  key: string | undefined;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  order_id: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: { color?: string };
  handler: (response: RazorpayPaymentSuccess) => void;
};

type RazorpayInstance = {
  open: () => void;
  on: (event: "payment.failed", handler: (err: RazorpayPaymentFailed) => void) => void;
};

type DonationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type TicketData = {
  passPurchaseName: string;
  passType: string;
  passId: string;
  mobileNumber: string;
  email: string;
  memberType: string;
  paymentMode: string;
  qrCode: string;
};

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [idType, setIdType] = useState("ID");
  const [paymentMode, setPaymentMode] = useState("Payment Mode");
  const [touched, setTouched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ticketData, setTicketData] = useState<TicketData | null>(null);
  const [showTicketModal, setShowTicketModal] = useState(false);

  const minAmount = 100;

  useEffect(() => {
    if (!isOpen) {
      // Reset states when modal closes
      setTicketData(null);
      setShowTicketModal(false);
      return;
    }
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);


  const amountNumber = useMemo(() => Number(amount || 0), [amount]);

  const isValid = useMemo(() => {
    const mobileOk = /^\d{10}$/.test(mobile.trim());
    const emailOk = /.+@.+\..+/.test(email.trim());
    const amountOk = amountNumber >= minAmount;
    return name.trim().length > 1 && mobileOk && emailOk && amountOk && idType !== "ID" && paymentMode !== "Payment Mode";
  }, [name, mobile, email, amountNumber, idType, paymentMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;

    setIsLoading(true);
    try {
      // Step 1: Create donation record on backend
      const donationData = {
        name,
        mobileNumber: mobile,
        email,
        donationAmount: amountNumber,
        memberId: "SCD1L40001",
        memberType: "L4",
        paymentMode
      };

      const response = await fetch('https://scpapi.elitceler.com/api/v1/d1/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });

      const result = await response.json();

      if (result.success && result.data) {
        const donation = result.data;

        // Step 2: Create Razorpay order via checkout endpoint
        const cRes = await fetch("https://scpapi.elitceler.com/api/v1/payments/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: donation.name,
            amount: amountNumber,
            meta: { donationId: donation.donorId, donationDbId: donation.id }
          })
        });

        if (!cRes.ok) throw new Error("Failed to create order");
        const cJson = await cRes.json();
        const { orderId, amount, currency, keyId } = cJson;

        // Step 3: Open Razorpay Checkout
        const options: RazorpayOptions = {
          key: keyId ?? (process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string),
          amount,
          currency: currency ?? "INR",
          name: "Street Cause Donation",
          description: `Donation - ₹${amountNumber}`,
          order_id: orderId,
          prefill: {
            name: donation.name,
            email: donation.email,
            contact: donation.mobileNumber,
          },
          notes: {
            donationId: donation.donorId ?? "",
            donationDbId: String(donation?.id ?? ""),
            memberId: donationData.memberId,
            memberType: donationData.memberType,
          },
          theme: { color: "#aa0a63" },
          handler: async (resp: RazorpayPaymentSuccess) => {
            // Payment successful, show ticket
            console.log("Razorpay success:", resp);
            console.log("Donation data:", donation);

            const formattedTicketData: TicketData = {
              passPurchaseName: donation.name,
              passType: "Donation", // Since this is a donation, not a pass
              passId: donation.donorId,
              mobileNumber: donation.mobileNumber,
              email: donation.email,
              memberType: donation.memberType,
              paymentMode: donation.paymentMode,
              qrCode: donation.qrCode,
            };

            console.log("Formatted ticket data:", formattedTicketData);

            // Show success message
            toast.success(`Payment successful! ₹${amountNumber} donation received. Here is your receipt.`);

            setTicketData(formattedTicketData);
            setShowTicketModal(true);
            console.log("Ticket modal should now be visible");
          },
        };

        const rzp: RazorpayInstance = new window.Razorpay(options);
        rzp.on("payment.failed", function (err: RazorpayPaymentFailed) {
          console.error("Razorpay failure:", err);
          toast.error("Payment failed. Please try again.");
          setIsLoading(false);
        });
        rzp.open();

        // Handle modal dismiss (user closed without paying)
        rzp.on("payment.failed", () => {
          setIsLoading(false);
        });

      } else {
        toast.error('Failed to create donation. Please try again.');
      }
    } catch (error) {
      console.error('Donation submission failed:', error);
      toast.error('Failed to submit donation. Please try again.');
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      <div className="absolute  inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-[95vw] max-w-[700px] rounded-2xl p-4 sm:p-8 md:p-10 mx-4" style={{ background: "linear-gradient(180deg, #aa0a63 0%, #760233 100%)" }}>
        <header className="flex flex-col items-center gap-2 mb-6 sm:mb-10">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center">Make a Donation</h2>
          <p className="text-white/90 text-sm sm:text-base text-center">Every rupee counts towards transforming lives.</p>
        </header>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10">
          <input
            className="rounded-xl bg-white/95 px-4 py-3 outline-none placeholder:text-gray-500"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="rounded-xl bg-white/95 px-4 py-3 outline-none placeholder:text-gray-500"
            placeholder="Mobile Number"
            inputMode="numeric"
            value={mobile}
            onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ""))}
          />
          <input
            className="rounded-xl bg-white/95 px-4 py-3 outline-none placeholder:text-gray-500"
            placeholder="Mail ID"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="rounded-xl bg-white/95 px-4 py-3 outline-none placeholder:text-gray-500"
            placeholder={`Donation Amount `}
            inputMode="numeric"
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
          />
          <select
            className="rounded-xl bg-white/95 px-4 py-3 outline-none text-gray-700"
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
          >
            <option>ID</option>
            <option>Aadhar</option>
            <option>PAN</option>
            <option>Passport</option>
          </select>
          <select
            className="rounded-xl bg-white/95 px-4 py-3 outline-none text-gray-700"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
          >
            <option>Payment Mode</option>
            <option>UPI</option>
            <option>Card</option>
            <option>Net Banking</option>
            <option>Cash</option>
          </select>

          {!isValid && touched && (
            <div className="sm:col-span-2 text-sm text-white/90">
              <ul className="list-disc list-inside space-y-1">
                <li>Enter a valid name.</li>
                <li>Mobile must be 10 digits.</li>
                <li>Provide a valid email.</li>
                <li>Amount must be at least ₹{minAmount}.</li>
                <li>Select ID type and payment mode.</li>
              </ul>
            </div>
          )}

          <div className="sm:col-span-2 flex justify-center mt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:min-w-[11.25rem] rounded-xl px-6 py-3 text-white font-medium bg-white/20 hover:bg-white/25 border border-white/30 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : "Submit"}
            </button>
          </div>
        </form>

        <button
          aria-label="Close"
          onClick={() => {
            // Close both donation modal and QR modal if open
            setShowTicketModal(false);
            onClose();
          }}
          className="absolute right-3 top-3 text-white/90 hover:text-white text-xl"
        >
          ×
        </button>
      </div>

      {/* Ticket Modal for successful donation - shows alongside donation modal */}
      {ticketData && showTicketModal && (
        <TicketModal
          isOpen={showTicketModal}
          onClose={() => setShowTicketModal(false)}
          data={ticketData}
        />
      )}
    </div>
  );
};

export default DonationModal;


