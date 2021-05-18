import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import SEO from "../components/seo";
import { SquigglyExoticCat } from "../components/icons/ornaments";
import { Image } from '../components/image';
import clsx from "clsx";
import { Heading, Paragraph } from "../components/typography";
import { MapLinkedAddress } from "../components/map-linked-address";
import type { Location } from "../data";

type WeddingDetail = {
  img: string;
  title: string;
  description: string;
}

const weddingDetails = [{
    img: "attire.svg",
    title: "Attire: Cocktail",
    description: "Join us in our celebration by getting a little dressed up!"
  },
  {
    img: "parking.svg",
    title: "Free Parking",
    description: "Parking will be available to the right upon arriving to the\u00A0venue."
  },
  {
    img: "hashtag.svg",
    title: "#toastingthethompsons",
    description: "Please use our wedding hashtag when posting pictures on social media."
  },
  {
    img: "weather.svg",
    title: "Weather",
    description: "Perry's Landing is an outdoor venue, but no worries if there is inclement weather \u2014 there will be access to a tent and\u00A0barn."
}];

type WeddingPageProps = {
  locations: {
    nodes: Location[]
  }
}

const IndexPage: FC<PageProps<WeddingPageProps>> = (props) => {
  
  const {
    data: {
      locations: { nodes: locations }
    }
  } = props;

  const venue = locations[0];
  console.log(venue);

  return (
    <div className="p-4">
      <SEO title="The Wedding" />
      <SquigglyExoticCat className="h-24 w-24 text-sageGreen-500 fill-current mx-auto"/>
      <div className="container max-w-4xl mx-auto">
        {/* <div>
          photos
        </div> */}
        <CardBase>
          <div className="flex">
            <div className="flex-grow">
              <Heading level={3} size="xl" fontFamilyStyle="script" classes="mb-4">Ceremony and Reception</Heading>
              <p className="text-2xl mb-4">
                Saturday, October 9, 2021<br/>
                5:00 pm &ndash; 11:00 pm
              </p>
              <MapLinkedAddress name={venue.name} location={venue} />
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
            {weddingDetails.map(
              detail => <WeddingDetailGridItem key={detail.title} data={detail} />
            )}
          </ul>
        </article>
      </div>
    </div>
  );
};

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

type WeddingDetailProps = {
  data: WeddingDetail;
}

const WeddingDetailGridItem: FC<WeddingDetailProps> = ({data}) => (
  <li>
    <figure className="flex justify-center">
      <div className="w-16 h-16 flex flex-end">
        <Image fileName={data.img} />
      </div>
    </figure>
    <figcaption className="text-center">
      <h3 className="text-xl mt-2">{data.title}</h3>
      <Paragraph spacing={4}>{data.description}</Paragraph>
    </figcaption>
  </li>
);

export const query = graphql`
query VenueQuery {
  locations: allSanityLocation(
    filter: { 
      category: {
        in: ["venue"] # grab everything but the venue 
      }
    }
  ) {
    nodes {
      name
      address1
      address2
      city
      state
      zipcode
      url
      location {
        lat
        lng
      }
      category
      image {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
}`;