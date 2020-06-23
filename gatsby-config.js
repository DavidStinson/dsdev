/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: "David Stinson",
    defaultTitle: "David Stinson - Software Engineer",
    description: "David Stinson is a software engineer creating in Austin, TX.",
    url: "https://davidstinson.dev",
    image: "/images/social.jpeg",
    imageAlt:
      "Text in image reads: Hey, I'm David Stinson I build quality software and websites in Austin, TX",
    twitterUsername: "@DavidStinson",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
  ],
};
