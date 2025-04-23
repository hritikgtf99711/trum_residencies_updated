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
        <p className="text-[12px] my-2 leading-relaxed">
        Smartworld Developers Private limited makes available information and materials on this website (“Site”), subject to the following terms and conditions. By accessing this Site, you unconditionally without limitation agree to the terms and conditions as outlined in this Disclaimer. The Company reserves right to change or amend these terms and conditions from time to time at its sole discretion and without any intimation to you or without notifying the same to you and that you shall be bound by any such change(s) so effected.
        </p>
        <p className="text-[12px] my-2 leading-relaxed">Although we make reasonable efforts to update the information on Site, please note that any of the content may be out of date at any given time and we are under no obligation to update it. We do not guarantee that our Site, or its content, will be free from errors or omissions. The information contained on our Site is provided for general information and for illustrative purposes only. It is not intended to amount to advice, guarantee or warranty on which you should rely. Company and its shareholders, directors, representatives accept no responsibility for any loss or damage whatsoever arising out of or related to the accuracy or completeness of any information contained on our Site or for any action taken in reliance on such information by any person whether purchaser, potential purchaser, estate agent, advertiser, introducer or otherwise.</p>

        <p className="text-[12px] my-2 leading-relaxed">Interested party are requested to inspect the project site and relevant documentation to verify all the details, including area, amenities, services, terms of sales and payments and other relevant terms independently prior to concluding any decision for buying any unit(s) in any of the said project and not to merely rely upon information on this Site. The contents on this website does not constitute an offer and/or acceptance and/or transaction and/or a disclosure under any statute of any nature whatsoever. The plans, layouts, specifications, images and other details herein are indicative /artistic impression of the development and for conceptual purposes only and are not a part of actual deliverables. Company reserves the right to change any or all of the plans, layouts, specifications, images and other details herein in the interest of the development or as per approvals received or to be obtained. Soft furnishing, furniture and gadgets do not form a part of the offering. All sales in this project shall be solely governed by terms of the Agreement for Sale entered into between the parties.</p>

        <p className="text-[12px] my-2 leading-relaxed">The Company uses the “Trump” name and mark under a license agreement and which license is subject to certain term and conditions as agreed between parties. “Trump Residence Gurgaon” is registered with the Haryana Real Estate Regulatory Authority, Gurugram under no. RC/REP/HARERA/GGM/925/657/2025/28. Website of RERA Authority: https://haryanarera.gov.in</p>

        <p className="text-[12px] my-2 leading-relaxed">TRUMP® RESIDENCES GURGAON is not owned, developed or sold by Donald J. Trump, the Trump Organization or any of their affiliates. Riverday Infrastructure Pvt. Ltd., the developer of the property, uses the “Trump” name and mark under license from DT Marks Gurgaon 69 LLC, which license is subject to the terms of the agreement between the parties.</p>
      </div>
    </div>,
    modalRoot
  );
}
