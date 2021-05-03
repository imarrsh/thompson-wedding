import clsx from "clsx";
import { Link } from "gatsby";
import React, { FC, useRef } from "react";
import { usePageYOffset } from "../hooks/usePageYOffset";
import { Navigation } from './navigation';
import { Heading } from "./typography";

type HeaderProps = {
  siteTitle?: string
}

const Header: FC<HeaderProps> = ({ siteTitle = `` }) => {
  
  const pageYOffset = usePageYOffset();
  const headerRef = useRef<HTMLElement>(null);
  const isPastThreshold = pageYOffset > 15;

  // todo - sticky + transition here seems wonky 🙃
  return (
    <header ref={headerRef} className={clsx('sticky', 'top-0', 'bg-white', 'z-10', {
        ['shadow-md']: isPastThreshold
      })}>
      <div className={clsx('transition-all', 'container', 'mx-auto', 'px-4', 'text-center', {
        ['pt-2 pb-3']: isPastThreshold,
        ['py-4']: !isPastThreshold,
      })}>
        <Heading level={1} size={pageYOffset < 15 ? 'l' : 'm'} fontFamilyStyle="title" classes={clsx(
          "text-sageGreen-500", 
          "transition-all",
          "uppercase"
        )}>
          <Link to="/">
            Kaila & Marshall
          </Link>
        </Heading>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
