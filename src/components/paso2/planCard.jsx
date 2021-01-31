import React from 'react'

const PlanCard = ({ select, title, price, onClick, id }) => {
    return (
        <div
            className={"pl-3 pr-1 text-gray-700 border-2 rounded-xl pt-1 cursor-pointer " + (select ? "border-yellow-700" : "border-gray-300")}
            style={{ width: "7.25rem" }}
            onClick={() => onClick && onClick(id)}
        >
            <div className="flex flex-row-reverse">
                {
                    select ?
                        <svg className="w-6 h-6 text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        :
                        <div className="w-6 h-6 border border-gray-300 rounded-full" />
                }
            </div>
            <p className="text-xs">{title}</p>
            <div className="flex flex-row items-center -my-1">
                <p className="font-light">s/</p>
                <p className="text-3xl ml-1">{price}</p>
            </div>
            <p className="text-sm text-gray-600 mb-4">mensual</p>
        </div>
    )
}

export default PlanCard
