import React, {ChangeEvent} from "react";
import classes from "./Greeting.module.scss";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: (name: string) => void
    error: string
    totalUsers: number
}


const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {


    const inputErrorClass = classes.inputError;


    return (
        <div className={classes.wrapper}>
            <div className={classes.taskForm}>
                <input value={name} onChange={setNameCallback} className={error ? inputErrorClass : ""}/>

                <button className={classes.btn} onClick={() => {
                    addUser(name)
                }}>add
                </button>
            </div>
            <span className={classes.totalUsers}>{totalUsers}</span>
            {error && <span className={classes.error}> {error}</span>}
        </div>
    );
}

export default Greeting;
