import { useState } from "react";
import Header from "../components/header";
import Breadcrumbs from "../templates/breadcrumbs";
import Container from "../templates/container";
import Select from "../templates/select";



export default function Buy(props) {

    const [price, setPrice] = useState(0);
    const [coin, setCoin] = useState("BRL");
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState(
        [{
            "label": "Real",
            "value": "BRL",
            "image": "https://img.icons8.com/color/48/brazil-circular.png"
        },
        {
            "label": "Dolar",
            "value": "USD",
            "image": "https://img.icons8.com/color/48/usa-circular.png"
        },
        {
            "label": "Euro",
            "value": "EUR",
            "image": "https://img.icons8.com/color/48/spain2-circular.png"
        },
        {
            "label": "Yen",
            "value": "JPY",
            "image": "https://img.icons8.com/color/48/japan-circular.png"
        },
        {
            "label": "Libra",
            "value": "GBP",
            "image": "https://img.icons8.com/color/48/great-britain-circular.png"
        },
        {
            "label": "Yuan",
            "value": "CNY",
            "image": "https://img.icons8.com/color/48/china-circular.png"
        },
        {
            "label": "Rublo",
            "value": "RUB",
            "image": "https://img.icons8.com/color/48/russian-federation-circular.png"
        },
        {
            "label": "Bitcoin",
            "value": "BTC",
            "image": "https://th.bing.com/th/id/R.46afadddcc08be483a971581981f2b04?rik=5zZqzokQPvp5Ww&riu=http%3a%2f%2fstore-images.s-microsoft.com%2fimage%2fapps.17518.9007199266525906.711fe06b-31fe-48b3-85b2-9147c65d66ce.8e1c2c26-16e6-413b-926e-b785d38b915a&ehk=FJgCYuMHrIquhx9LbTCEvce5QbFloAQ8SsjBlH0T1ys%3d&risl=&pid=ImgRaw&r=0"
        }
        ]);


    const maskCoin = (event) => {
        const onlyDigits = event.target.value
            .split("")
            .filter(s => /\d/.test(s))
            .join("")
            .padStart(3, "0")
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
        return maskCurrency(digitsFloat);
    }

    const maskCurrency = (valor, locale = 'pt-BR', currency = coin) => {
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

                    <div className="p-10 w-full border dark:border-stone-700 bg-white dark:bg-stone-850 rounded-lg flex flex-col">

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>

                            <span className="text-white ml-5">Pedido</span>
                        </div>


                        <div className="flex flex-col mt-10">
                            <div className="flex w-full mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>

                                <span className="text-white ml-5">Valor do Pedido</span>
                            </div>

                            <div className="flex">
                                <div className="flex w-full border dark:border-stone-700 p-2 px-4 rounded-xl dark:bg-stone-850 outline-none font-ibm text-lg text-stone-800 dark:text-stone-300 dark:placeholder:text-stone-600 mr-4">
                                    <input type="text" value={price}
                                        onChange={(e) => {
                                            var value = maskCoin(e);
                                            setPrice(value);
                                        }}
                                        className="w-full dark:bg-stone-850 text-sm outline-none dark:placeholder:text-stone-400 dark:text-stone-200" />
                                </div>

                                <Select className="mt-0" isOpen={isOpen} setIsOpen={setIsOpen} onChange={(option) => { setCoin(option) }} options={options} disabled={true} selected={true} />

                            </div>

                        </div>
                    </div>

                </div>


            </Container >
        </div >
    )
}
