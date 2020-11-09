import React, {ChangeEvent} from "react";
import classes from "./Greeting.module.scss";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperEditableSpan from "../h6/common/c4-SuperEditableSpan/SuperEditableSpan";

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
    const addUserrCallback = () => {addUser(name)}

    return (
        <div className={classes.wrapper}>
            <div className={classes.taskForm}>
                {/*<input value={name} onChange={setNameCallback} className={error ? inputErrorClass : ""}/>*/}

                <SuperInputText
                    value={name}
                    error={error}
                    onChange={setNameCallback}

                />





                <SuperButton
                    onClick={addUserrCallback}
                    red={name}
                    error={error}
                    >
                    add
                </SuperButton>


            </div>
            <span className={classes.totalUsers}>{totalUsers}</span>

        </div>
    );
}

export default Greeting;
