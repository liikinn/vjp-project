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
import { NewsFeed } from "./news-feed-view";
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
    /*<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>*/
  );
};

export { App };
