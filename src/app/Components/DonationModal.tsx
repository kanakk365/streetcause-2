"use client"

import React, { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import TicketModal from "./TicketModal";
import RefreshReminderPopup from "./RefreshReminderPopup";

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
  modal?: { ondismiss?: () => void };
};

type RazorpayInstance = {
  open: () => void;
  on: (event: "payment.failed" | "modal.dismiss", handler: (err?: RazorpayPaymentFailed | undefined) => void) => void;
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
  const [memberId, setMemberId] = useState("");
  const [memberType, setMemberType] = useState("Member Type");
  const [paymentMode, setPaymentMode] = useState("Payment Mode");
  const [touched, setTouched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "failed">("idle");
  const [ticketData, setTicketData] = useState<TicketData | null>(null);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [showReminderPopup, setShowReminderPopup] = useState(false);

  // Field error states
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    memberId: "",
    memberType: "",
    amount: "",
    idType: "",
    paymentMode: ""
  });

  const minAmount = 1;

  useEffect(() => {
    if (!isOpen) {
      // Clear form when modal closes
      clearForm();
      setShowReminderPopup(false); // Hide popup when modal closes
      return;
    }
    // Reset payment status when modal opens
    setPaymentStatus("idle");
    setShowReminderPopup(true); // Show popup when modal opens
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
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

  // Function to clear all form fields
  const clearForm = () => {
    setName("");
    setMobile("");
    setEmail("");
    setAmount("");
    setMemberId("");
    setMemberType("Member Type");
    setPaymentMode("Payment Mode");
    setTouched(false);
    setIsLoading(false);
    setPaymentStatus("idle");
    setTicketData(null);
    setShowTicketModal(false);
    setShowReminderPopup(false);
    setErrors({
      name: "",
      mobile: "",
      email: "",
      memberId: "",
      memberType: "",
      amount: "",
      idType: "",
      paymentMode: ""
    });
  };

  // Handle popup dismissal
  const handlePopupDismiss = () => {
    setShowReminderPopup(false);
  };

  // Validate individual fields
  const validateField = (fieldName: string, value: string) => {
    switch (fieldName) {
      case 'name':
        return value.trim().length < 2 ? "Name must be at least 2 characters" : "";
      case 'mobile':
        return !/^\d{10}$/.test(value.trim()) ? "Mobile must be 10 digits" : "";
      case 'email':
        return !/.+@.+\..+/.test(value.trim()) ? "Please enter a valid email" : "";
      case 'memberId':
        return value.trim().length === 0 ? "Member ID is required" : "";
      case 'amount':
        return Number(value || 0) < minAmount ? "Please enter a valid donation amount" : "";
      case 'idType':
        return value === "ID" ? "Please select an ID type" : "";
      case 'memberType':
        return value === "Member Type" ? "Please select a member type" : "";
      case 'paymentMode':
        return value === "Payment Mode" ? "Please select a payment mode" : "";
      default:
        return "";
    }
  };

  // Update errors when fields change
  useEffect(() => {
    if (touched) {
      setErrors({
        name: validateField('name', name),
        mobile: validateField('mobile', mobile),
        email: validateField('email', email),
        memberId: validateField('memberId', memberId),
        memberType: validateField('memberType', memberType),
        amount: validateField('amount', amount),
        idType: "",
        paymentMode: validateField('paymentMode', paymentMode)
      });
    }
  }, [name, mobile, email, memberId, memberType, amount, paymentMode, touched]);

  const isValid = useMemo(() => {
    const mobileOk = /^\d{10}$/.test(mobile.trim());
    const emailOk = /.+@.+\..+/.test(email.trim());
    const amountOk = amountNumber >= minAmount;
    const memberIdOk = memberId.trim().length > 0;
    const memberTypeOk = memberType !== "Member Type";
    return name.trim().length > 1 && mobileOk && emailOk && amountOk && memberIdOk && memberTypeOk && paymentMode !== "Payment Mode";
  }, [name, mobile, email, amountNumber, memberId, memberType, paymentMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);

    // Validate all fields and set errors
    const newErrors = {
      name: validateField('name', name),
      mobile: validateField('mobile', mobile),
      email: validateField('email', email),
      memberId: validateField('memberId', memberId),
      memberType: validateField('memberType', memberType),
      amount: validateField('amount', amount),
      idType: "",
      paymentMode: validateField('paymentMode', paymentMode)
    };
    setErrors(newErrors);

    if (!isValid) return;

    // Add timeout to prevent indefinite loading
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        setPaymentStatus("failed");
        toast.error("Request timed out. Please try again.");
      }
    }, 30000); // 30 seconds timeout

    setIsLoading(true);
    setPaymentStatus("processing");
    try {
      // Step 1: Create Razorpay order via checkout endpoint
      const cRes = await fetch("https://scpapi.elitceler.com/api/v1/payments/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          amount: amountNumber,
          meta: { context: "donation" }
        })
      });
      if (!cRes.ok) throw new Error("Failed to create order");
      const cJson = await cRes.json();
      const order = cJson.order || cJson.paymentUrl;
      const orderId = order?.id;
      const amount = order?.amount;
      const currency = order?.currency || "INR";
      const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

      if (!orderId) throw new Error("Order ID not received");

      // Step 2: Create donation record on backend with razorpayOrderId
      const donationData = {
        name: name.trim(),
        mobileNumber: mobile.trim(),
        email: email.trim(),
        donationAmount: amountNumber,
        memberId: memberId.trim(),
        memberType: memberType,
        paymentMode,
        razorpayOrderId: orderId
      };

      const response = await fetch('https://scpapi.elitceler.com/api/v1/d2/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      if (result.success && result.data) {
        const donation = result.data;

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
          theme: { color: "#082ca7" },
          handler: async (response: RazorpayPaymentSuccess) => {
            try {
              // Step 4: Verify payment with backend
              const verifyResponse = await fetch(
                "https://scpapi.elitceler.com/api/v1/payments/verification",
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                  }),
                }
              );

              if (!verifyResponse.ok) {
                throw new Error("Verification failed");
              }

              const verifyData = await verifyResponse.json();
              if (verifyData.success) {
                setPaymentStatus("success");
                const formattedTicketData: TicketData = {
                  passPurchaseName: donation.name,
                  passType: "Donation",
                  passId: donation.donorId,
                  mobileNumber: donation.mobileNumber,
                  email: donation.email,
                  memberType: donation.memberType,
                  paymentMode: donation.paymentMode,
                  qrCode: donation.qrCode,
                };
                toast.success(`Payment successful! ₹${amountNumber} donation received. Here is your receipt.`);
                setIsLoading(false);
                setTicketData(formattedTicketData);
                setShowTicketModal(true);
              } else {
                throw new Error(verifyData.message || "Verification failed");
              }
            } catch (e) {
              console.error(e);
              setPaymentStatus("failed");
              setIsLoading(false);
              toast.error("Payment verification failed. Please contact support with your order ID.");
            }
          },
          modal: {
            ondismiss: async () => {
              // Poll verification briefly in case payment completed right before close
              const attempts = 1;
              const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
              let verified = false;
              for (let i = 0; i < attempts; i++) {
                try {
                  const resp = await fetch("https://scpapi.elitceler.com/api/v1/payments/verification", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ razorpay_order_id: orderId }),
                  });
                  if (resp.ok) { verified = true; break; }
                } catch {}
                await wait(2000);
              }
              if (verified) {
                setPaymentStatus("success");
                const formattedTicketData: TicketData = {
                  passPurchaseName: donation.name,
                  passType: "Donation",
                  passId: donation.donorId,
                  mobileNumber: donation.mobileNumber,
                  email: donation.email,
                  memberType: donation.memberType,
                  paymentMode: donation.paymentMode,
                  qrCode: donation.qrCode,
                };
                toast.success(`Payment successful! ₹${amountNumber} donation received. Here is your receipt.`);
                setIsLoading(false);
                setTicketData(formattedTicketData);
                setShowTicketModal(true);
              } else {
                setPaymentStatus("failed");
                setIsLoading(false);
                toast.error("Payment cancelled.");
              }
            }
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", async function (err?: RazorpayPaymentFailed) {
          console.error("Razorpay failure:", err);
          try {
            await fetch("https://scpapi.elitceler.com/api/v1/payments/verification", {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ razorpay_order_id: orderId }),
            });
          } catch (e) {
            console.error("Verification call on failure errored:", e);
          }
          setPaymentStatus("failed");
          toast.error("Payment failed. Please try again.");
          setIsLoading(false);
        });

        // Remove old event-based modal.dismiss; handled via options.modal.ondismiss

        rzp.open();

        const fallbackTimeout = setTimeout(() => {
          if (isLoading) {
            console.log("Fallback timeout triggered - resetting loading state");
            setIsLoading(false);
            setPaymentStatus("failed");
            toast.error("Payment process timed out. Please try again.");
          }
        }, 30000);

        const clearFallback = () => clearTimeout(fallbackTimeout);

        const originalSuccess = options.handler;
        options.handler = (resp) => {
          clearFallback();
          originalSuccess(resp);
        };

        rzp.on("payment.failed", async function (err?: RazorpayPaymentFailed) {
          clearFallback();
          console.error("Razorpay failure:", err);
          try {
            await fetch("https://scpapi.elitceler.com/api/v1/payments/verification", {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ razorpay_order_id: orderId }),
            });
          } catch (e) {
            console.error("Verification call on failure errored:", e);
          }
          setPaymentStatus("failed");
          toast.error("Payment failed. Please try again.");
          setIsLoading(false);
        });

        // Remove old event-based modal.dismiss; handled via options.modal.ondismiss
      } else {
        toast.error('Failed to create donation. Please try again.');
        setIsLoading(false);
        setPaymentStatus("failed");
      }
    } catch (error) {
      console.error('Donation submission failed:', error);
      setPaymentStatus("failed");
      toast.error(error instanceof Error ? error.message : 'Failed to submit donation. Please try again.');
    } finally {
      setIsLoading(false);
      // Clear timeout if it exists
      if (typeof timeoutId !== 'undefined') {
        clearTimeout(timeoutId);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Refresh Reminder Popup */}
      <RefreshReminderPopup
        isOpen={showReminderPopup}
        onClose={handlePopupDismiss}
      />
      <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      <div className="absolute  inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-[95vw] max-w-[700px] max-h-[90vh] overflow-y-auto rounded-2xl p-4 sm:p-8 md:p-10 mx-4 bg-[#082ca7]">
        <header className="flex flex-col items-center gap-2 mb-6 sm:mb-10">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center">Make a Donation</h2>
          <p className="text-white/90 text-sm sm:text-base text-center">Every rupee counts towards transforming lives.</p>
        </header>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10">
          <div className="flex flex-col">
            <input
              className={`rounded-xl bg-white/95 px-4 py-3 outline-none placeholder:text-gray-500 ${
                errors.name ? 'border-2 border-[#e5081f]' : ''
              }`}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="text-[#e5081f] text-sm mt-1">{errors.name}</span>}
          </div>
          <div className="flex flex-col">
            <input
              className={`rounded-xl bg-white/95 px-4 py-3 outline-none placeholder:text-gray-500 ${
                errors.mobile ? 'border-2 border-[#e5081f]' : ''
              }`}
              placeholder="Mobile Number"
              inputMode="numeric"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ""))}
            />
            {errors.mobile && <span className="text-[#e5081f] text-sm mt-1">{errors.mobile}</span>}
          </div>
          <div className="flex flex-col">
            <input
              className={`rounded-xl bg-white/95 px-4 py-3 outline-none placeholder:text-gray-500 ${
                errors.email ? 'border-2 border-[#e5081f]' : ''
              }`}
              placeholder="Mail ID"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="text-[#e5081f] text-sm mt-1">{errors.email}</span>}
          </div>
          <div className="flex flex-col">
            <input
              className={`rounded-xl bg-white/95 px-4 py-3 outline-none placeholder:text-gray-500 ${
                errors.memberId ? 'border-2 border-[#e5081f]' : ''
              }`}
              placeholder="Member ID"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            />
            {errors.memberId && <span className="text-[#e5081f] text-sm mt-1">{errors.memberId}</span>}
          </div>
          <div className="flex flex-col">
            <select
              className={`rounded-xl bg-white/95 px-4 py-3 outline-none text-gray-700 ${
                errors.memberType ? 'border-2 border-[#e5081f]' : ''
              }`}
              value={memberType}
              onChange={(e) => setMemberType(e.target.value)}
            >
              <option>Member Type</option>
              <option>L1</option>
              <option>L2</option>
              <option>L4</option>
            </select>
            {errors.memberType && <span className="text-[#e5081f] text-sm mt-1">{errors.memberType}</span>}
          </div>
          <div className="flex flex-col">
            <input
              className={`rounded-xl bg-white/95 px-4 py-3 outline-none placeholder:text-gray-500 ${
                errors.amount ? 'border-2 border-[#e5081f]' : ''
              }`}
              placeholder="Donation Amount"
              inputMode="numeric"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
            />
            {errors.amount && <span className="text-[#e5081f] text-sm mt-1">{errors.amount}</span>}
          </div>
          {/* <select
            className="rounded-xl bg-white/95 px-4 py-3 outline-none text-gray-700"
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
          >
            <option>ID</option>
            <option>Aadhar</option>
            <option>PAN</option>
            <option>Passport</option>
          </select> */}
          <div className="flex flex-col">
            <select
              className={`rounded-xl bg-white/95 px-4 py-3 outline-none text-gray-700 ${
                errors.paymentMode ? 'border-2 border-[#e5081f]' : ''
              }`}
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
            >
              <option>Payment Mode</option>
              <option>UPI</option>
              <option>Card</option>
              <option>Net Banking</option>
            </select>
            {errors.paymentMode && <span className="text-[#e5081f] text-sm mt-1">{errors.paymentMode}</span>}
          </div>

          {/* Display Amount to Pay */}
          {amountNumber > 0 && (
            <div className="sm:col-span-2 flex justify-center mt-4 p-4 bg-white/10 rounded-xl border border-white/20">
              <div className="text-center">
                <p className="text-white text-lg font-medium mb-1">Amount to Pay</p>
                <p className="text-white text-2xl font-bold">₹{amountNumber}</p>
              </div>
            </div>
          )}

          <div className="sm:col-span-2 flex justify-center mt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:min-w-[11.25rem] rounded-xl px-6 py-3 text-white font-medium bg-[#FF7A00] hover:bg-[#e66a00] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {paymentStatus === "processing" ? "Processing Payment..." :
               paymentStatus === "success" ? "Payment Successful!" :
               paymentStatus === "failed" ? "Payment Failed" :
               isLoading ? "Preparing Payment..." : "Submit"}
            </button>
          </div>
        </form>

        <button
          aria-label="Close"
          onClick={() => {
            // Close both donation modal and QR modal if open
            setShowTicketModal(false);
            clearForm();
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
    </>
  );
};

export default DonationModal;


