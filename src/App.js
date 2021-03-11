import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/league/:leagueId">
        <LeagueDetail></LeagueDetail>
        </Route>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
