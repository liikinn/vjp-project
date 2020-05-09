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
    <Container>
      <Row>
        <Col
          xs={{ order: 2, span: 12 }}
          sm={{ order: 2, span: 12 }}
          md={{ order: 1, span: 6 }}
        >
          <h3>Yhteystiedot</h3>
          <h5>Sähköposti</h5>
          <div>lintsinsirkus@gmail.com</div>
          <h5>Puhelin</h5>
          <div>044-256 5225/ tj. Maiju Mustonen</div>
          <div>045-2360788/ toimisto</div>
          <h5>Harjoituspaikka</h5>
          <div>Paraistentie 3, Helsinki (Ruskeasuo)</div>
          <h5>Sosiaalinen media</h5>
          <div>
            <FaYoutube /> You Tube –kanava: Lintsin Sirkus
          </div>
          <div>
            <FaInstagram /> Instagram: lintsinsirkus
          </div>
          <div>
            <FaSpotify /> Spotify: lintsinsirkus
          </div>
          <div>
            <FaFacebookSquare /> www.facebook.com/LintsinSirkus/
          </div>
          <div>https://www.youtube.com/user/lintsinsirkus/featured</div>
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
