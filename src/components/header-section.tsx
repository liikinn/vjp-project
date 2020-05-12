import React from "react";
import { Modal, Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { Dispatch } from "redux";

import { User } from "../redux/reducers/user";
import {
  clearStoredUser,
  storeUser,
  UserActionTypes,
} from "../redux/actions/user";
import { RootState } from "../redux/store";
import { ADMIN_USER } from "../utils/constants";

import { LoginForm } from "./login-form";

interface MapStateToProps {
  user?: User;
}

interface MapDispatchToProps {
  storeUser: (user: User) => UserActionTypes;
  clearStoredUser: () => UserActionTypes;
}

type Props = MapDispatchToProps & MapStateToProps & RouteComponentProps;

const Header: React.FC<Props> = (props) => {
  const [showModal, setModalShow] = React.useState<boolean>(false);
  return (
    <>
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
        <Nav className="justify-content-end">
          {props.user ? (
            <>
              <Navbar.Text>
                Kirjautuneena: <a>{ADMIN_USER.NAME}</a>
              </Navbar.Text>
              <Nav.Link
                onClick={() => {
                  props.clearStoredUser();
                  props.history.push("/");
                }}
              >
                Kirjaudu ulos
              </Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={() => setModalShow(true)}>
              Kirjaudu sisään
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
      <Modal
        show={showModal}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="login-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="login-modal">Kirjaudu sisään</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm
            handleSuccess={() => {
              props.storeUser({ name: ADMIN_USER.NAME });
              setModalShow(false);
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

function mapStateToProps(state: RootState): MapStateToProps {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToProps {
  return {
    storeUser: (user) => dispatch(storeUser(user)),
    clearStoredUser: () => dispatch(clearStoredUser()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
