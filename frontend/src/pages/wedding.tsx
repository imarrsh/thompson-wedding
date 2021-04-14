import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SquigglyExoticCat } from "../components/icons/ornaments";

const IndexPage: FC<PageProps<{}>> = () => (
  <Layout>
    <SEO title="The Wedding" />
    <div className="p-4">
      <SquigglyExoticCat className="h-24 w-24 text-sageGreen-500 fill-current mx-auto"/>
      <div className="container max-w-4xl mx-auto">
        <p className="text-2xl text-center">
          Saturday, October 9, 2021<br/>
          5:00pm-11:00pm
        </p>
        <h2 className="text-3xl text-center">Ceremony and Reception</h2>
        <p className="text-center">
          <strong>Perry's Landing</strong><br />
          5380 Henderson Road<br />
          Hephzibah, GA 30815
        </p>
        <div>
          <br/>
          ...pics...
          <br/><br/>
        </div>
        <article className="">
          <h3 className="text-2xl text-center">Details</h3>
          <ul>
            <li>Join us for our ceremony and then good food, an open bar and dancing to follow.</li>
            <li>Attire: Cocktail</li>
            <li>Free Parking</li>
            <li>Please use our wedding hashtag when posting pictures on social media: #toastingthethompsons</li>
            <li>Perry's landing is an outdoor venue, but no worries on inclement weather as there will be access to a tent and barn.</li>
          </ul>
        </article>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

// export const query = graphql`
//   query WeddingPageQuery {

//   }
// `;
