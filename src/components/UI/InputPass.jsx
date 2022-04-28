import React, {useState} from 'react';
import "../../styles/UI/Input.css";

const InputPass = React.forwardRef((props, ref) => {
    const { label="", pass, onChange, placeholder="", errorText=undefined, name, type="text"} = props;
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <div className={props.cname}>
            {label!==""?<div>{label}</div>:<></>}
            <div style={{display: "contents"}} id='pass'>
                <p className={isActive ? 'secure showPass': "secure"}>
                    <input
                        name={name}
                        type={type}
                        value={pass}
                        placeholder={placeholder}
                        onChange={onChange}/>
                </p>
                <div className={"ic-1"} onClick={toggleClass} ></div>
            </div>
            {undefined !== errorText?
                <p className="error-text">{errorText}</p>:
                <></>
            }
        </div>
    );
});

export default InputPass;
