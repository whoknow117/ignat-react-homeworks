import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";


function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
        setValue(restoreState("editable-span-value", value));
    };

    const wrapStyle = {
        margin: "100px auto 410px auto",

    }
    const imageStyle = {
        width: ' 20px',
        height: ' 20px',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginLeft: "10px"
    }
    const imgStyle = {
        width: '100%',
        height:  '100%',

    }

    const separateStyle = {
        display: 'flex'
    }

    return (
        <div style={wrapStyle}>



            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined :  <div style={separateStyle}>
                            <span>enter text</span>
                            <div style={imageStyle}>
                                <img style={imgStyle} src="https://simpleicon.com/wp-content/uploads/pencil.png" alt=""/>
                            </div>
                        </div> }}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}

        </div>
    );
}

export default HW6;
