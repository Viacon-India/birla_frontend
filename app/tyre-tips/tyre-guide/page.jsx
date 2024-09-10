"use client";

import React, { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { PageBanner } from "../../components/pageCommon/pageCommon";
import { PageEnd } from "../../components/pageCommon/pageCommon";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../../assets/images/guide1.jpg";
import guide2 from "../../assets/images/guide2.jpg";
import guide3 from "../../assets/images/guide3.jpg";
import guide4 from "../../assets/images/guide4.jpg";
import guide5 from "../../assets/images/guide5.jpg";
import guide6 from "../../assets/images/guide6.jpg";
import LastBg from "../../assets/images/guide7.png";

export default function TyreGuide() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <PageBanner Title="Tyre Guide" StaticBanner={Banner} />
      <section className="page-content mt-8 md:mt-12 2xl:mt-[60px] overflow-hidden">
        <div className="container mx-auto flex flex-col gap-8 md:gap-20 2xl:gap-[120px]">
          <div className="box-content-sec">
            <span className="section-heading" data-aos="fade-up" data-aos-duration="1000">tyre anatomy</span>
            <div className="section-title-wrapper mb-4 md:mb-8 2xl:mb-10" data-aos="fade-up" data-aos-duration="1000">
              <h3 className="section-title">Anatomy of a tyre</h3>
            </div>
            <p data-aos="fade-up" data-aos-duration="1000">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <div class="flex flex-col md:flex-row gap-4 md:gap-10 mt-5 2xl:mt-10">
              <div class="w-full md:w-[45%] h-fit md:sticky top-[90px]">
                <figure
                  className="w-full h-[350px] md:h-[450px] 2xl:h-[550px] mb-0"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <Image
                    className="w-full h-full object-cover rounded-[12px] shadow-xl"
                    src={guide2}
                    alt="faqImg"
                  />
                </figure>
              </div>
              <div
                class="accordion-list-sec md:w-[55%] h-[350px] md:h-[450px] 2xl:h-[550px] overflow-y-auto"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title">Capability point 1</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Capability point 2</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Capability point 3</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Capability point 4</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Capability point 5</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Capability point 6</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Capability point 7</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Capability point 8</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Capability point 9</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Capability point 10</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-content-sec">
            <span className="section-heading" data-aos="fade-up" data-aos-duration="1000">tyre care</span>
            <div className="section-title-wrapper mb-4 md:mb-8 2xl:mb-10" data-aos="fade-up" data-aos-duration="1000">
              <h3 className="section-title">Tyre pattern types</h3>
            </div>
            <p data-aos="fade-up" data-aos-duration="1000">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <div className="tyre-guide-box-wrapper flex flex-col md:flex-row">
              <figure data-aos="fade-right" data-aos-duration="1500">
                <Image
                  className="w-full h-full rounded-[12px]"
                  src={guide3}
                  alt="image"
                />
              </figure>
              <div className="tyre-guide-box w-full md:w-[50%]" data-aos="fade-left" data-aos-duration="1500">
                <h2>Rib pattern</h2>
                <div className="flex flex-col gap-2 md:gap-6">
                  <div>
                    <strong>Uses:</strong>
                    <p>
                      These tyres are generally designed for use on hard road
                      surfaces, such as tarmac and concrete. Because they have
                      good directional stability they are often fitted to the
                      steering wheels of trucks and buses.
                    </p>
                  </div>
                  <div>
                    <strong>Advantages:</strong>
                    <ul>
                      <li>Good directional stability and steering control</li>
                      <li>
                        Lower rolling resistance, so greater fuel efficiency
                      </li>
                      <li>Suitable for sustaining high speeds</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Considerations:</strong>
                    <ul>
                      <li>
                        Less grip than lug pattern when accelerating or braking
                        on wet roads, so less good as drive tyres.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="tyre-guide-box-wrapper flex flex-col-reverse md:flex-row">
              <div className="tyre-guide-box w-full md:w-[50%]" data-aos="fade-right" data-aos-duration="1500">
                <h2>Lug pattern</h2>
                <div className="flex flex-col gap-2 md:gap-6">
                  <div>
                    <strong>Uses:</strong>
                    <p>
                      Lug tyres have high traction so are used for drive axles
                      of commercial vehicles and for 4x4 vehicles designed for
                      dirt roads.
                    </p>
                  </div>
                  <div>
                    <strong>Advantages:</strong>
                    <ul>
                      <li>Improved traction</li>
                      <li>Excellent grip when braking and accelerating</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Considerations:</strong>
                    <ul>
                      <li>Greater noise at high speeds</li>
                      <li>
                        Not as fuel efficient for high speed driving due to
                        additional rolling resistance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <figure data-aos="fade-left" data-aos-duration="1500">
                <Image
                  className="w-full h-full rounded-[12px]"
                  src={guide4}
                  alt="image"
                />
              </figure>
            </div>
            <div className="tyre-guide-box-wrapper flex flex-col md:flex-row">
              <figure data-aos="fade-right" data-aos-duration="1500">
                <Image
                  className="w-full h-full rounded-[12px]"
                  src={guide5}
                  alt="image"
                />
              </figure>
              <div className="tyre-guide-box w-full md:w-[50%]" data-aos="fade-left" data-aos-duration="1500">
                <h2>Mixed, rib-lug pattern</h2>
                <div className="flex flex-col gap-2 md:gap-6">
                  <div>
                    <strong>Uses:</strong>
                    <p>
                      These tyres are good for both paved and dirt roads and can
                      be found on a variety of trucks and buses, and some can be
                      used in all positions, including drive and steer axles.
                    </p>
                  </div>
                  <div>
                    <strong>Advantages:</strong>
                    <ul>
                      <li>The central rib provides good directional control</li>
                      <li>
                        The shoulder lugs offer good braking & driving power
                      </li>
                      <li>
                        The mixed shape offers a more balanced performance, so
                        can be used in all positions
                      </li>
                    </ul>
                  </div>
                  <div>
                    <strong>Considerations:</strong>
                    <ul>
                      <li>
                        Not as good in specific drive or steer roles as pure rib
                        or lug patterns.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="tyre-guide-box-wrapper flex flex-col-reverse md:flex-row">
              <div className="tyre-guide-box w-full md:w-[50%]" data-aos="fade-right" data-aos-duration="1500">
                <h2>Block pattern</h2>
                <div className="flex flex-col gap-2 md:gap-6">
                  <div>
                    <strong>Uses:</strong>
                    <p>
                      The main benefit to these tyres is there ability to
                      perform well on mud and snow. This makes them highly
                      useful as off-road, or winter tyres, as well as all-season
                      tyres for passenger cars.
                    </p>
                  </div>
                  <div>
                    <strong>Advantages:</strong>
                    <ul>
                      <li>
                        Good steering and stability on wet, muddy and
                        snow-covered roads
                      </li>
                      <li>
                        Good water dispersal properties thanks to the numerous
                        grooves
                      </li>
                    </ul>
                  </div>
                  <div>
                    <strong>Considerations:</strong>
                    <ul>
                      <li>
                        Less grip than lug pattern when accelerating or braking
                        on wet roads, so less good as drive tyres.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <figure data-aos="fade-left" data-aos-duration="1500">
                <Image
                  className="w-full h-full rounded-[12px]"
                  src={guide6}
                  alt="image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <PageEnd EndStaticImage={LastBg} />
      <Footer />
    </>
  );
}
