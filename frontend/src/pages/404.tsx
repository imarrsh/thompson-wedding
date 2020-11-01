import React, { FC } from "react";
import { PageProps } from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage: FC<PageProps<{}>> = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just found a page that doesn&#39;t exist... such sadness.</p>
  </Layout>
);

export default NotFoundPage;
