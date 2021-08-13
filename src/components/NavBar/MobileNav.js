import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";

import { COLORS } from "../../constants";

const MobileMenuIconWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  cursor: pointer;
  z-index: 10;
`;

const StyledList = styled(List)`
  width: 240px;
  font-size: 1.5em;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledListItem = styled(ListItem)`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const MobileNavLink = styled(Link)`
  color: ${COLORS.black};
  text-decoration: none;

  &:visited {
    color: ${COLORS.black};
  }
`;

const UserLinksWrapper = styled.div`
  margin-top: auto;
`;

const MobileNav = ({ links, loggedIn }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <MobileMenuIconWrapper>
        <MenuIcon
          onClick={() => {
            setOpen(true);
          }}
        />
      </MobileMenuIconWrapper>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <StyledList>
          <MobileNavLink to="/" onClick={() => setOpen(false)}>
            <StyledListItem>Home</StyledListItem>
          </MobileNavLink>
          {links.map((link) => (
            <MobileNavLink
              key={link.link}
              to={link.link}
              onClick={() => setOpen(false)}
            >
              <StyledListItem>{link.title}</StyledListItem>
            </MobileNavLink>
          ))}
        </StyledList>
      </Drawer>
    </>
  );
};

export default MobileNav;
