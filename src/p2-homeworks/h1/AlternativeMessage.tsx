import React from "react";
import classes from './AlternativeMessage.module.scss';



type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
    id: number

}

function AlternativeMessage(props: PropsType) {


    let firstLetter = props.name.split('')[0]
    let secondLetter = props.name.split(" ")[1].split(" ")
        .map(w => w[0]);

    console.log(secondLetter)
    return (
        <div className={classes.message}>

            <div className={classes.avatar}>
                {props.avatar !== "" ? <img src={props.avatar} alt="#"/> : firstLetter + secondLetter}
            </div>
            <div className={classes.content}>
                <h4 className={classes.name}>{props.name}</h4>
                <p className={classes.text}>{props.message}</p>
                <span className={classes.time}>{props.time}</span>
            </div>


        </div>
    );

    // if(props.avatar !== "") {
    //     return (
    //         <div className={classes.message}>
    //
    //             <div className={classes.avatar}>
    //                 <img src={props.avatar} alt="#"/>
    //             </div>
    //             <div className={classes.content}>
    //                 <h4 className={classes.name}>{props.name}</h4>
    //                 <p className={classes.text}>{props.message}</p>
    //                 <span className={classes.time}>{props.time}</span>
    //             </div>
    //
    //
    //         </div>
    //     );
    // } else {
    //     let firstLetter = props.name.split('')[0]
    //     let secondLetter = props.name.split(" ")[1].split(" ")
    //         .map(w => w[0]);
    //
    //     console.log(secondLetter)
    //     return (
    //         <div className={classes.message}>
    //
    //             <div className={classes.avatar}>
    //                 {firstLetter + secondLetter }
    //             </div>
    //             <div className={classes.content}>
    //                 <h4 className={classes.name}>{props.name}</h4>
    //                 <p className={classes.text}>{props.message}</p>
    //                 <span className={classes.time}>{props.time}</span>
    //             </div>
    //
    //
    //         </div>
    //     );
    // }
}



export default AlternativeMessage;
