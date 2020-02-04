require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Morty's Place",
    description: `Sand, Space and Your Stuff`,
    author: `@cjaredm`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        /* The base URL of the WordPress site without the trailingslash and the protocol. This is required. */
        baseUrl: process.env.WP_BASE_URL,
        protocol: "https",
        hostingWPCOM: false,
        useACF: false,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: `http://${process.env.WP_BASE_URL}`,
        //   replacementUrl: `https://${process.env.WP_BASE_URL}`,
        // },
        includedRoutes: [
          "**/*/*/categories",
          "**/*/*/posts",
          "**/*/*/pages",
          "**/*/*/media",
          "**/*/*/tags",
          "**/*/*/taxonomies",
          "**/*/*/users",
          "**/*/*/menus",
          "/wp-api-menus/**",
        ],
        excludedRoutes: ["/wp/v2/themes/**", "/wp/v2/settings/**"],
        verboseOutput: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
