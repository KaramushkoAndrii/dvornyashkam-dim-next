"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";
import "./richText.scss";

const RichText = ({ data }) => {
  if (!data) return null;
  console.log(data);

  return (
    <section className="rich-text">
      <BlocksRenderer
        content={data}
        blocks={{
          image: ({ image }) => (
            <div className="rich-text-image-wrapper">
              <Image
                src={image.url}
                alt={image.url}
                width={image.width}
                height={image.height}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                className="rich-text-image"
              />
            </div>
          ),
          link: ({ children, url }) => (
            <Link href={url} target="__blank" className="rich-text-url">
              {children}
            </Link>
          ),
        }}
      />
    </section>
  );
};

export default RichText;
