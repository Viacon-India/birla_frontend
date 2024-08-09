import React from "react";

export default function NewAbout() {
  return (
    <>
      <section class="about-sec flex items-center mt-[120px] relative">
        <div class="about-description-sec w-[35%] pl-[100px]">
          <svg
            class="absolute left-0 top-0 -z-1"
            width="211"
            height="240"
            viewBox="0 0 211 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.3799 0.933924C77.413 0.685517 77.6249 0.5 77.8755 0.5H119.858C120.16 0.5 120.393 0.766337 120.353 1.06608L104.62 119.066C104.587 119.314 104.375 119.5 104.124 119.5H62.1422C61.8398 119.5 61.6066 119.234 61.6466 118.934L77.3799 0.933924Z"
              stroke="#F5811E"
            />
            <path
              d="M16.3799 120.934C16.413 120.686 16.6249 120.5 16.8755 120.5H58.8578C59.1602 120.5 59.3934 120.766 59.3534 121.066L43.6201 239.066C43.587 239.314 43.3751 239.5 43.1245 239.5H1.14218C0.839789 239.5 0.606603 239.234 0.646569 238.934L16.3799 120.934Z"
              stroke="#F5811E"
            />
            <path
              d="M167.38 0.933924C167.413 0.685517 167.625 0.5 167.876 0.5H209.858C210.16 0.5 210.393 0.766337 210.353 1.06608L194.62 119.066C194.587 119.314 194.375 119.5 194.124 119.5H152.142C151.84 119.5 151.607 119.234 151.647 118.934L167.38 0.933924Z"
              stroke="#2E3192"
            />
            <path
              d="M106.38 120.934C106.413 120.686 106.625 120.5 106.876 120.5H148.858C149.16 120.5 149.393 120.766 149.353 121.066L133.62 239.066C133.587 239.314 133.375 239.5 133.124 239.5H91.1422C90.8398 239.5 90.6066 239.234 90.6466 238.934L106.38 120.934Z"
              stroke="#2E3192"
            />
          </svg>
          <h3 class="section-heading">
            ABOUT Birla tyres <span class="loader-line"></span>
          </h3>
          <h2 class="section-title">
            The journey of the global innovative tyre conglomerate. 
          </h2>
        </div>
        <div class="about-slider-sec w-[65%]">
          <div class="swiper mySwiper-2 relative">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="about-card">
                  <figure class="about-img-part">
                    <img
                      class="w-full h-full object-cover"
                      src="<?php echo get_template_directory_uri(); ?>/images/about-img1.jpg"
                      alt="banner"
                    />
                  </figure>
                  <div class="about-detail-sec">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <mask
                        id="mask0_3741_10938"
                        style="mask-type:alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="60"
                        height="60"
                      >
                        <rect
                          width="60"
                          height="60"
                          fill="url(#pattern0_3741_10938)"
                        />
                      </mask>
                      <g mask="url(#mask0_3741_10938)">
                        <rect width="60" height="60" fill="white" />
                      </g>
                      <defs>
                        <pattern
                          id="pattern0_3741_10938"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlink:href="#image0_3741_10938"
                            transform="scale(0.01)"
                          />
                        </pattern>
                        <image
                          id="image0_3741_10938"
                          width="100"
                          height="100"
                          xlink:href="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                    <h2 class="about-card-title">Legacy of Trust</h2>
                    <p class="about-card-desc">
                      With a rich heritage spanning over three decades, Birla
                      Tyres has built a reputation for reliability and
                      excellence in the tyre industry. Over the past three
                      decades, we have achieved numerous milestones, which is a
                      testament to our commitment to quality and customer focus.
                      We take pride in being a trusted partner for drivers
                      across the country.
                    </p>
                    <a class="read-btn" href="">
                      Read More{" "}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L9 1M9 1H2.5M9 1V7.5"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="about-card">
                  <figure class="about-img-part">
                    <img
                      class="w-full h-full object-cover"
                      src="<?php echo get_template_directory_uri(); ?>/images/about-img2.jpg"
                      alt="banner"
                    />
                  </figure>
                  <div class="about-detail-sec">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <mask
                        id="mask0_3741_11014"
                        style="mask-type:alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="60"
                        height="60"
                      >
                        <rect
                          width="60"
                          height="60"
                          fill="url(#pattern0_3741_11014)"
                        />
                      </mask>
                      <g mask="url(#mask0_3741_11014)">
                        <rect x="0.5" width="60" height="60" fill="white" />
                      </g>
                      <defs>
                        <pattern
                          id="pattern0_3741_11014"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlink:href="#image0_3741_11014"
                            transform="scale(0.01)"
                          />
                        </pattern>
                        <image
                          id="image0_3741_11014"
                          width="100"
                          height="100"
                          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEgElEQVR4nO2d24tVdRTHdxeaCnqoSQl6KESJCnrrIYNkjLACGx/s8pYWKPWYo/0L+qgoY1AvaUFPZS+iD4GXIZLwfuniKHSlFLRI0C5+YnF+4ox7zzkzc9bvt9Y5rg8cGM6Zw/5+Wfvs/d2/39q/XVVBEARBEASBY4B5wFvAx8BB4Dzwd3qdT+99lP5nnrXevgS4DXgN2A9cZfpcTd95FbjV2kdfADwLnKJ7TgBDBXW/CPxIeWSbL+QwdCcwmkHwZmBAXXBdv0UxrvGDtpn7ga8yCv4SGFQVXfdginYx5PCSm+M5i4IxmoepnL+Mpl/KgIr4uhdTtEzkOGd0YouK+LoXUzQMLJphpNVksUoVJvsxReM646Sh/uPa1ykY0614ueiz5mW1avRBQcasDQB71KrRywVJY1NW546JiIaHoyDwNn5YHQVpjcx6YVsUBA7hh6+jIK05DC/8HgWBK/jhchQkCuIu9sYhy1lB4qTurCARe50VRLpDvLBq1kbqvkzpl6GTh276gqSiSKuONXu0ipE8mdIPw+/L1arRJxNUJRobpuJoTFDVi/KM4blkqKs9qnknM0XLxBYD7ZtUxNe9mKJlYiC15pRiLNqAOhdlMDUd5OYYcJ/KntTswxRtM4OZfyljOYuRPJiSw9BAhnOKhIZN0WzdXWGGlA5hEm0X6e0y7ZFbAqQLnfLINp+vciLXCNI3BeydxQ078p3lccNOJqRVR7pDgO0yB57mU66k17n03jYZKNQcmwqCIAiCIAiCIAiCIAiCIAiCwB3AQmA8w4TUaeApa389B3CEfByuvAAsAc6mPeWlyiHAfPIz34PROcDFCaL+BB6onAGMFCjIGg9GtzYIG62cAewrUJC91iYfB/5pEPYv8ETlBFo9ZqIpN7KNOZZGd7cR90XlBGAl5VhhZXLZNMQNVw4APqMcn1oYvAP4dhriTpdYDrYdwF3AX5TjEnB35TixjBQVdwMSwynP0qpwzL0wA3GmMRj4gPK8bx1zO2ESg2m1v/5KeX6TWwRLGHxsipjbCZMYDDyNHQtLGNzVhcDiMRjYgB3rc5sbVhBZNAYD32DHKQ8x100MBhZgzyO9MDBXJAYD67BnrYeY6yIG42Md4v05jOVYnH9UXehkzXMLDSZ24j/Vna+LmGsag4E38cMbXmKuWQwGPscPO3ppDGhYRWxd+x/44aKnmNuJ72RbKlWYrF9uv/bCEQ1D7xQUvEalCvVz3/fYIxoe9RZzTWIwcA/wCXbsAO7t1WdQjapUodnPqsIrd0sqfRe4xXPMtY7BT6a+sdz8JCPMvRJzTUeDaT2bcWdO/doXgRZTnUVHg+Uwkg4nmlfxspbLetUJqYIx18VoMK3VjTRmEs9lWfVHoid+GFE32Oz5wS7XKj6g+bysG8XlaNGfLeNZTDb7vj0dbma6Eut7OS5oJwo7gx/OZjPa/vx5YZrXTK+UEPSck1/JuGjJbnjqGcbDbbTJZwsstN200HpS9saGYnxYvBsxuA7wOvAL8LP8PeGjIAiCIAiCIAiCqpf5H7tzHHWF/0sdAAAAAElFTkSuQmCC"
                        />
                      </defs>
                    </svg>

                    <h2 class="about-card-title">Vast Range of Products</h2>
                    <p class="about-card-desc">
                      Our company is proud to offer a comprehensive tyre
                      portfolio that caters to the diverse and unique needs of
                      our customers. With our extensive range of products,
                      including Truck Bus Bias (TBB) tyres, agricultural tyres,
                      and off-the-road tyres, we are equipped to provide
                      solutions for various applications and industries.
                    </p>
                    <a class="read-btn" href="">
                      Read More{" "}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L9 1M9 1H2.5M9 1V7.5"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="about-card">
                  <figure class="about-img-part">
                    <img
                      class="w-full h-full object-cover"
                      src="<?php echo get_template_directory_uri(); ?>/images/about-img3.jpg"
                      alt="banner"
                    />
                  </figure>
                  <div class="about-detail-sec">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <mask
                        id="mask0_3741_11019"
                        style="mask-type:alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="60"
                        height="60"
                      >
                        <rect
                          width="60"
                          height="60"
                          fill="url(#pattern0_3741_11019)"
                        />
                      </mask>
                      <g mask="url(#mask0_3741_11019)">
                        <rect x="0.5" width="60" height="60" fill="white" />
                      </g>
                      <defs>
                        <pattern
                          id="pattern0_3741_11019"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlink:href="#image0_3741_11019"
                            transform="scale(0.01)"
                          />
                        </pattern>
                        <image
                          id="image0_3741_11019"
                          width="100"
                          height="100"
                          xlink:href="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>

                    <h2 class="about-card-title">
                      Commitment to Quality Excellence
                    </h2>
                    <p class="about-card-desc">
                      Quality is at the core of everything we do. The name
                      “Birla Tyres” is associated with quality and trust in the
                      market, even for customers who have not used our tyres in
                      the past.
                    </p>
                    <a class="read-btn" href="">
                      Read More{" "}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L9 1M9 1H2.5M9 1V7.5"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="about-card">
                  <figure class="about-img-part">
                    <img
                      class="w-full h-full object-cover"
                      src="<?php echo get_template_directory_uri(); ?>/images/about-img4.jpg"
                      alt="banner"
                    />
                  </figure>
                  <div class="about-detail-sec">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <mask
                        id="mask0_3741_11025"
                        style="mask-type:alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="60"
                        height="60"
                      >
                        <rect
                          width="60"
                          height="60"
                          fill="url(#pattern0_3741_11025)"
                        />
                      </mask>
                      <g mask="url(#mask0_3741_11025)">
                        <rect width="60" height="60" fill="white" />
                      </g>
                      <defs>
                        <pattern
                          id="pattern0_3741_11025"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlink:href="#image0_3741_11025"
                            transform="scale(0.01)"
                          />
                        </pattern>
                        <image
                          id="image0_3741_11025"
                          width="100"
                          height="100"
                          xlink:href="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>

                    <h2 class="about-card-title">Customer-Centric Approach</h2>
                    <p class="about-card-desc">
                      Our company is proud to offer a comprehensive tyre
                      portfolio that caters to the diverse and unique needs of
                      our customers. With our extensive range of products,
                      including Truck Bus Bias (TBB) tyres, agricultural tyres,
                      and off-the-road tyres, we are equipped to provide
                      solutions for various applications and industries.
                    </p>
                    <a class="read-btn" href="">
                      Read More{" "}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L9 1M9 1H2.5M9 1V7.5"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-btn">
              <div class="next-btn"></div>
              <div class="prev-btn"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
