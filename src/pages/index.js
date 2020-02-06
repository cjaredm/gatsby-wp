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
          __html: props.data.wordpressPage.content
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
