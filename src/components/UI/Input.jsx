import React from 'react';

const Input = React.forwardRef((props, ref) => {
    const { label="",name,value,onChange, hide=false, placeholder="", type="text", classInput="",classLabel="", symbol=""} = props;
    const inputStyle = {
        textAlign: "right",
        paddingRight: "25px",
        borderRadius: "6px",
    }
    return (
        <div>
        <label
            className={classLabel}>
            {label}
            {"" != symbol?
                <div className="input-container">
                    <input
                        className={classInput}
                        name={name}
                        value={value}
                        type={type}
                        required
                        placeholder={placeholder}
                        autoComplete={true}
                        onChange={onChange}
                        style={inputStyle}/>
                </div>:
                <input
                    className={classInput}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    autoComplete={true}
                    onChange={onChange}/>
            }
        </label>
        </div>
    );
});

export default Input;