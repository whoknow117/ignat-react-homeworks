import React from "react";
import classes from './Message.module.scss';

type PropsType = {
    avatar: string
    name: string
    time: string
    message: string
}

function Message(props: PropsType) {
    return (
        <div>
            <div className={classes.message}>

                <div className={classes.avatar}>
                    <img src={props.avatar} alt="#"/>
                </div>
                <div className={classes.content}>
                    <h4 className={classes.name}>{props.name}</h4>
                    <p className={classes.text}>{props.message}</p>
                    <span className={classes.time}>{props.time}</span>
                </div>

            </div>
        </div>
    );
}

export default Message;
