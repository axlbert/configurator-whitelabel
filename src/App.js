import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './components/Page/Landing/Landing';
import CategorySelection from './components/Page/CategorySelection/CategorySelection';
import MachineConfigure from './components/Page/MachineConfigure/MachineConfigure';

function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/" component={App}>
          <Router>
          <div className="App">
            <Header></Header>
            <Switch>
              <Route path="/home" component={CategorySelection} />
              <Route path="/machine-configure" component={MachineConfigure} />
            </Switch>
            <Footer></Footer>
          </div>
          </Router>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
