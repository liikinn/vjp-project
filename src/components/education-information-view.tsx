import React from "react";
import { Button, Col, Container, Jumbotron, Row, Table } from "react-bootstrap";

const EducationInformation: React.FC = () => {
  return (
    <>
      <Jumbotron>
        <Container>
          <h3>Opetus Linnanmäen sirkuskoulussa</h3>
          <div className="my-3">
            Linnanmäen sirkuskoulu tunnetaan kaikkialla lämminhenkisenä
            harrastuspaikkana taitoihin tai taustoihin katsomatta. Sen
            tavoitteena on antaa monipuolista ja ammattitaitoista sirkustaiteen
            opetusta. Harrastamaan pääsevät kaikki ilmoittautumisjärjestyksessä,
            mikäli ryhmissä on tilaa. Opetuksessa halutaan huomioida lasten omat
            yksilölliset tavoitteet ja motivaatiotaso. Harrastajien
            sirkustuntemusta pyritään lisäämään vierailemalla erilaisissa
            tapahtumissa ja esityksissä. Tavoitteena on syventää oppilaiden
            kiinnostusta omaan harrastukseensa. Opettajat ovat pitkän linjan
            lintsiläisiä ja oman alansa ammattilaisia.
          </div>
          <Button className="mt-2">
            <a
              className="text-decoration-none text-white"
              href="https://docs.google.com/spreadsheet/viewform?formkey=dDBIV19GMTlIaDhxMEh3NzhPc2RkR2c6MQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ilmoittautumiseen
            </a>
          </Button>
        </Container>
      </Jumbotron>
      <Container className="px-3 py-2">
        <Row className="py-3">
          <Col>
            <h4>Lajiesittelyt</h4>
            <br />
            <h5>Akrobatia</h5>
            <div>
              Akrobatiaan (akro) kuuluvat mm. pyramidit (”pyrat”, ”pyrtsit”),
              käsinseisonnat (”kässäri”), notkeusakrobatia (”notku”),
              kuperkeikat, voltit, trampoliinitemput ja pariakrobatia.
              Jatkoryhmät muodostuvat jo sirkusperusteita treenanneista tai
              aikaisemmin jumppaa harrastaneista oppilaista. Perusakrobatiassa
              siistitään ja sovelletaan jo opittuja temppuja; kuperkeikasta ja
              kärrynpyörästä harjoitellaan erilaisia variaatioita sekä
              parannetaan tekniikkaa. Akrobatian tunnit rakennetaan teemoittain
              niin, että yhdellä tunnilla keskitytään yhteen lajiin tai
              osa-alueeseen. Tunneilla opetellaan myös oman ohjelman
              rakentamista, kehitellään uusia temppuvariaatioita ja treenataan
              liikkumista musiikin tahtiin. Myös kaikilla tenava-, perusteet- ja
              sirkus -tunneilla tehdään paljon akrobatiaa.
            </div>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <h5>Ilma-akrobatia</h5>
            <div>
              Sirkuskoulussamme ilma-akrobatiaa (ilma-akro) voi tehdä
              erilaisilla trapetseilla, köydellä ja kankaalla. Jokaisen tunnin
              alussa tehdään tietyt voimaa ja kestävyyttä lisäävät
              perusharjoitteet. Huolimatta omasta ilma-akrobatialajista (kangas,
              köysi, paritrapetsi, soolotrapetsi, rengastrapetsi, renkaat)
              perusvoimaharjoitteita kannattaa tehdä useammalla välineellä.
              Ilma-akrobatiassa avainsanoja ovat siisteys, varmuus ja
              turvallisuus. Ilma-akrobatiatunneille otetaan vain oppilaita,
              jotka ovat jo käyneet aikaisemmin Lintsin akrobatiatunneilla tai
              joilla on kokemusta jostain muusta vartalon hallintaa kehittävästä
              harrastuksesta. Rinnalle suosittelemme aina permantoakrobatia tms
              tunteja joko meillä tai muualla.
            </div>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <h5>Jonglööraus</h5>
            <div>
              Jonglöörausta (jonkka) harjoitellaan sirkuskoulussamme mm.
              palloilla, keiloilla, renkailla, diabololla ja devil stickillä. Se
              vaatii paljon pitkäjänteistä omatoimista harjoittelua, siksi
              pelkkää jonglööraustuntia ei suositella ihan pienille. Toki myös
              perusryhmissä harjoitellaan jonkan perusteita. Se on loistava
              koordinaatioharjoitus, kehittää rytmitajua, pitkäjänteisyyttä ja
              välineenhallintakykyä. Sirkuskoulun välineillä voi aloittaa, mutta
              suosittelemme ajansaatossa omien välineiden hankkimista. Vinkkejä
              ja neuvoja kannattaa kysyä omalta sirkusopettajalta.
            </div>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <h5>Perusteet</h5>
            <div>
              Perusteet on suunnattu uusille tai vähän sirkusta tai voimistelua
              harrastaneille 6-10 -vuotiaille. Sirkuskoulun perusteissa
              harjoitellaan paljon oman kehon hallintaa ja koordinaatiota.
              Tunnit aloitetaan ja päätetään leikillä tai pelillä, joka toimii
              joko alkulämmittelynä, ilmaisutaitoharjoituksena tai
              koordinaatiotreeninä. Perusakrobatiassa harjoitellaan erilaisia
              kierintöjä, hyppyjä ja kuperkeikkoja, joista edetään enemmän
              tiukkuutta ja omaa kehoa kannattelevaa voimaa vaativiin
              kärrynpyöriin ja käsinseisontaan. Perusteiden akrobatiaan kuuluvat
              myös pomput pienellä ja isolla trampoliinilla, hyppynaruhypyt,
              köyden kiipeäminen sekä ilma-akrobatian perusliikkeet trapetsilla.
              Lisäksi rakennetaan pieniä ihmispyramideja, ja treenataan
              pariakrobatiaa. Jonglöörausta harjoitellaan pallolla, pusseilla ja
              vanteilla. Monet pallopelit toimivat myös hyvänä
              jonglööraustreeninä. Tasapainotaitoja kartutetaan rola-bolalla ja
              tasapainopallolla. Näillä tunneilla tärkeintä on hauskuus,
              ryhmässä työskenteleminen ja yhdessä oppiminen.
            </div>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <h4>Ilmoittautuminen</h4>
            <br />
            <div>
              Ilmoittautuminen lukukausiopetukseen&nbsp;
              <a
                href="https://docs.google.com/spreadsheet/viewform?formkey=dDBIV19GMTlIaDhxMEh3NzhPc2RkR2c6MQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                tästä
              </a>
              .
            </div>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <h5>Kevät 2020 harrastusmaksut</h5>
            <div>
              Jäsenmaksu sisältää mm. kokeilukerrat (2), vakuutuksen ja
              toimistokulut.
            </div>
            <br />
            <Table responsive>
              <thead>
                <tr>
                  <th>Tunti</th>
                  <th>Jäsenmaksu/lukukausi</th>
                  <th>Harrastusmaksu/lukukausi</th>
                  <th>Maksu yht./lukukausi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tenavat (45 min)</td>
                  <td>40 €</td>
                  <td>115 €</td>
                  <td>155 €</td>
                </tr>
                <tr>
                  <td>Arki-iltapäivä VAUVA JA TAAPERO</td>
                  <td>40 €</td>
                  <td>115 €</td>
                  <td>155 €</td>
                </tr>
                <tr>
                  <td>Lapsi-vanhempi</td>
                  <td>40 €</td>
                  <td>125 €</td>
                  <td>165 €</td>
                </tr>
                <tr>
                  <td>60 min/kerta</td>
                  <td>40 €</td>
                  <td>135 €</td>
                  <td>175 €</td>
                </tr>
                <tr>
                  <td>75 min/kerta</td>
                  <td>40 €</td>
                  <td>155 €</td>
                  <td>195 €</td>
                </tr>
                <tr>
                  <td>90 min/kerta</td>
                  <td>40 €</td>
                  <td>175 €</td>
                  <td>215 €</td>
                </tr>
                <tr>
                  <td>2x/vko (max 180 min)</td>
                  <td>40 €</td>
                  <td>205 €</td>
                  <td>245 €</td>
                </tr>
                <tr>
                  <td>3x/vko</td>
                  <td>40 €</td>
                  <td>225 €</td>
                  <td>265 €</td>
                </tr>
                <tr>
                  <td>4x/vko</td>
                  <td>40 €</td>
                  <td>255 €</td>
                  <td>295 €</td>
                </tr>
                <tr>
                  <td>yli 4x/vko</td>
                  <td>40 €</td>
                  <td>275 €</td>
                  <td>315 €</td>
                </tr>
                <tr>
                  <td>Edustusryhmä</td>
                  <td>40 €</td>
                  <td>210 €</td>
                  <td>250 €</td>
                </tr>
                <tr>
                  <td>Taikurit (pienryhmä) 60 min</td>
                  <td>40 €</td>
                  <td>150 €</td>
                  <td>190 €</td>
                </tr>
                <tr>
                  <td>PELKKÄ tanssi (10krt)/jonkka/hyppis/pyörä</td>
                  <td>40 €</td>
                  <td>95 €</td>
                  <td>135 €</td>
                </tr>
                <tr>
                  <td>Tanssi lisätuntina (10 krt/kausi)</td>
                  <td></td>
                  <td>50 €</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { EducationInformation };
