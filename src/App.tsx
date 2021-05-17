import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home/Home';
import Portfolio from './components/pages/Portfolio/Portfolio';

const App: React.FC = () => (
  <div className="App h-100 d-flex flex-column justify-content-between">
    <Router>
      <Navbar />
      <main className="my-auto">
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </main>
    </Router>
    <Footer />
  </div>
);

export default App;
