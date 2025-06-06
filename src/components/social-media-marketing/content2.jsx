// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import One from "media/social-media-marketing/content2.png"

export default function Content2() {
    return (
        <section>
            <div className="py-[100px] bg-primary text-white">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div>
                            <Image src={One} alt="Click First SMM" className="animate-pulse mx-auto mb-10 xl:mb-0" />
                        </div>
                        <div>
                            <p className="text-[16px] sm:text-[20px] font-semibold leading-tight mb-4 text-right">
                                Community Management
                            </p>
                            <h2 className="text-[21px] sm:text-[34px] md:text-[40px] lg:text-[50px] xl:text-[35px] 2xl:text-[42px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-secondary text-white w-max mb-1 ml-auto">
                                    Engage Your Community With
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max ml-auto">
                                    Brand-Aligned Interaction
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-right">
                                <p>
                                    Our global Community Managers are embedded within your brand as an extension of your team. We embody your business ethos and values to build, scale, and engage an authentic community online, every mention, every time.
                                </p>
                            </div>
                            <div className="flex flex-col items-end justify-end sm:flex-row gap-5">
                                <CTA css="hover:!bg-white hover:!text-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}