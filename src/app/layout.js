import "./globals.css";
import { Montserrat, Cinzel } from 'next/font/google';

// Load fonts with CSS variables
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400","300","500", "700","200","100"], variable: "--font-montserrat" });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400","500", "700"], variable: "--font-cinzel" });
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cinzel.variable}`}>
      <body className="bg-[#000] overflow-x-hidden">
          {children}
      </body>
    </html>
  );
}
