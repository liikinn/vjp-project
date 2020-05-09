import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter, RouteComponentProps } from "react-router";

const Header: React.FC<RouteComponentProps> = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Nav.Link
            className="navbar-brand"
            onClick={() => props.history.push("/")}
          >
            Linnanmäen sirkuskoulu
          </Nav.Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => props.history.push("/")}>Etusivu</Nav.Link>
          <Nav.Link onClick={() => props.history.push("/ajankohtaista")}>
            Ajankohtaista
          </Nav.Link>
          <Nav.Link onClick={() => props.history.push("/opetus")}>
            Opetus
          </Nav.Link>
          <Nav.Link onClick={() => props.history.push("/yhteystiedot")}>
            Yhteystiedot
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default withRouter(Header);
