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
import guide8 from "../../assets/images/guide8.jpg";
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
            <span className="section-heading" data-aos="fade-up" data-aos-duration="1000">tyre Guide</span>
            <div className="section-title-wrapper mb-4 md:mb-8 2xl:mb-10" data-aos="fade-up" data-aos-duration="1000">
              <h3 className="section-title">The Anatomy of a Tyre</h3>
            </div>
            <p data-aos="fade-up" data-aos-duration="1000">
            Tyres are made of complex materials, including rubber and silicon, reinforced with layers of nylon, polyester, and/or steel cord belts. The tread is the critical part that grips the road. Tyre treads come in different patterns, made up in combinations of ribs, blocks, lugs and other elements.
            </p>
            <figure className="w-full h-full mt-6 md:mt-8 2xl:mt-10" data-aos="zoom-in" data-aos-duration="1500">
              <Image src={guide8} className="w-full h-full" />
            </figure>
            <div class="flex flex-col md:flex-row gap-4 md:gap-10 mt-5 2xl:mt-10">
              <div class="w-full md:w-[45%] h-fit md:sticky top-[90px]">
                <figure
                  className="w-full h-full mb-0"
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
                class="accordion-list-sec md:w-[55%] h-[350px] md:h-[450px] 2xl:h-[650px] overflow-y-auto"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title">Tread</div>
                  <div className="collapse-content">
                    <p>
                    Tire tread refers to the rubber on the outermost layer of a tire that makes contact with the road – the rubber compound is customised depending on the application the tyre is designed for. The tread consists of various grooves, channels and notches arranged in specific patterns. These patterns help the tyres to maintain grip on different types of surfaces and in various weather conditions. The primary function of the tread is to provide traction. The grooves and channels help displace water, mud, snow and other substances, preventing the tyre from slipping and maintaining contact with the road.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Shoulder</div>
                  <div className="collapse-content">
                    <p>
                    The shoulder is the area of the tyre where the tread meets the sidewall. The shoulder is typically designed with reinforced rubber and additional layer of materials to provide strength and durability. It contributes to the tyre’s handling characteristics, especially during cornering and helps to dissipate heat generated during driving, especially at high speeds. It also provides protection against impacts and abrasions from curbs, potholes, etc. and extends lifespan of the tyre. 
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Sidewall</div>
                  <div className="collapse-content">
                    <p>
                    The sidewall is the portion of the tyre that connects the tread to the bead, which is the part of the tyre that sits on the the rim of the wheel. The sidewall structure provides the necessary strength and flexibility to support the vehicle’s load and helps protect the tyres from impact, abrasion and other road hazards. It also affects the ride quality and handling of the vehicle – a stiffer sidewall can provide better handling and cornering performance, while a more flexible sidewall can offer a smoother and more comfortable ride.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Bead</div>
                  <div className="collapse-content">
                    <p>
                    The tyre bead is the part of the tyre that ensures it stays securely mounted on the wheel rim. It is a critical component for maintaining the tyre’s position and performance. It also creates an airtight seal that prevents air from escaping, ensuring the tyre remains properly inflated. 
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Breaker/Belt</div>
                  <div className="collapse-content">
                    <p>
                    The tyre breaker is a reinforcement layer that is situated between the tyre’s tread and its inner layers (such as carcass, or body plies). The breaker is typically made of synthetic materials such as polyester, nylon, etc. or steel. It provides the tyre with structural integrity, helping it maintain its shape and resist deformation under loads. It also helps to distribute the forces exerted on the tyre evenly improving handling, traction and overall driving performance.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Carcass</div>
                  <div className="collapse-content">
                    <p>
                    The tyre carcass is the foundational structure or load-bearing framework that serves as the backbone of the tyre and supports the tread and other components. It is typically made up of multiple layers of fabric or cords known as plies which are embedded in rubber. The carcass gives the tyre its basic shape and the ability to hold air under pressure. In bias-ply tyres, the carcass plies run diagonally, usually at angles of 30-45 degrees to the direction of travel. The plies in bias ply tyres criss cross each other, providing a tougher construction suitable for heavy-duty and off-road applications.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Inner Liner</div>
                  <div className="collapse-content">
                    <p>
                    The tyre inner liner is a crucial component of modern tubeless tyres, designed to maintain air pressure and ensure the tyre remains airtight. The inner liner is typically made of a specially formulated synthetic rubber compound which is chosen for its excellent air retention property. The inner liner being on the the interior surface of the tyre, forms the first layer of protection against air leakage so its primary function is to act as an airtight barrier, maintaining correct tyre pressure over time.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Bead Filler</div>
                  <div className="collapse-content">
                    <p>
                    The tyre bead filler, also known as bead rubber or bead filler compound, is a component used in construction of tyres particularly around the bead area where the tyre meets the wheel rim. The bead filler adds rigidity to the bead area, helping the tyre maintain shape and providing a firm, secure fit against the wheel rim.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Bead Wire</div>
                  <div className="collapse-content">
                    <p>
                    The bead wire is a ring-shaped continuous strand of steel wires (sometimes coated with brass or bronze to improve adhesion) that provides reinforcement to the bead area and ensures secure, tight fit of the tyre on the wheel rim, thus helping the tyre to maintain position and preventing it from slipping or shifting during driving.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Nylon Chafer and Steel Chafer</div>
                  <div className="collapse-content">
                    <p>
                    The chafer fabric and steel cords provide a protective layer between the bead and the rim and helps prevent damage to the bead area during mounting, dismounting and regular use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-content-sec">
            <span className="section-heading" data-aos="fade-up" data-aos-duration="1000">tyre Guide</span>
            <div className="section-title-wrapper mb-4 md:mb-8 2xl:mb-10" data-aos="fade-up" data-aos-duration="1000">
              <h3 className="section-title">Tyre Patterns</h3>
            </div>
            <p data-aos="fade-up" data-aos-duration="1000">
            Different tyre patterns are designed to give optimum performance for different types of vehicles in different types of conditions. Birla Tyres produces a broad range of tyres, so there is an optimum tyre for everyone.
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
