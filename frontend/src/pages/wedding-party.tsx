import React, { FC } from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const OurStory: FC<PageProps<{}>> = () => (
  <Layout>
    <SEO title="Wedding Party" />
    <h1 className="font-headings text-6xl text-center">Wedding Party</h1>
  </Layout>
);

export default OurStory;
