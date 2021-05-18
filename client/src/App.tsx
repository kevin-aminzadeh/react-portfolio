import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Home from './components/pages/home/Home';
import Portfolio from './components/pages/portfolio/Portfolio';

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
