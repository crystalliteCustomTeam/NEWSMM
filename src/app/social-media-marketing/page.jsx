// Components
import { Awards, ChatBanner, Creations, CustomizeBanner, FAQs, Industries, Packages } from "@/components"
import { MapPinIcon,CheckBadgeIcon,CircleStackIcon,CurrencyDollarIcon,AdjustmentsVerticalIcon,FunnelIcon,GiftIcon } from "@heroicons/react/24/solid";
import Image from "next/image"
// Media
import bg from "media/general_bg.png"
import aboutTxt from "media/about_us.png"

import { AutoScrollSlider } from "@/components"
import IMG1 from 'media/smmlp/youtube.png';
import IMG2 from 'media/smmlp/instagram.png';
import IMG3 from 'media/smmlp/tiktok.png';
import IMG4 from 'media/smmlp/facebook.png';
import IMG5 from 'media/smmlp/twitter.png';
import question from 'media/smmlp/questions.png';


// Components
import { CTA } from "@/components"
export default function Page() {


    const slides1 = [
        IMG1,
        IMG2,
        IMG3,
        IMG4,
        IMG5,
        IMG1,
        IMG2,
        IMG3,
        IMG4,
        IMG5,

    ];


    return (
        <>
            <section>
                <div className="relative z-10 bg-primary py-[150px] lg:py-[300px]">
                    <Image src={bg} alt="Click First SMM" priority fill sizes="100vw" className="object-cover -z-10" />
                    <div className="container relative z-10">
                        <div className="grid grid-cols-2">
                            <div>
                                <h1 className="text-[46px] tracking-[-3px] font-black leading-[50px] text-white">Business Owned By You, But Driven By Our <span className="text-secondary">Social Media Marketing</span> Services</h1>
                                <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-white mt-3">
                                    Jumpto1 Social Media Marketing means more traffic, more calls and more sales! We offer data-driven strategies and surprising bottom-line results to fuel your business growth. Our SMM experts pen such stories that best narrate your BRAND. Let us create the hype for your brand , as we want you to get busy cracking lucrative deals and orders!
                                </p>
                                <div className="flex flex-col sm:flex-row items-start gap-5 justify-start mt-4">
                                    <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                                    <CTA css="bg-black border-black hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:833-666-6684 " text="Call Now: 833-666-6684 " />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="py-[100px]">
                    <div className="container overflow-hidden">
                        <div className="flex flex-col items-center">
                            <h2 className="font-black text-[50px] tracking-[-3px] text-[#262626] leading-[50px]">Platform we working with</h2>
                            <div className="mt-10 overflow-hidden">
                                <AutoScrollSlider>
                                    {
                                        slides1.map((e, i) => (
                                            <div key={i} className="grow-0 shrink-0 pl-3 basis-[300px]">
                                                <Image src={e} alt="Click First SMM" />
                                            </div>
                                        ))
                                    }
                                </AutoScrollSlider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="pt-[100px]">
                    <div className="container">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="font-black text-[40px] leading-[40px] mb-[6px] tracking-[-2px] text-[#262626]">Enter The Digital Era Now, Else Wait For Miracle To Happen!</h2>
                            <p className="text-black font-semibold text-[20px] tracking-[-1px] leading-[25px] mb-[6px] text-center w-[90%] mt-2">Let’s face it. Whether you are new to the business arena or have been running an enterprise for many years, there are certain things you wish to have, <span className="text-primary font-bold uppercase text-[25px]">always!</span></p>
                            <h2 className="text-[25px] font-black text-primary tracking-[-1px]">Sales, Revenue, and Profit!</h2>
                            <h3 className="text-[20px] font-medium text-black tracking-[-1px]">And who brings these requisites? <span className="font-bold text-primary uppercase text-[25px]">customers</span> and only <span className="font-bold text-primary uppercase text-[25px]">customers</span>!</h3>
                            <h3 className="tracking-[-1px] text-[22px] font-black text-black underline  mb-[12px]">But Are You Having Troubles In Getting Those Ideal Customers?</h3>
                            <h2 className="tracking-[-1px] text-[32px] font-black text-[#262626]">And Is Your Business Facing These Problems?</h2>
                            <div className="mt-5">
                                <Image src={question} alt="Social Media Marketing || Click First SMM" />
                            </div>
                            <div className="mt-14 flex flex-col gap-1 items-center">
                                <p className="leading-[30px] text-[23px] font-semibold text-black  mb-[2px] tracking-[-1px]">
                                    If yes, then either your social media business profile is boring, or you don't even have one!
                                </p>
                                <p className="leading-[30px] text-[20px] font-medium text-black  mb-[2px] tracking-[-1px]">
                                    Remember, Social media marketing is something that can either <span className="text-primary uppercase font-bold">BREAK</span> or <span className="text-primary uppercase font-bold">MAKE</span> your brand.
                                </p>
                                <p className="leading-[30px] text-[23px] font-semibold text-black  mb-[2px] tracking-[-1px] text-center">
                                    However, don’t worry. Our SMM services only <span className="text-primary uppercase font-bold">MAKE YOUR BRAND</span> with result-driven, thoughtfully curated
                                    SMM strategies and top-tier Social Media Management personas. We fill your sales funnel with unimaginable leads;
                                    <span className="text-primary uppercase font-bold">OH</span>, we mean to say, with loyal customers!</p>
                            </div>
                            <div className="my-20">
                                <div className="flex justify-center items-center mb-[120px]">
                                    <h2 className="font-black text-[60px] tracking-[-1px] text-[#262626] text-center leading-none font-sans">  Don’t Take Our Word For It <br />
                                        Trust Our Customers.</h2>
                                </div>
                                <div className="relative w-full max-w-[1200px] mx-auto">

                                    <Image
                                        src="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/2188e10f-d55e-461b-3f3d-8db985ad3900/1920resizing"
                                        alt="social-map"
                                        width={1200}
                                        height={755}
                                        className="-z-10"
                                    />

                                    <div className="absolute top-[10%] left-[20%] group">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                                            <p className="mb-1">Daniel is like a brother from another mother! Great to work with.</p>
                                            <span className="font-semibold text-gray-700">Bobby Reed</span>
                                        </div>
                                    </div>


                                    <div className="absolute top-[25%] left-[25%] group">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                                            <p className="mb-1">Daniel and Anthony did a fantastic job with my SEO and website build. They are always prompt to respond, have a clear vision...</p>
                                            <span className="font-semibold text-gray-700">Aaron Thacker</span>
                                        </div>
                                    </div>


                                    <div className="absolute top-[40%] left-[55%] group">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                                            <p className="mb-1">Daniel G. and his team have been easy and flexible to work with. We needed a lot of pivots with our startup...</p>
                                            <span className="font-semibold text-gray-700">Mary Elizabeth Lim</span>
                                        </div>
                                    </div>


                                    <div className="absolute top-[40%] left-[30%] group">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                                            <p className="mb-1">Daniel G is a knowledgeable and personable rep who can find and solve problems with your website.</p>
                                            <span className="font-semibold text-gray-700">Coral Amende</span>
                                        </div>
                                    </div>


                                    <div className="absolute top-[40%] left-[40%] group">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                                            <p className="mb-1">My only regret? Not working with Daniel sooner! He is fantastic, knowledgeable, VERY responsive and genuinely has your best interest at heart.</p>
                                            <span className="font-semibold text-gray-700">Raquel Laban</span>
                                        </div>
                                    </div>


                                    <div className="absolute top-[25%] left-[70%] group">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                                            <p className="mb-1">Daniel has been amazing! The bottom line is that my rankings have significantly increased and business is coming in!!</p>
                                            <span className="font-semibold text-gray-700">Darcy Bailey</span>
                                        </div>
                                    </div>


                                    <div className="absolute top-[55%] left-[15%] group">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                                            <p className="mb-1">Working with the team at Jump to 1 has been amazing! Daniel is visibly passionate about his customers succeeding with SEO, design ...</p>
                                            <span className="font-semibold text-gray-700">Nicole Sorkin</span>
                                        </div>
                                    </div>


                                    <div className="absolute top-[70%] left-[50%] group">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                                            <p className="mb-1">We contracted with Jump to 1 to increase our online exposure. Daniel redesigned our website and did a highly professional job.</p>
                                            <span className="font-semibold text-gray-700">Fred Wellman</span>
                                        </div>
                                    </div>


                                    <div className="absolute top-[35%] left-[60%] group">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                                            <p className="mb-1">These guys and gals are amazing. I’ve been nothing but impressed with their level of understanding and expertise.</p>
                                            <span className="font-semibold text-gray-700">Tomas Condit</span>
                                        </div>
                                    </div>


                                    <div className="absolute top-[60%] left-[30%] group">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                                            <p className="mb-1">Jonas, Julian and Team have been great. They have been both helpful and diligent. As to creating a website, I'm very impressed with the effort and skill...</p>
                                            <span className="font-semibold text-gray-700">Betty Robinson</span>
                                        </div>
                                    </div>


                                    <div className="absolute top-[75%] left-[60%] group">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                                            <p className="mb-1">Thank you Julian and Thanks Jonas and other team members! You will get a high quality and the best customer service.</p>
                                            <span className="font-semibold text-gray-700">YIJO YIM</span>
                                        </div>
                                    </div>


                                    <div className="absolute top-[80%] left-[40%] group">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                                            <p className="mb-1">Daniel G. and his team have been easy and flexible to work with. We needed a lot of pivots with our startup, and they were accommodating with every request.</p>
                                            <span className="font-semibold text-gray-700">Mary Elizabeth Lim</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center mt-10">
                                    <CTA css="hover:bg-white hover:text-black" theme="primary" size="large" text="Talk To An Expert" />
                                    <CTA css="bg-black border-black hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:833-666-6684 " text="Call Now: 833-666-6684 " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Packages />
            <section>
                <div className="py-[100px] bg-primary">
                    <div className="container">
                        <h2 className="text-[50px] text-center font-bold text-white tracking-[-1px] leading-[55px] mb-10">
                            Now Is The Time To Get Declared As Cream Of The Crop! <br />
                            If You Are Perfect At Your <span className="text-secondary font-black">Business</span>,<br />
                            We Are Perfect In <span className="text-secondary font-black">Marketing!</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center gap-5 justify-center mt-10">
                            <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                            <CTA css="bg-black border-black hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:833-666-6684 " text="Call Now: 833-666-6684 " />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="py-[100px]">
                    <div className="container">
                        <div className="grid grid-cols-2 gap-10">
                            <div>
                                <h2 className="font-black text-[42px] tracking-[-2px] leading-[45px] text-[#262626] mb-[18px]">
                                    Why Choose Us? Because We Help
                                    Your Business Get Bigger Every
                                    Passing Day!</h2>
                                <p>We know, and you know too, that business survival is so challenging in the internet-focused world. And when 90% of U.S. firms use social media, it becomes even more challenging to survive and keep moving. However, with a sound digital marketing agency that doesn't use cookie-cutter marketing, brands can enjoy impressive growth and sales. But the question arises, where to find such an authentic marketing agency?</p>
                                <div className="my-3"></div>
                                <p>Well, you are lucky to have found Jumpto1 as your one-stop digital marketing shop. Nowadays, social media acts as the face of your brand. However, its management is not everyone’s forte. Being the professional digital marketers in the whole town, we ensure that your online presence helps you cut above the rest. With winning SMM strategies, best social media marketing practices, and active and engaging SMM campaign, we ensure our clients celebrate authority in the digitally dominant era. We offer you our hassle-free SMM services that are:</p>
                            </div>
                            <div className="grid grid-cols-3 gap-5 items-center justify-center">
                                <div className="flex flex-col gap-5">
                                    <div className="border-primary border-[2px] transition-all duration-500 hover:bg-primary group border-solid shadow-2xl flex flex-col items-center justify-center py-[80px] gap-5">
                                        <CheckBadgeIcon className="w-10 group-hover:text-white"/>
                                        <h2 className="font-semibold group-hover:text-white">Conversion Driven</h2>
                                    </div>
                                    <div className="border-primary border-[2px] transition-all duration-500 hover:bg-primary group border-solid shadow-2xl flex flex-col items-center justify-center py-[80px] gap-5">
                                        <CircleStackIcon className="w-10 group-hover:text-white"/>
                                        <h2 className="font-semibold group-hover:text-white">Data-driven</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 -mt-32">
                                    <div className="border-primary border-[2px] transition-all duration-500 hover:bg-primary group border-solid shadow-2xl flex flex-col items-center justify-center py-[80px] gap-5">
                                        <CurrencyDollarIcon className="w-10 group-hover:text-white"/>
                                        <h2 className="font-semibold group-hover:text-white">Affordable</h2>
                                    </div>
                                    <div className="border-primary border-[2px] transition-all duration-500 hover:bg-primary group border-solid shadow-2xl flex flex-col items-center justify-center py-[80px] gap-5">
                                        <AdjustmentsVerticalIcon className="w-10 group-hover:text-white"/>
                                        <h2 className="font-semibold group-hover:text-white">Scalable</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="border-primary border-[2px] transition-all duration-500 hover:bg-primary group border-solid shadow-2xl flex flex-col items-center justify-center py-[80px] gap-5">
                                        <FunnelIcon className="w-10 group-hover:text-white"/>
                                        <h2 className="font-semibold group-hover:text-white">ROI-focused</h2>
                                    </div>
                                    <div className="border-primary border-[2px] transition-all duration-500 hover:bg-primary group border-solid shadow-2xl flex flex-col items-center justify-center py-[80px] gap-5">
                                        <GiftIcon className="w-10 group-hover:text-white"/>
                                        <h2 className="font-semibold group-hover:text-white">Outcome Guaranteed</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}