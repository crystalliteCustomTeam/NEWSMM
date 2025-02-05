// Media
import one from "media/search-engine-optimization/services/1.png"
import two from "media/search-engine-optimization/services/2.png"
import three from "media/search-engine-optimization/services/3.png"
import four from "media/search-engine-optimization/services/4.png"
import five from "media/search-engine-optimization/services/5.png"
import six from "media/search-engine-optimization/services/6.png"
import seven from "media/search-engine-optimization/services/7.png"
import eight from "media/search-engine-optimization/services/8.png"
import nine from "media/search-engine-optimization/services/9.png"
import icon1 from "media/search-engine-optimization/services/icons/1.png"
import icon2 from "media/search-engine-optimization/services/icons/2.png"
import icon3 from "media/search-engine-optimization/services/icons/3.png"
import icon4 from "media/search-engine-optimization/services/icons/4.png"
import icon5 from "media/search-engine-optimization/services/icons/5.png"
import icon6 from "media/search-engine-optimization/services/icons/6.png"
import icon7 from "media/search-engine-optimization/services/icons/7.png"
import icon8 from "media/search-engine-optimization/services/icons/8.png"
import icon9 from "media/search-engine-optimization/services/icons/9.png"
// Next
import Image from "next/image"
// Components
import { CTA } from "@/components"

const data = [
    {
        bg: one,
        icon: icon1,
        title: "Keyword Research & Strategy",
        para: "We don’t chase traffic; we target buyers. Our approach ensures your brand ranks for high-intent searches that drive real business.",
        link: "javascript:;"
    },
    {
        bg: two,
        icon: icon2,
        title: "Link Building",
        para: "Google trusts authority. We secure quality, niche-relevant backlinks to boost rankings and get your website the credibility it deserves.",
        link: "javascript:;"
    },
    {
        bg: three,
        icon: icon3,
        title: "Technical SEO",
        para: "A slow, unoptimized site hurts rankings. We fix speed, indexing, and site structure to make sure search engines and customers find you first.",
        link: "javascript:;"
    },
    {
        bg: four,
        icon: icon4,
        title: "Local SEO",
        para: "Get discovered by local customers actively searching for businesses like yours. We optimize your presence in maps, directories, and local search results.",
        link: "javascript:;"
    },
    {
        bg: five,
        icon: icon5,
        title: "On-Page SEO",
        para: "Fine-tune your website’s structure, content, and performance for maximum search visibility and user engagement.",
        link: "javascript:;"
    },
    {
        bg: six,
        icon: icon6,
        title: "Off-Page SEO",
        para: "Boost your site’s credibility with high-quality backlinks and strategic mentions that build authority and trust.",
        link: "javascript:;"
    },
    {
        bg: seven,
        icon: icon7,
        title: "Shopify SEO",
        para: "Turn your Shopify store into a sales powerhouse with optimized product pages, structured data, and conversion-focused strategies.",
        link: "javascript:;"
    },
    {
        bg: eight,
        icon: icon8,
        title: "Ecommerce SEO",
        para: "Rank your products higher and attract ready-to-buy customers with our specialized eCommerce optimization techniques.",
        link: "javascript:;"
    },
    {
        bg: nine,
        icon: icon9,
        title: "Content Writing",
        para: "SEO is nothing without great content. We craft high-quality, keyword-rich content that ranks, engages, and converts.",
        link: "javascript:;"
    }
]

export default function Card() {
    return (
        data && data.map(({ bg, icon, title, para, link }) => (
            <div key={title} className="rounded-xl overflow-hidden relative py-10 px-3 z-10 border border-white group hover:border-black transition-all duration-300 text-center cursor-pointer">
                <Image src={bg} alt="Click First SMM" className="object-cover object-center -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute inset-0 w-full h-full" />
                <Image src={icon} alt="Click First SMM" className="inline-block" />
                <h3 className="mt-7 mb-3 text-[22px] lg:text-[18px] xl:text-[20px] 2xl:text-[25px] leading-tight font-semibold">
                    {title}
                </h3>
                <p className="text-[14px] lg:text-[13px] 2xl:text-[15px] leading-relaxed mb-5 max-w-[350px] 2xl:max-w-[380px] mx-auto">
                    {para}
                </p>
                <CTA css="group-hover:bg-secondary" href={link} />
            </div>
        ))
    )
}