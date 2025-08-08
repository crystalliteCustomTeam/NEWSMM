import Image from "next/image";
import React from "react";
import image_one from "media/casestudy/RAF_0084.png";
import image_two from "media/casestudy/casestudy-1_1.png";
import image_three from "media/casestudy/casestudy-1_2.png";
import image_four from "media/casestudy/TDG-Three.png";
import svg_path_one from "media/casestudy/Path-One.png";
import image_five from "media/casestudy/tdg-six.png";
import image_six from "media/casestudy/casestudy-1_4.png";
import image_seven from "media/casestudy/TDG-Seven.jpg";
import TDGLast from "media/casestudy/TDG-Last.jpg";
import CaseStudy6 from "media/casestudy/casestudy-1_3.png";
import bgImgBlack from "media/casestudy/bg-Img1.png";

export default function Belowherosection() {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <h2 className="text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[50px] font-bold leading-tight mb-8 text-center">
            How We Helped Tustin Dental Group <br /> Achieve 400% ROI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            <div>
              <Image
                src={image_one}
                className="shadow-xl"
                alt="Click First SMM Case Study"
              />
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="text-[35px]  md:text-[35px] font-bold leading-[0.8]">
                The Results
              </h3>
              <div className="flex flex-col gap-4 mt-5 md:mt-0">
                <div className="bg-primary w-[100%] h-[100px] flex justify-center items-center">
                  <h3 className="text-white  text-[20px] md:text-[30px] font-bold text-center">
                    400%+ ROI & ROAS
                  </h3>
                </div>
                <div className="bg-primary w-[100%] h-[100px] flex justify-center items-center">
                  <h3 className="text-white text-[20px] md:text-[30px] font-bold text-center">
                    120+ New Patient Inquiries Generated
                  </h3>
                </div>
                <div className="bg-primary w-[100%] h-[100px] flex justify-center items-center">
                  <h3 className="text-white text-[20px] md:text-[30px] font-bold text-center">
                    Ranked in the Top 3 on Google Maps{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <h2 className="text-[35px] sm:text-[40px] md:text-[40px]  font-bold leading-tight mb-8 ">
                  Fully Verified & Ready to Scale
                </h2>
                <p className="text-[18px]">
                  <strong>
                    How does a small local business, like Tustin Dental Group,
                    get big results using Google Adword?
                  </strong>
                </p>
                <p className="mt-3">
                  {" "}
                  We built the foundation for success by fully verifying their
                  business through Google, a critical step in unlocking advanced
                  ad placements and trust signals.
                </p>
                <p className="text-[18px] mt-10">
                  <strong>
                    Within 12 months, 370 people booked appointments via Google
                    Business Profile
                  </strong>
                </p>
                <p className="mt-3">
                  {" "}
                  The screenshot shows their Google Business verification
                  dashboard, where every requirement — from liability insurance
                  and background checks to business profile and reviews — was
                  completed.This 100% verification allowed us to:
                </p>
              </div>
              <div className="flex items-end justify-center mt-5 md:mt-0">
                <ul className="flex flex-col gap-3 md:gap-2">
                  <li className="flex gap-3 md:gap-10 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>{" "}
                    <span>
                      Activate the <strong>“Google Verified Doctor”</strong>{" "}
                      badge
                    </span>{" "}
                  </li>
                  <li className="flex gap-3 md:gap-10 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                    <span>Unlock higher visibility on search and maps</span>
                  </li>
                  <li className="flex gap-3 md:gap-10 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                    <span>Build trust with new patients at first glance</span>
                  </li>
                  <li className="flex gap-3 md:gap-10 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                    <span>
                      Run{" "}
                      <strong>
                        high-performing Google Local Ads and Google Business
                        Profile
                      </strong>
                    </span>
                  </li>
                  {/* <li className='flex gap-3 md:gap-10 items-center'><div className='bg-primary h-[10px] w-[10px] rounded-full'></div>Activate the “Google Verified Doctor” badge</li> */}
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <Image
                src={image_two}
                alt="CLICK FIRST SMM"
                className="shadow-xl object-fill"
              />
            </div>
            <div className="mt-16">
              <h2 className="text-[30px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[50px] font-semibold leading-tight mb-8 ">
                1024 Calls in 6 Months Powered by
                <br /> Local Optimization
              </h2>
              <p className="text-[16px]">
                This graph shows the number of calls made directly from the
                Google Business Profile of Tustin Dental Group from January to
                June 2025. After we optimized their profile, launched
                high-performing Google Local Ads, and verified them as a Trusted
                Google Certified Dentist, their monthly calls increased
                consistently, totaling 1,024 calls in just 6 months.
              </p>
              <p className="text-[16px] mt-3">
                You can see a strong start in January, followed by stable growth
                month over month. This proves that local marketing done right
                brings real, measurable results.
              </p>
            </div>
            <div className="mt-10">
              <Image
                src={image_three}
                alt="CLICK FIRST SMM"
                className="shadow-xl"
              />
            </div>
            <div className="mt-16">
              <h2 className="text-[30px] sm:text-[30px] md:text-[45px] lg:text-[50px] xl:text-[50px] font-bold leading-tight mb-5 ">
                The Strategy Behind Their Success
              </h2>
              <p className="text-[16px] my-5">
                We didn’t just run ads, we built a full, local marketing system
                designed to bring real patients through the door. Here’s how we
                made it happen:
              </p>
              <p className="text-[16px] font-bold">
                Google Business Profile (GBP) Optimization:
              </p>
              <p className="text-[16px] mt-1">
                We fine-tuned their Google listing to boost local rankings,
                increase visibility on Google Maps, and make them easy to find
                for nearby patients searching for a dentist.
              </p>
              <p className="text-[16px] font-bold mt-3">
                Google Ads: Focused on Real Leads:
              </p>
              <p className="text-[16px] mt-1">
                Instead of wasting budget on clicks, we ran high-converting
                Local Service Ads and Google Search Ads that generated direct
                phone calls and appointment requests.
              </p>
              <p className="text-[16px] font-bold mt-3">
                Google “Verified Doctor” Badge:
              </p>
              <p className="text-[16px] mt-1">
                We helped Tustin Dental earn the official Google Certified
                Doctor badge, giving their profile instant credibility and trust
                in the eyes of potential patients.
              </p>
              <p className="text-[16px] font-bold mt-3">
                Full Conversion Tracking & ROI Reporting
              </p>
              <p className="text-[16px] mt-1">
                Every call, click, and booking was tracked, giving us and the
                clinic full clarity on what worked, what didn’t, and how much
                revenue was being driven
              </p>
            </div>
            <div className="w-[100%] h-[2px] bg-gray-200 my-10"></div>
            <div className="my-5">
              <h2 className="text-[30px] sm:text-[30px] md:text-[50px]  font-bold leading-tight mb-8 ">
                Over 30,000 Profile Views & 28,000+ Search Appearances in Just 6
                Months
              </h2>
              <p className="text-[16px] mt-5">
                This highlights the powerful reach we created for Tustin Dental
                Group through a fully managed local marketing strategy. From
                January to June 2025:
              </p>
              <div className="mt-4">
                <ul className="flex flex-col ">
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                    <div>
                      <p>
                        <strong>30,189 </strong>people viewed their Google
                        Business Profile
                      </p>
                    </div>{" "}
                  </li>
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>{" "}
                    <div>
                      <p>
                        <strong>28,662 </strong> people found the business in
                        search results using high-intent keywords like:
                      </p>
                    </div>{" "}
                  </li>
                  <li className="flex gap-5 items-start ml-1">
                    <Image
                      src={svg_path_one}
                      className="shadow-xl"
                      alt="CLICK FIRST SMM CASE STUDY"
                    />
                    <ul className="flex flex-col mt-3">
                      <li>Dentist near me</li>
                      <li>Orthodontist</li>
                      <li>Dental dentist near me</li>
                      <li>Dentist in Tustin</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <Image
                  src={image_four}
                  alt="CLICK FIRST SMM CASE STUDY"
                  className="shadow-xl"
                />
              </div>
              <div className="mt-5">
                <p className="text-[16px]  font-bold">
                  We also drove visibility across platforms:
                </p>
                <ul className="flex flex-col my-5">
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                    <div>
                      <p>
                        <strong>61%</strong> of users came from Google Search on
                        mobile
                      </p>
                    </div>{" "}
                  </li>
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>{" "}
                    <div>
                      <p>
                        <strong>23%</strong> from desktop search
                      </p>
                    </div>{" "}
                  </li>
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>{" "}
                    <div>
                      <p>
                        <strong>16%</strong> from Google Maps
                      </p>
                    </div>{" "}
                  </li>
                </ul>
                <p className="text-[16px]  font-normal w-[70%]">
                  By optimizing their profile and aligning it with what people
                  search for, we made sure the right patients found them at the
                  right time, right when they were looking for dental help.
                </p>
              </div>
              <div className="w-[100%] h-[2px] bg-gray-200 my-10"></div>

              <div className="mt-5">
                <h2 className="text-[30px] sm:text-[40px] md:text-[50px]  font-bold leading-tight mb-8 ">
                  Fully Optimized & Trusted Google <br /> Business Presence
                </h2>
              </div>
              <div className="mt-5">
                <p className="text-[16px]  font-normal">
                  Here’s a look at the live Google Business Profile we managed
                  for Tustin Dental Group. After verifying the business as a
                  Trusted Google Certified Dentist, we fully optimized every
                  section, from services to photos to Q&A.
                </p>
                <ul className="flex flex-col my-5">
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                    <div>
                      <p>
                        Profile strength marked as{" "}
                        <strong>"Looks good!"</strong>{" "}
                      </p>
                    </div>{" "}
                  </li>
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>{" "}
                    <div>
                      <p>
                        Over <strong>25,000+ customer interactions</strong>{" "}
                      </p>
                    </div>{" "}
                  </li>
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>{" "}
                    <div>
                      <p>
                        <strong> 230+ Google reviews</strong> with a 4.9-star
                        rating
                      </p>
                    </div>{" "}
                  </li>
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>{" "}
                    <div>
                      <p>
                        Consistent monthly performance insights and new 5-star
                        reviews
                      </p>
                    </div>{" "}
                  </li>
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>{" "}
                    <div>
                      <p>
                        Active Smart Campaigns with ad eligibility for local
                        dental-related searches
                      </p>
                    </div>{" "}
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <Image
                  src={image_five}
                  className="shadow-xl"
                  alt="CLICK FIRST SMM CASE STUDY"
                />
              </div>
              <div className="w-[100%] h-[2px] bg-gray-200 my-10"></div>
              <div className="mt-10">
                <h2 className="text-[30px] sm:text-[40px] md:text-[50px]  font-semibold leading-tight mb-8 ">
                  How We Turned Local Clicks into New <br /> Dental Patients
                </h2>
                <p className="text-[16px]  font-normal">
                  With a monthly spend of just <strong>$553.00</strong>, the
                  campaign delivered{" "}
                  <strong>
                    over 2.79K ad views, 320 Google Business Profile visits, 55
                    local actions
                  </strong>{" "}
                  (like users clicking to get directions), and{" "}
                  <strong>101 phone calls </strong>to the dental office.
                </p>
                <p className="text-[16px]  mt-5">
                  These results clearly highlight how effective our local
                  marketing strategy was. By optimizing their{" "}
                  <strong>Google Business Profile</strong>, verifying them as a{" "}
                  <strong>Google Trusted Dentist</strong>, and launching
                  targeted Smart Campaigns, we helped drive real local traffic
                  and qualified leads, leading to a <strong>400% ROI</strong> in
                  just a few months.
                </p>
              </div>
              <div className="mt-10">
                <Image
                  src={CaseStudy6}
                  className="shadow-xl"
                  alt="CLICK FIRST SMM CASE STUDY"
                />
              </div>
              <div className="w-[100%] h-[2px] bg-gray-200 my-10"></div>
              <div className="mt-5">
                <h2 className="text-[30px] sm:text-[40px] md:text-[50px]  font-semibold leading-tight mb-8 ">
                  Cost-Efficient Advertising That Converts
                  <br className="hidden md:block" /> Local Leads
                </h2>
                <p className="text-[16px]  mt-10">
                  In this performance view, we’re seeing the{" "}
                  <strong>monthly summary </strong>of our Google Ads campaign
                  for <strong>Trusting Dental Group</strong>. With{" "}
                  <strong>377 total clicks and 99.00 conversions</strong>, we
                  achieved a <strong>strong 27% conversion rate</strong>. That
                  means nearly 1 in 3 clicks resulted in a meaningful customer
                  action, whether that was calling, visiting the website, or
                  getting directions to the clinic.
                </p>
                <p className="text-[16px]  mt-2">
                  Here’s a breakdown of key performance metrics:
                </p>
                <ul className="flex flex-col my-5 gap-2">
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                    <div>
                      <p>
                        <strong>Total Ad Spend:</strong> $666.00{" "}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                    <div>
                      <p>
                        <strong>Cost Per Click (CPC):</strong> $1.77{" "}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                    <div>
                      <p>
                        <strong>Cost Per Conversion:</strong> $6.72{" "}
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                    <div>
                      <p>
                        <strong>Conversions:</strong> 99 valuable actions
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <Image
                  src={image_six}
                  className="shadow-xl"
                  alt="CLICK FIRST SMM CASE STUDY"
                />
              </div>
              <div className="w-[100%] h-[2px] bg-gray-200 my-10"></div>
              <div className="mt-10">
                <h2 className="text-[30px] sm:text-[40px] md:text-[50px]  font-semibold leading-tight mb-8 ">
                  Local Ads Performance: Smart Data, Real Growth
                </h2>
                <p className="text-[16px]  mt-10">
                  This section of the dashboard uncovers{" "}
                  <strong>how we reached and engaged high-quality leads</strong>{" "}
                  using <strong>Google’s Performance Max Campaign</strong> for
                  Trusting Dental Group. Here’s what stands out:
                </p>
                <ul className="flex flex-col my-5 gap-2">
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                    <div>
                      <p>
                        <strong>Top-performing device: </strong> Mobile (80%+ of
                        conversions){" "}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                    <div>
                      <p>
                        <strong>Geographic Reach:</strong>Strongest response in
                        the Tustin, CA area
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                    <div>
                      <p>
                        <strong>Best performing audience segments:</strong>
                        "Health & Wellness Seekers" and "Dental Service
                        Intenders"
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-5 items-center">
                    <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                    <div>
                      <p>
                        <strong>Conversion by device:</strong> Mobile
                        outperformed desktop by a significant margin, confirming
                        that mobile-first optimization was key.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <Image
                  src={image_seven}
                  className="shadow-xl"
                  alt="CLICK FIRST SMM CASE STUDY"
                />
              </div>
              <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {CardSection(
                    "High-Performing Campaigns",
                    "Our tailored Emergency Campaign stood out with a remarkable 40% click-through rate and over 50 quality conversions, helping new patients find immediate care when they needed it most. "
                  )}

                  {CardSection(
                    "Smart Timing, Better Results",
                    "By analyzing the best-performing days and hours through the heatmap, we adjusted ad schedules to align with when patients are most likely to search for dental services—ensuring no opportunity is missed."
                  )}
                  {CardSection(
                    "Mobile-First Strategy",
                    "With over 80% of conversions coming from mobile devices, we shifted focus to mobile-optimized ads and landing pages, meeting patients where they are and making it easier for them to book appointments on the go."
                  )}
                  {CardSection(
                    "100% Optimization Score",
                    "With over 80% of conversions coming from mobile devices, we shifted focus to mobile-optimized ads and landing pages, meeting patients where they are and making it easier for them to book appointments on the go."
                  )}
                  {CardSection(
                    "Insight-Driven Decisions",
                    "With over 80% of conversions coming from mobile devices, we shifted focus to mobile-optimized ads and landing pages, meeting patients where they are and making it easier for them to book appointments on the go."
                  )}
                  <div className="bg-[#f6f6f6] py-[30px] px-[50px]">
                    <ul className="flex flex-col">
                      <li className="flex gap-5 items-center">
                        <div>
                          <p>We also used: </p>
                        </div>
                      </li>

                      <li className="flex gap-5 items-center">
                        <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                        <div>
                          <p>
                            <strong>Custom audience lists</strong> (past website
                            visitors and phone call audiences){" "}
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-5 items-center">
                        <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                        <div>
                          <p>
                            <strong>Location-based bidding</strong> to focus on
                            a high-converting radius{" "}
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-5 items-center">
                        <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
                        <div>
                          <p>
                            <strong>Ad schedule optimization</strong> based on
                            peak call/request times{" "}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-[16px]  mt-10">
                  The result?{" "}
                  <strong>Maximum exposure with minimal ad waste</strong>,
                  allowing us to convert a larger percentage of ad views into
                  high-value patients.
                </p>
              </div>
              <div className="mt-10">
                <h2 className="text-[30px] sm:text-[40px] md:text-[50px]  font-semibold leading-tight mb-8 ">
                  What Made the Campaign Work?
                </h2>
                <p className="text-[16px]  mt-5">
                  Here, we zoom in on the{" "}
                  <strong>conversion performance</strong> and audience insights
                  that helped us refine the campaign over time. Google’s
                  Performance Max dashboard shows that{" "}
                  <strong>our conversion rate held steady at nearly 30%</strong>
                  , driven by precise bidding and content testing.
                  <br />
                  <br />
                  Key insights:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
                  <CardSectionTwo
                    Title="Conversion actions included:"
                    descriptionArray={[
                      "Phone calls from ads",
                      "Direction requests",
                      "Website visits (including contact and appointment pages)",
                    ]}
                  />

                  <CardSectionTwo
                    Title="High-converting ad placements:"
                    descriptionArray={[
                      "Google Maps listings",
                      "Mobile search ads during weekday afternoons",
                      "YouTube pre-roll ads for local oral care tips",
                    ]}
                  />

                  <CardSectionTwo
                    Title="Audience segments with the highest conversion rates:"
                    descriptionArray={[
                      "Dental Emergency Seekers",
                      "Mobile Users in a 12-mile radius of the clinic",
                      "Returning Visitors (remarketing audience)",
                    ]}
                  />
                </div>
                <div className="mt-10">
                  <Image
                    src={TDGLast}
                    className="shadow-xl"
                    alt="CLICK FIRST SMM CASE STUDY"
                  />
                </div>
                <div className="mt-10">
                  <p className="text-[16px]  mt-10">
                    Additionally, our <strong>budget pacing</strong> was
                    strategically distributed to match high-performing days and
                    hours, which improved{" "}
                    <strong>cost-efficiency per lead.</strong>
                  </p>
                  <p className="text-[16px]  mt-5">
                    This detailed view shows how we didn’t just launch ads, we
                    analyzed <strong>every touchpoint</strong>, tracked
                    behaviors, and refined continuously. It’s this granular
                    approach that turned a local dental campaign into a{" "}
                    <strong>high-ROI success story</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-[100px]  overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 right-0">
          <Image
            src={bgImgBlack}
            alt="Background"
            className="object-cover w-full h-full"
            fill
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="grid grid-cols-1 lg:w-[90%] w-full">
              <div className="text-white">
                <h2 className="text-[35px] sm:text-[40px] md:text-[35px] font-semibold leading-tight mb-5 text-left">
                  Final Results: From Local to Leading in Just Months
                </h2>
                <p className="text-[16px] font-light leading-normal">
                  Tustin Dental Group saw real, measurable growth after just a
                  few months of working with our team. With a fully optimized
                  digital presence and performance-driven ad strategy, they
                  became a top choice for dental patients in Tustin.
                  <br />
                  <br /><br />
                  Key Outcomes:
                </p>
                {""}

                <ul className="my-5">
                  {[
                    "Custom audience lists (past website visitors and phone call audiences)",
                    "Location-based bidding to focus on a high-converting radius",
                    "Ad schedule optimization based on peak call/request times",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 items-start mb-2">
                      <div className="h-[10px] w-[10px] border border-[#fff] rounded-full mt-[6px]"></div>
                      <span className="text-[16px] font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[16px] font-light leading-normal">
                  These aren't just numbers, they represent real people walking
                  through the door, real growth, and real success.
                </p>

                <div className="flex font-sans items-center gap-5 mt-8">
                  <a
                    href="#"
                    className="bg-primary h-[45px] flex items-center px-[50px] text-[16px] rounded-[5px] border-[1px] border-transparent hover:bg-transparent hover:text-white hover:border-white hover:border-[1px]  transition-all ease-in-out"
                  >
                    Talk To An Expert
                  </a>
                  <a
                    href="#"
                    className="bg-transparent h-[45px] flex items-center px-[50px] text-[16px] rounded-[5px] border-[1px] border-white hover:bg-white hover:text-primary hover:border-white hover:border-[1px]  transition-all ease-in-out"
                  >
                    Call Now: 346-299-2202
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CardSection(Title, description) {
  return (
    <>
      <div className="bg-[#f6f6f6]  py-[10px] px-[25px] md:py-[30px] md:px-[50px]">
        <ul className="flex flex-col">
          <li className="flex gap-5 items-center">
            <div className="bg-primary h-[10px] w-[10px] rounded-full"></div>
            <div>
              <p>
                <strong>{Title}</strong>{" "}
              </p>
            </div>
          </li>
          <li className="flex gap-5 items-start ml-1">
            <Image src={svg_path_one} alt="CLICK FIRST SMM CASE STUDY" />
            <ul className="flex flex-col mt-3">
              <li dangerouslySetInnerHTML={{ __html: description }} />
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
function CardSectionTwo({ Title, descriptionArray }) {
  return (
    <div className="bg-[#fff] py-[10px] px-[25px] md:py-[30px] md:px-[50px] xl:py-[10px] xl:px-[30px]">
      <ul className="flex flex-col">
        {/* Title with solid blue dot */}
        <li className="flex gap-3 items-center">
          <div className="bg-[#2F49D1] h-[10px] w-[10px] rounded-full"></div>
          <p className="font-semibold text-black">{Title}</p>
        </li>
        <Image src={svg_path_one} alt="CLICK FIRST SMM CASE STUDY" />
        {/* Bullet list with outlined blue circles */}
        <li className="-mt-3 ml-12">
          <ul className="flex flex-col gap-3">
            {descriptionArray.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <div className="h-[10px] w-[10px] border border-[#2F49D1] rounded-full mt-[6px]"></div>
                <span className="text-[14px] text-black">{item}</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
