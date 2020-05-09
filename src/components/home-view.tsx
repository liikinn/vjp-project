import React from "react";

import { VideoPlayer } from "./video-player-component";

const Home: React.FC = () => {
  return (
    <div>
      <VideoPlayer />
      <div>
        Linnanmäen sirkuskoulu on Suomen toiseksi vanhin nuorisosirkus. Se on
        perustettu vuonna 1981. Kaksikymmentä vuotta myöhemmin Lasten Päivän
        Säätiö luopui sirkuskoulun vetovastuusta. Perustettiin Linnanmäen
        sirkuskoulun kannatusyhdistys ry, joka aloitti virallisesti toimintansa
        syksyllä 2002 ja jatkoi täten sirkuskoulun pyörittämistä. Linnanmäen
        sirkuskoulussa on ehtinyt vuosien saatossa olla mukana monia nykyisin
        omilla aloillaan hyvinkin menestyneitä suomalaisia, kuten Iiro Seppänen,
        Mika Häkkinen, Jaakko Saariluoma, Cia Canger ja Juha Kurvinen.
      </div>
      <div>
        Linnanmäen sirkuskouluun ovat kaikki tervetulleita taitoihin, taustoihin
        tai esimerkiksi varallisuuteen katsomatta. Tämän hetkistä
        harrastustoimintaa rahoitetaan lukukausimaksuilla, esiintymisillä ja
        avustuksilla. Yhdistys pyrkii kehittämään toimintaa tukevaa aktiivista
        vanhempainrinkiä.
      </div>
      <div>
        Hallitus muodostuu sirkuskoulun oppilaiden vanhemmista. Hallitukseen
        kuuluu neljä varsinaista jäsentä ja kaksi varajäsentä. Hallitus nimeää
        kannatusyhdistyksen toiminnanjohtajan.
      </div>
      <div>
        Linnanmäen sirkuskoulu kuuluu Suomen nuorisosirkusliittoon ja on
        vakiinnuttanut paikkansa Suomen nuorisosirkustoiminnassa. Toimikautensa
        ajan se on nostanut lajin suosiota pääkaupunkiseudulla.
      </div>
    </div>
  );
};

export { Home };
