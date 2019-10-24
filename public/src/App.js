import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Registration from "./components/reg.component";
import ThankYou from "./components/thank-you.component";
import AlreadyEntered from "./components/already-entered.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row mt-3">
            <div className="col">
              <div className="card mb-3">
                <div className="card-body">
                  <img className="col-12 banner" src="https://lorempixel.com/1200/300" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="card mb-5">
                  <div className="card-body">
                    <Route path="/" exact component={Registration} />
                    <Route path="/thank-you" component={ThankYou} />
                    <Route path="/already-entered" component={AlreadyEntered} />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
