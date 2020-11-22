import React from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior/Junior";
import JuniorPlus from "./pages/JuniorPlus/JuniorPlus";
import classes from './Routes.module.scss';

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: "/junior",
    JUNIOR_PLUS: "/junior-plus"

}


function Routes() {
    return (
        <div className={classes.wrapper}>

            <Switch>


                <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>



                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
