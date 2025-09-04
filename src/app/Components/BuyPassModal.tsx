"use client"

import React, { useEffect, useMemo, useState } from "react";

type BuyPassModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialPassType?: string;
};

export const BuyPassModal: React.FC<BuyPassModalProps> = ({ isOpen, onClose, initialPassType }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [passId, setPassId] = useState("");
  const [passPurchase, setPassPurchase] = useState<string>("");
  const [passType, setPassType] = useState("Pass Type");
  const [idType, setIdType] = useState("ID");
  const [paymentMode, setPaymentMode] = useState("Payment Mode");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (initialPassType && isOpen) {
      setPassType(initialPassType);
    }
  }, [initialPassType, isOpen]);

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

  const passCount = useMemo(() => Number(passPurchase || 0), [passPurchase]);

  const isValid = useMemo(() => {
    const mobileOk = /^\d{10}$/.test(mobile.trim());
    const emailOk = /.+@.+\..+/.test(email.trim());
    const passIdOk = passId.trim().length > 0;
    const purchaseOk = passCount > 0;
    return (
      name.trim().length > 1 &&
      mobileOk &&
      emailOk &&
      passIdOk &&
      purchaseOk &&
      passType !== "Pass Type" &&
      idType !== "ID" &&
      paymentMode !== "Payment Mode"
    );
  }, [name, mobile, email, passId, passCount, passType, idType, paymentMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    console.log("Pass purchase submitted", {
      name,
      mobile,
      email,
      passId,
      quantity: passCount,
      passType,
      idType,
      paymentMode,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      <div className="absolute  inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-[95vw] max-w-[700px] rounded-2xl p-4 sm:p-8 md:p-10 mx-4" style={{ background: "linear-gradient(180deg, #aa0a63 0%, #760233 100%)" }}>
        <header className="flex flex-col items-center gap-2 mb-6 sm:mb-10">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center">Get Your Pass</h2>
          <p className="text-white/90 text-sm sm:text-base text-center">Fill in the details to secure your entry.</p>
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
            placeholder="Pass ID"
            value={passId}
            onChange={(e) => setPassId(e.target.value)}
          />
          <input
            className="rounded-xl bg-white/95 px-4 py-3 outline-none placeholder:text-gray-500"
            placeholder="Pass Purchase"
            inputMode="numeric"
            value={passPurchase}
            onChange={(e) => setPassPurchase(e.target.value.replace(/[^0-9]/g, ""))}
          />
          <select
            className="rounded-xl bg-white/95 px-4 py-3 outline-none text-gray-700"
            value={passType}
            onChange={(e) => setPassType(e.target.value)}
          >
            <option>Pass Type</option>
            <option>Dandiya Dhoom (General)</option>
            <option>Garba Gold (VIP)</option>
          </select>
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
                <li>Provide a valid Pass ID.</li>
                <li>Enter at least 1 in Pass Purchase.</li>
                <li>Select pass type, ID type and payment mode.</li>
              </ul>
            </div>
          )}

          <div className="sm:col-span-2 flex justify-center mt-2">
            <button
              type="submit"
              className="w-full sm:min-w-[11.25rem] rounded-xl px-6 py-3 text-white font-medium bg-white/20 hover:bg-white/25 border border-white/30 transition"
            >
              Submit
            </button>
          </div>
        </form>

        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 text-white/90 hover:text-white text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default BuyPassModal;


