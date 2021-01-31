import { useRouter } from 'next/router'
import React, { useState } from 'react'
import FormButton from '../../utils/components/formButton'
import InputDate from '../../utils/components/inputDate'
import InputPicker from '../../utils/components/inputPicker'
import InputRadio from '../../utils/components/inputRadio'
import InputText from '../../utils/components/inputText'

const DataForm = ({ data, onSubmit }) => {
    const router = useRouter()
    const { first, last, title } = data.name
    const { date } = data.dob
    const { gender } = data
    const [family, setFamily] = useState(null)
    return (
        <form className="mt-8 pr-16" onSubmit={onSubmit && onSubmit}>
            <p className="text-gray-600 text-lg">Datos personales del titular</p>

            <div className="flex mt-4">
                <div className="w-1/3">
                    <InputPicker classContainer="rounded-r-none" />
                </div>
                <div className="w-2/3">
                    <InputText label={"Nro de Documento"} classContainer="rounded-l-none"
                        defaultValue={data.id.value} required />
                </div>
            </div>
            <InputText label="Nombres" defaultValue={first} required />
            <InputText label="Apellido paterno" defaultValue={last} required />
            <InputText label="Apellido materno" />
            <InputDate label="Fecha de nacimiento" noIcon defaultValue={date.split("T")[0]} required />

            <p className="text-gray-700 mt-6">Género</p>
            <InputRadio text="Masculino" name="genero" value="male" defaultChecked={gender === "male"}
            //onChange={(value) => console.log("male inputRadio:", value)}
            />
            <InputRadio text="Femenino" name="genero" value="female" defaultChecked={gender === "female"}
            //onChange={(value) => console.log("female inputRadio:", value)}
            />

            <p className="text-gray-700 mt-6">¿A quién vamos a asegurar?</p>
            <InputRadio text="Solo a mí" name="seguro" value="0"
                onChange={(value) => setFamily(value)}
            />
            <InputRadio text="A mí y a mi familia" name="seguro" value="1"
                onChange={(value) => setFamily(value)} />

            <div className="flex flex-row-reverse">
                <FormButton text="CONTINUAR" className="w-48 mt-8 r-0" /* onClick={() => router.push("paso2")} */
                    disabled={family === null} type="submit" />
            </div>
        </form>
    )
}

export default DataForm
