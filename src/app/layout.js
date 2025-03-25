import SparkleBackground from "./components/SparkleBackground";
import "./globals.css";

import { oswald } from "./utils/font";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={oswald.variable}>
      <body>
        <SparkleBackground />
        <div className="absolute top-0 w-full h-full z-10 overflow-auto">
          {" "}
          {children}
        </div>
      </body>
    </html>
  );
}
