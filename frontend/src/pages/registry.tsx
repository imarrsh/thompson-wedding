import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "../components/navigation";
import { GiftRegisry } from '../data';

interface RegistryPageProps {
  registries: {
    nodes: GiftRegisry[]
  }
}

const OurStory: FC<PageProps<RegistryPageProps>> = (props) => {
  
  const {
    data: {
      registries: { nodes: registries }
    }
  } = props;

  return (
    <Layout>
      <SEO title="Registry" />
      <div className="container mx-auto">

        <p>Links to our registries will go here</p>
        <ul className="mt-4">
          {registries.map(registry => (
            <li key={registry.name}>
              <Link href={registry.url}>{registry.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>);
  };

export default OurStory;

export const query = graphql`
  query RegistryQuery {
    registries: allSanityRegistry {
      nodes {
        url
        name
        image {
          asset {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
