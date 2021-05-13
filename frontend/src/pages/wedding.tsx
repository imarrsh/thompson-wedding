import React, { FC } from "react";
import { PageProps } from "gatsby";
import SEO from "../components/seo";
import { SquigglyExoticCat } from "../components/icons/ornaments";
import { Image } from '../components/image';
import clsx from "clsx";
import { Heading, Paragraph } from "../components/typography";

const IndexPage: FC<PageProps<{}>> = () => (
  <>
    <SEO title="The Wedding" />
    <div className="p-4">
      <SquigglyExoticCat className="h-24 w-24 text-sageGreen-500 fill-current mx-auto"/>
      <div className="container max-w-4xl mx-auto">
        {/* <div>
          photos
        </div> */}
        <CardBase>
          <div className="flex">
            <div className="flex-grow">
              <Heading level={3} size="xl" fontFamilyStyle="script" classes="mb-4">Ceremony and Reception</Heading>
              <p className="text-2xl">
                Saturday, October 9, 2021<br/>
                5:00 pm &ndash; 11:00 pm
              </p>
              <p className="text-gray-500 mt-4">
                Perry's Landing<br />
                5380 Henderson Road<br />
                Hephzibah, GA 30815
              </p>
            </div>
            <div className="sm-max:hidden">
              <Image fileName="calendar.svg"/>
            </div>
          </div>
          <Paragraph spacing={4}>
            Join us for our ceremony followed by a cocktail hour and reception filled with good food, an open bar and dancing.
          </Paragraph>
        </CardBase>
        <article className="p-8">
          <h3 className="text-6xl text-center font-script mt-8 mb-8">details</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
            <li>
              <figure className="flex items-center w-16 h-16">
                <Image fileName="attire.svg" />
              </figure>
              <figcaption>
                <h3 className="text-xl mt-2">Attire: Cocktail</h3>
                <Paragraph spacing={4}>Join us in our celebration by getting a little dressed up!</Paragraph>
              </figcaption>
            </li>
            <li>
              <figure className="flex items-center w-16 h-16">
                <Image fileName="parking.svg"/>
              </figure>
              <figcaption>
                <h3 className="text-xl mt-2">Free Parking</h3>
                <Paragraph spacing={4}>Parking will be available to the right upon arriving to the&nbsp;venue.</Paragraph>
              </figcaption>
            </li>
            <li>
              <figure className="flex items-center w-16 h-16">
                <Image fileName="hashtag.svg"/>
              </figure>
              <figcaption>
                <h3 className="text-xl mt-2">#toastingthethompsons</h3>
                <Paragraph spacing={4}>
                  Please use our wedding hashtag when posting pictures on social media.
                </Paragraph>
              </figcaption>
            </li>
            <li>
              <figure className="flex items-center w-16 h-16">
                <Image fileName="weather.svg"/>
              </figure>
              <figcaption>
                <h3 className="text-xl mt-2">Weather</h3>
                <Paragraph spacing={4}>Perry's Landing is an outdoor venue, but no worries if there is inclement weather &mdash; there will be access to a tent and&nbsp;barn.</Paragraph>
              </figcaption>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </>
);

export default IndexPage;

type CardBaseProps = {
  className?: string;
}

const CardBase: FC<CardBaseProps> = ({className, children}) => 
  <article className={
    clsx(
      "shadow-lg", 
      "rounded-md", 
      "p-8",
      className
    )}
  >
    {children}
  </article>;
