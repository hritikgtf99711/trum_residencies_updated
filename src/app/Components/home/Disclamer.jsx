"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Disclaimer({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-[#000] text-white rounded-2xl shadow-xl max-w-[50rem] h-[70vh] overflow-y-scroll w-full p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-300 text-xl"
        >
          ✕
        </button>

        {/* Static Disclaimer Content */}
            <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
            {/* <p className="text-[12px] my-2 leading-relaxed">
            The plans, layouts, specifications,
            images, price, amenities  and other details herein are indicative
            /artistic impression and subject to change. Actual product may vary. All sales
            in this project shall be solely governed by terms of the agreement for sale to
            be entered into between the parties.
            </p>
            <p className="text-[12px] my-2 leading-relaxed">“TRUMP® RESIDENCES GURGAON is not
            owned, developed or sold by Donald J. Trump, the Trump Organization or any of
            their affiliates. Riverday Infrastructure Pvt. Ltd., the developer of the
            property, uses the “Trump” name and mark under license from DT Marks Gurgaon 69
            LLC, which license is subject to the terms of the agreement between the parties.
            ”</p>

     */}
      </div>
    </div>,
    modalRoot
  );
}
