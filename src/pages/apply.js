import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";

import SEO from "../components/seo";
import Layout from "../containers/layout";

const ApplyPage = (props) => {
  return (
    <Layout noheader>
      <SEO
        title="Apply for a VA Loan | VA Loan Specialist | VA Loans for Vets"
        description="Apply for a VA Loan. Complete our comprehensive VA Loan application that will provide us detailed information to speed up the processing of mortgage applications."
        slug="apply"
      />
      <Container>
        <div class="blog-content prose proxe-xl max-w-6xl my-20">
          <div>
            <h1 className="text-6xl">Start the Process – Refinance or Apply for a New VA Loan</h1>
            <p>
              By clicking "Start Application" below, you will be directed to a new site, affiliated
              with Jimmy Vercellino and Goldwater Bank, that will allow us to begin the mortgage
              loan application process.
            </p>
            <p>
              <a
                href="https://goldwaterbank.mymortgage-online.com/?loanapp&amp;siteid=4884527613&amp;lar=wstar_jvercellin&amp;workFlowId=29714"
                rel="noopener noreferrer"
                target="_blank"
                class="in-button in-button-theme"
              >
                <span>Start Application</span>
              </a>
            </p>
          </div>
          <div class="in-blog-metabottom mt-30"></div>
        </div>
      </Container>
    </Layout>
  );
};

export default ApplyPage;
