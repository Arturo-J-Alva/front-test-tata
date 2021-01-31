import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FormRight from '../../components/inicio/formRight';
import InfoLeft from '../../components/inicio/infoLeft';
import Layout from '../../utils/components/layout'


const Inicio = () => {
    const router = useRouter()
    const [formData, setFormData] = useState(formDataInit)

    function onChange(value, key) {
        setFormData(x => {
            return { ...x, [key]: value }
        })
    }
    function onSubmit(ev) {
        ev.preventDefault()
        console.log("onSubmit!")
        const { document, birthday, phone, check1, check2 } = formData
        if (!document || !birthday || !phone || !check1 || !check2) return alert("Debe aceptar las políticas para continuar.")
        router.push("paso1")

    }
    console.log(formData)
    return (
        <Layout title="Seguro de Salud" classContainer="fondo1" className="px-2 sm:px-24 tracking-tight">

            <div className="grid grid-cols-2 gap-x-24 pt-20">
                <img src="./images/Illustration-1.png" alt="" className="absolute bottom-auto right-0 left-0 mx-auto" />
                <InfoLeft />
                <FormRight onChange={onChange} onSubmit={onSubmit} />
            </div>
        </Layout>
    )
}

const formDataInit = {
    document: "",
    birthday: "",
    phone: "",
    check1: false,
    check2: false,
}
export default Inicio
