import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Search from "./pages/Search";
import Wrapper from "./components/Wrapper"
import Nav from "./components/Nav";
import NotFound from "./pages/NotFound";
import Library from "./pages/Library";
import './App.css';

function App() {
  return (
    <Router>     
        <div>
        <Wrapper>
          <Nav />
          <Switch>
            <Route exact path="/search" component={Search} />
            <Route exact path="/library" component={Library} />
            <Route path="/404" component={NotFound} />
            <Redirect from="/" exact to="/search" />
            <Redirect to="/404" />
          </Switch>
          </Wrapper>
        </div>     
    </Router>
  );
}



export default App;
