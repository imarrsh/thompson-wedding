import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Location } from '../data/types';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SquigglyLinePeakUp } from "../components/icons/ornaments";
import { AccommodationSection } from "../components/accommodation-card/AccommodationSection";
import { Paragraph } from "../components/typography";

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

  const lodgingEntries = accommodations.filter(a => Object.is(a.category, 'lodging'));

  return (
    <Layout>
      <SEO title="Accommodations" />
      <section className="p-4">
        <SquigglyLinePeakUp className="h-24 w-24 text-sageGreen-500 fill-current mx-auto"/>
        <Paragraph>
          We know some of you may come from afar and may not be familiar with all the Augusta, Ga has to offer. 
          We've arranged for block rates at some great hotels, but you're more than welcome to explore other offers in the area. 
          We also picked out some places that might pique your interest during your stay - from restuarants to escape rooms, Augusta
          has quite a few gems to offer.
        </Paragraph>
        <AccommodationSection list={lodgingEntries} category="Lodging" />
      </section>
    </Layout>
  );
};

export default Accommodations;

export const query = graphql`
query LocationAccomodationsQuery {
  accommodations: allSanityLocation(
    filter: { 
      category: {
        nin: ["venue"] # grab everything but the venue 
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
      url
      description: _rawRtDescription
      location {
        lat
        lng
      }
      category
      image {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
}`;

