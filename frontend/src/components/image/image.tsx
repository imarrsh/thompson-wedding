import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

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
}

/**
 * Fetches an image file by file name
 */
const Image: FC<ImageProps> = ({
  fileName = '',
  fallback = 'avatar.jpg'
}) => {

  const allImages = useStaticQuery(graphql`
    query {
      allFile {
          nodes {
            childImageSharp {
            fluid(maxWidth: 2000) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }  
  `);

  const images = allImages.allFile.nodes.map((n: any) => n.childImageSharp.fluid);
  let fluid = images.find((image: any) => image.originalName === fileName);

  // didnt find it, try the fallback
  if (!fluid) {
    fluid = images.find((image: any) => image.originalName === fallback);
  }

  return <Img fluid={fluid} />;
};

export default Image;
