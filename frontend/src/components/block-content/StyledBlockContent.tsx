import BlockContent from "@sanity/block-content-to-react";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledBlockContent = styled(BlockContent)`
  & a {
    ${tw`text-sageGreen-500`}
  }
`;