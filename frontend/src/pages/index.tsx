import React, { FC } from "react";
import { PageProps, Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage: FC<PageProps<{}>> = () => (
  <Layout>
    <SEO title="Home" />
    <Image />
    <div className="mx-auto px-4">
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </div>
  </Layout>
);

export default IndexPage;
