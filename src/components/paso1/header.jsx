import React from 'react'

const Header = () => {
    return (
        <div className="text-indigo-500 flex flex-row items-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" /></svg>
            <h1 className="ml-4">PASO 1 <span className="text-gray-500"> DE 7</span> </h1>
        </div>
    )
}

export default Header
