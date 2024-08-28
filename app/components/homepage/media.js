import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import gallary1 from "../../assets/images/gallary1-original.webp";
import gallary2 from "../../assets/images/gallary2-original.jpg";
import gallary3 from "../../assets/images/gallary3.jpg";
import Link from "next/link";
import GradualSpacing from "@/components/GradualSpacing";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Media() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="media-sec mt-10 md:mt-[60px] 2xl:mt-[100px]">
      <div className="container mx-auto overflow-hidden">
        <div className="upper-title-sec">
          <span className="section-heading">our presence</span>
          <div className="section-title-wrapper">
            <GradualSpacing className="section-title" text="Media Presence" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 2xl:mt-10">
            <div
              class="media-card"
              data-aos="fade-right"
              data-aos-duration="1000"
              // data-aos-offset="650"
            >
              <figure>
                <Link
                  target="_blank"
                  href="https://timesofindia.indiatimes.com/city/kolkata/birla-tyres-to-re-enter-market-with-new-products-in-q4/articleshow/111793517.cms"
                >
                  <Image
                    className="media-card-image"
                    src={gallary1}
                    alt="card"
                  />
                </Link>
              </figure>
              <div className="media-card-detail">
                <div className="flex justify-between items-center mb-3">
                  <span className="card-cat">Media</span>
                  <span className="card-date">24 June 2024</span>
                </div>
                <h2 className="media-title">
                  <Link
                    target="_blank"
                    href="https://timesofindia.indiatimes.com/city/kolkata/birla-tyres-to-re-enter-market-with-new-products-in-q4/articleshow/111793517.cms"
                  >
                    Birla Tyres to re-enter mkt with new products in Q4
                  </Link>
                </h2>
                <p className="media-detail">
                  Birla Tyres is likely to re-enter the market with a new range
                  of products in the fourth quarter of this fiscal, said Anurag
                  Choudhary....
                </p>
                <Link
                  target="_blank"
                  href="https://timesofindia.indiatimes.com/city/kolkata/birla-tyres-to-re-enter-market-with-new-products-in-q4/articleshow/111793517.cms"
                  className="primary-btn w-fit !px-6 flip-animate-2"
                >
                  <span data-hover="Read More">Read More</span>
                </Link>
              </div>
            </div>
            <div
              class="media-card"
              data-aos="fade-right"
              data-aos-duration="1500"
              // data-aos-offset="650"
            >
              <figure>
                <Link
                  target="_blank"
                  href="https://www.telegraphindia.com/business/birla-tyres-set-to-roll-again-acquisition-finalised-by-consortium-of-himadri-and-dalmia/cid/1977074"
                >
                  <Image
                    className="media-card-image"
                    src={gallary2}
                    alt="card"
                  />
                </Link>
                <span></span>
              </figure>
              <div className="media-card-detail">
                <div className="flex justify-between items-center mb-3">
                  <span className="card-cat">Media</span>
                  <span className="card-date">24 June 2024</span>
                </div>
                <h2 className="media-title">
                  <Link
                    target="_blank"
                    href="https://www.telegraphindia.com/business/birla-tyres-set-to-roll-again-acquisition-finalised-by-consortium-of-himadri-and-dalmia/cid/1977074"
                  >
                    Birla Tyres set to roll again, acquisition finalised by
                    consortium of Himadri and Dalmia
                  </Link>
                </h2>
                <p className="media-detail">
                  Birla Tyres will resurface on Indian roads a year from now,
                  courtesy the new owners of the company and the brand....
                </p>
                <Link
                  target="_blank"
                  href="https://www.telegraphindia.com/business/birla-tyres-set-to-roll-again-acquisition-finalised-by-consortium-of-himadri-and-dalmia/cid/1977074"
                  className="primary-btn w-fit !px-6 flip-animate-2"
                >
                  <span data-hover="Read More">Read More</span>
                </Link>
              </div>
            </div>

            <div
              class="media-card"
              data-aos="fade-right"
              data-aos-duration="1500"
              // data-aos-offset="650"
            >
              <figure>
                <Link
                  target="_blank"
                  href="https://www.telegraphindia.com/business/birla-tyres-set-to-roll-again-acquisition-finalised-by-consortium-of-himadri-and-dalmia/cid/1977074"
                >
                  <Image
                    className="media-card-image"
                    src={gallary3}
                    alt="card"
                  />
                </Link>
                <span></span>
              </figure>
              <div className="media-card-detail">
                <div className="flex justify-between items-center mb-3">
                  <span className="card-cat">Media</span>
                  <span className="card-date">24 June 2024</span>
                </div>
                <h2 className="media-title">
                  <Link
                    target="_blank"
                    href="https://www.telegraphindia.com/business/birla-tyres-set-to-roll-again-acquisition-finalised-by-consortium-of-himadri-and-dalmia/cid/1977074"
                  >
                    Birla Tyres set to roll again, acquisition finalised by
                    consortium of Himadri and Dalmia
                  </Link>
                </h2>
                <p className="media-detail">
                  Birla Tyres will resurface on Indian roads a year from now,
                  courtesy the new owners of the company and the brand....
                </p>
                <Link
                  target="_blank"
                  href="https://www.telegraphindia.com/business/birla-tyres-set-to-roll-again-acquisition-finalised-by-consortium-of-himadri-and-dalmia/cid/1977074"
                  className="primary-btn w-fit !px-6 flip-animate-2"
                >
                  <span data-hover="Read More">Read More</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="media-sec-marker"></div>
    </section>
  );
}
