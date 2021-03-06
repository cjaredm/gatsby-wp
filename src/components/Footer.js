import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Footer = ({ siteTitle, nav = [] }) => {
  return (
    <Container>
      <div>
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
      </div>
      <Nav>
        <ul>
          {nav.map(item => (
            <NavItem>
              <Link to={item.object_slug}>{item.title}</Link>
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

export default Footer;

const Container = styled.header`
  background: ${({ theme }) => theme.primary};
  display: flex;
  padding: 20px 40px;

  a {
    text-decoration: none;
  }
`;

const Nav = styled.div`
  ul {
  }
`;

const NavItem = styled.li`
  list-style: none;
  background-color: white;
  color: rebeccapurple;
  border-radius: 5px;
  padding: 15px 20px;
  margin: 0;
`;
