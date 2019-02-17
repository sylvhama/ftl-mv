import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import List from "../components/list";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Ce qu'il reste à faire à MisterMV"
      keywords={[`ftl`, `mistermv`]}
    />
    <h2>Ce qu'il reste à faire à MisterMV :</h2>
    <List />
  </Layout>
);

export default IndexPage;
