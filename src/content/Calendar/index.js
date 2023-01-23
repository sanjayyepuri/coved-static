import React from "react";
import styled from "styled-components";
import { FONTS, COLORS } from "../../constants";
import { Link } from 'gatsby';
import Layout from "../../components/Layout";
const CALENDAR = 'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23e7f2fb&ctz=America%2FLos_Angeles&showTitle=0&showPrint=0&showDate=0&showCalendars=0&src=Y19mOHVsYTYyajQwcDRwdXJjNjgydW1qamJtY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23A79B8E'

const TextThemes = {
  fontSize: {
    default: "max(16px,1vw)",
    lg: "max(24px,1.2vw)",
  },
  fontWeight: {
    default: "400",
    lg: "700",
  },
};

const LinkStyled = styled(Link)`
  font-family: ${FONTS.font1};
  font-color: ${COLORS.blue};
  padding-right: 40px;
  font-size: ${(props) => TextThemes.fontSize[props.ver]};
  font-weight: ${(props) => TextThemes.fontWeight[props.ver]};
  text-decoration: none;
  &:link {
    color: ${COLORS.blue};
  }
  &:visited {
    color: ${COLORS.blue};
  }
  &:hover {
    color: ${COLORS.yellow};
    text-decoration: none;
  }
  &:active {
    color: ${COLORS.yellow};
    text-decoration: none;
  }
`;

const Calendar = () => {
  return (

    <Layout>
      <div style={{display: "flex", minWidth:"80vw", minHeight:"100vh", alignContent:"center", justifyContent: "center", justifySelf:"center", justifyItems:"center", flexDirection: "column"}}>
          <div style = {{display: "flex", alignContent:"center", justifyContent: "center"}}> <iframe src={CALENDAR} width="900px" height="700px" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe> </div>
      </div>

    </Layout>
  );
};

export default Calendar;
