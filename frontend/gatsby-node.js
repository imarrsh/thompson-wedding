/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path");

async function createAccommodationPages({ graphql, actions }) {
  const template = path.resolve(
    './src/templates/AccommodationPage.tsx'
  );

  const { data } = await graphql(`
    query {
      locations: allSanityLocation {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.locations.nodes.forEach((location) => {
    actions.createPage({
      path: `accommodations/${location.slug.current}`,
      component: template,
      context: {
        id: location.id,
        slug: location.slug.current,
      },
    });
  });
}

exports.createPages = async (params) => {
  // create pizza, toppings, slicemacters
  await Promise.all([
    createAccommodationPages(params)
  ]);
};