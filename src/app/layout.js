// Css
import Script from "next/script"
import "./globals.css"
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
  other: {
    'google-site-verification': 'rwcdux08MOOJvI9ELOdkhRW2nJ_3ocjjC1qvA8o1hhk',
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
      <Script id="GTMCODE">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.j...efore(j,f);
        })(window,document,'script','dataLayer','GTM-KQFVWWGF');
        `}
      </Script>
      <body className={`${fontSans.variable} antialiased font-sans font-normal`}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQFVWWGF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </body>
    </html >
  )
}