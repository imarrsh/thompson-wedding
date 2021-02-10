import React, { FC } from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { FeaturedPerson } from "../components/featured-person";
import { bridesmaidsData, groomsmanData } from "../data";

const OurStory: FC<PageProps<{}>> = () => {  
  return (
    <Layout>
      <SEO title="Wedding Party" />
      <div className="container mx-auto">
        <h2 className="font-headings text-6xl text-center mt-4 mb-6">Wedding Party</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-auto gap-4">
          <div className="grid grid-cols-1">
            {bridesmaidsData.map(maid => 
              <FeaturedPerson key={btoa(maid.name)} data={maid} />
            )}
          </div>
          <div className="grid grid-cols-1">
            {groomsmanData.map(man => 
              <FeaturedPerson key={btoa(man.name)} data={man} />  
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurStory;
