import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from "../components/home/home";
import SelectOwners from "../components/owners/listOwners";
import SelectPlots from '../components/plots/plots';

export const AppRouter = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/listOwners" component={SelectOwners} />
                <Route exact path="/listPlots" component={SelectPlots} />
                <Redirect from="" to="/home" />
            </Switch>
        </Router>
    )
}