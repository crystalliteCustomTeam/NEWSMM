// Components
"use client";
import {
  Awards,
  ChatBanner,
  Creations,
  CustomizeBanner,
  FAQs,
  FrontEndForm,
  HeaderLp,
  Industries,
  LpFormContact,
  Packages,
} from "@/components";
import {
  MapPinIcon,
  CheckBadgeIcon,
  CircleStackIcon,
  CurrencyDollarIcon,
  AdjustmentsVerticalIcon,
  FunnelIcon,
  GiftIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
// Media
import bg from "media/general_bg.png";
import aboutTxt from "media/about_us.png";
import Link from "next/link";
import { AutoScrollSlider } from "@/components";
import IMG1 from "media/smmlp/youtube.png";
import IMG2 from "media/smmlp/instagram.png";
import IMG3 from "media/smmlp/tiktok.png";
import IMG4 from "media/smmlp/facebook.png";
import IMG5 from "media/smmlp/twitter.png";
import question from "media/smmlp/questions.png";
import bg11 from "media/smmlp/1920resizing.avif";
import Icon1 from "media/smmlp/counte1.png";
import Icon2 from "media/smmlp/counte2.png";
import Icon3 from "media/smmlp/counte3.png";
// import { Facebook, Youtube, Instagram, Twitter } from "lucide-react";
// Components
import { CTA } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import CountUp from "react-countup";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const faqData = [
    {
      question: "Will Social Media Help My Business?",
      answer:
        "Yes. With the right social media company, your visibility, engagement, and revenue will all grow.",
    },
    {
      question: "Can a Small Business Be Advertised Over Social Media?",
      answer:
        "Absolutely. Our social media marketing agency for small business packages are designed with affordability and impact in mind.",
    },
    {
      question: "Is The Ad Budget Included In The Price?",
      answer:
        "No. The price covers our social media management agencies services. The ad spend is separate and controlled by you.",
    },
    {
      question: "Is There a Guarantee Involved?",
      answer:
        "Yes. We guarantee improved engagement, optimized campaigns, and measurable growth from our social media agency services.",
    },
    {
      question: "Will I Receive Regular Updates?",
      answer:
        "Of course. Your social media manager will keep you informed with detailed reports and consistent communication.",
    },
  ];
  const slides1 = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG1, IMG2, IMG3, IMG4, IMG5];
  const services = [
    {
      title: "Facebook Advertising Services",
      description: `Expert facebook ad services to help you reach the right people at the right time.`,
    },
    {
      title: "YouTube Advertising Services",
      description: `Boost subscribers, views, and conversions with smart targeting and creative campaigns.`,
    },
    {
      title: "Instagram Advertising Services",
      description: `Our Instagram advertising services engage billions of users daily and position your brand for growth.`,
    },
    {
      title: "Twitter Advertising Services",
      description: `We help brands build awareness, credibility, and engagement on Twitter through innovative campaigns.`,
    },
  ];

  const data = [
    {
      item: "Why Choose Click First SMM?",
      content:
        "Click First SMM is the leading Social & Digital Media Marketing Agency in Houston, Texas, renowned for delivering transformative results. With a powerhouse team of 500+ in-house professionals, we ensure that every project is handled with expertise, precision, and the highest level of dedication. Our commitment to excellence has made us a trusted partner for businesses seeking unparalleled growth and success in the digital landscape.",
    },
    {
      item: "Do We Offer Marketing Audit & Consultation Service?",
      content:
        "Yes, we offer a free marketing audit and consultation service. Our expert team provides a comprehensive analysis of your current marketing efforts, identifying areas of improvement and growth opportunities. This service is designed to give you a clear roadmap to success, tailored specifically to your business needs.",
    },
    {
      item: "What Services Do We Offer?",
      content:
        "We offer a full suite of services, including Social Media Marketing, Digital Marketing, Branding, SEO, Paid Advertising, Content Creation, Influencer Marketing, Video Production, and more. Our comprehensive offerings are designed to cover every aspect of your digital presence, helping you achieve sustained growth and a strong market position.",
    },
    {
      item: "How Much Do We Charge for a Branding Package?",
      content:
        "The cost of our branding packages varies depending on the scope and complexity of the project. We offer customized packages tailored to your business’s unique needs, ensuring you receive the best value for your investment. Please contact us for a detailed quote based on your specific requirements. Click here to see our complete packages.",
    },
    {
      item: "Do We Outsource Our Projects?",
      content:
        "No, we do not outsource our projects. All work is completed by our highly skilled in-house team of 500+ professionals, ensuring consistent quality, security, and the ability to meet our clients' specific needs with full control over every aspect of the project.",
    },
    {
      item: "What Industries Do We Work With?",
      content:
        "We work with a diverse range of industries—over 50 in total—providing branding, marketing, and business growth strategies tailored to each sector. Our experience spans from small startups to large enterprises, ensuring that no matter the industry, we can drive impactful results.",
    },
    {
      item: "How Long Will It Take to See Business Growth?",
      content:
        "Business growth is a steady process that depends on several factors, including your industry, competition, and the budget tailored to your specific needs. While some results may be seen in the short term, true, sustainable growth typically takes time and consistent effort. We work with you to create a strategy that aligns with your goals and budget, ensuring gradual and reliable progress.",
    },
    {
      item: "Do We Offer Search Engine Optimization Services?",
      content:
        "Yes, we offer expert SEO services designed to boost your online visibility, drive organic traffic, and improve your search engine rankings. Our SEO strategies are tailored to your business goals, ensuring that you attract the right audience and achieve long-term success in the digital space.",
    },
  ];
  return (
    <>
      

      <section>
        <div className="relative z-10 bg-white py-[100px] xl:py-[150px]">
          <Image
            src={bg11}
            alt="Click First SMM"
            priority
            fill
            sizes="100vw"
            className="w-full -z-10 md:block hidden"
          />
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5">
              <div>
                <h1 className="xl:text-[46px] text-[40px] tracking-[-1px] font-black leading-[50px] bg-[linear-gradient(to_right,_#da137c,_#f6ac35)] bg-clip-text text-transparent">
                  Business Owned By You, But Powered By Our Social Media
                  Advertising Agency
                </h1>
                <p className="xl:text-[14px] md:text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-black mt-3">
                  With Click First SMM, your brand gets more visibility, more
                  leads, and more sales! As a trusted social media advertising
                  agency, we deliver strategies that are backed by data and
                  designed for growth. Our experts know how to shape your social
                  media ads and brand’s voice, spark conversations, and turn
                  likes into loyal customers. While you focus on running your
                  business, we make sure your digital presence does the heavy
                  lifting.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-5 justify-start mt-4">
                  <CTA
                    css="bg-[linear-gradient(180deg,_#351a4b,_#723389)] hover:!bg-white hover:!text-white rounded-none"
                    theme="primary"
                    size="large"
                    text="Click To See Our Affordable Packages"
                  />
                </div>
                {/*  */}
                <div className="md:grid md:grid-cols-3 hidden items-center md:divide-x md:divide-gray-300 mt-10 gap-5 md:justify-start justify-center ">
                  <div className="block px-5">
                    <div className="flex items-center gap-3 mb-1">
                      <Image
                        src={Icon1}
                        width={40}
                        height={40}
                        className="h-[40px]"
                        alt="Social Media Marketing"
                      />
                      <h3 className="text-[42px]  font-bold leading-tight">
                        <CountUp end={1500} duration={2} />+
                      </h3>
                    </div>
                    <p className="text-[10px] font-semibold uppercase leading-3">
                      Clients working with us globally
                    </p>
                  </div>

                  <div className="block px-5">
                    <div className="flex items-center gap-3 mb-1">
                      <Image
                        src={Icon2}
                        width={30}
                        height={50}
                        className="h-[40px]"
                        alt="Social Media Marketing"
                      />
                      <h3 className="text-[42px] font-bold leading-tight">
                        <CountUp
                          end={1.5}
                          decimals={1}
                          suffix="MIL+"
                          duration={2}
                        />
                      </h3>
                    </div>
                    <p className="text-[10px] font-semibold uppercase leading-3">
                      Qualified leads delivered
                    </p>
                  </div>

                  <div className="block px-5">
                    <div className="flex items-center gap-3 mb-1">
                      <Image
                        src={Icon3}
                        width={40}
                        height={40}
                        className="h-[40px]"
                        alt="Social Media Marketing"
                      />
                      <h3 className="text-[42px] font-bold leading-tight">
                        <CountUp end={95} duration={2} />%
                      </h3>
                    </div>
                    <p className="text-[10px] font-semibold uppercase leading-3">
                      Client Retention rate
                    </p>
                  </div>
                </div>

                {/*  */}
              </div>
              <div>
                <div className="bg-white rounded-none shadow-2xl lg:p-10 p-5 2xl:w-[80%] lg:w-[90%] mx-auto">
                  <h3 className="text-[#1d1d1d] mb-5 text-[24px] 2xl:text-[35px] font-black text-center capitalize">
                    Don’t be shy, say hi!
                  </h3>
                  {/* <FrontEndForm label={true} button="Increase My Sales" /> */}
                  <LpFormContact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="xl:py-[100px] md:py-[70px] py-[50px]">
          <div className="container overflow-hidden">
            <div className="flex flex-col items-center">
              <h2 className="font-black lg:text-[50px] text-[40px] tracking-[-1px] text-[#262626] leading-[50px] text-center capitalize">
                Platform we working with
              </h2>
              <div className="mt-10 overflow-hidden">
                <AutoScrollSlider>
                  {slides1.map((e, i) => (
                    <div key={i} className="grow-0 shrink-0 pl-3 basis-[300px]">
                      <Image src={e} alt="Click First SMM" />
                    </div>
                  ))}
                </AutoScrollSlider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-[50px]">
          <div className="container">
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-black md:text-[40px] text-[35px] leading-9 md:leading-[45px] mb-[6px] tracking-[-1px] text-[#262626] text-center ">
                With Our Social Media Advertising Services Enter The Digital Era
                Now, Or Risk Being Left Behind!
              </h2>
              <p className="text-black font-semibold text-[18px] md:text-[20px] tracking-[-1px] leading-[25px] mb-[6px] text-center w-[90%] mt-2">
                Whether you’re just starting or managing a well-established
                company, the ultimate goals remain the same:{" "}
                {/* <span className="text-[#f15d22] font-bold uppercase text-[25px]">
                  always!
                </span> */}
              </p>
              <h2 className="text-[25px] font-black text-[#f15d22] tracking-[-1px]">
                Sales, Revenue, and Profit!
              </h2>
              <h3 className="text-[20px] font-medium text-black tracking-[-1px] text-center">
                And how do you achieve them? By consistently attracting the
                right{" "}
                <span className="font-bold text-[#f15d22] uppercase text-[25px]">
                  customers
                </span>{" "}
                {/* and only{" "}
                <span className="font-bold text-[#f15d22] uppercase text-[25px]">
                  customers
                </span> */}
                !
              </h3>
              <h3 className="tracking-[-1px] text-[22px] font-black text-black underline  mb-[12px] text-center">
                But here’s the real question…
              </h3>
              <h2 className="tracking-[-1px] text-[32px] font-black text-[#262626] text-center">
                Are your current efforts failing to bring in those ideal
                customers?
              </h2>
              <p className="leading-[30px] text-[23px] font-semibold text-black  mb-[2px] tracking-[-1px]">
                {" "}
                Is your brand struggling to stand out online?
              </p>

              <div className="mt-5">
                <Image
                  src={question}
                  alt="Social Media Marketing || Click First SMM"
                />
              </div>
              <div className="mt-14 flex flex-col gap-1 items-center">
                <p className="leading-[30px] md:text-[23px] text-[18px] font-semibold text-black  mb-[5px] tracking-[-1px] text-center">
                  If so, chances are your business profile is invisible,
                  outdated, or simply not engaging enough.
                </p>
                <p className="leading-[30px] md:text-[23px] text-[18px] font-semibold text-black  mb-[5px] tracking-[-1px] text-center">
                  Here’s the truth:{" "}
                  <span className="font-bold text-[#f15d22] uppercase text-[25px]">
                    social marketing advertising{" "}
                  </span>{" "}
                  can either put your brand in the spotlight or leave it in the
                  shadows.
                </p>
                <p className="leading-[30px] md:text-[23px] text-[18px] font-semibold text-black  mb-[5px] tracking-[-1px] text-center">
                  That’s where{" "}
                  <span className="font-bold text-[#f15d22] uppercase text-[25px]">
                    our social media ads
                  </span>{" "}
                  step in. Our{" "}
                  <span className="font-bold text-[#f15d22] uppercase text-[25px]">
                    social media advertising services
                  </span>{" "}
                  <br className="lg:block hidden" /> and{" "}
                  <span className="font-bold text-[#f15d22] uppercase text-[25px]">
                    {" "}
                    paid social media services
                  </span>{" "}
                  are designed to drive awareness, generate quality leads, and
                  maximize ROI. <br className="lg:block hidden" />
                  And with experienced social media managers for hire, we don’t
                  just grow your follower count — we grow your customer base.
                </p>
              </div>
              <div className="my-20">
                <div className="flex justify-center items-center mb-[120px]">
                  <h2 className="font-black text-[35px] md:text-[40px] xl:text-[60px] tracking-[-1px] text-[#262626] text-center leading-none font-sans">
                    {" "}
                    Don’t Take Our Word For It{" "}
                    <br className="lg:block hidden" />
                    See What Our Clients Say About Our
                    <br className="lg:block hidden" />
                    <span className=" text-[#f15d22]">
                      Social Media Advertising
                    </span>{" "}
                    Agency
                  </h2>
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
                      <p className="mb-1">
                        “Click First SMM feels like an extension of our own
                        team. The results with social media ads have been
                        phenomenal.”
                      </p>
                      <span className="font-semibold text-gray-700">
                        Bobby Reed
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-[25%] left-[25%] group">
                    <MapPinIcon className="h-6 w-6 text-white" />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                      <p className="mb-1">
                        “They completely transformed our campaigns. Responsive,
                        transparent, and always ahead of the curve.”
                      </p>
                      <span className="font-semibold text-gray-700">
                        Aaron Thacker
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-[40%] left-[55%] group">
                    <MapPinIcon className="h-6 w-6 text-white" />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                      <p className="mb-1">
                        “We’ve had to pivot multiple times, and they adapted
                        instantly. Truly flexible and client-focused.”
                      </p>
                      <span className="font-semibold text-gray-700">
                        Mary Elizabeth Lim
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-[40%] left-[30%] group">
                    <MapPinIcon className="h-6 w-6 text-white" />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                      <p className="mb-1">
                        “My biggest regret? Not working with this social media
                        advertising agency sooner. Professional, knowledgeable,
                        and genuinely invested in our success.”
                      </p>
                      <span className="font-semibold text-gray-700">
                        Raquel Laban
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-[40%] left-[40%] group">
                    <MapPinIcon className="h-6 w-6 text-white" />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                      <p className="mb-1">
                        “Thanks to Click First SMM’s social media advertising
                        services, our leads and conversions have skyrocketed.
                        Highly recommend them.”
                      </p>
                      <span className="font-semibold text-gray-700">
                        Darcy Bailey
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-[25%] left-[70%] group">
                    <MapPinIcon className="h-6 w-6 text-white" />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                      <p className="mb-1">
                        “Creative, proactive, and results-driven — their work
                        speaks for itself.”
                      </p>
                      <span className="font-semibold text-gray-700">
                        Tomas Condit
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-[55%] left-[15%] group">
                    <MapPinIcon className="h-6 w-6 text-white" />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                      <p className="mb-1">
                        Working with the team at Click First SMM has been amazing!
                        Daniel is visibly passionate about his customers
                        succeeding with SEO, design ...
                      </p>
                      <span className="font-semibold text-gray-700">
                        Nicole Sorkin
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-[70%] left-[50%] group">
                    <MapPinIcon className="h-6 w-6 text-white" />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                      <p className="mb-1">
                        We contracted with Click First SMM to increase our online
                        exposure. Daniel redesigned our website and did a highly
                        professional job.
                      </p>
                      <span className="font-semibold text-gray-700">
                        Fred Wellman
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-[35%] left-[60%] group">
                    <MapPinIcon className="h-6 w-6 text-white" />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                      <p className="mb-1">
                        These guys and gals are amazing. I’ve been nothing but
                        impressed with their level of understanding and
                        expertise.
                      </p>
                      <span className="font-semibold text-gray-700">
                        Tomas Condit
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-[60%] left-[30%] group">
                    <MapPinIcon className="h-6 w-6 text-white" />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                      <p className="mb-1">
                        Jonas, Julian and Team have been great. They have been
                        both helpful and diligent. As to creating a website, I'm
                        very impressed with the effort and skill...
                      </p>
                      <span className="font-semibold text-gray-700">
                        Betty Robinson
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-[75%] left-[60%] group">
                    <MapPinIcon className="h-6 w-6 text-white" />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                      <p className="mb-1">
                        Thank you Julian and Thanks Jonas and other team
                        members! You will get a high quality and the best
                        customer service.
                      </p>
                      <span className="font-semibold text-gray-700">
                        YIJO YIM
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-[80%] left-[40%] group">
                    <MapPinIcon className="h-6 w-6 text-white" />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white text-black text-sm p-3 rounded-lg shadow-lg w-64">
                      <p className="mb-1">
                        Daniel G. and his team have been easy and flexible to
                        work with. We needed a lot of pivots with our startup,
                        and they were accommodating with every request.
                      </p>
                      <span className="font-semibold text-gray-700">
                        Mary Elizabeth Lim
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center mt-10">
                  <CTA
                    css="!bg-[linear-gradient(180deg,_#351a4b,_#723389)] hover:!bg-white hover:text-white px-[50px]"
                    theme="primary"
                    size="large"
                    text="Chat Now"
                  />
                  <CTA
                    css="bg-black border-black hover:bg-secondary hover:border-secondary"
                    theme="transparent"
                    size="large"
                    href="tel:833-666-6684 "
                    text="Call Now: 833-666-6684 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Packages wrapperCss="pt-[50px] pb-[100px]" />
      <Creations />
      <section>
        <div className="lg:py-[100px] py-[50px] bg-[linear-gradient(180deg,_#351a4b,_#723389)]">
          <div className="container">
            <h2 className="xl:text-[50px] md:text-[40px] text-[35px] text-center font-bold text-white tracking-[-1px] xl:leading-[55px] leading-tight mb-10">
              The Perfect Time To Lead Is Now. If You’re Already{" "}
              <br className="lg:block hidden" />
              Great At What You Do, Let Us{" "}
              <span className="font-bold text-secondary">Be Great</span> At{" "}
              <br className="lg:block hidden" /> Making Sure{" "}
              <span className="font-bold text-secondary">The World Knows</span>{" "}
              It.
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center mt-10">
              <CTA
                css="hover:bg-white hover:text-black rounded-none"
                theme="lpSecondary"
                size="large"
                text="Click Here to Grow"
              />
              <CTA
                css="bg-black border-black hover:bg-secondary hover:border-secondary rounded-none"
                theme="transparent"
                size="large"
                href="tel:833-666-6684 "
                text="Call Now: 833-666-6684 "
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-[100px]">
          <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
              <div>
                <h2 className="font-black text-[42px] tracking-[-1px] leading-[45px] text-[#262626] mb-[18px]">
                  Why Partner With Click First SMM - Social Media Advertising
                  Agency? Because We Deliver Results That Scale
                </h2>
                <p>
                  In a world where almost every brand is online, it takes more
                  than just posting to stand out. That’s where we shine. As a
                  forward-thinking social media marketing agency, we create
                  strategies that cut through the noise and connect directly
                  with your audience.
                </p>
                <p>
                  We are not just another social media advertising agency; we
                  are growth partners. Our campaigns are:
                </p>
                <ul className="my-5 list-disc pl-4 space-y-1 font-semibold">
                  <li>Conversion-focused</li>
                  <li>ROI-driven</li>
                  <li>Creative and scalable</li>
                  <li>Backed by real-time data and insights</li>
                </ul>
              </div>
              <div className="grid grid-cols-3 gap-5 items-center justify-center mt-5">
                <div className="flex flex-col gap-5">
                  <div className="border-[#723389] border-[2px] transition-all duration-500 hover:bg-[#723389] group border-solid shadow-2xl flex flex-col items-center justify-center md:py-[50px] py-[30px] gap-5">
                    <CheckBadgeIcon className="w-10 group-hover:text-white" />
                    <h2 className="font-semibold group-hover:text-white text-center lg:text-[16px] text-[12px]">
                      Conversion Driven
                    </h2>
                  </div>
                  <div className="border-[#723389] border-[2px] transition-all duration-500 hover:bg-[#723389] group border-solid shadow-2xl flex flex-col items-center justify-center md:py-[50px] py-[30px] gap-5">
                    <CircleStackIcon className="w-10 group-hover:text-white" />
                    <h2 className="font-semibold group-hover:text-white text-center lg:text-[16px] text-[12px]">
                      Data-driven
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col gap-5 md:-mt-32 -mt-16">
                  <div className="border-[#723389] border-[2px] transition-all duration-500 hover:bg-[#723389] group border-solid shadow-2xl flex flex-col items-center justify-center md:py-[50px] py-[30px] gap-5">
                    <CurrencyDollarIcon className="w-10 group-hover:text-white" />
                    <h2 className="font-semibold group-hover:text-white text-center lg:text-[16px] text-[12px]">
                      Affordable
                    </h2>
                  </div>
                  <div className="border-[#723389] border-[2px] transition-all duration-500 hover:bg-[#723389] group border-solid shadow-2xl flex flex-col items-center justify-center md:py-[50px] py-[30px] gap-5">
                    <AdjustmentsVerticalIcon className="w-10 group-hover:text-white" />
                    <h2 className="font-semibold group-hover:text-white text-center lg:text-[16px] text-[12px]">
                      Scalable
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="border-[#723389] border-[2px] transition-all duration-500 hover:bg-[#723389] group border-solid shadow-2xl flex flex-col items-center justify-center md:py-[50px] py-[30px] gap-5">
                    <FunnelIcon className="w-10 group-hover:text-white" />
                    <h2 className="font-semibold group-hover:text-white text-center lg:text-[16px] text-[12px]">
                      ROI-focused
                    </h2>
                  </div>
                  <div className="border-[#723389] border-[2px] transition-all duration-500 hover:bg-[#723389] group border-solid shadow-2xl flex flex-col items-center justify-center md:py-[50px] py-[30px] gap-5">
                    <GiftIcon className="w-10 group-hover:text-white" />
                    <h2 className="font-semibold group-hover:text-white text-center lg:text-[16px] text-[12px]">
                      Outcome Guaranteed
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center my-10">
              <h3 className="text-[25px] lg:text-[40px] text-center font-black tracking-[-1px] lg:leading-[48px]  capitalize bg-[linear-gradient(to_right,_#76358d_30%,_#e31a6e_40%,_#f18f39)] bg-clip-text text-transparent">
                From startups to enterprises, we’ve helped businesses of every
                size amplify their reach. With our proven methods, your brand
                will not just participate in the conversation — it will lead it.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-[50px]">
          <div className="container">
            <div className="flex flex-col gap-3 items-center">
              <h2 className="font-black text-[35px] lg:text-[42px] tracking-[-1px] lg:leading-[45px] leading-tight text-[#262626] lg:mb-[18px] mb-3 text-center">
                Social Media Advertising Services{" "}
                <br className="lg:block hidden" />
                That Deliver Real Growth
              </h2>
              <p className="lg:text-[20px] text-[16px] tracking-tight leading-tight text-[#262626] lg:w-[70%] w-[90%] text-center">
                Looking to take your business to the next level? Our social
                media ads are built to convert
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 my-10">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group relative md:h-[350px] h-[280px] w-full bg-transparent border-[1px] text-white rounded-xl p-6 overflow-hidden transition-colors duration-500 hover:bg-[#351a4b] border-primary group-hover:border-black shine-effect shadow-xl"
                  >
                    {/* CONTENT */}
                    <div className="flex flex-col items-start justify-start h-full transition-all duration-500 ease-out group-hover:translate-y-[10px]">
                      <h2 className="lg:text-2xl text-[18px] font-semibold text-black mb-3 leading-tight transition-all duration-500 ease-out group-hover:text-white">
                        {service.title}
                      </h2>
                      <p className="lg:text-sm text-[12px] leading-relaxed text-black transition-opacity duration-500 ease-out group-hover:opacity-90 group-hover:text-white">
                        {service.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="absolute bottom-6 left-6 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-150">
                      <CTA
                        css="hover:bg-white hover:text-black"
                        theme="lpSecondary"
                        size="large"
                        text="Talk To An Expert"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-[50px] relative">
          <Image
            src={bg11}
            alt="Click First SMM"
            priority
            fill
            sizes="80vw"
            className="w-full -z-10"
          />
          <div className="container">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
              <div>
                <h3 className="font-black text-[35px] lg:text-[42px] tracking-[-2px] lg:leading-[50px] leading-tight text-[#262626] mb-[18px]">
                  Get your free{" "}
                  <span className="text-[#351a4b]">30 minute</span> strategy
                  session with a Senior Digital Marketer{" "}
                  <span className="text-[#351a4b]">(Worth $300)</span>
                </h3>
                <CTA
                  css="hover:bg-black hover:text-white"
                  theme="lpSecondary"
                  size="large"
                  text="Get Free 30 Minutes Strategy Session"
                />
              </div>
              <div>
                <div className="group relative  bg-white rounded-lg shadow-2xl p-10 lg:w-[70%] w-[90%] mx-auto">
                  <h3 className="text-black mb-5 text-[35px] font-bold text-center capitalize">
                    Don’t be shy, say hi!
                  </h3>
                  {/* <FrontEndForm label={false} button="Increase My Sales" /> */}
                  <LpFormContact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-[100px]">
          <div className="container">
            <div className="grid grid-cols-1 gap-x-5 gap-y-10 items-center">
              <div className="w-full text-center">
                <h2 className="text-[35px] lg:text-[40px] xl:text-[36px] 2xl:text-[50px] leading-snug font-bold tracking-tighter text-black mb-3">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
            <div className="w-full max-w-3xl mx-auto space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className=" rounded-md">
                  {/* Header */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full text-left px-5 py-2 bg-[#2b2b2b] text-white rounded-xl hover:bg-[#2b2b2b] font-semibold flex justify-between items-center transition"
                  >
                    <span>{item.question}</span>
                    <span className="text-xl">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {/* Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 bg-[#2b2b2b] rounded-xl  mt-[1px] -z-10 ${
                      activeIndex === index
                        ? "max-h-[400px] p-5"
                        : "max-h-0 px-5"
                    }`}
                  >
                    <p className="text-white">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
