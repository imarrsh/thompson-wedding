import React, { FC } from "react";
import { PageProps } from 'gatsby';
import SEO from "../components/seo";

const NotFoundPage: FC<PageProps<{}>> = () => (
  <>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just found a page that doesn&#39;t exist... such sadness.</p>
  </>
);

export default NotFoundPage;
