import React from "react";
import { graphql } from "gatsby";
import ContactUs from "../content/ContactUs";

const ContactUsPage = () => <ContactUs />;

export default ContactUsPage;
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



