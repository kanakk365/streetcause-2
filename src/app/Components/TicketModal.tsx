"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import QRCode from "qrcode";

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

type TicketModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: TicketData | null;
};

const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose, data }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  useEffect(() => {
    if (data && isOpen) {
      // Generate QR code image from backend-provided qrCode token/string
      QRCode.toDataURL(data.qrCode, {
        width: 256,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      })
        .then((url: string) => {
          setQrCodeUrl(url);
        })
        .catch((err: Error) => {
          console.error('QR Code generation failed:', err);
        });
    }
  }, [data, isOpen]);

  if (!isOpen || !data) return null;

  const isVip = data.passType?.toUpperCase() === "VIP";
  const isDonation = data.passType?.toUpperCase() === "DONATION";
  const title = isDonation
    ? "Street Cause - Donation Receipt"
    : isVip
    ? "Navratri Nirvana(2025) - VIP Pass"
    : "Navratri Nirvana(2025) - Normal Pass";

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-[95vw] max-w-[420px] rounded-2xl p-0 mx-4 bg-white shadow-2xl">
        <div className="rounded-2xl border border-gray-200 overflow-hidden">
          <div className="w-full h-[200px] bg-[#f5f5f5] relative">
            {/* Pass image based on pass type */}
            <Image
              src={isDonation ? "/images/pass1.png" : isVip ? "/images/pass2.png" : "/images/pass1.png"}
              alt={isDonation ? "Donation Receipt" : isVip ? "VIP Pass" : "Normal Pass"}
              fill
              className="object-cover"
              unoptimized
            />
            
          </div>

          <div className="px-6 pt-5 pb-6 text-center">
            <div className="text-neutral-700 font-semibold text-sm">{title}</div>
            <div className="mt-2 text-black text-2xl font-semibold">{data.passPurchaseName}</div>
            <div className="mt-1 text-neutral-600 text-sm">ID: {data.passId}</div>
           

            <div className="mt-5 flex justify-center">
              {/* Generate scannable QR code from user data */}
              {qrCodeUrl ? (
                <Image
                  src={qrCodeUrl}
                  alt="Scannable QR Code"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-sm"
                  unoptimized // Required for data URLs
                />
              ) : (
                <div className="w-[200px] h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Generating QR...</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 cursor-pointer top-3 text-white  text-4xl p-2 rounded-full transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default TicketModal;


