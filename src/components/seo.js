import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, article, imageAlt }) => {
  const seoQuery = graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl: url
          defaultImage: image
          twitterUsername
          imageAlt
        }
      }
    }
  `;
  const { pathname } = useLocation();
  const { site } = useStaticQuery(seoQuery);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    imageAlt,
  };

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={seo.title}
      titleTemplate={titleTemplate}
      defer={false}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* Open Graph SEO */}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {(!article ? true : null) && (
        <meta property="og:type" content="website" />
      )}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.imageAlt && <meta property="og:image:alt" content={seo.imageAlt} />}

      {/* Twitter SEO */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {seo.imageAlt && (
        <meta property="twitter:image:alt" content={seo.imageAlt} />
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

export default SEO;
