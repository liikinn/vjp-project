import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Header from "./header-section";
import { Main } from "./main-section";
import { Home } from "./home-view";
import NewsFeed from "./news-feed-view";
import { EducationInformation } from "./education-information-view";
import { ContactInformation } from "./contact-information-view";

//import logo from "../logo.svg";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route key="home" exact path="/" component={Home} />
          <Route key="news-feed" path="/ajankohtaista" component={NewsFeed} />
          <Route
            key="education-information"
            path="/opetus"
            component={EducationInformation}
          />
          <Route
            key="contact-information"
            path="/yhteystiedot"
            component={ContactInformation}
          />
          <Redirect to="/" />
        </Switch>
      </Main>
    </Router>
  );
};

export { App };
