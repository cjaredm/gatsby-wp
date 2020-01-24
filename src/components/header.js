import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

const Header = ({ siteTitle, nav = [] }) => {
  console.log(nav);
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
              <Link to={item.object_slug}>
                {item.title}
              </Link>
            </NavItem>
          ))}
        </ul>
      </Nav>
    </Container>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const Container = styled.header`
  background: rebeccapurple;
  display: flex;
  align-items: center;
  padding: 20px 40px;
  margin: 0 0 30px 0;

  h1 {
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  width: 50%;
  justify-self: flex-end;
  ul {
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    align-items: center;
    margin: 0;
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
