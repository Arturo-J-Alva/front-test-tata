import React, { useEffect, useRef, useState } from 'react'

const InputPicker = ({ inputValue, classContainer }) => {
    const input = useRef();
    const [focus, setFocus] = useState(false)
    const [value, setValue] = useState(null)
    useEffect(() => {
        focus && input.current.focus()
    }, [focus])

    useEffect(() => {
        inputValue && inputValue(value)
    }, [value])

    return (
        <div
            onClick={() => setFocus(true)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
            className={"text-input w-full flex flex-col justify-center border border-gray-400 px-4 rounded hover:border-indigo-400 text-gray-600 focus:border-indigo-600 my-2 " + classContainer}>
            <select
                className="text-normal focus:outline-none text-gray-700 w-full"
                ref={input}
                onChange={(ev) => setValue(ev.target.value)}
            >
                <option value="DNI">DNI</option>
                <option value="CARNET">CARNET</option>
            </select>
        </div>
    )
}

export default InputPicker
