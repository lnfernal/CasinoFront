import React from 'react';

const Input = React.forwardRef((props, ref) => {
    const { label="",name,value,onChange, classInput="",classLabel="", symbol=""} = props;
    const inputStyle = {
        textAlign: "right",
        paddingRight: "25px",
        borderRadius: "6px",
    }
    return (
        <label
            className={classLabel}>
            {label}
            {"" != symbol?
                <div className="input-container">
                    <input
                        className={classInput}
                        name={name}
                        value={value}
                        type="number"
                        required
                        autoComplete={true}
                        onChange={onChange}
                        style={inputStyle}>
                    </input>
                </div>:
                <input
                    className={classInput}
                    name={name}
                    type="text"
                    value={value}
                    autoComplete={true}
                    onChange={onChange}>
                </input>
            }
        </label>
    );
});

export default Input;