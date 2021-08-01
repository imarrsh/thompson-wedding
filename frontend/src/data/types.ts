import { IGatsbyImageData } from 'gatsby-plugin-image';

export type ImageAsset = {
  asset: {
    full?: IGatsbyImageData;
    fixed?: IGatsbyImageData;
  }
}

export type GiftRegistry = {
  name: string;
  url: string;
  image?: ImageAsset;
};

export type FeaturedPerson = {
  name: string;
  role: string;
  bio: string;
  imgUrl: string;
};

export type Location = {
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
  category: string;
  image: ImageAsset;
  location: GeoPoint;
  url?: string;
  slug: {
    current: string;
  }
  description: any; // PortableText!
}

export type GeoPoint = {
  lat: number;
  lng: number;
}