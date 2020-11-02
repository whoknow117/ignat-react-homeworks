import React from "react";
import classes from "./Greeting.module.scss";

type GreetingPropsType = {
    name: string
    setNameCallback: (name: string) => void
    addUser: (name: string) => void
    error: string
    totalUsers: number
}


const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {


    const inputStyle = {

        border: error === "" ? '1px solid silver' : '1px solid red'
    }
    const errorStyle = {

        opacity: error === "" ? "0" : "1",
        transition: 'all .3s'



    }

    return (
        <div className={classes.wrapper}>
             <div>
                 <input value={name} onChange={(e => setNameCallback(e.currentTarget.value))}  style={inputStyle} />

                 <button className={classes.btn} onClick={()=> {addUser(name)}}>add</button>
             </div>
            <span className={classes.totalUsers}>{totalUsers}</span>
            <span  style={errorStyle} className={classes.error}> {error}</span>
        </div>
    );
}

export default Greeting;
