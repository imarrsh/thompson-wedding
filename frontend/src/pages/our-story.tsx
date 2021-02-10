import React, { FC } from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import clsx from "clsx";

const OurStory: FC<PageProps<{}>> = () => (
  <Layout>
    <SEO title="Our Story" />
    <h1 className="font-headings text-6xl text-center my-8">Our Story</h1>
    <section className="container mx-auto px-4">
      <div className="flex">
        <div className="flex mx-auto">
          <figure className="rounded-full overflow-hidden mr-4">
            <img src="https://picsum.photos/300" className="object-cover"/>
          </figure>
          <figure className="rounded-full overflow-hidden">
            <img src="https://picsum.photos/300" className="object-cover"/>
          </figure>
        </div>
      </div>
      <article className="max-w-lg mx-auto">
        <h2 className="font-headings text-5xl text-center mt-4">It's a Match!</h2>
        <Paragraph>
          It all began with an app. One fateful day in 2014, they swiped right on each other. 
          He offered some cheesy lines and eventually they exchanged numbers. Eventually, they
          agreed to meet.
        </Paragraph>
        <Paragraph>
          More to come... 
        </Paragraph>
        <Paragraph weight="font-bold">
          And the rest is history. 
        </Paragraph>
      </article>
    </section>
  </Layout>
);

type ParagraphProps = {
  weight?: string;
}

const Paragraph: FC<ParagraphProps> = ({
  weight = 'font-light',
  children
}) => {
  return (
    <p className={clsx('font-sans', 'my-4', weight)}>
      {children}
    </p>
  );
};

export default OurStory;
