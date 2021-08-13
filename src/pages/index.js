import React from "react";
import { graphql } from "gatsby";
import Home from "../content/Home";

const IndexPage = () => <Home />;

export default IndexPage;
export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
