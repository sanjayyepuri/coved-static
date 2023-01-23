import React from "react";
import { graphql } from "gatsby";
import Donate from "../content/Donate";

const DonatePage = () => <Donate />;
export default DonatePage;
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
