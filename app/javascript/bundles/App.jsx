import React from 'react';
import { HashRouter,Route,Switch } from "react-router-dom";
import LandingPage from "../bundles/LandingPage"
import SearchColumn from "../bundles/SearchColumn/components/SearchColumn"

const App = () =>{
  return(
    <HashRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/search" component={SearchColumn}/>
        <Route path="/" component={LandingPage}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
