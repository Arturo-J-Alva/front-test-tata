import React, { useEffect, useState } from 'react'

const CheckBox = ({ children, classContainer, onChecked }) => {
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        onChecked && onChecked(checked)
    }, [checked])
    return (
        <div className={"flex flex-row items-center " + classContainer} >
            <div onClick={() => setChecked(x => !x)}
                className={` cursor-pointer p-0 m-0 w-6 h-6 border rounded mr-4 hover:border-green-500 flex items-center justify-center ${checked ? "border-green-500 bg-green-500" : "border-gray-600"}`}>
                {checked && <svg className="w-4 h-4 text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
            </div>
            <p className="flex-1">{children}</p>
        </div>
    )
}

export default CheckBox
