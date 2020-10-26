/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Profile from "../Profile";

const LayoutWrapper = styled.section`
  display: flex;
`;

const LayoutMain = styled.main`
  background: #a5c6e6;
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <>
      <aside>
        <Profile />
      </aside>
      <main>{children}</main>
      <footer style={{ marginTop: `2rem` }}>
        © {new Date().getFullYear()}, Built with {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
