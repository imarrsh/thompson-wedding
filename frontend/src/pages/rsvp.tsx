import React from "react";
import { graphql, PageProps } from "gatsby";
import SEO from "../components/seo";
import { SquigglyUpsidedownHeart } from "../components/icons/ornaments";
import { Paragraph } from "../components/typography";
import type { GiftRegistry } from "../data";
import { Button } from "../components/buttons";
import { Link } from "../components/navigation/Link";

interface RsvpPageProps {
  registries: {
    // just borrowing this type
    nodes: GiftRegistry[]
  }
}

const Rsvp = (props: PageProps<RsvpPageProps>) => {
  
  const {
    data: {
      registries: { nodes: sites }
    }
  } = props;

  const site = sites[0];

  return (
    <section className="p4 mx-auto">
      <div className="container mx-auto px-4 max-w-4xl flex-grow">
        <SEO title="RSVP" />
        <SquigglyUpsidedownHeart className="h-24 w-24 text-sageGreen-500 fill-current mx-auto"/>
        <Paragraph textAlign="center">We're so excited for you to join us! Follow the link below to RSVP via the Wedding Wire RSVP page.</Paragraph>
        <Paragraph textAlign="center">For those bringing a guest, please Accept or Deny their RSVP. If Accepting, include their first and last name in the note section as we will need their name. Thank you!</Paragraph>
        <div className="text-center">
          <Link href={site.url}>
            <Button variant="fill">RSVP at {site.name}</Button>
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default Rsvp;

export const query = graphql`
  query SingleRegistryQuery {
    registries: allSanityRegistry (
      filter: { 
        name: {
          in: ["Wedding Wire"] # grab wedding wire only - its not really a registry entry, but... 
        }
      }
    ) {
      nodes {
        url
        name
      }
    }
  }
`;