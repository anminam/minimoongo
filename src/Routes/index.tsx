import React from "react";
import { HashRouter as Router, Route, Redirect, Switch  } from "react-router-dom";
import Home from "Pages/Home";

const Root:React.FC = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Redirect path="*" to="/" />
        </Switch>
    </Router>
)

export default Root;
