import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const   GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError
        && setError("");
        setName && setName(e.currentTarget.value)
    };
    const addUser = (name: string) => { 
        if (name.trim() !== "") {
            addUserCallback(name.trim())
            alert(`Hello  ${name.trim()}!`);
            setName('')


        }
        else if(name.trim() === "") {
            setError("Error")
            console.log('wtf')
        }

    };

    const totalUsers = users.length;
    console.log(totalUsers)
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
