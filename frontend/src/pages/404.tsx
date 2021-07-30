import React, { FC } from "react";
import { PageProps } from 'gatsby';
import SEO from "../components/seo";
import { Heading, Paragraph } from "../components/typography";
import { Image } from "../components/image"
import styled from "styled-components";

const NotFoundPage: FC<PageProps<{}>> = () => (
  <div className="mx-auto max-w-4xl text-center flex flex-col justify-center">
    <SEO title="404: Not found" />
    <section>
      <Heading fontFamilyStyle="sans" classes="text-sageGreen-400" size="xxxl">
        <Donut/><Donut/><Donut/>PS
      </Heading>
      <Paragraph textAlign="center">(404: Not Found) You just found a page that doesn't exist!</Paragraph>
    </section>
  </div>
);

function Donut() {
  return (
    <DonutContainer>
      <Image fileName={"donut-sprinkles.svg"} />
    </DonutContainer>
  )
}

const DonutContainer = styled.div`
  width: 100px; 
  height: 100px; 
  display: inline-block;
  &:not(:last-of-type) {
    margin-right: 8px;
  }
`

export default NotFoundPage;
