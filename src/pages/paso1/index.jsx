import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DataForm from '../../components/paso1/dataForm';
import Greeting from '../../components/paso1/greeting';
import Header from '../../components/paso1/header';
import Layout from '../../utils/components/layout'


const Paso1 = ({ data }) => {
    //const dispatch = useDispatch();
    const router = useRouter()
    console.log("data api:", data)
    function onSubmit(ev) {
        ev.preventDefault();
        router.push("paso2")
    }
    return (
        <Layout title="Paso 1 | Seguro de Salud" classContainer="fondo2 h-screen" className=" px-2 sm:px-24 tracking-tight">

            <div className="grid grid-cols-3 gap-x-10 pt-12">
                <img src="./images/Illustration-1.png" alt="" className="absolute fondoB" />
                <div className="col-start-2 col-span-2">
                    <Header />
                    <div className="px-12 my-8">
                        <Greeting data={data} />
                        <DataForm data={data} onSubmit={onSubmit} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://randomuser.me/api`)
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data: data.results[0] } }
}

export default Paso1