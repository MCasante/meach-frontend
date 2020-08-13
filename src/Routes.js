import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import PublisherList from './components/pages/PublisherList';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/diretorios" component={PublisherList} />
    </Switch>
  );
};

export default Routes;
