import React from 'react';
import styled from '@emotion/styled';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import Home from 'components/Pages/Home.js';
import About from 'components/Pages/About.js';
import Menu from 'components/Pages/Menu.js';
import Contact from 'components/Pages/Contact.js';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const App = () => {
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
        <Footer />
      </Router>
    </Main>
  );
};

export default App;
