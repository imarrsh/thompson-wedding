import React, { FC } from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import type { Location } from '../data';
import SEO from '../components/seo';
import { Image } from '../components/image';
import { StyledBlockContent } from '../components/block-content';
import { SquigglyLinePeakUp } from '../components/icons/ornaments';
import { Heading } from '../components/typography';
import { MapLinkedAddress } from '../components/map-linked-address';
import { Link } from '../components/navigation';


type AccommodationPageProps = {
  data: {
    location: Location
  }
};

const AccommodationPage: FC<AccommodationPageProps> = ({
  children,
  data
}) => {
  const { location } = data;
  const blockSerializers = {
    // @ts-expect-error - defaultSerializers isn't expected on BlockContent
    ...BlockContent.defaultSerializers, 
    ...{
      marks: {
      // @ts-expect-error - defaultSerializers isn't expected on BlockContent
        ...BlockContent.defaultSerializers.marks,
        ...{ 
          link : (props: any) => {
            const { mark, children, ...rest } = props;
            return (<Link href={mark.href} {...rest}>{children}</Link>)
          } 
        }
      }
    }
  }
  return (
    <section className="p-4 max-w-4xl mx-auto">
      <SEO title={`Accommodations: ${location.name}`} />
      <SquigglyLinePeakUp className="h-24 w-24 text-sageGreen-500 fill-current mx-auto"/>
      <div className="flex gap-x-8">
        <article className="flex-1">
          <figure className="max-w-7xl rounded-md overflow-hidden mb-8 shadow-lg">
            <Image
              image={location.image.asset.full}
              gatsbyImgProps={{
                imgStyle: {
                  objectPosition: 'bottom center'
                },
                style: {
                  maxHeight: '24rem',
                  objectPosition: 'bottom center'
                }
              }}
            />
          </figure>
          <Heading level={2} size="m" fontFamilyStyle="sans">{location.name}</Heading>
          <section className="mt-4">
            <MapLinkedAddress location={location} />
          </section>
          {location.description !== null
            ? <StyledBlockContent blocks={location.description} serializers={blockSerializers} />
            : null
          }
        </article>
      </div>
    </section>
  );
};

export default AccommodationPage;

export const query = graphql`
  query($slug: String!) {
    location: sanityLocation(slug: { current: { eq: $slug } }) {
      id
      name
      description: _rawRtDescription
      address1
      address2
      city
      state
      zipcode
      location {
        lat
        lng
      }
      slug {
        current
      }
      image {
        asset {
          full: gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 800)
        }
      }
    }
  }
`;