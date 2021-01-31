import React from 'react'

const Greeting = ({data}) => {
    const {first,last,title} = data.name
    return (
        <>
            <h2 className="text-4xl font-light">Hola, <span className="font-normal text-indigo-500 ">{`${title} ${first} ${last}`}</span> </h2>
            <p className="text-gray-600 ">Valida que los datos sean correctos.</p>
        </>
    )
}

export default Greeting
