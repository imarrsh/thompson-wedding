import React, { FC, useState } from "react";
import { PageProps, Link } from "gatsby";
import Image from "../components/image/image";
import SEO from "../components/seo";
import { useInterval } from '../hooks/useInterval';
import { Heading, Paragraph } from "../components/typography";

// todo: grab from sanity 
const WEDDING_DATE = new Date('2021-10-09T17:30:00.000-04:00');

  // todo - maybe use a date lib for relative time
function getMessageBasedOnDays(value: number | null): string {
  
  const pluralize = (str: string, amount: number) => {
    const isPlural = amount > 1 || amount === 0 || amount < -1;
    return `${str}${isPlural ? 's': ''}`;
  };

  let message = 'Are getting married';

  if (value !== null) {
    if (value === 0) {
      message = `${message} today!`;
    } else if (value > 0) {
      message = `${message} in ${value} ${pluralize('day', value)}!`;
    } else if (value < 0 ) {
      message = `Got married ${+value} ${pluralize('day', value)} ago!`;
    }
  } else {
    message = `${message}!`;
  }
  
  return message;
};

function getDiffInDays(future: number, now: number): number {
  // ms * seconds in an hour * hours in a day
  return Math.round((future - now) / (1000 * 3600 * 24));
}

const IndexPage: FC<PageProps<{}>> = () => {
  
  const [ countdownInDays, setCountdownInDays ] = useState<number>(getDiffInDays(WEDDING_DATE.getTime(), Date.now()));
  
  useInterval(() => {
    setCountdownInDays(getDiffInDays(WEDDING_DATE.getTime(), Date.now()));
  }, 1000);

  return (
    <>
      <SEO title="Welcome" />
      <div className="container mx-auto px-0 sm:px-4">
        <article>
          <Image fileName="KG1A9281.jpg"/>
          <section className="max-w-3xl mx-auto py-8 px-4 sm:px-0">
            <Heading level={2} fontFamilyStyle="sans" size="m">
              {getMessageBasedOnDays(countdownInDays)}
            </Heading>
            <Paragraph>
              Welcome to our wedding website and thank you for choosing to celebrate our special day with us!
              Please explore our site to learn more about our wedding details, wedding party, registry information, local accommodations and things to do in and around Augusta, Ga.
            </Paragraph>
            
            <Paragraph>
              We are so exited to celebrate this day with you and look forward to all the special memories we will make.
            </Paragraph>
          </section>
        </article>

      </div>
    </>
  );
};

export default IndexPage;
