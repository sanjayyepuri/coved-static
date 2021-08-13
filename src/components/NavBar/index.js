import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import { Link } from "gatsby";

import MobileNav from "./MobileNav";

import { FONTS, COLORS } from "../../constants";

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

const UserLinkWrapper = styled.div`
  margin-left: auto;
  flex-direction: row;
  display: flex;
`;

export default function NavBar(props) {
  // TODO: migrate to gatsby
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const updateWindowWidth = () => {
  //     setWindowWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", updateWindowWidth);

  //   return () => {
  //     window.removeEventListener("resize", updateWindowWidth);
  //   };
  // }, []);

  // if (windowWidth < 1024) {
  if (false) {
    return (
      <MobileNav
        links={props.links}
      />
    );
  }
  return (
    <>
      <AppBar
        color="default"
        flex-direction="row"
        position={props.position}
        elevation={0}
      >
        <Toolbar>
          <Grid>
            <LinkStyled to="/" ver="lg">
              CovEd
            </LinkStyled>
            {props.links.map((link) => (
              <LinkStyled key={link.link} to={link.link} ver="default">
                {link.title}
              </LinkStyled>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

NavBar.propTypes = {
  links: PropTypes.array,
  position: PropTypes.string,
  ver: PropTypes.string,
};

NavBar.defaultProps = {
  links: [
    {
      title: "Resources",
      link: "/resources",
    },
    {
      title: "Programs",
      link: "/programs",
    },
    {
      title: "FAQs",
      link: "/faqs",
    },
    {
      title: "Meet Our Team",
      link: "/team",
    },
    {
      title: "Contact Us",
      link: "/contactus",
    },
  ],
  position: "sticky",
  ver: "default",
};
