import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import classes from './HW3.module.scss';

export type UserType = {
    _id: string
    name: string
}


function HW3() {


    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string) => {

        const user = {
            _id: v1(),
            name: name,
        }
        setUsers([user, ...users]);
    }

    return (
        <div className={classes.hw3Wrapper}>


            <GreetingContainer users={users} addUserCallback={addUserCallback}/>


            {/*<AlternativeGreeting/>*/}

        </div>
    );
}

export default HW3;
