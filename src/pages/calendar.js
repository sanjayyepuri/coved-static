import React from "react";
import { graphql } from "gatsby";
import Calendar from "../content/Calendar";

const CalendarPage = () => <Calendar />;
export default CalendarPage;
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
