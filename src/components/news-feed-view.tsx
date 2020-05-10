import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const NewsFeed: React.FC = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Ajankohtaista</h3>
          <Card>
            <Card.Body>
              <Card.Title>Korona-tietoa</Card.Title>
              <Card.Text>
                Lähiopetustoiminta keskeytetty 13.3-13.5.2020. The activities of
                circus training have been cancelled 13.3-13.5.2020.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Uudet oppilaat</Card.Title>
              <Card.Text>
                Lomake Opetus-välilehdellä tai sähköposti
                lintsinsirkus@gmail.com. Otamme yhteyttä! Jäsentakuu: vanhojen
                sirkuskoululaisten paikka säilyy aina automaattisesti. Paikan
                peruuttamiseksi riittää sähköposti osoitteeseen
                lintsinsirkus@gmail.com ennen eräpäivää, jonka kuittaamme
                saaduksi. Lasku tulee sähköisesti kahdessa osassa: jäsenmaksu
                etukäteen, harrastusmaksu kahden kokeiluviikon jälkeen.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                Linnanmäen sirkuskoulu voitti Apu-tonnin 2020
              </Card.Title>
              <Card.Text>
                APU-Lehti myönsi sirkuskoululle Apu-tonnin 2020! Lue
                artikkeli&nbsp;
                <a
                  href="https://www.apu.fi/artikkelit/apu-tonni-linnanmaen-sirkuskoululle-ohjataan-vahavaraisten-oppilaiden-harrastustoimintaan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  täältä
                </a>
                .
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {props.children}
    </Container>
  );
};

export { NewsFeed };
