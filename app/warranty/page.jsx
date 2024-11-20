"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { PageBanner, PageEnd, Chatbot} from "../components/pageCommon/pageCommon";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WarrantyPolicy({params}) {
  const slugs = params.slug;

  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    AOS.init();

    fetch(getStrapiMedia("/api/pages/warranty"))
    .then((res) => res.json())
    .then((pages) => {
      setPageData(pages);
    });
  }, [params]);
  return (
    <>
      <Navbar />
      <PageBanner Title={pageData?.title} Banner={pageData?.hero} />
      <section className="page-content mt-8 md:mt-12 2xl:mt-[60px]">
        <div className="container mx-auto flex flex-col gap-8 md:gap-20 2xl:gap-[120px]">
          <div className="box-content-sec">
            <span className="section-heading" data-aos="fade-up" data-aos-duration="200">Warranty Statement</span>
            <div className="section-title-wrapper mb-4 md:mb-8 2xl:mb-10" data-aos="fade-up" data-aos-duration="400">
              <h3 className="section-title">
                Headline for warranty statement goes here
              </h3>
            </div>
            <p data-aos="fade-up" data-aos-duration="600">
              Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
              Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed.
              Curabitur maximus mollis diam, vel varius sapien suscipit eget.
              Cras sollicitudin ligula at volutpat ultrices. Donec vitae mi
              vulputate, suscipit urna in, malesuada nisl.
            </p>
            <p data-aos="fade-up" data-aos-duration="800">
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
            <p data-aos="fade-up" data-aos-duration="1200">
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
          </div>
          <div className="box-content-sec">
            <span className="section-heading" data-aos="fade-up" data-aos-duration="500">Table section</span>
            <div className="section-title-wrapper mb-4 md:mb-8 2xl:mb-10" data-aos="fade-up" data-aos-duration="1000">
              <h3 className="section-title">Headline for table section</h3>
            </div>
            <div className="w-full overflow-x-auto" data-aos="fade-up" data-aos-duration="1500">
              <table>
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>OW</th>
                    <th>OD</th>
                    <th>SLR</th>
                    <th>RC</th>
                    <th>Type</th>
                    <th>ECE</th>
                    <th>ECE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>380/70 R 24</td>
                    <td>12.00/1.3 (DC)</td>
                    <td>385</td>
                    <td>1270</td>
                    <td>572</td>
                    <td>3772</td>
                    <td>TL</td>
                    <td>E11-106R- 003606</td>
                  </tr>
                  <tr>
                    <td>380/70 R 24</td>
                    <td>12.00/1.3 (DC)</td>
                    <td>385</td>
                    <td>1270</td>
                    <td>572</td>
                    <td>3772</td>
                    <td>TL</td>
                    <td>E11-106R- 003606</td>
                  </tr>
                  <tr>
                    <td>380/70 R 24</td>
                    <td>12.00/1.3 (DC)</td>
                    <td>385</td>
                    <td>1270</td>
                    <td>572</td>
                    <td>3772</td>
                    <td>TL</td>
                    <td>E11-106R- 003606</td>
                  </tr>
                  <tr>
                    <td>380/70 R 24</td>
                    <td>12.00/1.3 (DC)</td>
                    <td>385</td>
                    <td>1270</td>
                    <td>572</td>
                    <td>3772</td>
                    <td>TL</td>
                    <td>E11-106R- 003606</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="box-content-sec">
            <span className="section-heading" data-aos="fade-up" data-aos-duration="200">Warranty Statement</span>
            <div className="section-title-wrapper mb-4 md:mb-8 2xl:mb-10" data-aos="fade-up" data-aos-duration="400">
              <h3 className="section-title">
                Headline for warranty statement goes here
              </h3>
            </div>
            <p data-aos="fade-up" data-aos-duration="600">
              Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
              Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed.
              Curabitur maximus mollis diam, vel varius sapien suscipit eget.
              Cras sollicitudin ligula at volutpat ultrices. Donec vitae mi
              vulputate, suscipit urna in, malesuada nisl.
            </p>
            <p data-aos="fade-up" data-aos-duration="800">
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
            <p data-aos="fade-up" data-aos-duration="1200">
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
            <p data-aos="fade-up" data-aos-duration="1500">
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
          </div>
        </div>
      </section>
      <PageEnd EndPageData={pageData?.end}/>
      <Chatbot/>
      <Footer />
    </>
  );
}
