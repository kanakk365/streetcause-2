"use client";

import React, { useEffect } from "react";

type RefreshReminderPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const RefreshReminderPopup: React.FC<RefreshReminderPopupProps> = ({
  isOpen,
  onClose,
}) => {
  // Auto-dismiss after 5 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-4 right-4 z-[1200] animate-in slide-in-from-right-2 fade-in duration-300">
      <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 max-w-sm">
        <div className="flex items-start gap-3">
          {/* Warning Icon */}
          <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
            <svg
              className="h-5 w-5 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

          <div className="flex-1 min-w-0">
            {/* Title */}
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              Important Reminder
            </h4>

            {/* Message */}
            <p className="text-sm text-gray-600">
              Please refresh the website before selling pass
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 text-lg transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Progress bar for auto-dismiss */}
        <div className="mt-3 bg-gray-200 rounded-full h-1">
          <div className="bg-[#FF7A00] h-1 rounded-full" style={{
            animation: 'shrink 5s linear forwards'
          }} />
        </div>
      </div>
    </div>
  );
};

export default RefreshReminderPopup;

/* Custom animations for popup progress bar */
const styles = `
@keyframes shrink {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}
`;

// Inject styles into the document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
