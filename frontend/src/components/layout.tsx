/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import { Footer } from "./footer";

const Layout: FC = ({ children, ...rest }) => {

  console.log(rest);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
