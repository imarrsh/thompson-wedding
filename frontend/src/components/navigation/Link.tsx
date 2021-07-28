import clsx from 'clsx';
import React, { FC } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

export const Link: FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({children, className, href, ...props}) => {

  let {
    target,
    rel,
  } = props;
  
  // going off site?
  const isOffsite = href?.startsWith('http') ?? false;

  if (isOffsite) {
    target = target || '_blank';
    rel = rel || 'noopener';
  }

  const linkProps = {
    className: clsx(className),
    href,
    target,
    rel
  }

  return (
    isOffsite 
      ? <OutboundLink {...linkProps}>{children}</OutboundLink> 
      : <a {...linkProps}>{children}</a>
  );
};

