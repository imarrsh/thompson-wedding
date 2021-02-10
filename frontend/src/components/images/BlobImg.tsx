import styled from 'styled-components';

const getRandomIntInRange = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomBorderRadius = (): number => getRandomIntInRange(120, 150);

type BlobImgProps = {
  radii?: {
    tl: number;
    tr: number;
    br: number;
    bl: number;
  }
};

export const BlobImg = styled.img<BlobImgProps>(({
  radii = {
    tl: getRandomBorderRadius(),
    tr: getRandomBorderRadius(),
    br: getRandomBorderRadius(),
    bl: getRandomBorderRadius(),
  },
  ...props
}) => {
  return `
    border-top-left-radius: ${radii.tl}px;
    border-top-right-radius: ${radii.tr}px;
    border-bottom-left-radius: ${radii.br}px;
    border-bottom-right-radius: ${radii.bl}px;
  `;
});