import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./Home"
import NewRailsReactProject from "./NewRailsReactProject";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-rails-react-project" component={NewRailsReactProject} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
