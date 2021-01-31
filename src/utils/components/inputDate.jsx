import React, { useEffect, useRef, useState } from 'react'

const InputDate = ({ label, inputValue, classContainer, noIcon, required, defaultValue }) => {
    const input = useRef();
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState(null)
    useEffect(() => {
        focus && focus && input.current.focus()
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
            className={"text-input w-full flex items-center  border border-gray-400 px-4 rounded hover:border-indigo-400 text-gray-600 focus:border-indigo-600 my-2 " + classContainer}>
            <div className="flex flex-col justify-center flex-1">
                {value ? <p className="text-sm">{label}</p> : focus && <p className="text-sm">{label}</p>}
                <input type={value ? "date" : focus ? "date" : "text"}
                    className={value ? "text-xl focus:outline-none text-gray-700 w-full" : focus ? "text-xl focus:outline-none text-gray-700 w-full" : " text-lg my-3 w-full"}
                    placeholder={value ? "" : focus ? "" : label}
                    ref={input}
                    onChange={(ev) => setValue(ev.target.value)}
                    required={required}
                    value={value}
                />
            </div>
            {!noIcon && <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>}
        </div>
    )
}

export default InputDate
