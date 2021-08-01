import * as React from "react";
import { graphql, PageProps } from "gatsby";
import SEO from "../components/seo";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { CustomView } from '../components/photo-viewer'
import { IGatsbyImageData } from "gatsby-plugin-image";

type Album = {
  name: string;
  description: string;
  images: { 
    asset: { 
      originalFilename: string;
      full: IGatsbyImageData;
      fixed: IGatsbyImageData;
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
    const { height, width, images } = image.asset.fixed;
    
    // confused at "fallback" here 🙃 - but this is the only src and srcSet properties available
    const { src, srcSet } = images.fallback!;

    return {
      height,
      width,
      src,
      srcSet
    }; 
  });

  const openLightBox = React.useCallback((event, { index }) => {
    setCurrentImageIndex(index);
    setIsViewerOpen(true);
  }, []);

  const closeLightBox = () => {
    setCurrentImageIndex(0);
    setIsViewerOpen(false);
  }

  return (
    <div className="container mx-auto p-4 px-8 max-w-6xl">
      <SEO title="Our Photos" />
      <Gallery photos={galleryImages} direction="column" onClick={openLightBox}/>
      <ModalGateway>
        {isViewerOpen ? (
          <Modal onClose={closeLightBox}>
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
          in: ["Engagement Photos"] # grab everything but the venue 
        }
      }
    ) {
      nodes {
        name,
        description,
        images {
          asset {
            full: gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            fixed: gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 1000)
          }
        }
      } 
    }
  }
`;
