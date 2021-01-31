import { useRouter } from 'next/router';
import React from 'react'
import FormButton from '../../utils/components/formButton';
import Layout from '../../utils/components/layout'

const PasoFinal = () => {
    const router = useRouter()
    return (
        <Layout title="Fin | Seguro de Salud" classContainer="fondo2 h-screen" className=" px-2 sm:px-24 tracking-tight">

            <div className="grid grid-cols-3 gap-x-10 pt-12">
                <img src="./images/Illustration-1.png" alt="" className="absolute fondoB" />
                <div className="col-start-2 col-span-2">

                    <div className="tracking-tight leading-tight border-t-2 border-gray-100" style={{ width: "30rem", marginTop: "12rem" }}>
                        <h1 className="text-4xl text-gray-700 font-light">!Gracias por <span className="text-indigo-500 font-normal"> confiar en <br /> nosotros!</span> </h1>
                        <p className="text-gray-700 font-light">Queremos conocer mejor la salud de los asegurados. Un asesor <span className="font-normal">se pondrá en contacto </span>contigo en las siguientes <span className="font-normal">48 horas.</span> </p>
                        <div className="flex flex-row-reverse mt-6">
                            <FormButton text="IR A SALUD" className="px-8" onClick={() => router.push("inicio")} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PasoFinal