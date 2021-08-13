import React from "react";
import { graphql } from "gatsby";
import FAQs from "../content/FAQs";

const FAQsPage = () => <FAQs/>;
export default FAQsPage;
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