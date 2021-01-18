import React, { FC } from "react";
import { PageProps, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage: FC<PageProps<{}>> = () => (
  <Layout>
    <SEO title="RSVP" />
    <h1 className="font-headings text-6xl text-center">RSVP</h1>
  </Layout>
);

export default IndexPage;
