// Next
import Image from "next/image"
// Media
import bg from "media/casestudy/trustinbg.png"
import aboutTxt from "media/about_us.png"
// Components
import { CTA } from "@/components"

export default function Hero() {
    return (
        <section>
            <div className="relative z-10 bg-primary py-[80px] lg:pt-[200px]">
                <Image src={bg} alt="Click First SMM" priority fill sizes="100vw" className="object-cover -z-10" />
                <div className="container relative z-10">
                    <div className="text-center text-white max-w-[750px] lg:max-w-[1050px] mx-auto mb-7">
                        <h2 className="text-[25px] md:text-[30px] lg:text-[32px] xl:text-[40px] 2xl:text-[50px] font-semibold text-white leading-snug max-w-[380px] mx-auto md:max-w-full">
                            Tustin Dental Group Case Study<br />
How we generated 400% ROI
                        </h2>
                        <div className="py-5"></div>
                        <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal">
                            Home  &gt;  Case Studies  &gt;  Medical & Dental
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}