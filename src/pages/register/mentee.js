import React from "react";
import {graphql } from "gatsby";
import RegisterMentee from "../../content/Register/mentee.js";
import Layout from "../../components/Layout";


import { Container } from "@material-ui/core";
const RegisterMenteePage = () => {
    return (
    <Layout>
        <Container>
            <RegisterMentee/>
        </Container>
    </Layout>)
};

export default RegisterMenteePage;
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
