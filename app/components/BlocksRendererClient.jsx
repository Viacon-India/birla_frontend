"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

export default function BlocksRendererClient({ content }) {
  if (!content) return null;

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className="text-[#4F5662] text-[14px] md:text-[15px] 2xl:text-[16px] pb-4 md:pb-6">
            {children}
          </p>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1>{children}</h1>;
            case 2:
              return <h2 className="text-[#000000] text-[32px]">{children}</h2>;
            case 3:
              return <h3 className="text-[#000000] text-[28px]">{children}</h3>;
            case 4:
              return <h4 className="text-[#000000] text-[24px]">{children}</h4>;
            case 5:
              return <h5>{children}</h5>;
            case 6:
              return <h6>{children}</h6>;
            default:
              return <h1>{children}</h1>;
          }
        },
        list: ({ children, format }) =>
          format === "ordered" ? (
            <ol className="list-decimal mt-4 md:mt-6 2xl:mt-10 pl-4">
              {children}
            </ol>
          ) : (
            <ul className="list-disc mt-4 pl-6 pb-4 md:pb-6">{children}</ul>
          ),
        "list-item": ({ children }) => (
          <li className="text-[14px] md:text-[15px] 2xl:text-[16px] mt-1 text-[#3D434C] lowercase first-letter:capitalize">
            {children}
          </li>
        ),
        link: ({ children, url }) => <Link href={url}>{children}</Link>,
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  );
}
