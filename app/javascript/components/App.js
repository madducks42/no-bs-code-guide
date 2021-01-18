import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./Home"
import NewRailsReactProject from "./NewRailsReactProject";
import Bulma from "./Bulma";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-rails-react-project" component={NewRailsReactProject} />
        <Route exact path="/bulma" component={Bulma} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
