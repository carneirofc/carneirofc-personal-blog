import React from "react";
import { GlobalHead, Layout } from "../components";

export const Head = () => {
  return <GlobalHead title="About" description={""} />;
};
const AboutPage = () => {
  return (
    <Layout>
      <h1>About Page</h1>
    </Layout>
  );
};
export default AboutPage;
