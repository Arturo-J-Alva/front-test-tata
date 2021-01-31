import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/paso2/header';
import InfoCard from '../../components/paso2/infoCard';
import PlanCard from '../../components/paso2/planCard';
import PlanList from '../../components/paso2/planList';
import FormButton from '../../utils/components/formButton';
import Layout from '../../utils/components/layout'


const Paso2 = () => {
    //const dispatch = useDispatch();
    const router = useRouter();
    const [selectPlan, setSelectPlan] = useState(1)
    const [view1, setView1] = useState(false)
    const [view2, setView2] = useState(false)
    
    const plans = [
        { id: 1, title: "BÁSICO", price: 160, coverage: "1MM", benefits: [1, 1, 0, 0, 0, 0] },
        { id: 2, title: "AVANZADO", price: 200, coverage: "5MM", benefits: [1, 1, 1, 1, 0, 0] },
        { id: 3, title: "PREMIUM", price: 250, coverage: "10MM", benefits: [1, 1, 1, 1, 1, 0] },
        { id: 4, title: "FULL", price: 500, coverage: "25MM", benefits: [1, 1, 1, 1, 1, 1] },
    ]

    return (
        <Layout title="Paso 2 | Seguro de Salud" classContainer="fondo2 h-screen" className=" px-2 sm:px-24 tracking-tight">

            <div className="grid grid-cols-3 gap-x-10 pt-12">
                <img src="./images/Illustration-1.png" alt="" className="absolute fondoB" />
                <div className="col-start-2 col-span-2">
                    <Header />
                    <div className="px-12 my-8" style={{ maxWidth: "600px" }}>

                        <h2 className="text-4xl font-light">Elige <span className="font-normal text-indigo-500 ">tu protección</span> </h2>
                        <p className="text-gray-600 ">Selecciona tu plan de salud ideal.</p>

                        <PlanList selectPlan={selectPlan} setSelectPlan={setSelectPlan} plans={plans} />
                        <InfoCard selectPlan={selectPlan} plans={plans} />

                        <h3 className="text-xl font-normal text-gray-700 my-6">Revisa nuestros <br /><span className="font-medium text-indigo-500 ">servicios y exclusiones</span> </h3>

                        <h4 className="text-lg font-medium text-gray-700 py-5 border-t-2 border-b-2 border-gray-300 flex flex-row justify-between cursor-pointer"
                            onClick={() => setView1(x => !x)}>
                            Servicios brindados
                            {
                                !view1 ?
                                    <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    :
                                    <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
                            }
                        </h4>
                        {view1 && <p className="border-b-2 border-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iusto porro, at earum dolor, eum excepturi non consectetur beatae ducimus tenetur delectus molestiae odit placeat. Incidunt quia laudantium ab labore?
                        </p>}

                        <h4 className="text-lg font-medium text-gray-700 py-5 border-b-2 border-gray-300 flex flex-row justify-between cursor-pointer"
                            onClick={() => setView2(x => !x)}>
                            Exclusiones
                            {
                                !view2 ?
                                    <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    :
                                    <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
                            }
                        </h4>
                        {view2 && <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iusto porro, at earum dolor, eum excepturi non consectetur beatae ducimus tenetur delectus molestiae odit placeat. Incidunt quia laudantium ab labore?
                        </p>}

                        <div className="flex flex-row-reverse items-center mt-8">
                            <FormButton text="COMPRAR PLAN" onClick={() => router.push("pasoFin")} />
                            <p className="text-gray-500 text-sm font-medium mr-8">ENVÍAR COTIZACIÓN POR CORREO</p>
                        </div>

                    </div>

                </div>
            </div>
        </Layout>
    )
}


export default Paso2