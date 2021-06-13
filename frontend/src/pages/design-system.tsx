import React, { FC } from "react";
import { PageProps } from "gatsby";

import SEO from "../components/seo";
import { MainHeading, SecondaryHeading, Body1 } from "../components/typography";
import { FeaturedPerson } from "../components/featured-person";
import { Button } from "../components/buttons/Button";

const DesignSystem: FC<PageProps<{}>> = () => (
  <>
    <SEO title="Design System" />
    <section className="container mx-auto pt-8 divide-y-2">
      <div className="py-8">
        <h1 className="mb-4">Typography</h1>
        <MainHeading>Main Heading</MainHeading>
        <SecondaryHeading>Secondary Heading</SecondaryHeading>
        <Body1>Body 1</Body1>
      </div>
      <div>
        <h1 className="mb-4">Buttons</h1>
        <Button>RSVP</Button>
        <Button variant="outline">RSVP</Button>
      </div>
      <div>
        <h1 className="mb-4">Other Elements</h1>
        <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
          <FeaturedPerson data={{}}/>
        </div>
      </div>
    </section>
  </>
);

export default DesignSystem;
