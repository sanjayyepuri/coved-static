import React from "react";
import { graphql } from "gatsby";
import Home from "../content/Home";
import Helmet from "react-helmet"

const IndexPage = () =>{
  return (
    <div>
      <Helmet>
        <title> CovEd </title>
      </Helmet>
      <Home/>
    </div>
  )
}
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
