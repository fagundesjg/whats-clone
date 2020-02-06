import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { App } from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export { Routes };
