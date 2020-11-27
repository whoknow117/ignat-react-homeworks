import React from "react";
import {AffairType} from "./HW2";
import classes from './Affair.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {

    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}


function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };

    const titleStyle = {
        color: `${props.affair.color ? props.affair.color : ""}`
    }


    return (
        <div className={classes.wrapper}>

            <div style={titleStyle} className={classes.affair}>{props.affair.name}
                <SuperButton
                    red
                    onClick={deleteCallback}
                >X</SuperButton>
            </div>


        </div>
    );
}

export default Affair;
