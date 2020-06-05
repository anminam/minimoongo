import React from "react";
import { Route, Redirect, Switch  } from "react-router-dom";
import {Home, KorBook, OtherBook, EBook, WebnovelBook} from "Pages";

const Root:React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/korbook" component={KorBook} />
        <Route path="/otherbook" component={OtherBook} />
        <Route path="/ebook" component={EBook} />
        <Route path="/webnovel" component={WebnovelBook} />
        <Redirect path="*" to="/" />
    </Switch>
)

export default Root;
