import Header from "../components/header";
import Breadcrumbs from "../templates/breadcrumbs";
import Container from "../templates/container";



export default function Buy(props) {


    return (
        <div className="bg-white dark:bg-stone-850 overflow-x-hidden">
            <Header />

            <Container>

                <Breadcrumbs history={[{ title: 'Início', path: '/' }, { title: 'Anuncio', path: '/ad' }, { title: 'Comprar', path: '/buy' }]} />


                <div className="flex flex-row justify-between mt-10">

                    <div className="p-10 w-full h-40 border dark:border-stone-700 bg-white dark:bg-stone-850 rounded-lg flex flex-col">

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>

                            <span className="text-white ml-5">Pedido</span>
                        </div>
                    </div>

                </div>


            </Container>
        </div>
    )
}
