import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from './components/Posts';
import Post from './components/Post';
import NotFound from './components/NotFound';
import Users from './components/Users';
import Pets from './components/Pets';
import Pet from './components/Pet';

function RouteOne() {
  return <div>One!</div>;
}

function RouteTwo() {
  return <div>Two!</div>;
}

export default (
  <Switch>
    <Route path="/one" exact component={RouteOne} />
    <Route path="/one/two" component={RouteTwo} />
    <Route path="/posts/:id" exact component={Post} />
    <Route path="/posts" exact component={Posts} />
    <Route path="/users" component={Users} />
    <Route
      path="/pets"
      render={props => {
        return (
          <Pets>
            <h1>Pets!</h1>
            <Route path={`${props.match.path}/:id`} component={Pet} />
          </Pets>
        );
      }}
    />
    <Route component={NotFound} />
  </Switch>
);
