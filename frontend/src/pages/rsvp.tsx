import React from "react";
import { graphql, PageProps } from "gatsby";
import SEO from "../components/seo";
import { SquigglyUpsidedownHeart } from "../components/icons/ornaments";
import { Paragraph } from "../components/typography";
import type { GiftRegistry } from "../data";
import { Button } from "../components/buttons";
import { Link } from "../components/navigation/Link";

const Rsvp = () => {
  return (
    <section className="p4 mx-auto">
      <div className="container mx-auto px-4 max-w-4xl flex-grow">
        <SEO title="RSVP" />
        <SquigglyUpsidedownHeart className="h-24 w-24 text-sageGreen-500 fill-current mx-auto"/>
        <Paragraph textAlign="center">
          <strong className="font-bold">The deadline to RSVP has passed.</strong>
        </Paragraph>
        <Paragraph>
          If you've RSVP'd, we're so excited for you to join us! 
        </Paragraph>
      </div>
    </section>
  );
};

export default Rsvp;