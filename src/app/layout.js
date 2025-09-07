// 'use client'
// Css
import Script from "next/script"
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css"
// Fonts
import { fontSans } from "./fonts"
// Components
import { Footer, Header } from "@/components"
// import { usePathname } from "next/navigation"


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
  // const pathname = usePathname()
  // const hideHeaderFooter = ["/social-media-marketing", "/hidden-layout"].includes(pathname)
  return (
    <html lang="en">


      {/* <GoogleTagManager gtmId="GTM-KQFVWWGF" /> OLD GTM */}
      <GoogleTagManager gtmId="G-6HFTDV18QK" />
      {/* <GoogleTagManager gtmId="AW-11394746459" /> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11394746459"></Script>
      <Script id="googletag">
        {`
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-11394746459');
        `}
      </Script>
      <Script id="Chat">
        {`
    window.__lc = window.__lc || {};
    window.__lc.license = 19024239;
    window.__lc.integration_name = "manual_channels";
    window.__lc.product_name = "livechat";
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
`}
      </Script>
      <body className={`${fontSans.variable} antialiased font-sans font-normal`}>

        <Header /> <main> {children} </main> <Footer />

        {/* {!hideHeaderFooter && <Header />}
        <main>{children}</main>
        {!hideHeaderFooter && <Footer />} */}
      </body>
    </html >
  )
}