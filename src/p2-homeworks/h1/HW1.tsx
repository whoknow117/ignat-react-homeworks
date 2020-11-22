import React from "react";
import Message from "./Message";
import AlternativeMessage from './AlternativeMessage';
import classes from './HW1.module.scss';

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}
export type AlternativeType = {

    avatar: string
    name: string
    message: string
    time: string
    id: number

}

const messageData: PropsType = {
    avatar: "https://bestprofilepictures.com/wp-content/uploads/2020/06/Anonymous-Profile-Picture-1024x1024.jpg",
    name: "Some Name",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\"",
    time: "22:00",
};



const alternativeMessage: Array<AlternativeType> =  [
    {
        id: 1 ,
        avatar: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        name: "John White",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        time: "21:04",

    },
    {
        id: 2 ,
        avatar: "https://bestprofilepictures.com/wp-content/uploads/2020/06/Anonymous-Profile-Picture-1024x1024.jpg",
        name: "Alex Foli",
        message: "dummy text of the printing and typesetting industry.",
        time: "11:32",

    },
    {
        id: 3 ,
        avatar: "",
        name: "Chich Marine",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        time: "1:04",

    }
]


function HW1() {
    return (
        <div className={classes.wrapper}>



            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


        </div>
    );
}

export default HW1;
