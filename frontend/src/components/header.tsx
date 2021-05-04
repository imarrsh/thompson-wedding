import React, { FC, useRef, useState } from "react";
import { Link } from "gatsby";
import clsx from "clsx";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
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
  const [ isMenuOpen, setMenuOpen ] = useState(false);
  console.log(isMenuOpen);
  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  // todo - sticky + transition here seems wonky 🙃
  return (
    <header ref={headerRef} className={clsx('sticky', 'top-0', 'bg-white', 'z-10', {
        ['shadow-md']: isPastThreshold
      })}>
      <div className={clsx(
        'transition-all', 
        'container', 
        'mx-auto', 
        'px-4', 
        'text-center',
        'flex',
        'justify-center',
        'md:block',
        'relative', {
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
        <MenuToggle
          isOpen={isMenuOpen}
          className={clsx(
            "w-8",
            "h-8",
            "text-sageGreen-500",
            "inline",
            "md:hidden",
            "absolute",
            "right-4" 
          )}
          onClick={handleMenuClick}
        />
      </div>
      <Navigation isOpen={isMenuOpen}/>
    </header>
  );
};

type MenuToggleProps = {
  isOpen?: boolean;
} & React.ComponentPropsWithoutRef<'svg'>;

const MenuToggle: FC<MenuToggleProps> = ({
  isOpen = false,
  ...props
}) => {
  return isOpen 
    ? <XIcon {...props}></XIcon>
    : <MenuIcon {...props}></MenuIcon>;
};

export default Header;
