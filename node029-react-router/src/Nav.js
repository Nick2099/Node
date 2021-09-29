// Any component that wants auth state
import React from "react";
import { useAuth } from "./use-auth.js";
import { Link } from 'react-router-dom';
import { Button, Menu, Logo, NavbarContainer, Fragment } from 'react-bootstrap';

function Nav(props) {
  // Get auth state and re-render anytime it changes
  const auth = useAuth();
  return (
    <NavbarContainer>
      <Logo />
      <Menu>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {auth.user ? (
          <Fragment>
            <Link to="/account">Account ({auth.user.email})</Link>
            <Button onClick={() => auth.signout()}>Signout</Button>
          </Fragment>
        ) : (
          <Link to="/signin">Signin</Link>
        )}
      </Menu>
    </NavbarContainer>
  );
}

export default Nav;