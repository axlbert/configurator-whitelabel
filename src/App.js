import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CategorySelection from './components/Page/CategorySelection/CategorySelection';
import MachineConfigure from './components/Page/MachineConfigure/MachineConfigure';

function App() {
  return (
    <Router >
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={CategorySelection} />
          <Route path="/machine-configure" component={MachineConfigure} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
