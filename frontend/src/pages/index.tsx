import React, { FC } from "react";
import { PageProps, Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image/image";
import SEO from "../components/seo";

const IndexPage: FC<PageProps<{}>> = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mx-auto px-4">
      <Image fileName="KG1A9349.jpg" />
      <article className="text-center">

        <h3 className="font-headings text-6xl my-8">Are getting married</h3>
        <h2 className="text-4xl my-8 font-sans">October 9<sup>th</sup>, 2021</h2>
        
        <h2 className="text-2xl my-8 font-sans">Perry's Landing</h2>
        <a href="https://g.page/PerrysLandingWeddingandEvents" target="_blank" rel="noopener noreferrer">
          5380 Henderson Rd,<br/>
          Hephzibah, GA 308015
        </a>

      </article>

    </div>
  </Layout>
);

export default IndexPage;
