import React, { FC } from 'react';
import { Link } from 'gatsby';
import { MainHeading, SecondaryHeading } from '../typography';

export const Footer: FC = (props) => {
  return (
    <footer className="bg-gradient-to-br from-steelBlue-700 to-steelBlue-800 text-steelBlue-50">
      <div className="container py-4 px-4 mx-auto">
        <MainHeading size="m" className="mb-2">
          Kaila & Marshall
        </MainHeading>
        <p className="mb-2">October 9, 2021</p>
        <p>
          &copy; {new Date().getFullYear()}, Built by the Groom with <a href="https://www.gatsbyjs.com">Gatsby</a>, <a href="hhttps://www.sanity.io/">Sanity</a>, <a href="https://tailwindcss.com/">TailwindCSS</a>. 
          Hosted on <a href="https://www.netlify.com/">Netlify</a>, <a href="https://github.com/imarrsh/thompson-wedding">source on Github</a>. 
          | <Link to="/design-system">Design System</Link>      
        </p>
      </div>
    </footer>
  );
};