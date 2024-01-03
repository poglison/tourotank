import Header from "../../components/header";
import Breadcrumbs from "../../templates/breadcrumbs";
import Button from "../../templates/button";
import Image from "../../templates/image";

import { Link } from "react-router-dom";

export default function Project() {

    return (
        <div>

            <Header />


            <div className="px-10">
                <Breadcrumbs history={[{ title: 'Início', path: '/' }, { title: 'Project', path: '/project' }]} />



                <div className="mt-10 flex flex-col md:flex-row justify-between">

                    <div className="flex- flex-col">
                        <Image src="https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80"
                            alt="Project" />

                        <div className="mt-4">
                            <span className="text-2xl font-medium">Netflix Compartilhada Premium Hd 4k</span>
                        </div>
                    </div>

                    <div className="fixed right-10 w-72">

                        <div className="w-full h-full rounded-lg mb-2">

                            <div className="border border-zinc-300 rounded-lg flex flex-col mt-2">


                                <Link to="/profile">
                                    <div className="flex items-center p-2 hover:bg-neutral-100 cursor-pointer rounded-t-lg">
                                        <div className="w-10 min-w-10 h-10 bg-primary rounded-full">
                                            <img src="https://avatars.githubusercontent.com/u/7" alt="User" className="w-full h-full rounded-full" />
                                        </div>

                                        <span className="text-sm ml-2 truncate w-56">Leonardo Heitor Poglia Pogliapp</span>
                                    </div>
                                </Link>

                                <div className="flex items-center justify-between border-t border-zinc-300 p-2">

                                    <div className="text-[13px] ml-2">
                                        <span >Último acesso:</span>
                                        <span className="font-medium ml-2">Hoje 10:00</span>
                                    </div>


                                    <div className="border border-zinc-300 w-10 h-10 flex items-center justify-center rounded-lg text-zinc-700 hover:text-zinc-900 hover:bg-neutral-100 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>


                                </div>

                            </div>
                        </div>

                        <div className="border border-zinc-300 p-4 rounded-lg">
                            <div className="w-full h-4 bg-zinc-200 rounded-full mb-4">
                                <div className="w-1/2 h-full bg-primary rounded-full flex items-center justify-center text-xs text-white">50%</div>
                            </div>



                            <div className="flex flex-col mb-4">
                                <span>Investimento minimo</span>

                                <span className="text-2xl font-medium font-ibm text-primary">R$ 1.000.000,00</span>
                            </div>

                            <div className="flex justify-between mb-4">
                                <div className="flex flex-col">
                                    <span>Investido</span>

                                    <span className="text-2xl font-medium font-ibm text-primary">R$ 100,00</span>
                                </div>

                                <div className="flex flex-col">
                                    <span>Investidores</span>

                                    <span className="text-2xl font-medium font-ibm text-primary">100</span>
                                </div>
                            </div>


                            <div className="flex flex-col mb-4">
                                <span>Valuation</span>

                                <span className="text-2xl font-medium font-ibm text-primary">R$ 100M</span>
                            </div>

                            <Button type="primary" className="w-full">Investir</Button>
                        </div>
                    </div>
                </div>



                <div className="w-full h-screen"></div>
                <div className="w-full h-screen"></div>
                <div className="w-full h-screen"></div>
                <div className="w-full h-screen"></div>

            </div>
        </div>
    )
}