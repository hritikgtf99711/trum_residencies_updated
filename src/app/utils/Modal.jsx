"use client"
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (typeof window === "undefined" || !isOpen) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[black]/50 backdrop-blur-sm md:px-0  px-4">
      <div className="bg-[#000] rounded-2xl shadow-xl max-w-[32rem] w-full p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute  close_btn top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
