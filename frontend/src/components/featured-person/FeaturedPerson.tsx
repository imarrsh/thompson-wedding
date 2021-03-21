import React, { FC } from "react";
import { BlobShape } from "../images/BlobImg";
import { Image } from  "../image";
import { 
  SecondaryHeading,
  Body1,
} from "../typography";

type FeaturedPersonProps = {
  data:{
    name?: string;
    role?: string;
    biography?: string;
    imgUrl?: string;
    image?: any; // todo: type?
  }
}

export const FeaturedPerson: FC<FeaturedPersonProps> = ({ 
  data: {
    name = 'Name', 
    biography: bio = 'A short bio', 
    role = 'Role', 
    imgUrl,
    image,
  }
}) => {
  return (
    <figure className="flex flex-col items-center px-8 md:px4 py-4">
      <BlobShape className="w-48 h-48 md:w-64 md:h-64 shadow-xl">
        {image && <Image fluidImg={image.asset.fluid} fallback="avatar.jpg" />}
      </BlobShape>
      <figcaption className="text-center mt-4">
        <SecondaryHeading>
          {name}, {role}
        </SecondaryHeading>
      </figcaption>
      <blockquote className="w-full text-center mt-2">
        <Body1>{bio}</Body1>
      </blockquote>
    </figure>
  );
};
