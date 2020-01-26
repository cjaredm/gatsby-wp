/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 *
 * This is a node file, not frontend javascript, so no import statements.
 * You need to use require() instead.
 */

const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Get all Templates for pages we're creating
  const PostTemplate = path.resolve("./src/templates/post.js");
  const PageTemplate = path.resolve("./src/templates/page.js");

  // Request the data we need from Wordpress
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const Posts = result.data.allWordpressPost.edges;

  // Create pages for posts
  Posts.forEach(post => {
    createPage({
      path: `/post/${post.node.slug}`,
      component: PostTemplate,
      context: {
        id: post.node.wordpress_id,
      },
    });
  });

  const Pages = result.data.allWordpressPage.edges;

  // Create pages for pages
  Pages.forEach(page => {
    createPage({
      path: `/${page.node.slug}`,
      component: PageTemplate,
      context: {
        id: page.node.wordpress_id,
      },
    });
  });
};
