import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, GatsbyImageProps, IGatsbyImageData } from "gatsby-plugin-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

type ImageProps = {
  /**
   * Name of an image file from the images directory
   */
  fileName?: string;
  fallback?: string;
  image?: IGatsbyImageData;
  gatsbyImgProps?: Omit<GatsbyImageProps, 'alt' | 'image'>; // omit alt because our img wrapper will provide these
  alt?: string;
}

/**
 * Fetches an image file by file name
 */
const Image: FC<ImageProps> = ({
  fileName = '',
  fallback = 'avatar.jpg',
  image,
  gatsbyImgProps = {},
  alt= ""
}) => {
  // if we already have a fluid img, perhaps from another query, return an Img with it.
  if (image) {
    return <GatsbyImage image={image} {...gatsbyImgProps} alt={alt || fileName}/>;
  }

  const allImages = useStaticQuery(graphql`{
    allFile {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
        publicURL
        extension
        ext
        name
      }
    }
  }
`);

  // naive shortcut to return an svg before attempting going thru images
  if (fileName.endsWith('.svg')) {
    const { publicURL, name } = allImages.allFile.nodes
      .filter((n: any) => n.childImageSharp === null && n.extension === 'svg')
      .find((n: any) => fileName === `${n.name}${n.ext}`);
    
    return <img src={publicURL} alt={name} />;
  }

  const images = allImages.allFile.nodes
    .filter((n: any) => n.childImageSharp !== null)
    .map((n: any) => n.childImageSharp.gatsbyImageData);

  let imageToRender = images.find((image: any) => image.originalName === fileName);

  // didn't find it, try the fallback
  if (!imageToRender) {
    imageToRender = images.find((image: any) => image.originalName === fallback);
  }

  return <GatsbyImage image={imageToRender} {...gatsbyImgProps} alt={alt || fileName}/>;
};

export default Image;
