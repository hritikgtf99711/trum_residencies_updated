"use client"; 
import "./globals.css";
import { Montserrat, Cinzel } from "next/font/google";
import { useBodySmoothScroll } from "./utils/SharedTimeline";


const montserrat = Montserrat({ subsets: ["latin"], weight: ["400","300","500", "700","200","100"], variable: "--font-montserrat" });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400","500", "700"], variable: "--font-cinzel" });

export default function RootLayout({ children }) {
  useBodySmoothScroll();
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${cinzel.variable} bg-[#000]`}>
      <div id="smooth-wrapper">
      <div id="smooth-content">
     {children}
    </div>
    </div>
      </body>
    </html>
  );
}
