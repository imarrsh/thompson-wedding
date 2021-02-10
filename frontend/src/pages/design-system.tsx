import React, { FC } from "react";
import { PageProps, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { MainHeading, SecondaryHeading, Body1 } from "../components/typography";
import { FeaturedPerson } from "../components/featured-person";
import clsx from "clsx";

const DesignSystem: FC<PageProps<{}>> = () => (
  <Layout>
    <SEO title="Design System" />
    <section className="container mx-auto pt-8 divide-y-2">
      <div className="py-8">
        <h1 className="mb-4">Typography</h1>
        <MainHeading>Main Heading</MainHeading>
        <SecondaryHeading>Secondary Heading</SecondaryHeading>
        <Body1>Body 1</Body1>
      </div>
      <div>
        <h1 className="mb-4">Buttons</h1>
        <Button>RSVP</Button>
        <Button variant="outline">RSVP</Button>
      </div>
      <div>
        <h1 className="mb-4">Other Elements</h1>
        <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
          <FeaturedPerson data={{}}/>
        </div>
      </div>
    </section>
  </Layout>
);

type ButtonProps = {
  variant?: 'fill' | 'outline';
  twClasses?: string;
}

const Button: FC<ButtonProps> = ({
  variant = 'fill',
  twClasses = '',
  children
}) => {
  const variantClasses = variant === 'fill' 
  ? 'bg-green-600 text-gray-50 hover:bg-green-500 transition-colors'
  : 'text-green-600 border-green-600 border hover:bg-green-600 hover:text-gray-50 transition-colors';

  return (
    <button className={clsx("py-2 px-6 rounded-full", variantClasses, twClasses)}>
      {children}
    </button>
  );
};

export default DesignSystem;
