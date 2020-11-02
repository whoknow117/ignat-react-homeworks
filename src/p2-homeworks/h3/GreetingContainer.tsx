import React, {useState} from "react";
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
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const setNameCallback = (name: string) => {
        setName(name);
    };
    const addUser = (name: string) => {
        if (name.trim() !== "") {
            addUserCallback(name)
            alert(`Hello  ${name}!`);
            setError("");
        }
        if (name.trim() === "") {
            setError("Error")
        }
        setName('')
    };

    const totalUsers = 0 + users.length;
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
