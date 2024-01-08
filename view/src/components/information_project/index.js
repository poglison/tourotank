import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Button from "../../templates/button";


export default function InformationProject(props) {

    const [scroll, setScroll] = useState(false);


    useEffect(() => {

        window.addEventListener('scroll', () => {

            if (window.scrollY >= 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);

    return (

        <div className={"mt-10 md:mt-0 md:fixed md:w-72 md:right-10 transition-all duration-300 " + (scroll ? "!-mt-28" : "")}>

            <div className="bg-white w-full h-full rounded-lg mb-2">

                <div className="border border-zinc-300 rounded-lg flex flex-col">


                    <Link to="/profile">
                        <div className="flex items-center p-2 hover:bg-neutral-100 cursor-pointer rounded-t-lg">
                            <div className="w-10 min-w-10 h-10 bg-primary rounded-full">
                                <img src="https://avatars.githubusercontent.com/u/7" alt="User" className="w-full h-full rounded-full" />
                            </div>

                            <span className="text-sm ml-2 truncate w-56">Alan Hui</span>
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

            <div className="bg-white border border-zinc-300 p-4 rounded-lg">
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

                <Link to="/login">
                    <Button type="primary" className="w-full">Investir</Button>
                </Link>
            </div>
        </div>
    )
}