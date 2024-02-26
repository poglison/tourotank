
import { useState } from "react";

export default function Options() {

    const [selected, setSelected] = useState(0);

    return (
        <div className="flex flex-row w-full h-40 space-x-10">

            <div className={"flex flex-col dark:text-white w-1/3 h-32 border dark:border-stone-900 rounded-xl p-4 hover:bg-stone-900 cursor-pointer " + (selected === 1 ? "border !border-primary !border-solid" : "")} onClick={() => setSelected(1)}>
                <span className="text-lg font-ibm font-medium">Normal</span>
                <span className="">
                    O item vendido será exatamente o do título do anúncio cadastrado neste formulário.
                </span>
            </div>

            <div className={"flex flex-col dark:text-white w-1/3 h-32 border dark:border-stone-900 rounded-xl p-4 hover:bg-stone-900 cursor-pointer " + (selected === 2 ? "border !border-primary !border-solid" : "")} onClick={() => setSelected(2)}>
                <span className="text-lg font-ibm font-medium">Dinâmico</span>
                <span className="">
                    Anuncie vários itens; dando opções para que o cliente escolha qual item ele deseja.
                </span>
            </div >

            <div className={"flex flex-col dark:text-white w-1/3 h-32 border dark:border-stone-900 rounded-xl p-4 hover:bg-stone-900 cursor-pointer " + (selected === 3 ? "border !border-primary !border-solid" : "")} onClick={() => setSelected(3)}>
                <span className="text-lg font-ibm font-medium">Serviço</span>
                <span>
                    Anuncie um serviço no qual o preço não é fixo e que dependem de orçamentos.
                </span>
            </div>


        </div >
    )
}