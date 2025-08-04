// Components
import { Awards, ChatBanner, Creations, CustomizeBanner, FAQs, Industries, Packages } from "@/components"
import { Hero, Content1, Content2 } from "@/components/trustindental"
import Belowherosection from "@/components/trustindental/belowherosection"

export default function Page() {
    return (
        <>
            <Hero />
            <Belowherosection />
           
            <Content1 />
            <Content2 />
            <Creations wrapperCss="pt-[50px] pb-[100px]" />
            <Industries />
            <Packages wrapperCss="pt-[100px] pb-[150px]" />
            <CustomizeBanner />
            <FAQs />
            <ChatBanner />
        </>
    )
}