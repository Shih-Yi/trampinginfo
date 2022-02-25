import React from 'react';
import { HashRouter,Route,Switch } from "react-router-dom";
import LandingPage from "../bundles/LandingPage/components/LandingPage"
import SearchColumn from "../bundles/SearchColumn/components/SearchColumn"

const App = (props) =>{
  const { tracks } = props

  return(
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <LandingPage tracks={tracks} />} />
        <Route path="/search" component={SearchColumn}/>
        <Route path="/" component={LandingPage}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
