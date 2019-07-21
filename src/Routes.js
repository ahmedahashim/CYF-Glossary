import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Search from "./containers/Search";
import SearchResults from "./containers/SearchResults";
import SingleTerm from "./containers/SingleTerm"
import AddNewTerm from "./containers/AddNewTerm"
export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Search" exact component={Search} />
        <Route path="/New" component={AddNewTerm} />
        <Route path="/search/:query" component={SearchResults} />
        <Route path="/:topic/:term" component={SingleTerm} />
        { /* Finally, catch all unmatched routes */}
        <Route component={NotFound} />

    </Switch>;