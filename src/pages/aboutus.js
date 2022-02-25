import React from "react";
import { graphql } from "gatsby";
import AboutUs from "../content/AboutUs";

const AboutUsPage = () => <AboutUs />;

export default AboutUsPage;
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
