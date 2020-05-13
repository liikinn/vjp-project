export const ACTION_TYPES = {
  STORE_USER: "STORE_USER",
  CLEAR_STORED_USER: "CLEAR_STORED_USER",
  STORE_NEWS_ITEM: "STORE_NEWS_ITEM",
  DELETE_NEWS_ITEM: "DELETE_NEWS_ITEM",
  UPDATE_NEWS_ITEM: "UPDATE_NEW_ITEM",
};

export const ADMIN_USER = {
  NAME: "Ylläpitäjä",
  USERNAME: "admin",
  PASSWORD: "admin",
};

export const newsItems = [
  {
    id: 1,
    title: " Korona-tietoa",
    content:
      "Lähiopetustoiminta keskeytetty 13.3-13.5.2020. The activities of circus training have been cancelled 13.3-13.5.2020.",
    date: new Date("2020/03/13"),
  },
  {
    id: 2,
    title: "Linnanmäen sirkuskoulu voitti Apu-tonnin 2020",
    content:
      "APU-Lehti myönsi sirkuskoululle Apu-tonnin 2020! Lue artikkeli osoitteesta https://www.apu.fi/artikkelit/apu-tonni-linnanmaen-sirkuskoululle-ohjataan-vahavaraisten-oppilaiden-harrastustoimintaan",
    date: new Date("2020/02/05"),
  },
  {
    id: 3,
    title: "Uudet oppilaat",
    content:
      "Lomake Opetus-välilehdellä tai sähköposti lintsinsirkus@gmail.com. Otamme yhteyttä! Jäsentakuu: vanhojen sirkuskoululaisten paikka säilyy aina automaattisesti. Paikan peruuttamiseksi riittää sähköposti osoitteeseen lintsinsirkus@gmail.com ennen eräpäivää, jonka kuittaamme saaduksi. Lasku tulee sähköisesti kahdessa osassa: jäsenmaksu etukäteen, harrastusmaksu kahden kokeiluviikon jälkeen.",
    date: new Date("2020/01/01"),
  },
];
