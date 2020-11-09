import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: string
    onClick?: () => void
    error?: string

}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {   error,
        onClick,
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${s.normal} ${!red && s.red}`;

    return (


            <button onClick={onClick}   className={finalClassName}
                    {...restProps}></button>




    );
}

export default SuperButton;
