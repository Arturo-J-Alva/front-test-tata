import React, { useEffect, useRef, useState } from 'react'

const InputText = ({ label, inputValue, classContainer, required, defaultValue }) => {
    const input = useRef();
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState(null)
    useEffect(() => {
        focus && input.current.focus()
    }, [focus])

    useEffect(() => {
        inputValue && inputValue(value)
    }, [value])

    useEffect(() => {
        defaultValue && setValue(defaultValue)
    }, [])

    return (
        <div
            onClick={() => setFocus(true)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            className={"text-input w-full flex flex-col justify-center border border-gray-400 px-4 rounded hover:border-indigo-400 text-gray-600 focus:border-indigo-600 my-2 " + classContainer}>
            {value ? <p className="text-sm">{label}</p> : focus && <p className="text-sm">{label}</p>}
            <input type="text"
                className={value ? " text-xl focus:outline-none text-gray-700 w-full" : focus ? " text-xl focus:outline-none text-gray-700 w-full" : " text-lg w-full"}
                placeholder={value ? "" : focus ? "" : label}
                ref={input}
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
                required={required}
            />
        </div>
    )
}

export default InputText
