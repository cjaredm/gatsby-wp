import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";

const Header = ({ siteTitle, nav = [] }) => {
  return (
    <Container>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <Nav>
        <ul className="MainNaveUL">
          {nav.map(item => (
            <NavItem key={item.object_slug}>
              <Link to={"/" || item.object_slug}>{item.title}</Link>
              {item.wordpress_children && (
                <SubMenu>
                  {item.wordpress_children.map(subMenu => (
                    <SubItem>
                      {subMenu.title}
                      {subMenu.wordpress_children && (
                        <SubSubMenu>
                          {subMenu.wordpress_children.map(subSubMenu => (
                            <SubSubItem>{subSubMenu.title}</SubSubItem>
                          ))}
                        </SubSubMenu>
                      )}
                    </SubItem>
                  ))}
                </SubMenu>
              )}
            </NavItem>
          ))}
        </ul>
      </Nav>
    </Container>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

const itemHover = css`
  background-color: lighten(${({ theme }) => theme.primary}, 20%);
  transition: background-color ease-in-out 0.5s;
`;

const Container = styled.header`
  background: ${({ theme }) => theme.primary};
  display: flex;
  padding: 0 40px;

  h1 {
    margin: 0;
    padding: 20px 0;
  }

  a {
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
  .MainNaveUL {
    display: flex;
    flex: 1;
    align-items: center;
    margin: 0;
  }
`;

const SubSubItem = styled.li`
  list-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  padding: 5px 0 10px;
  &:last-child {
    border: 0;
  }
  &:hover,
  &:focus {
    ${itemHover};
  }
`;

const SubSubMenu = styled.ul`
  display: none;
  background: white;
  border: 1px solid ${({ theme }) => theme.primary};
  flex-direction: column;
  position: absolute;
  top: -11px;
  left: 100%;
  margin: 0;
  width: max-content;
  max-width: 200px;
  padding: 10px;
  border-radius: 0 5px 5px 0;
`;

const SubItem = styled.li`
  position: relative;
  list-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  padding: 5px 0 10px;
  &:last-child {
    border: 0;
  }
  &:hover,
  &:focus {
    ${itemHover};
  }

  &:hover ${SubSubMenu}, &:focus ${SubSubMenu} {
    display: flex;
  }
`;

const SubMenu = styled.ul`
  display: none;
  background: white;
  border: 1px solid ${({ theme }) => theme.primary};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  margin: 8px 0 0 0;
  min-width: 100%;
  width: max-content;
  max-width: 230px;
  padding: 10px;
  border-radius: 0 0 5px 5px;
`;

const NavItem = styled.li`
  position: relative;
  list-style: none;
  background-color: white;
  color: ${({ theme }) => theme.primary};
  margin: 0;
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-bottom: 8px solid transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &:hover ${SubMenu}, &:focus ${SubMenu} {
    display: flex;
  }
`;
