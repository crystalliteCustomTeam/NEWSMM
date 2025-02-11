// Components
import Slider from "./slider"

export default function CaseStudy() {
    return (
        <section>
            <div className="bg-black py-[100px] text-white overflow-hidden">
                <div className="container">
                    <div className="mb-[50px] sm:text-center">
                        <h2 className="text-[35px] sm:text-[40px] lg:text-[50px] leading-tight font-semibold mb-10">
                            Case <span className="inline-block text-primary relative before:absolute before:block before:w-full before:h-[19px] before:bg-[url(/path-1.webp)] before:left-0 before:right-0 before:bg-contain before:bg-no-repeat before:bg-center before:top-full">Studies</span>
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal">
                            From strategy to execution, we turn insights into impact - helping brands grow, engage, and convert
                        </p>
                    </div>
                    <Slider />
                </div>
            </div>
        </section>
    )
}
