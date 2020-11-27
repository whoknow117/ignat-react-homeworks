import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

 

function HW4() {
    const [text, setText] = useState<string>("");
    const error = text ? "" : 'Введите текс';
    const showAlert = () => {
        if (error) {
            alert("введите текст...");
        } else {
            alert(text);
        }
    }

    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div>


            <div className={s.column}>

                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    className={s.blue}
                />


                <SuperButton
                    red
                    onClick={showAlert}
                >
                    delete
                </SuperButton>


                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text
                </SuperCheckbox>


            </div>


        </div>
    );
}

export default HW4;
