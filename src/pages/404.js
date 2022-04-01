import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <div className="kontainer">
      <div style={{ paddingTop: "6rem", paddingBottom: "6rem" }} className="space-y-10">
        <SEO title="404: Not found" />
        <h1 className="text-5xl">404 Error: Page not found</h1>
        <p>We're sorry, we can't find the page you're looking for...</p>
        <p>
          <a href="/" className="underline text-primary">
            Go to the home page?
          </a>
        </p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
