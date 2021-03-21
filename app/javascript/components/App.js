import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./Home"
import NewRailsReactProject from "./NewRailsReactProject";
import Bulma from "./Bulma";
import Bootstrap from "./Bootstrap";
import PrettierESLint from "./PrettierESLint";
import Lightbox from "./Lightbox";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-rails-react-project" component={NewRailsReactProject} />
        <Route exact path="/bulma" component={Bulma} />
        <Route exact path="/bootstrap" component={Bootstrap} />
        <Route exact path="/prettier-eslint" component={PrettierESLint} />
        <Route exact path="/lightbox" component={Lightbox} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
