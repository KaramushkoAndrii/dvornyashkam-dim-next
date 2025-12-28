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
          heading: ({ children, level }) => {
            switch (level) {
              case 1:
                return <h1 className="h1">{children}</h1>;
              case 2:
                return <h2 className="h2">{children}</h2>;
              case 3:
                return <h3 className="h3">{children}</h3>;
              default:
                return <h3 className="h3">{children}</h3>;
            }
          },
          paragraph: ({ children }) => <p className="p">{children}</p>,
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
