import React, { FC } from 'react';
import { Link } from 'gatsby';
import { Heading } from '../typography';

export const Footer: FC = (props) => {
  return (
    <footer className="bg-gradient-to-br from-steelBlue-700 to-steelBlue-800 text-steelBlue-50">
      <div className="container py-4 px-4 mx-auto">
        <Heading fontFamilyStyle="title" level={4} size="m" classes="mb-2">
          Kaila & Marshall
        </Heading>
        <p className="mb-2">October 9, 2021</p>
        <p>
          &copy; {new Date().getFullYear()}, Built by the Groom. <a href="https://github.com/imarrsh/thompson-wedding">Source on Github</a>.  
        </p>
      </div>
    </footer>
  );
};