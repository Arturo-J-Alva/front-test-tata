import React from 'react'

const InputRadio = ({ text, name, defaultChecked, onChange, value }) => {
    return (
        <div className="flex flex-row items-center my-2">
            <input type="radio" id={text} name={name} color="red" value={value}
                onChange={(ev) => onChange && onChange(ev.target.value)}
                defaultChecked={defaultChecked || false}
            //defaultValue={}
            />
            <label htmlFor={text} className="ml-2">{text}</label>
        </div>
    )
}

export default InputRadio
