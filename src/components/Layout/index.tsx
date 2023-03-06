/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import GlobalStyles from "../../styles/global";
import { Sidebar } from "../Sidebar";
import { MenuBar } from "../MenuBar";

import * as S from "./styled";
type LayoutProps = {
  children: React.ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
