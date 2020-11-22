import React from "react";
import Message from "./Message";
import AlternativeMessage from './AlternativeMessage';

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
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
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
        <div>
            <hr/>


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
