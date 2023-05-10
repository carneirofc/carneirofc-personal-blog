/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

type Meta = {
  name?: string;
  content: string;
  property?: string;
};

export type SEOProps = {
  description: string;
  lang?: string;
  meta?: Meta[];
  title: string;
  children?: React.ReactNode;
};

export const SEO = ({ description, lang, meta, title, children }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const _meta: Meta[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata?.author || ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  return (
    <>
      <html lang={lang} />
      <title>{title ?? defaultTitle}</title>
      {_meta.map(({ content, name, property }) => (
        <meta
          key={`${content}_${name}_${property}`}
          name={name ?? ""}
          content={content ?? ""}
          property={property ?? ""}
        />
      ))}
      {meta &&
        meta.map(({ content, name, property }) => (
          <meta
            key={`${content}_${name}_${property}`}
            name={name ?? ""}
            content={content ?? ""}
            property={property ?? ""}
          />
        ))}
      {children}
    </>
  );
};

type GlobalHeadProps = {
  children?: React.ReactNode;
} & SEOProps;
export const GlobalHead = ({ children, ...props }: GlobalHeadProps) => {
  return <SEO {...props}>{children}</SEO>;
};
