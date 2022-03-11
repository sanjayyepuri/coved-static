import React from "react";
import { graphql } from "gatsby";
import ABCMentorRegister from "../content/Programs/mentorregistration";

const ABCMentorRegisterPage = () => <ABCMentorRegister />;
export default ABCMentorRegisterPage;
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
