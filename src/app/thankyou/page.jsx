import Video from "@/components/home/hero/video"

export default function Page() {
    return (
        <>
            <section>
                <div className="relative pb-[60px] sm:pb-[100px] pt-[150px] lg:pb-0 lg:pt-0 bg-primary lg:h-[650px] xl:h-screen overflow-hidden z-[1]">
                    <Video />
                    <div className="lg:absolute lg:left-0 lg:right-0 lg:bottom-0 text-white lg:text-center z-[2]">
                        <div className="container">
                            <h1 className="text-[50px] leading-tight font-semibold mb-5">
                                Thank you.
                            </h1>
                            <p className="text-[16px] sm:text-[25px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] leading-tight lg:mb-10">
                                We'll contact you shortly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}