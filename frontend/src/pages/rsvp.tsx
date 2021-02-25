import React, { FC } from "react";
import { PageProps, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Rsvp: FC<PageProps<{}>> = () => (
  <Layout>
    <SEO title="RSVP" />
  </Layout>
);

export default Rsvp;
