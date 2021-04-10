import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Header from "./Header";
import Contact from "./Contact";
import styled from "styled-components";
import './App.css';




 function App() {

  return (
    
    <Router >
       <Header/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
     
    </Router>
 
  );
}

export default App;
