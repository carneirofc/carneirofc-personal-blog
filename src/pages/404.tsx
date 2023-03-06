import React from "react";

import { Layout, GlobalHead } from "../components";

export const Head = () => {
  return <GlobalHead title="404: Not found" description={""} />;
};

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p> Sorry 😔, we couldn't find what you were looking for.</p>
  </Layout>
);

export default NotFoundPage;
