"use client";

import './styles/globals.css';
import { Montserrat, Cinzel } from "next/font/google";
import { useBodySmoothScroll } from "./utils/SharedTimeline";
import { ModalProvider } from './hooks/modaContext';
import ModalTrigger from './utils/ModalTrigger';
import { usePathname } from 'next/navigation';

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

let basePath = process.env.NEXT_PUBLIC_BASE_PATH;

export default function RootLayout({ children }) {
  const pathname = usePathname();
  useBodySmoothScroll();

  const renderGTMScripts = () => {
    switch (pathname) {
      case "/":
        return (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16952448064"></script>
            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16952448064');
              `}
            </script>
          </>
        );
      
      case "/discovery":
       case "/placement":
        return (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16952448064"></script>
            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16952448064');
              `}
            </script>
          </>
        );
      
      case "/remarketing":
        
        return (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16952448064"></script>
            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16952448064');
              `}
            </script>
          </>
        );
      
      default:
        return  (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16952448064"></script>
            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16952448064');
              `}
            </script>
          </>
        );
    }
  };

  return (
    <html lang="en">
      <head>
        <title>Trump Tower Gurgaon | Luxury Apartments in Sector 65</title>
        <meta 
          name="description" 
          content="Explore ultra-luxurious 3 & 4 BHK residences at Trump Tower Gurgaon, Sector 65. World-class amenities, skyline views, and premium lifestyle in the heart of Gurugram."
        />
        {renderGTMScripts()}
      
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-5339L47NB9"></script> 
              <script> 
                {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-5339L47NB9'); `}
              </script>
                  <script type="text/javascript">
                  {`(function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", "rfbah0ra1r");`}
                  </script> 
      
      </head>
      <body className={`${montserrat.variable} ${cinzel.variable} bg-[#000]`}>
        <div id="sidemenu-portal" />
        <div id="modal-root" />
        <ModalProvider>
          <div id="smooth-wrapper">
            <div id="smooth-content">
              {children}
            </div>
          </div>
          <ModalTrigger />
          {/* WhatsApp Chat - Uncomment when ready to use
          <a 
            className="whatsapp-chat text-decoration-none" 
            href="https://wa.me/9999999999?text=Hi" 
            target="_blank" 
            rel="nofollow"
          >
            <img 
              src={basePath + "/whats-app-icon.png"} 
              alt="WhatsApp" 
              width="24" 
              height="24" 
            />
          </a>
          */}
        </ModalProvider>
      </body>
    </html>
  );
}