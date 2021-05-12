import { graphql } from 'gatsby';
import React, { FC } from 'react';

type AccommodationPageProps = {
  data: {
    location: {
      name: string
    }
  }
}

const AccommodationPage: FC<AccommodationPageProps> = ({
  children,
  data
}) => {
  const { location } = data;
  return (
    <div>
      {location.name}
    </div>
  );
};

export default AccommodationPage;

export const query = graphql`
  query($slug: String!) {
    location: sanityLocation(slug: { current: { eq: $slug } }) {
      name
      id
      slug {
        current
      }
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;