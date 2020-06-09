import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Home, KorBook, OtherBook, EBook, WebnovelBook } from "Pages";
import ProductPage from "Pages/ProductPage";

const Root: React.FC = () => (
  <Switch>
    <Route path="/korbook" component={KorBook} />
    <Route path="/otherbook" component={OtherBook} />
    <Route path="/ebook" component={EBook} />
    <Route path="/webnovel" component={WebnovelBook} />
    <Route path="/goods/:id" component={ProductPage} />
    <Route path="/" component={Home} />
    <Redirect path="*" to="/" />
  </Switch>
);

export default Root;
