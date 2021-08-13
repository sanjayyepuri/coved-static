import React from "react";
import { graphql } from "gatsby";
import Programs from "../content/Programs";

const ProgramPage = () => <Programs />;
export default ProgramPage;
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
