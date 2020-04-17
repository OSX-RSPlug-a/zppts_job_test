import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import MainPg from './../pages/MainPg/';
import CreateLogin from './../pages/CreateLogin/';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPg} />
        <Route path="/createLogin" component={CreateLogin} />
      </Switch>
    </BrowserRouter>
  );
}