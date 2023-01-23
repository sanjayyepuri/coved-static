import React from "react";
import {graphql } from "gatsby";
import Register from "../content/Register";
import Layout from "../components/Layout";

import { Container } from "@material-ui/core";
const RegisterPage = () => {
    return (
    <Layout>
        <Container>
            <Register/>
        </Container>
    </Layout>)
};

export default RegisterPage;
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
