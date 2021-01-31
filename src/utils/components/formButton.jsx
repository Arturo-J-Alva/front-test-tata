import React from 'react'

const FormButton = ({ text, onClick, className, disabled, type }) => {

    return (
        <button
            className={"rounded-md focus:outline-none " + (className) + (disabled ? " bg-indigo-100" : " bg-indigo-500 hover:bg-indigo-600")}
            onClick={onClick && onClick}
            type={type || "button"} disabled={disabled}>
            <p
                className={"text-center px-4 my-3 text-gray-100 " + (disabled && "text-gray-500")} >
                {text}
            </p>
        </button>
    )
}

export default FormButton
