import React, { FC } from "react";
import { BlobImg } from "../images/BlobImg";
import { 
  SecondaryHeading,
  Body1,
} from "../typography";

type FeaturedPersonProps = {
  data:{
    name?: string;
    role?: string;
    bio?: string;
    imgUrl?: string;
  }
}

export const FeaturedPerson: FC<FeaturedPersonProps> = ({ 
  data: {
    name = 'Name', 
    bio = 'A short bio', 
    role = 'Role', 
    imgUrl = 'https://picsum.photos/300',
  }
}) => {
  return (
    <figure className="flex flex-col justify-center px-8">
      <BlobImg src={imgUrl} className="w-48 h-48 mx-auto" alt={`${name}, ${role}`}/>
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