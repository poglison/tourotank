import { useEffect, useState } from "react";
import Header from "../components/header";
import Breadcrumbs from "../templates/breadcrumbs";
import Container from "../templates/container";
import Select from "../templates/select";
import Image from "../templates/image";

import { coins, payments } from "../utils/jsons";
import { useParams } from "react-router-dom";
import { getByID } from "../utils/services";
import Skeleton from "../templates/skeleton";
import Button from "../templates/button";



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

    const [ad, setAd] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);

        getByID("ad", id).then((response) => {
            setAd(response);
            setLoading(false);
            console.log(response);
        })


    }, [id])


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

    useEffect(() => {
        if (ad?.price) {
            setPrice(maskCoin({ target: { value: ad?.price } }));
        }
    }, [ad]);


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


                <div className="flex flex-col lg:flex-row justify-between mt-4">


                    <div className="lg:w-30/61 lg:min-w-30/61 p-8 border dark:border-stone-700 bg-white dark:bg-stone-850 rounded-lg flex flex-col lg:mr-5 mb-5 lg:mb-0">


                        <div className="flex flex-col h-full">

                            <div className="flex flex-col md:flex-row h-full">
                                <Skeleton className="w-1/2 min-w-1/2 h-full min-w-44" loading={loading}>
                                    <Image loading={loading} src={ad?.image} className="h-full mr-4 object-cover" />
                                </Skeleton>


                                <div className="w-full mt-4 md:ml-4 md:mt-0 overflow-hidden">

                                    <div className="w-full flex flex-col">
                                        <span className="font-ibm text-xs text-stone-600 dark:text-stone-400">Titulo</span>
                                        <Skeleton className="w-full h-20 truncate" loading={loading}>
                                            <span className="relative font-ibm text-xl font-medium text-stone-800 dark:text-stone-200 truncate">{ad?.title}</span>
                                        </Skeleton>
                                    </div>


                                    <div className="flex flex-col sm:flex-row md:flex-col">
                                        <div className="flex mt-4 item">
                                            <div className="flex flex-col mr-8 min-w-max">
                                                <span className="font-ibm mb-1 text-xs text-stone-600 dark:text-stone-400">Preço unidade</span>
                                                <Skeleton className="w-full h-5" loading={loading}>
                                                    <span className="font-ibm text-xl font-medium text-stone-800 dark:text-stone-200">{ad?.price}</span>
                                                </Skeleton>
                                            </div>

                                            <div className="flex flex-col mr-8 min-w-max">
                                                <span className="font-ibm mb-1 text-xs text-stone-600 dark:text-stone-400">Tanks</span>
                                                <Skeleton className="w-full h-5" loading={loading}>
                                                    <span className="font-ibm text-xl font-medium text-stone-800 dark:text-stone-200">{ad?.tanks}</span>
                                                </Skeleton>
                                            </div>


                                        </div>

                                        <div className="flex flex-col mt-5 min-w-max">
                                            <span className="font-ibm mb-1 text-xs text-stone-600 dark:text-stone-400">Quantidade</span>

                                            <div className="flex">
                                                <div className="w-10 min-w-10 h-10 border dark:border-stone-700 rounded-lg text-stone-400 text-xl flex items-center justify-center font-ibm font-bold">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </div>

                                                <div className="flex border dark:border-stone-700 p-2 px-4 rounded-lg dark:bg-stone-900 outline-none font-ibm text-lg text-stone-800 dark:text-stone-300 dark:placeholder:text-stone-600 ml-2 mr-2">
                                                    <input type="text"
                                                        value={1}
                                                        className="w-14 bg-transparent text-sm outline-none dark:placeholder:text-stone-400 dark:text-stone-200" />
                                                </div>


                                                <div className="w-10 min-w-10 h-10 border dark:border-stone-700 rounded-lg text-stone-400 text-xl flex items-center justify-center font-ibm font-bold">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>






                        </div>
                    </div>




                    <div className="lg:w-30/61 lg:min-w-30/61 p-8 border dark:border-stone-700 bg-white dark:bg-stone-850 rounded-lg flex flex-col">


                        <div className="flex flex-col">
                            <div className="flex w-full mb-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2 text-secondary dark:text-stone-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>

                                <span className="font-ibm text-xs text-stone-600 dark:text-stone-400">Valor do Pedido</span>
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


                            <div className="flex w-full mb-2 mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2 text-secondary dark:text-stone-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                </svg>
                                <span className="font-ibm text-xs text-stone-600 dark:text-stone-400">Metodo de pagamento</span>
                            </div>
                            <Select className="mt-0" isOpen={isOpenPayment} setIsOpen={setIsOpenPayment} onChange={(option) => { setCoin(option) }} options={optionsPayment ? optionsPayment : []} disabled={true} selected={true} />


                        </div>
                    </div>
                </div>


                <div className="w-full flex flex-end justify-end mt-5">

                    <Button type="primary" className="ml-0 p-8 w-full lg:w-30/61">Finalizar compra</Button>
                </div>


            </Container >
        </div >
    )
}
