import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "../components/navigation";
import { GiftRegisry } from '../data';
import { Image } from '../components/image';

interface RegistryPageProps {
  registries: {
    nodes: GiftRegisry[]
  }
}

const Registry: FC<PageProps<RegistryPageProps>> = (props) => {
  
  const {
    data: {
      registries: { nodes: registries }
    }
  } = props;

  return (
      <Layout>
        <SEO title="Registry" />
        <div className="container mx-auto py-4 px-4">
          <p>
            We are already blessed with much love, laughter and half a household of furniture!
            Should you wish to honour us with a gift, we hope that our registries at the following
            stores will make it convenient for you to select something that you know we will love 
            and need.
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 grid-cols-1 grid-rows-2 gap-8">
            {registries.map(registry => (
              <li 
                key={registry.name} 
                className="bg-white shadow-lg rounded-lg hover:border-b-4 hover:border-sageGreen-600 transition-colors"
              >
                <Link href={registry.url}>
                  <div className="flex flex-col h-full p-8">
                    <figure className="flex-grow p-4">
                      {registry.image &&
                        <Image fluidImg={registry.image.asset.fluid} gatsbyImgProps={{
                          style: {
                            // position: 'static',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                          },
                          imgStyle: {
                            position: 'static',
                            height: 'auto',
                            width: "auto"
                          }
                        }}/>
                      }
                    </figure>
                    <figcaption className="text-center">
                      See our registry on {registry.name}
                    </figcaption>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
  );
};

export default Registry;

export const query = graphql`
  query RegistryQuery {
    registries: allSanityRegistry {
      nodes {
        url
        name
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
