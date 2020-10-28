import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";


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
        <div>
            <hr/>
            homeworks 3


            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
