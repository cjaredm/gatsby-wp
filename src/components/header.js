import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Header = ({ siteTitle, nav = [] }) => {
  console.log(nav);
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
        <ul className="MainNavUL">
          {nav.map(item => (
            <NavItem key={item.object_slug}>
              <Link to={"/" || item.url}>{item.title}</Link>
              {item.wordpress_children && (
                <SubMenu>
                  {item.wordpress_children.map(subMenu => (
                    <SubItem key={subMenu.title}>
                      {subMenu.title}
                      {subMenu.wordpress_children && (
                        <ul>
                          {subMenu.wordpress_children.map(subSubMenu => (
                            <SubSubItem style={{listStyleType: '-'}}>{subSubMenu.title}</SubSubItem>
                          ))}
                        </ul>
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

const Container = styled.header`
  background: ${({ theme }) => theme.primary};
  display: flex;
  padding: 0 40px;

  h1 {
    margin: 0 20px 0 0;
    padding: 20px 0;
    font-size: 2.5rem;
  }

  a {
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
  .MainNavUL {
    display: flex;
    flex: 1;
    align-items: center;
    margin: 0;
  }
`;

const SubSubItem = styled.li`
  list-style-type: "-";
`;

const SubItem = styled.li`
  position: relative;
  list-style: none;
  padding: 5px 0 10px;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  border-image:
    linear-gradient(
      to right, 
      white,
      red, 
      white
    ) 1;

  &:last-child {
    border: 0;
  }
`;

const SubMenu = styled.ul`
  display: none;
  background: white;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  min-width: 100%;
  width: max-content;
  max-width: 230px;
  padding: 10px;
  border-radius: 0 0 5px 5px;
  box-shadow: rgba(0,0,0, 0.40) 5px 10px 28px 0px;
  color: ${({ theme }) => theme.tertiary};
`;

const NavItem = styled.li`
  position: relative;
  list-style: none;
  z-index: 1;
  color: white;
  margin: 0;
  height: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: border-color ease-in-out 0.25s, color ease-in-out 0.25s;

  &:hover,
  &:focus {
    border-radius: 5px 5px 0 0;
    color: ${({ theme }) => theme.primary};
  }

  &:hover ${SubMenu}, &:focus ${SubMenu} {
    display: flex;
  }

  &::after {
    border-radius: 5px 5px 0 0;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom center;
    background-color: white;
    z-index: -1;
    transition: transform 0.3s;
    color: ${({ theme }) => theme.primary};
}
&:hover::after {
    transform: scaleY(1);
}
`;
