// Css
import Script from "next/script"
import "./build.css"
// Fonts
import { fontSans } from "./fonts"
// Components
import { Footer, Header } from "@/components"
// Meta Data
export const metadata = {
  metadataBase: new URL('https://www.clickfirstsmm.com'),
  title: "Leading Social Media Marketing Agency in US - ClickfirstSMM",
  description: "Elevate your brand with our expert social media marketing agency to boost engagement, increase followers, and drive conversions. Connect with us",
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script id="tawk" strategy="afterInteractive">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/6765b309af5bfec1dbdf1b02/1ifik6nvo';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>
      <body className={`${fontSans.variable} antialiased font-sans font-normal`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}