import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaYoutube,
  FaFacebookSquare,
  FaInstagram,
  FaSpotify,
} from "react-icons/fa";

import LeafletMap from "../map-component/map-component";

const ContactInformation: React.FC = () => {
  return (
    <Container fluid="lg" className="p-3 my-sm-2">
      <Row className="pt-2 mx-0 mx-sm-2 mx-md-3">
        <h3>Yhteystiedot</h3>
      </Row>
      <Row className="p-sm-2 px-md-3">
        <Col xs={12} sm={12} md={5}>
          <Row>
            <Col xs={12} sm={6} md={12}>
              <div className="my-3">
                <h5>Sähköposti</h5>
                <div>lintsinsirkus@gmail.com</div>
              </div>
              <div className="my-3">
                <h5>Puhelin</h5>
                <div>044-256 5225/ tj. Maiju Mustonen</div>
                <div>045-2360788/ toimisto</div>
              </div>
              <div className="my-3">
                <h5>Harjoituspaikka</h5>
                <div>Paraistentie 3, Helsinki (Ruskeasuo)</div>
              </div>
            </Col>
            <Col xs={12} sm={6} md={12}>
              <div className="mb-3 mt-sm-3 mt-md-0">
                <h5>Sosiaalinen media</h5>
                <div className="d-flex align-items-center">
                  <FaYoutube className="mr-2" />
                  <a
                    className="text-decoration-none text-dark"
                    href="https://www.youtube.com/user/lintsinsirkus/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube –kanava: Lintsin Sirkus
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <FaInstagram className="mr-2" />
                  <a
                    className="text-decoration-none text-dark"
                    href="https://www.instagram.com/lintsinsirkus/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram: lintsinsirkus
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <FaSpotify className="mr-2" />
                  <a
                    className="text-decoration-none text-dark"
                    href="https://open.spotify.com/user/lintsinsirkus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spotify: lintsinsirkus
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <FaFacebookSquare className="mr-2" />
                  <a
                    className="text-decoration-none text-dark"
                    href="https://www.facebook.com/lintsinsirkus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook: Linnanmäen sirkuskoulu
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={7}>
          <LeafletMap />
        </Col>
      </Row>
    </Container>
  );
};

export { ContactInformation };
