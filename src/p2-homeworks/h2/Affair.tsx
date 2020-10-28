import React from "react";
import {AffairType} from "./HW2";
import classes from './Affairs.module.css';

type AffairPropsType = {

    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}


function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };

    const indicatorStyle = {
        backgroundColor: props.affair.priority ? props.affair.color : 'white'
    };


    return (
        <div className={classes.wrapper}>

            <div style={indicatorStyle} className={classes.affair}>{props.affair.name}{}
                <button onClick={deleteCallback}>X</button>
            </div>


        </div>
    );
}

export default Affair;
