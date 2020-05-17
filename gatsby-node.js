const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const blogPostTemplate = path.resolve("src/templates/blog-post.js");
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const blogsData = await graphql(`
    {
      allSanityPost(sort: { order: DESC, fields: publishedDate }) {
        nodes {
          _id
          slug {
            current
          }
          topic {
            title
          }
        }
      }
    }
  `);

  if (blogsData.errors) {
    throw blogsData.errors;
  }
  // Create blog post pages.
  const blogs = blogsData.data.allSanityPost.nodes;

  blogs.forEach((blog) => {
    actions.createPage({
      // Path for this page — required
      path: `/blog/${blog.topic.title}/${blog.slug.current}`,
      component: blogPostTemplate,
      context: {
        // Add optional context data to be inserted
        // as props into the page component..
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
        id: blog._id,
      },
    });
  });
};
