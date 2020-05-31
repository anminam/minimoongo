import React from "react";
import { HashRouter as Router, Route, Redirect, Switch  } from "react-router-dom";
import {Home, KorBook} from "Pages";

const Root:React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/korbook" component={KorBook} />
        <Redirect path="*" to="/" />
    </Switch>
)

export default Root;
