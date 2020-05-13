import React from "react";
import { Alert, Fade, Modal, Navbar, Nav } from "react-bootstrap";
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
/* eslint-disable-next-line import/no-unassigned-import */
import "./header-component.css";

interface MapStateToProps {
  user?: User;
}

interface MapDispatchToProps {
  storeUser: (user: User) => UserActionTypes;
  clearStoredUser: () => UserActionTypes;
}

type Props = MapDispatchToProps & MapStateToProps & RouteComponentProps;

const Header: React.FC<Props> = (props) => {
  // eslint-disable-next-line no-console
  console.log(props);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [
    showLogoutSuccessfulAlert,
    setShowLogoutSuccessfulAlert,
  ] = React.useState<boolean>(false);
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
              <Navbar.Text>Kirjautuneena: {ADMIN_USER.NAME}</Navbar.Text>
              <Nav.Link
                onClick={() => {
                  props.clearStoredUser();
                  setShowLogoutSuccessfulAlert(true);
                  setTimeout(() => setShowLogoutSuccessfulAlert(false), 4000);
                }}
              >
                Kirjaudu ulos
              </Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={() => setShowModal(true)}>
              Kirjaudu sisään
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
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
              setShowModal(false);
            }}
          />
        </Modal.Body>
      </Modal>
      <Alert
        className="logout-alert"
        show={showLogoutSuccessfulAlert}
        variant="success"
        transition={Fade}
        onClose={() => setShowLogoutSuccessfulAlert(false)}
      >
        Sinut on kirjattu ulos.
      </Alert>
    </>
  );
};

function mapStateToProps(state: RootState): MapStateToProps {
  return {
    user: state.user && state.user.user,
  };
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToProps {
  return {
    storeUser: (user) => dispatch(storeUser(user)),
    clearStoredUser: () => dispatch(clearStoredUser()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
