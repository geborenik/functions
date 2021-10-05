import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from '../src/components/test';
import { Continueplay } from './components/continueplay';
import InfinitySlide from './components/infinitySlide';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Test} /> */}
          <Route exact path="/" component={Continueplay} />
          <Route exact path="/infinitySlide" component={InfinitySlide} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
