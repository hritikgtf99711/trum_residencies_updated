"use client";

import './styles/globals.css';
import { Montserrat, Cinzel } from "next/font/google";
import { useBodySmoothScroll } from "./utils/SharedTimeline";
import { ModalProvider } from './hooks/modaContext';
import ModalTrigger from './utils/ModalTrigger';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
  variable: "--font-montserrat",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-cinzel",
});

export default function RootLayout({ children }) {
  useBodySmoothScroll();

  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${cinzel.variable} bg-[#000]`}>
        <div id="sidemenu-portal" />
        <div id="modal-root" />
        <ModalProvider>
          <div id="smooth-wrapper">
            <div id="smooth-content">
              {children}
            </div>
          </div>

          {/* ✅ ModalTrigger includes the SMS icon and the modal */}
          <ModalTrigger />

          <a
            className="whatsapp-chat text-decoration-none"
            href="https://wa.me/1111111111?text=Hi"
            target="_blank"
            rel="nofollow"
          >
            <img
              src="/assets/images/whats-app-icon.png"
              alt="WhatsApp"
              width="24"
              height="24"
            />
          </a>
        </ModalProvider>
      </body>
    </html>
  );
}
