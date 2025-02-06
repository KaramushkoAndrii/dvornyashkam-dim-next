

import { useState } from "react";
import { useTranslation } from "react-i18next";

import './input.scss';

const Input = ({type, name, id, label, ...rest}) => {

    const [isFocus, setIsFocus] = useState(false);

    const { t } = useTranslation();

    const handleBlur = (e) => {
        setIsFocus(!!e.target.value)
    };

    return (
        <>
            <div className="input-group">
                <label  htmlFor={id}
                        className={`input-label ${isFocus ? "filled" : ""}`}
                >
                    {t(label)}
                </label>
                <input  id={id} 
                        type={type} 
                        name={name} 
                        onBlur={handleBlur}
                        onFocus={() => setIsFocus(true)}
                        {...rest}/>
            </div>
        </>
    )
}

export default Input;