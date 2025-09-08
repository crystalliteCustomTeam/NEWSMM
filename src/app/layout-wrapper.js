'use client'

import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';
import { Footer, Header, HeaderLp, FooterLp } from "@/components";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const isLpLayout = ["/social-media-advertising-agency", "/hidden-layout"].includes(pathname);

  return (
    <>
      {/* GTM Scripts */}
      <GoogleTagManager gtmId="G-6HFTDV18QK" />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11394746459"></Script>
      <Script id="googletag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11394746459');
        `}
      </Script>

      {/* LiveChat Script */}
      <Script id="Chat">
        {`
          window.__lc = window.__lc || {};
          window.__lc.license = 19024239;
          window.__lc.integration_name = "manual_channels";
          window.__lc.product_name = "livechat";
          ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
        `}
      </Script>

      {/* Conditionally Render Header/Footer */}
      {isLpLayout ? <HeaderLp /> : <Header />}
      
      <main>{children}</main>
      
      {isLpLayout ? <FooterLp /> : <Footer />}
    </>
  );
}
