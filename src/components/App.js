import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Reader from './Reader/Reader';
import PageNotFound from './PageNotFound/PageNotFound';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <HashRouter basename="/goit-react-hw-04-reader">
          <Switch>
            <Route path="/reader" exact component={Reader} />
            <Route component={PageNotFound} />
          </Switch>
        </HashRouter>
      </>
    );
  }
}

export default App;
