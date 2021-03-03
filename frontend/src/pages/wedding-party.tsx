import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { FeaturedPerson } from "../components/featured-person";
import { hashCode } from "../utils";
import { FeaturedPerson as FeaturedPersonProps } from "../data";

interface WeddingPageProps {
  bridesmaids: {
    nodes: FeaturedPersonProps[]
  }
  groomsmen: {
    nodes: FeaturedPersonProps[]
  }
}

const WeddingParty: FC<PageProps<WeddingPageProps>> = (props) => {

  const {
    data: {
      bridesmaids: { nodes: bridesmaids },
      groomsmen: { nodes: groomsmen}
    },
    pageContext,
  } = props;

  return (
    <Layout>
      <SEO title="Wedding Party" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-auto gap-4">
          <div className="grid grid-cols-1">
            {bridesmaids.map((maid) => 
              <FeaturedPerson key={hashCode(maid.name)} data={maid} />
            )}
          </div>
          <div className="grid grid-cols-1">
            {groomsmen.map(man => 
              <FeaturedPerson key={hashCode(man.name)} data={man} />  
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WeddingParty;

export const query = graphql`
  query FeaturedPeopleQuery {
  bridesmaids: allSanityFeaturedPerson(
    filter: { 
      affiliation: { 
        eq: "bride"
      } 
    },
    sort: {
      order: ASC, fields: ordinal
    }
  ) {
    nodes {
      role
      name
      biography
      image {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
  groomsmen: allSanityFeaturedPerson(
    filter: {
      affiliation: {
        eq: "groom"
      }
    },
    sort: {
      order: ASC, fields: ordinal
    }
  ) {
    nodes {
      role
      name
      biography
      image {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
}
`;