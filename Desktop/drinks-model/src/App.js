import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
