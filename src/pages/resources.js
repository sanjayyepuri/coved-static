import React from "react";
import { graphql } from "gatsby";
import Resources from "../content/Resources";

const ResourcesPage = () => <Resources />;
export default ResourcesPage;
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