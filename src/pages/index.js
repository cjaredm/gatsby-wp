import React from "react";
import xss from "xss";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage(props) {
  return (
    <Layout>
      <SEO title="Home" />

      <div
        dangerouslySetInnerHTML={{
          __html: xss(props.data.wordpressPage.content, {
            onIgnoreTag: function(tag, html, options) {
              if (tag.substr(0, 6) === "figure") {
                // do not filter its attributes
                return html;
              }
            },
          }),
        }}
      />
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query homepage {
    wordpressPage(path: { eq: "/" }) {
      title
      excerpt
      content
    }
  }
`;
