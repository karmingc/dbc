import React from 'react';
import styled from "@emotion/styled";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from 'components/Header/Header.js'
import Bottom from 'components/Bottom/Bottom.js'
import Home from 'components/Pages/Home.js'
import About from 'components/Pages/About.js'
import Menu from 'components/Pages/Menu.js'
import Contact from 'components/Pages/Contact.js'

AOS.init();

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`


class App extends React.Component {
  render() {
    return (
      <Main>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Bottom />
        </Router>
      </Main>
    );
  }
}

export default App;
