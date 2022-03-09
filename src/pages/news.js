import React from "react";
import { graphql } from "gatsby";
import Programs from "../content/News";

const NewsPage = () => <Programs />;
export default NewsPage;
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
