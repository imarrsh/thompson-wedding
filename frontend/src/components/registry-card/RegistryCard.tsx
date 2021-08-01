import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from "../navigation";
import { Image } from '../image';
import { GiftRegistry } from "../../data";
import clsx from 'clsx';
import { ArrowRightIcon } from '@heroicons/react/solid';

// style wrapper to get around gatsby image's empty padding div
const ImageHiddenPaddingDiv = styled.div`
  & div[aria-hidden="true"] {
    display: none;
  }
`;

type RegistryCardProps = {
  registry: GiftRegistry;
}

export const RegistryCard: FC<RegistryCardProps> = ({registry}) => (
  <div
    className={clsx(
      "h-full",
      "bg-white shadow-lg",
      "hover:shadow-xl",
      "rounded-lg",
      "transition-all",
      "overflow-hidden",
      "group",
    )}
  >
    <Link href={registry.url}>
      <div className="flex flex-col h-full">
        <figure className={
          clsx(
            "flex-grow",
            "p-10",
            "md:p-20",
            "flex",
            "flex-col",
            "items-center",
            "justify-center",
            "group-hover:bg-gray-50"
          )}
        >
          {registry.image &&
            <ImageHiddenPaddingDiv>
              <Image image={registry.image.asset.full} gatsbyImgProps={{
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                },
                imgStyle: {
                  position: 'static',
                  height: 'auto'
                }
              }}/>
            </ImageHiddenPaddingDiv>
          }
        </figure>
        <figcaption className="bg-sageGreen-800 text-sageGreen-200 py-6 px-8 group-hover:bg-sageGreen-700">
          See our registry on {registry.name} 
          <ArrowRightIcon className={clsx(
            "h-4",
            "w-4",
            "text-sageGreen-300",
            "inline",
            "ml-1",
            "transform",
            "translate-x-0",
            "group-hover:translate-x-4",
            "group-hover:scale-110",
            "transition-transform"
            )}
          />
        </figcaption>
      </div>
    </Link>
  </div>
);

