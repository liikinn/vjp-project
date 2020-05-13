import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaYoutube,
  FaFacebookSquare,
  FaInstagram,
  FaSpotify,
} from "react-icons/fa";

import LeafletMap from "./map-component";

const ContactInformation: React.FC = () => {
  return (
    <Container className="p-3 my-2">
      <Row className="py-2">
        <Col
          xs={{ order: 2, span: 12 }}
          sm={{ order: 2, span: 12 }}
          md={{ order: 1, span: 6 }}
        >
          <h3>Yhteystiedot</h3>
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
          <div className="my-3">
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
        <Col
          xs={{ order: 2, span: 12 }}
          sm={{ order: 1, span: 12 }}
          md={{ order: 2, span: 6 }}
        >
          <LeafletMap />
        </Col>
      </Row>
    </Container>
  );
};

export { ContactInformation };
