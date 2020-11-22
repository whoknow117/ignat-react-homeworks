import React from "react";
import {HashRouter, BrowserRouter, Switch, } from "react-router-dom";
import Header from "./Header";
import Routes from "./Routes";
import classes from './HW5.module.scss';

function HW5() {
    return (
        <div className={classes.wrapper}>

            <HashRouter>

            <Header/>

            <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
