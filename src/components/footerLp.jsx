// Next
import Image from "next/image"
import Link from "next/link"
// Media
import logo from "media/footer/logo.webp"
import facebook from "media/footer/facebook.webp"
import instagram from "media/footer/instagram.webp"
import twitter from "media/footer/twitter.webp"
import youtube from "media/footer/youtube.webp"
import linkedin from "media/footer/linkedin.webp"
import mapmarker from "media/footer/mapmarker.webp"
import envelope from "media/footer/envelope.webp"
import phone from "media/footer/phone.webp"

export default function Footer() {
    return (
        <footer>
            <div className="bg-[#F7F7F7] py-[60px] xl:py-[80px]">
                <div className="container">
                    
                </div>
            </div>
            <div className="py-5 bg-black text-white">
                <div className="container">
                    <div className="flex xs:flex-col justify-between items-center gap-5">
                        <p className="text-[14px]  2xl:text-[16px] leading-normal">
                            Copyright @ClickFirstSMM 2025
                        </p>
                        <ul className="flex gap-3">
                            {
                                [
                                    ["Terms and Conditions", "/terms-and-conditions"], 
                                    ["Privacy Policy", "/privacy-policy"], 
                                    ["Refund Form", "/refund-form"]
                                ].map(([text, link], i) => (
                                    <li key={i}>
                                        <Link href={link} className="text-[10px] sm:text-[14px] 2xl:text-[16px] leading-tight hover:text-secondary">
                                            {text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}