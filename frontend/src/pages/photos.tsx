import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import SEO from "../components/seo";
import Gallery from "react-photo-gallery";

type Album = {
  name: string;
  description: string;
  coverImage: { 
    asset: { 
      originalFilename: string;
      fluid: any;
    }
  };
  images: { 
    asset: { 
      originalFilename: string;
      fluid: any;
      fixed: any;
    }
  }[];
};


type AlbumPageProps = {
  albums: {
    nodes: Album[]
  }
};

const Photos = (props: PageProps<AlbumPageProps>): JSX.Element => {
  const {
    data: { 
      albums
    }
  } = props;

  const galleryImages = albums.nodes[0].images.map(image => {
    debugger
    return image.asset.fixed; 
  });

  return (
    <div className="container mx-auto p-4 px-8 max-w-5xl">
      <SEO title="Our Photos" />
      <Gallery photos={galleryImages} direction="column" />
      {
        // albums.nodes.map(a => a.name)
      }
    </div>
  );
};

export default Photos;

export const query = graphql`
  query AlbumsQuery {
    albums: allSanityAlbum(
      filter: { 
        name: {
          nin: ["Our Story"] # grab everything but the venue 
        }
      }
    ) {
      nodes {
        name,
        description,
        coverImage {
          asset {
            fluid(maxWidth: 1200) { 
              ...GatsbySanityImageFluid
            }
          }
        },
        images {
          asset {
            fluid(maxWidth: 1200) { 
              ...GatsbySanityImageFluid
            }
            fixed {
              ...GatsbySanityImageFixed
            }
          }
        }
      } 
    }
  }
`;
