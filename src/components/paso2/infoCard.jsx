import React from 'react'

const InfoCard = ({ selectPlan, plans }) => {
    const data = plans.find(e => e.id === selectPlan)
    return (
        <div className="w-full bg-gray-300 rounded-lg mt-10 text-gray-700 " style={{ paddingBottom: "0.2rem" }}>
            <p className="text-center py-2 text-sm">Cuentas con estos beneficios:</p>
            <div className="bg-white rounded-lg" style={{ width: "99%", margin: "auto" }}>
                <div className="ml-8 mr-2">
                    <div className="border-b-2 border-gray-300 flex py-8">
                        <div className="w-2/3 border-r-2 border-gray-300">
                            <p className="font-medium">Cobertura máxima</p>
                            <p className="font-medium text-3xl my-1">S/ {data.coverage} </p>
                            <button className="bg-yellow-600 tracking-tight px-2 rounded-lg text-xs text-gray-300">
                                PLAN {data.title}
                            </button>
                        </div>
                        <div className="w-1/3 relative">
                            <img src="./images/Illustration.png" alt="image" className=" w-24 h-20 absolute" style={{ bottom: "0.5rem", right: "0.5rem" }} />
                        </div>
                    </div>
                    <div className="py-4">
                        <ul className="text-lg">
                            <li className={"flex flex-row items-center my-4 " + (data.benefits[0] ? "font-semibold" : "font-normal text-gray-500 line-through")}>
                                <svg className={"w-5 h-5 mr-2 " + (data.benefits[0] ? "text-indigo-500" : "text-gray-400")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                                Lima <span className="ml-1 font-normal text-sm"> (zona de cobertura)</span>
                            </li>
                            <li className={"flex flex-row items-center my-4 " + (data.benefits[1] ? "font-semibold" : "font-normal text-gray-500 line-through")}>
                                <svg className={"w-5 h-5 mr-2 " + (data.benefits[1] ? "text-indigo-500" : "text-gray-400")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                                +30 clínicas <span className="ml-1 font-normal text-sm"> (en red afiliada)</span>
                            </li>
                            <li className={"flex flex-row items-center my-4 text-sm " + (data.benefits[2] ? "font-semibold" : "font-normal text-gray-500 line-through")}>
                                <svg className={"w-5 h-5 mr-2 " + (data.benefits[2] ? "text-indigo-500" : "text-gray-400")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                                Médico a domicilio
                            </li>
                            <li className={"flex flex-row items-center my-4 text-sm " + (data.benefits[3] ? "font-semibold" : "font-normal text-gray-500 line-through")}>
                                <svg className={"w-5 h-5 mr-2 " + (data.benefits[3] ? "text-indigo-500" : "text-gray-400")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                                Chequeos preventivos
                            </li>
                            <li className={"flex flex-row items-center my-4 text-sm " + (data.benefits[4] ? "font-semibold" : "font-normal text-gray-500 line-through")}>
                                <svg className={"w-5 h-5 mr-2 " + (data.benefits[4] ? "text-indigo-500" : "text-gray-400")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                                Reembolso nacional
                            </li>
                            <li className={"flex flex-row items-center my-4 text-sm " + (data.benefits[5] ? "font-semibold" : "font-normal text-gray-500 line-through")}>
                                <svg className={"w-5 h-5 mr-2 " + (data.benefits[5] ? "text-indigo-500" : "text-gray-400")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                                Reembolso internacional
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
