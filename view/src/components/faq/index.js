import { useEffect, useState } from "react";

export default function FAQ(props) {


    const [faq, setFaq] = useState([
        {
            title: "O que é o tourotank?",
            description: "O Touro é uma plataforma de investimentos que conecta investidores a empreendedores de todo o Brasil. Através do Touro, investidores podem investir em empresas de alto potencial de crescimento e retorno financeiro.",
            click: false
        },
        {
            title: "Como funciona o tourotank?",
            description: "O Touro é uma plataforma de investimentos que conecta investidores a empreendedores de todo o Brasil. Através do Touro, investidores podem investir em empresas de alto potencial de crescimento e retorno financeiro.",
            click: false
        },

        {
            title: "Quem pode investir no tourotank?",
            description: "O Touro é uma plataforma de investimentos que conecta investidores a empreendedores de todo o Brasil. Através do Touro, investidores podem investir em empresas de alto potencial de crescimento e retorno financeiro.",
            click: false
        },
    ]);

    useEffect(() => {
        if (props.faq) {
            setFaq(props.faq)
        }
    }, [props.faq])

    return (
        <div className={"w-full mt-10 " + (props.className)}>


            {
                props.title != false &&
                <div className="flex items-center justify-center">
                    <p className="font-ibm text-4xl font-bold text-primary !m-0">FAQ</p>
                </div>
            }

            <div className="mt-5">

                {faq?.map((item, index) => (
                    <div key={index} className="bg-stone-100 dark:bg-stone-900  mb-2 md:mr-6 hover:bg-stone-200 hover:dark:bg-stone-800" onClick={() => { setFaq(faq.map((item, i) => { if (i == index) { item.click = !item.click } return item })) }}>
                        <div key={index} className="w-full mt-1 p-4 flex justify-between cursor-pointer">
                            <p className="font-ibm text-xl font-medium text-stone-700 dark:text-stone-300 !m-0">{item.title}</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-stone-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                        </div>

                        {item.click && (
                            <div className="w-ful p-4 flex justify-between cursor-pointer">
                                <p className="font-ibm text-lg font-normal text-stone-500 dark:text-stone-400 !m-0">{item.description}</p>
                            </div>
                        )}
                    </div>
                ))}

            </div>

        </div >
    )
}