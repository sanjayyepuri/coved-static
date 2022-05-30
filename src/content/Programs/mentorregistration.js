import React from "react";
import { Link } from 'gatsby';
import styled from "styled-components";
import { FONTS, COLORS } from "../../constants";
const GFORM = "https://docs.google.com/forms/d/e/1FAIpQLSdnaGqLu8NRC2lExo2SnVoMGkZDbH1PPAbxYrVSCK2UxNWwmQ/viewform?embedded=true";

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

const ABCMentorRegister = () => {
    return (
        <div style={{display: "flex", minWidth:"80vw", minHeight:"100vh", alignContent:"center", justifyContent: "center", justifySelf:"center", justifyItems:"center", flexDirection: "column"}}>
            <div style = {{display: "flex", alignContent:"center", height: "50px", lineHeight: "50px", justifyContent: "center"}}><LinkStyled to="https://forms.gle/RiRzMFkF8dCq4yEj8" ver="default">Are you a K-12 student? Click here to register for ABC Club as a K-12 student!</LinkStyled></div>
            <div style = {{display: "flex", alignContent:"center", height: "50px", lineHeight: "50px", justifyContent: "center"}}><LinkStyled to="https://forms.gle/HTH8Xv84u7pzy5rm7" ver="default">Do you want to sign up to help the CovEd Management team? Sign up here!</LinkStyled></div>
            <div style = {{display: "flex", alignContent:"center", justifyContent: "center"}}> <iframe src={GFORM} width="800px" height="900px" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe> </div>
        </div>
    )
}

export default ABCMentorRegister;
