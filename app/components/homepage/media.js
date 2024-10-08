import React from "react";
import { useState, useEffect } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import GradualSpacing from "@/components/GradualSpacing";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Media({ Heading = "", Title = "" }) {
  const [pageData, setPageData] = useState([]);
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };
  useEffect(() => {
    fetch(
      getStrapiMedia(
        "/api/media-presences?sort[0]=date:desc&fields[0]=title&fields[1]=description&fields[2]=date&fields[3]=link&populate[image][fields][0]=name&populate[image][fields][1]=width&populate[image][fields][2]=height&populate[image][fields][3]=url&populate[image][fields][4]=alternativeText&pagination[pageSize]=3&pagination[page]=1"
      )
    )
      .then((res) => res.json())
      .then((page) => {
        setPageData(page);
      });
    AOS.init();
  }, [Heading]);
  return (
    <section className="media-sec sec-gap">
      <div className="container mx-auto overflow-hidden">
        <div className="upper-title-sec">
          {Heading && <span className="section-heading">{Heading}</span>}
          {Title && (
            <div className="section-title-wrapper">
              <GradualSpacing className="section-title" text={Title} />
            </div>
          )}
          {pageData?.data && pageData.data.length > 0 && (
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 2xl:mt-10">
              {pageData.data.map(
                (media) =>
                  media.attributes?.link && (
                    <div
                      key={media.id}
                      class="media-card"
                      data-aos="fade-right"
                      data-aos-duration="1500"
                    >
                      {media.attributes.image?.data && (
                        <figure>
                          <Link target="_blank" href={media.attributes.link}>
                            <Image
                              className="media-card-image"
                              src={getStrapiMedia(
                                media.attributes.image.data.attributes.url
                              )}
                              width={
                                media.attributes.image.data.attributes.width
                              }
                              height={
                                media.attributes.image.data.attributes.height
                              }
                              alt={
                                media.attributes.image.data.attributes
                                  .alternativeText
                              }
                            />
                          </Link>
                          <span></span>
                        </figure>
                      )}
                      <div className="media-card-detail">
                        <div className="flex justify-between items-center mb-3">
                          <span className="card-cat">Media</span>
                          {media.attributes?.date &&
                          <span className="card-date">{formatDate(media.attributes.date)}</span>
                        }
                        </div>
                        <h2 className="media-title">
                          <Link target="_blank" href={media.attributes.link}>
                            {media.attributes?.title}
                          </Link>
                        </h2>
                        {media.attributes?.description && (
                          <p className="media-detail">
                            {media.attributes.description}
                          </p>
                        )}
                        <Link
                          target="_blank"
                          href={media.attributes.link}
                          className="primary-btn w-fit !px-6 flip-animate-2"
                        >
                          <span data-hover="Read More">Read More</span>
                        </Link>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
      <div className="media-sec-marker"></div>
    </section>
  );
}
