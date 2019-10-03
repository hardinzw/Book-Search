import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Wrapper from "./components/Wrapper"
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import './App.css';

function App() {
  return (
    <Router>
      <Wrapper>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/books" component={Search} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Wrapper>
    </Router>
  );
}



export default App;
