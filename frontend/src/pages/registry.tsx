import React, { FC } from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "../components/navigation";
import { registryData } from '../data';

const OurStory: FC<PageProps<{}>> = () => (
  <Layout>
    <SEO title="Registry" />
    <div className="container mx-auto">

      <p>Links to our registries will go here</p>
      <ul className="mt-4">
        {registryData.map(registry => (
          <li key={registry.storeName}>
            <Link href={registry.registryUrl}>{registry.storeName}</Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default OurStory;
