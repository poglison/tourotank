import { useEffect, useState } from "react";
import Header from "../components/header";
import Breadcrumbs from "../templates/breadcrumbs";
import Container from "../templates/container";
import Select from "../templates/select";

import { coins, payments } from "../utils/jsons";


export default function Buy(props) {

    const [price, setPrice] = useState(0);
    const [value, setValue] = useState({ target: { value: "0" } });
    const [coin, setCoin] = useState({
        "label": "Real",
        "value": "BRL",
        "image": "https://img.icons8.com/color/48/brazil-circular.png"
    });
    const [payment, setPayment] = useState({
        "label": "Pix",
        "value": "PIX",
        "image": "https://img.icons8.com/color/48/brazil-circular.png"
    });
    const [isOpenCoin, setIsOpenCoin] = useState(false);
    const [isOpenPayment, setIsOpenPayment] = useState(false);
    const [optionsCoin, setOptionsCoin] = useState();

    const [optionsPayment, setOptionsPayment] = useState();


    useEffect(() => {
        setCoin("BRL");
    }, []);

    useEffect(() => {
        setOptionsCoin(coins);
    }, [coins]);


    useEffect(() => {
        setOptionsPayment(payments);
    }, [payments]);

    useEffect(() => {
        maskCoin(value);
    }, [coin]);


    const maskCoin = (event) => {
        const onlyDigits = event.target.value
            .split("")
            .filter(s => /\d/.test(s))
            .join("")
            .padStart(3, "0")
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
        return maskCurrency(digitsFloat, 'pt-BR', "BRL");
    }

    const maskCurrency = (valor, locale, currency) => {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency
        }).format(valor)
    }



    return (
        <div className="bg-white dark:bg-stone-850 overflow-x-hidden min-h-screen">
            <Header />

            <Container>

                <Breadcrumbs history={[{ title: 'Início', path: '/' }, { title: 'Anuncio', path: '/ad' }, { title: 'Comprar', path: '/buy' }]} />


                <div className="flex flex-row justify-between mt-10">


                    <div className="p-10 w-full border dark:border-stone-700 bg-white dark:bg-stone-850 rounded-lg flex flex-col mr-5">


                        <div className="flex flex-col">
                            <div className="flex w-full mb-4">
                                
                            </div>

                          


                            <div className="flex w-full mb-4 mt-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary dark:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                </svg>

                                <span className="text-secondary dark:text-white ml-4">Metodo de pagamento</span>
                            </div>
                            <Select className="mt-0" isOpen={isOpenPayment} setIsOpen={setIsOpenPayment} onChange={(option) => { setCoin(option) }} options={optionsPayment ? optionsPayment : []} disabled={true} option={coin} selected={true} />


                        </div>
                    </div>




                    <div className="p-10 w-full border dark:border-stone-700 bg-white dark:bg-stone-850 rounded-lg flex flex-col">


                        <div className="flex flex-col">
                            <div className="flex w-full mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary dark:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>

                                <span className="text-secondary dark:text-white ml-4">Valor do Pedido</span>
                            </div>

                            <div className="flex">
                                <div className="flex w-full border dark:border-stone-700 p-2 px-4 rounded-lg dark:bg-stone-900 outline-none font-ibm text-lg text-stone-800 dark:text-stone-300 dark:placeholder:text-stone-600 mr-4">
                                    <input type="text" value={price}
                                        onChange={(e) => {
                                            var value = maskCoin(e);
                                            setPrice(value);
                                            setValue(e);
                                        }}
                                        className="w-full bg-transparent text-sm outline-none dark:placeholder:text-stone-400 dark:text-stone-200" />
                                </div>

                                <Select className="mt-0" isOpen={isOpenCoin} setIsOpen={setIsOpenCoin} onChange={(option) => { setCoin(option) }} options={optionsCoin ? optionsCoin : []} disabled={true} option={coin} selected={true} />

                            </div>


                            <div className="flex w-full mb-4 mt-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary dark:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                </svg>

                                <span className="text-secondary dark:text-white ml-4">Metodo de pagamento</span>
                            </div>
                            <Select className="mt-0" isOpen={isOpenPayment} setIsOpen={setIsOpenPayment} onChange={(option) => { setCoin(option) }} options={optionsPayment ? optionsPayment : []} disabled={true} option={coin} selected={true} />


                        </div>
                    </div>

                </div>


            </Container >
        </div >
    )
}
