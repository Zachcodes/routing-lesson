import React from 'react';
import { Route, Switch } from 'react-router-dom';
import User from './User';
import NotFound from './NotFound';

export default function Users(props) {
  return (
    <div>
      This is where we could put some information about our users.
      <Switch>
        <Route path={`${props.match.path}/:id`} component={User} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
