import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import {PATH} from "./Routes";
import classes from './Header.module.scss';



function Header() {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const toggleMenu = ( ) => {


            setCollapsed(!collapsed)



    }


    return (
        <div className={classes.headerWrapper}>

         <nav className={`${classes.nav} ${collapsed ? classes.hidden : ""}`}>
             <NavLink to={PATH.PRE_JUNIOR}>
                 PRE_JUNIOR
             </NavLink>

             <NavLink to={PATH.JUNIOR}>
                 JUNIOR
             </NavLink>
             <NavLink to={PATH.JUNIOR_PLUS}>
                 JUNIOR_PLUS
             </NavLink>

         </nav>
            <button onClick={toggleMenu} className={classes.btn}>=</button>
        </div>
    );
}

export default Header;
