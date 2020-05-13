import React from "react";
import { Alert, Fade, Modal, Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { Dispatch } from "redux";

import { User } from "../../redux/reducers/user";
import {
  clearStoredUser,
  storeUser,
  UserActionTypes,
} from "../../redux/actions/user";
import { RootState } from "../../redux/store";
import { ADMIN_USER } from "../../utils/constants";
import { LoginForm } from "../forms/login-form";

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
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [
    showLogoutSuccessfulAlert,
    setShowLogoutSuccessfulAlert,
  ] = React.useState<boolean>(false);
  return (
    <>
      <Navbar fixed="top" collapseOnSelect bg="dark" variant="dark" expand="md">
        <Navbar.Brand className="mr-0 mr-md-2 pl-2">
          Linnanmäen sirkuskoulu
        </Navbar.Brand>
        <Navbar.Toggle
          className="px-2 py-1"
          style={{ fontSize: "1em" }}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="pl-2 pl-md-0">
          <Nav className="mr-auto">
            <Nav.Link eventKey="1" onClick={() => props.history.push("/")}>
              Etusivu
            </Nav.Link>
            <Nav.Link
              eventKey="2"
              onClick={() => props.history.push("/ajankohtaista")}
            >
              Ajankohtaista
            </Nav.Link>
            <Nav.Link
              eventKey="3"
              onClick={() => props.history.push("/opetus")}
            >
              Opetus
            </Nav.Link>
            <Nav.Link
              eventKey="4"
              onClick={() => props.history.push("/yhteystiedot")}
            >
              Yhteystiedot
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {props.user ? (
              <>
                <div>
                  <Navbar.Text>Kirjautuneena:&nbsp;</Navbar.Text>
                  <Navbar.Text className="text-white">
                    {ADMIN_USER.NAME}
                  </Navbar.Text>
                </div>
                <Nav.Link
                  eventKey="5"
                  onClick={() => {
                    /* Log out user */
                    props.clearStoredUser();
                    setShowLogoutSuccessfulAlert(true);
                    setTimeout(() => setShowLogoutSuccessfulAlert(false), 3500);
                  }}
                >
                  Kirjaudu ulos
                </Nav.Link>
              </>
            ) : (
              <Nav.Link eventKey="5" onClick={() => setShowModal(true)}>
                Kirjaudu sisään
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
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
        style={{ position: "absolute", top: 56 }}
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
