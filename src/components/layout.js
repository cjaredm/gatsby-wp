/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { incomingEdges } from "../transformers/graphql";
import ThemeProvider from "../theme/ThemeProvider";
import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const {
    site,
    allWordpressWpApiMenusMenusItems: menus,
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allWordpressWpApiMenusMenusItems {
        edges {
          node {
            name
            slug
            items {
              order
              title
              url
              object_slug
            }
          }
        }
      }
    }
  `);

  return (
    <ThemeProvider>
      <>
        <Header
          siteTitle={site.siteMetadata.title}
          nav={
            incomingEdges(menus.edges).find(item => item.name === "Header")
              .items
          }
        />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer />
        </div>
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
