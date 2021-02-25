import React, { FC } from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Accommodations : FC<PageProps<{}>> = () => (
  <Layout>
    <SEO title="Accommodations" />
    <p className="font-sans">
      Add a list of accommodations for our out of town guests
    </p>
    <ul className="mt-4">
      <li>Hotels</li>
      <li>Restaurants</li>
      <li>Stuff to see?</li>
    </ul>
  </Layout>
);

export default Accommodations;
