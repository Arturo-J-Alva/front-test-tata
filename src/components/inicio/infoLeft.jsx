import React from 'react'

const InfoLeft = () => {
    const imgs = [
        { text: "Cómpralo de manera fácil y rápida", src: "./images/gl_shield-20x20.png" },
        { text: "Cotiza y compra tu seguro 100% digital", src: "./images/gl_mobile-20x20.png" },
        { text: "Hasta S/. 12 millones de cobertura anual", src: "./images/gl_shield-20x20-1.png" },
        { text: "Más de 300 clínicas en todo el Perú", src: "./images/gl_mobile-20x20-1.png" }
    ]
    return (
        <div >
            <h1 className="text-5xl leading-tight text-gray-100 font-light">
                Seguro de <br /> <span className=" font-medium">Salud</span>
            </h1>
            <ul className="text-gray-400 mt-8">
                {
                    imgs.map(({ text, src }, ind) => (
                        <li className="flex flex-row items-center leading-10 text-base font-normal" key={ind}>
                            <img src={src} alt={`icon${ind}`} className="w-5 h-5 mr-2" />
                            {text}
                        </li>
                    ))
                }
            </ul>
            <p className="text-gray-500 mt-24 text-xs">&copy;2021 RIMAC Seguros y Reaseguros.</p>
        </div>
    )
}

export default InfoLeft
