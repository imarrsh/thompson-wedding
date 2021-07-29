import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import SEO from "../components/seo";
import { Image } from '../components/image';
import { SquigglyUpsidedownHeart } from "../components/icons/ornaments";
import { Heading, Paragraph } from "../components/typography";

type OurStoryPageProps = {
  album: {
    images: { 
      asset: { 
        originalFilename: string;
        fluid: any;
      }
    }[]
  }
}

const OurStory: FC<PageProps<OurStoryPageProps>> = (props) => {
  
  const {
    data: {
      album: { images }
    }
  } = props;

  return (
    <>
      <SEO title="Our Story" />
      <div className="p-4">
        <SquigglyUpsidedownHeart className="h-24 w-24 text-sageGreen-500 fill-current mx-auto"/>
        <section className="container mx-auto px-4">
          <div className="mx-auto">
            <div className="flex justify-center">
              {images.sort((a,b) => {
                return a.asset.originalFilename.localeCompare(b.asset.originalFilename);
              }).map(image => 
                <figure 
                  className="rounded-full overflow-hidden w-36 h-36 md:w-64 md:h-64 first:mr-2 shadow-md" 
                  key={image.asset.originalFilename}
                >
                  <Image fluidImg={image.asset.fluid} />
                </figure>
              )}
            </div>
          </div>
          <article className="max-w-xl mx-auto">
            <Heading level={2} fontFamilyStyle="script" size="xl" classes="text-center mt-8">It's a Match!</Heading>
            <Paragraph>
              It all began with an app. You know the one. A fateful spring day in 2014, Kaila and Marshall swiped right on each other. He offered some cheesy lines and she let him think they were clever. Eventually, they agreed to meet in person. A quick meeting at Panera Bread turned into 6 hours as they couldn’t stop talking. Neither seemed to want the night to end. Kaila called a friend on her way home, excited to talk about the guy she just met and the connection they seemed to share.
            </Paragraph>
            <Paragraph>
              By December 2014, they became inseparable. Since then Kaila and Marshall have shared many memories, countless laughs, and new beginnings together. In 2018 they moved to Atlanta, GA for Marshall’s job and soon after adopted two kittens, Oliver and Amelia. They began a new life together in Atlanta, Kaila started a new career, and they both survived a pandemic. 
            </Paragraph>
            <Paragraph>
              After making it through quarantine, Marshall decided it was time to get down on one knee. On September 11, 2020 at Yonah Mountain Vineyard, he popped the question and Kaila said “Yes”! Now, they are planning their wedding for October 9, 2021 and cannot wait to celebrate the occasion with all of their family and friends. 
            </Paragraph>
            <Paragraph weight="font-bold">
              And the rest is history!
            </Paragraph>
          </article>
        </section>
      </div>
    </>
  );
};

export default OurStory;

export const query = graphql`
query OurStoryQuery {
  album: sanityAlbum(name: {eq: "Our Story"}) {
    images {
      asset {
        fluid(maxWidth: 1200) {
          ...GatsbySanityImageFluid
        }
        originalFilename
      }
    }
  }
}`;