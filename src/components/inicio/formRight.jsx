import React from 'react'
import InputDate from '../../utils/components/inputDate'
import InputText from '../../utils/components/inputText'
import InputPicker from '../../utils/components/inputPicker'
import CheckBox from '../../utils/components/checkBox'
import FormButton from '../../utils/components/formButton'
import { useRouter } from 'next/router'

const FormRight = ({ onChange, onSubmit }) => {
    
    return (
        <div>
            <form className="flex flex-col mx-auto font-light" style={{ width: "330px" }} onSubmit={onSubmit}>
                <h2 className="text-3xl text-gray-600">Obtén tu <span className="text-indigo-500 font-medium">seguro ahora</span> </h2>
                <p className="text-gray-600">Ingrese los datos para comenzar</p>
                <div className="flex mt-4">
                    <div className="w-1/3">
                        <InputPicker classContainer="rounded-r-none" inputValue={() => null} />
                    </div>
                    <div className="w-2/3">
                        <InputText label={"Nro de Documento"} classContainer="rounded-l-none" inputValue={(value) => onChange(value, "document")} required />
                    </div>
                </div>
                <InputDate label={"Fecha de nacimiento"} inputValue={value => onChange(value, "birthday")} required />
                <InputText label={"Celular"} border inputValue={(value) => onChange(value, "phone")} required />

                <CheckBox classContainer="text-sm text-gray-500 mt-2" onChecked={(value) => onChange(value, "check1")}>
                    Acepto la <a href="#" className="underline">Política de Protección de Datos Personales y los Términos y Condiciones.</a>
                </CheckBox>

                <CheckBox classContainer="text-sm text-gray-500 mt-2" onChecked={(value) => onChange(value, "check2")}>
                    Acepto la <a href="#" className="underline">Política de Envío de Comunicaciones Comerciales.</a>
                </CheckBox>

                <FormButton text="COMENCEMOS" className="w-48 mt-8" type="submit"
                    onClick={() => null} />

            </form>
        </div>
    )
}

export default FormRight
