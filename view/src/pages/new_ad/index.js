import { useEffect, useState, useContext } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import InformationAd from "../../components/info_ad";
import Breadcrumbs from "../../templates/breadcrumbs";
import Container from "../../templates/container";

import Timeline from "../../templates/timeline";
import Buttons from "../../templates/buttons";
import Team from "../../templates/team";
import FAQ from "../../components/faq";

import UserContext from "../../context";
import Options from "../../templates/options";
import Select from "../../templates/select";

export default function NewAd(props) {

    const { user } = useContext(UserContext);


    const [ad, setAd] = useState({});
    const [type, setType] = useState(1);

    useEffect(() => {
        document.scrollingElement.scrollTop = 0;
    }, [])


    const convertBase64 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setAd({ ...ad, image: reader.result })
        };
    };


    const mascaraMoeda = (event) => {
        const onlyDigits = event.target.value
            .split("")
            .filter(s => /\d/.test(s))
            .join("")
            .padStart(3, "0")
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
        return maskCurrency(digitsFloat);
    }

    const maskCurrency = (valor, locale = 'pt-BR', currency = 'BRL') => {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency
        }).format(valor)
    }

    return (
        <div className="bg-white dark:bg-stone-950 overflow-x-hidden">

            <Header />

            <Container className="w-full md:w-[calc(100%-326px)] min-h-screen">

                <Breadcrumbs history={[{ title: 'Início', path: '/' }, { title: 'Projeto', path: '/ad' }, { title: 'Novo Projeto', path: '/ad/new' }]} />
                <InformationAd type="new" ad={ad} setAd={setAd} user={user} />


                <div className="w-full mt-4 flex flex-col">

                    <span className="text-ibm text-lg font-medium mb-4 block text-stone-800 dark:text-stone-200">Anúncio</span>

                    <div className="flex flex-col">
                        <span className="font-ibm text-xs text-stone-600">Titulo do anúncio</span>

                        <input onChange={(e) => { setAd({ ...ad, title: e.target.value }) }} placeholder="Digite o titulo do anúncio" className="border-[1.5px] dark:border-stone-900 p-2 px-4 rounded-xl mt-1 dark:bg-stone-950 outline-none font-ibm text-lg text-stone-800 dark:text-stone-300 dark:placeholder:text-stone-600" />
                    </div>

                    <div className="flex flex-col mt-4 ">
                        <span className="font-ibm text-xs text-stone-600">Descrição</span>
                        <textarea onChange={(e) => { setAd({ ...ad, description: e.target.value }) }} placeholder="Digite a descrição do anúncio" className="border-[1.5px] dark:border-stone-900 p-2 px-4 rounded-xl mt-1 dark:bg-stone-950 xl:h-36 xl:overflow-auto font-ibm text-lg text-stone-700 dark:text-stone-400 outline-none resize-none dark:placeholder:text-stone-600" />

                    </div>

                </div>


                <div className="w-full flex flex-col mt-6">

                    <span className="text-ibm text-lg font-medium mb-4 block text-stone-800 dark:text-stone-200">Tipo do Anúncio</span>

                    <Options setType={setType} type={type} />

                </div>

                <div className="w-full flex flex-col mt-6">
                    <span className="text-ibm text-lg font-medium mb-4 block text-stone-800 dark:text-stone-200">Informações do Anúncio</span>

                    <div className="flex flex-col">
                        <span className="font-ibm text-xs text-stone-600">Valor do anúncio</span>

                        <input value={ad?.price} onChange={(e) => {
                            var value = mascaraMoeda(e)
                            setAd({ ...ad, price: value })
                        }} className="border-[1.5px] dark:border-stone-900 p-2 px-4 rounded-xl mt-1 dark:bg-stone-950 outline-none font-ibm text-lg text-stone-800 dark:text-stone-300 dark:placeholder:text-stone-600" />
                    </div>

                    <div className="flex flex-col mt-5">
                        <span className="font-ibm text-xs text-stone-600">Quantidade em estoque</span>

                        <input onChange={(e) => { setAd({ ...ad, qtd: e.target.value }) }} className="border-[1.5px] dark:border-stone-900 p-2 px-4 rounded-xl mt-1 dark:bg-stone-950 outline-none font-ibm text-lg text-stone-800 dark:text-stone-300 dark:placeholder:text-stone-600" />
                    </div>

                    <div className="flex flex-col mt-5">
                        <span className="font-ibm text-xs text-stone-600">Categoria</span>

                        <Select onChange={(e) => { setAd({ ...ad, category }) }} options={[{ label: 'Categoria 1', value: '1' }, { label: 'Categoria 2', value: '2' }, { label: 'Categoria 3', value: '3' }]} />
                    </div>

                    <div className="mt-10 border-[1.5px] dark:border-stone-800 h-56 object-cover rounded-xl flex items-center justify-center cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-900 text-stone-500 text-lg relative">
                        <input id="file" type="file" className="absolute w-full h-full hidden" onChange={(e) => { convertBase64(e) }} />
                        <label for="file" className="cursor-pointer absolute w-full h-full flex items-center justify-center" />

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-4">
                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                        </svg>
                        <span>Adicionar imagem</span>
                    </div>

                </div>

            </Container>
            <Footer />
        </div>
    )
}