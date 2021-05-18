import BlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledBlockContent = styled(BlockContent)`
  & a {
    ${tw`text-sageGreen-500`}
  }
  & p {
    ${tw`font-sans my-4 leading-8 font-light`}
  }
`;

