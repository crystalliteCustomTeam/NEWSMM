// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import One from "media/youtube-optimization/content1.png"

export default function Content1() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div>
                            <h2 className="text-[22px] sm:text-[34px] md:text-[40px] lg:text-[50px] xl:text-[37px] 2xl:text-[45px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    Optimization: The Overlooked
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">
                                    Key to YouTube Growth
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    Most creators put all their energy into making content but overlook the one thing that determines success is optimization. Without it, even the best videos struggle to gain traction. YouTube’s algorithm favors content that’s easy to categorize, discover, and engage with and that doesn’t happen by accident.
                                </p>
                                <p>
                                    Optimization starts with keyword-rich titles, descriptions, and tags that tell YouTube exactly what your content is about. But that’s just the beginning. Playlists keep viewers engaged, high-retention content boosts watch time, and compelling thumbnails increase click-through rates. These factors signal to YouTube that your content is valuable, pushing it to more people.
                                </p>
                                <p>
                                    Beyond discoverability, channel branding, structured video layouts, and strategic end screens ensure that new viewers don’t just watch; they subscribe, engage, and return. Without these elements, your channel is just another drop in the ocean.
                                </p>
                                <p>
                                    We take a data-driven approach, tracking audience retention, traffic sources, and engagement patterns, to refine your content strategy and amplify your reach. YouTube isn’t just a video platform; it’s an ecosystem that rewards smart creators who understand how to play the game.
                                </p>
                                <p>
                                    Most creators rely on content alone. The smart ones optimize. Let’s make sure you’re one of them.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="!bg-primary hover:!bg-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="border-black !text-black hover:bg-secondary hover:border-secondary hover:!text-white" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202" />
                            </div>
                        </div>
                        <div>
                            <Image src={One} alt="Click First SMM" className="animate-pulse mx-auto mt-10 xl:mt-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}