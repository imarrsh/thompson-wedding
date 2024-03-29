import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import SEO from "../components/seo";
import { GiftRegistry } from '../data';
import { RegistryCard } from "../components/registry-card";
import { LeafyCrown } from "../components/icons/ornaments";
import { Paragraph } from "../components/typography";

interface RegistryPageProps {
  registries: {
    nodes: GiftRegistry[]
  }
}

const Registry: FC<PageProps<RegistryPageProps>> = (props) => {
  
  const {
    data: {
      registries: { nodes: registries }
    }
  } = props;

  return (
      <>
        <SEO title="Registry" />
        <div className="container mx-auto p-4 px-8 max-w-5xl">
          <LeafyCrown className="h-24 w-24 mx-auto text-sageGreen-600 fill-current"/>
          <Paragraph>
            We are already blessed with much love, laughter and half a household of furniture!
            Should you wish to honour us with a gift, we hope that our registries at the following
            stores will make it convenient for you to select something that you know we will love 
            and need.
          </Paragraph>
          <ul className="mt-4 grid sm:grid-cols-2 grid-cols-1 grid-rows-2 gap-8">
            {registries.map(registry => 
              <li key={registry.name} >
                <RegistryCard registry={registry}/>
              </li>
            )}
          </ul>
        </div>
      </>
  );
};

export default Registry;

export const query = graphql`
  query RegistryQuery {
    registries: allSanityRegistry (
      filter: { 
        name: {
          nin: ["Wedding Wire"] # grab everything but wedding wire 
        }
      }
    ) {
      nodes {
        url
        name
        image {
          asset {
            full: gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
