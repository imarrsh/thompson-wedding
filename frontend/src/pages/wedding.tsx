import React, { FC } from "react";
import { PageProps } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SquigglyExoticCat } from "../components/icons/ornaments";

const IndexPage: FC<PageProps<{}>> = () => (
  <Layout>
    <SEO title="The Wedding" />
    <div className="p-4">
      <SquigglyExoticCat className="h-24 w-24 text-sageGreen-500 fill-current mx-auto"/>
      <div className="container max-w-lg mx-auto">
        <h3 className="text-2xl mt-4">Things this page needs:</h3>
        <h4 className="text-2xl mt-4">Ceremony and Reception (location)</h4>
        <ul>
          <li>Time</li>
          <li>
            Attire:
            <ul>
              <li className="list-disc">
                Cocktail, Outdoor
              </li>
            </ul>
          </li>
          <li>Children under 5?</li>
          <li>Good food, open bar, dancing to follow</li>
          <li>Free parking</li>
          <li>Take pictures, hashtag - #turningthompson</li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
