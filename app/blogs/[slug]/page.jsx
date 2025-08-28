import { getStrapiMedia } from "@/lib/utils";
import Navbar from "../../../app/components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Image from "next/image";
import BlocksRendererClient from "../../components/BlocksRendererClient";

// --- Fetch Blog Data ---
async function getBlogData(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=image`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.data?.[0] || null;
}

// --- SEO Metadata ---
export async function generateMetadata({ params }) {
  const blog = await getBlogData(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Birla Tyres",
      description: "The blog post you are looking for does not exist.",
    };
  }

  const attrs = blog.attributes;

  return {
    title: attrs.seo_title || attrs.title,
    description: attrs.seo_description || attrs.description,
    keywords: attrs.seo_keywords || "",
    openGraph: {
      title: attrs.seo_title || attrs.title,
      description: attrs.seo_description || attrs.description,
      url: process.env.DOMAIN_NAME + "/blogs/" + attrs.slug,
      siteName: "Birla Tyres",
      images: attrs.image?.data
        ? [
            {
              url: getStrapiMedia(attrs.image.data.attributes?.url),
              width: attrs.image.data.attributes?.width,
              height: attrs.image.data.attributes?.height,
              alt: attrs.image.data.attributes?.alternativeText,
            },
          ]
        : [],
      type: "article",
      publishedTime: attrs.date,
    },
    twitter: {
      card: "summary_large_image",
      title: attrs.seo_title || attrs.title,
      description: attrs.seo_description || attrs.description,
      images: attrs.image?.data
        ? [getStrapiMedia(attrs.image.data.attributes?.url)]
        : [],
    },
    alternates: {
      canonical: process.env.DOMAIN_NAME + "/blogs/" + attrs.slug,
    },
  };
}

// --- Blog Page ---
export default async function BlogDetail({ params }) {
  const blog = await getBlogData(params.slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const { title, description, content, date, image } = blog.attributes;

  return (
    <>
      <Navbar />
      <section className="blog-detail-sec container mx-auto py-[100px]">
        <h1 className="text-3xl font-bold mb-4 lg:w-[65%]">{title}</h1>
        {image?.data && (
          <Image
            src={getStrapiMedia(image.data.attributes.url)}
            width={image.data.attributes.width}
            height={image.data.attributes.height}
            alt={image.data.attributes.alternativeText || title}
            className="w-full mb-6 rounded-[16px]"
          />
        )}
        {date && (
          <p className="text-gray-500 mb-6">
            Date:{" "}
            {new Date(date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        )}
        {description && <p className="text-[16px] mb-6">{description}</p>}
        <div className="w-full lg:w-[70%]">
          <BlocksRendererClient content={content} />
        </div>
      </section>
      <Footer />
    </>
  );
}
