import clsx from 'clsx';
import React, { FC } from 'react';

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

  return <a 
    className={clsx(className)} 
    href={href}
    {...props}
    target={target} 
    rel={rel}> 
      {children}
  </a>;
};

