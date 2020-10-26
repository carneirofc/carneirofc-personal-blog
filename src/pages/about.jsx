import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About Page</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Layout>
  );
};
export default AboutPage;
