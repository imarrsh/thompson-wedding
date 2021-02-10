import React, { FC } from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const OurStory: FC<PageProps<{}>> = () => (
  <Layout>
    <SEO title="Registry" />
    <h1 className="font-headings text-6xl text-center">Registry</h1>
    <p>Links to our registries will go here</p>
    <ul className="mt-4">
      <li>Bed Bath Beyond</li>
      <li>Amazon</li>
      <li>Crate and Barrel</li>
      <li>Honeymoon fund?</li>
    </ul>
  </Layout>
);

export default OurStory;
