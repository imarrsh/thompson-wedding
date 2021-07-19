import * as React from "react";
import { graphql, PageProps } from "gatsby";
import SEO from "../components/seo";
import Gallery from "react-photo-gallery";
import Carousel, { CommonProps, Modal, ModalGateway } from "react-images";
import styled from "styled-components";
import { CustomView } from '../components/photo-viewer'

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

  const [ currentImageIndex, setCurrentImageIndex ] = React.useState(0);
  const [ isViewerOpen, setIsViewerOpen ] = React.useState(false);

  const galleryImages = albums.nodes[0].images.map(image => {
    const { height, width, src, srcSet } = image.asset.fixed;

    return {
      height,
      width,
      src,
      srcSet
    }; 
  });

  const openLightbox = React.useCallback((event, { index }) => {
    setCurrentImageIndex(index);
    setIsViewerOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImageIndex(0);
    setIsViewerOpen(false);
  }

  return (
    <div className="container mx-auto p-4 px-8 max-w-6xl">
      <SEO title="Our Photos" />
      <Gallery photos={galleryImages} direction="column" onClick={openLightbox}/>
      <ModalGateway>
        {isViewerOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImageIndex}
              views={galleryImages.map(image => ({
                ...image,
                source: image.src,
                srcset: image.srcSet,
              }))}
              components={{View: CustomView}}
            />
          </Modal>
        ) : null}
      </ModalGateway>
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
            fixed(width: 1000) {
              ...GatsbySanityImageFixed
            }
          }
        }
      } 
    }
  }
`;
