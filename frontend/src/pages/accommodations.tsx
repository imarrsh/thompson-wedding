import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Location } from '../data/types';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SquigglyLinePeakUp } from "../components/icons/ornaments";

interface AccomodationsPageProps {
  accommodations: {
    nodes: Location[]
  }
}

const Accommodations : FC<PageProps<AccomodationsPageProps>> = (props) => {
  const {
    data: {
      accommodations: { nodes: accommodations }
    }
  } = props;

  return (
    <Layout>
      <SEO title="Accommodations" />
      <div className="p-4">
        <SquigglyLinePeakUp className="h-24 w-24 text-sageGreen-500 fill-current mx-auto"/>
        <p className="font-sans">
          Add a list of accommodations for our out of town guests
        </p>
        <ul className="mt-4">
          {accommodations.map(a => <li key={a.name}>{a.name}</li>)}
        </ul>
      </div>
    </Layout>
  );
};

export default Accommodations;

// todo - maybe this can be a dynamic query
export const query = graphql`
query LocationAccomodationsQuery {
  accommodations: allSanityLocation(
    filter: { 
      category: {
        in: ["lodging"]
      }
    }
  ) {
    nodes {
      name
      address1
      address2
      city
      state
      zipcode
      location {
        lat
        lng
      }
      category
      # image
    }
  }
}`;

