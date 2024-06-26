import { useEffect, useState } from "react";
import { categories } from "../utils/jsons";

import { Link, useNavigate } from "react-router-dom";
import Button from "../templates/button";
import { save } from "../utils/services";
import Skeleton from "../templates/skeleton";



export default function InformationAd(props) {

    const [infos, setInfos] = useState({});
    const [position, setPosition] = useState("md:mt-0");

    const navigate = useNavigate();


    useEffect(() => {
        setInfos(props.ad)
    }, [props.ad])


    const register = async () => {

        save("ad", { ...props.ad, user: props?.user }
        ).then((response) => {

            if (response.status == "404") {
                return;
            }

            navigate("/ad/" + response.id)
        })
    }


    useEffect(() => {
        addEventListener("scroll", () => {
            if (document.scrollingElement.scrollTop > 50) {
                setPosition("md:-mt-14");
            } else {
                setPosition("md:mt-0");
            }
        })
    }, [])



    return (

        <div className={"mt-10 md:fixed md:w-72 md:right-10 transition-all duration-300 " + position}>

            <div className="w-full h-full rounded-lg mb-2">

                <div className="border dark:border-stone-700 bg-white dark:bg-stone-850 rounded-lg flex flex-col">


                    {props.type == "new" &&
                        <Link to={"/profile/" + props?.user?.id}>
                            <div className="flex items-center p-2 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-900 cursor-pointer rounded-t-lg">
                                <div className="w-10 min-w-10 h-10 bg-primary rounded-full">
                                    <img src={props?.user?.image} alt="User" className="w-full h-full rounded-full" />
                                </div>

                                <span className="ml-2 text-sm truncate w-56">{props?.user?.displayName}</span>
                            </div>
                        </Link>
                    }

                    {props.type != "new" &&
                        <Link to={"/profile/" + props.ad?.user?.id}>
                            <div className="flex items-center p-2 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-900 cursor-pointer rounded-t-lg">

                                <div className="mr-2">
                                    <Skeleton className="!w-10 !h-10 !rounded-full" loading={props.loading}>
                                        <div className="w-10 min-w-10 h-10 bg-primary rounded-full mr-2">

                                            <img src={props.ad?.user?.image} alt="User" className="w-full h-full rounded-full" />
                                        </div>
                                    </Skeleton>
                                </div>

                                <Skeleton className="h-6 truncate w-56" loading={props.loading}>
                                    <span className="text-sm truncate w-56">{props.ad?.user?.displayName ? props.ad?.user?.displayName : props.ad?.user?.email}</span>
                                </Skeleton>
                            </div>
                        </Link>
                    }

                    {props.type != "new" &&
                        <div className="flex items-center justify-between border-t dark:border-t-stone-800 bg-white dark:bg-stone-850 dark:text-stone-300 p-2 rounded-b-lg">

                            <div className="text-[13px] ml-2">
                                <Skeleton className="w-40 h-4" loading={props.loading}>
                                    <span >Último acesso:</span>

                                    <span className="font-medium ml-2">Hoje 10:00</span>
                                </Skeleton>
                            </div>


                            <div className="border dark:border-stone-700  w-10 h-10 flex items-center justify-center rounded-lg text-stone-700 dark:text-stone-500 hover:text-stone-900 hover:bg-stone-100 dark:hover:bg-stone-900 dark:hover:text-stone-300 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                                </svg>
                            </div>


                        </div>
                    }
                </div>
            </div>

            <div className="bg-white dark:bg-stone-850 border dark:border-stone-700  p-4 rounded-lg">
                {/* {props.type != "new" ?

                    <div className="w-full h-4 bg-stone-200 dark:bg-stone-800 rounded-full mb-4">
                        <div className="w-1/2 h-full bg-primary rounded-full flex items-center justify-center text-xs text-white">{infos?.percent}</div>
                    </div>
                    :
                    <div>
                        <span className="dark:text-stone-300">% que será para investimento</span>

                        <div className="w-full h-4 mt-2 bg-stone-200 dark:bg-stone-800 rounded-full mb-4">
                            <div className={"h-full bg-primary rounded-full flex items-center justify-center text-xs text-white min-w-[15%]" + (percent == 0 ? " w-0" : " w-[" + percent + "%]")}>
                                <input onChange={(e) => setPercent(e.target.value > 100 ? 100 : e.target.value)} value={percent} maxLength={3} className="w-8 text-white placeholder:text-stone-50 placeholder:text-xs bg-transparent outline-none" placeholder="10%" />
                            </div>
                        </div>
                    </div>
                } */}



                <div className="flex flex-col mb-4">
                    <span className="dark:text-stone-300">Preço</span>

                    {props.type != "new" ?
                        <Skeleton className="w-40 h-8" loading={props.loading}>
                            <span className="text-2xl font-medium font-ibm text-primary">{infos?.price}</span>
                        </Skeleton>
                        :
                        <input disabled onChange={(e) => setInfos({ ...infos, price: e.target.value })} value={infos.price ? infos.price : 0}
                            className="bg-transparent dark:bg-stone-850 dark:placeholder:text-stone-600 text-2xl font-medium font-ibm text-primary outline-none placeholder:text-sm placeholder:font-normal" />
                    }
                </div>

                <div className={"flex justify-between mb-4 " + (props.type == "new" ? "flex-col" : "")}>
                    <div className="w-1/2 flex flex-col">
                        <span className="dark:text-stone-300">Disponível</span>

                        {props.type != "new" ?
                            <Skeleton className="w-32 h-8" loading={props.loading}>
                                <span className="text-2xl font-medium font-ibm text-primary">{infos?.qtd}</span>
                            </Skeleton>
                            :
                            <input disabled onChange={(e) => setInfos({ ...infos, qtd: e.target.value })} value={infos.qtd ? infos.qtd : 0}
                                className="bg-transparent dark:bg-stone-850 dark:placeholder:text-stone-600 text-2xl font-medium font-ibm text-primary outline-none placeholder:text-sm placeholder:font-normal" placeholder="Digite o quanto já foi investido" />
                        }
                    </div>


                    {props.type != "new" &&
                        <div className={"w-1/2 flex flex-col " + (props.type == "new" ? "mt-4" : "")}>
                            <span className="dark:text-stone-300">Vendido</span>

                            <Skeleton className="w-20 h-8" loading={props.loading}>
                                <span className="text-2xl font-medium font-ibm text-primary">{infos?.sales ? infos.sales : 0}</span>
                            </Skeleton>

                        </div>
                    }
                </div>


                <div className="flex flex-col mb-4">
                    <span className="flex items-center dark:text-stone-300">Receba

                        <span className="ml-1 mb-0.5 font-ibm text-lg font-medium text-primary">tanks</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-1 w-5 h-5 text-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </span>

                    {props.type != "new" ?
                        <Skeleton className="w-40 h-8" loading={props.loading}>
                            <span className="text-2xl font-medium font-ibm text-primary">{infos?.tanks ? infos.tanks : 0}</span>
                        </Skeleton>
                        :
                        <input disabled onChange={(e) => setInfos({ ...infos, tanks: e.target.value })} value={infos.tanks ? infos.tanks : 0}
                            className="bg-transparent dark:bg-stone-850 dark:placeholder:text-stone-600 text-2xl font-medium font-ibm text-primary outline-none placeholder:text-sm placeholder:font-normal" />
                    }
                </div>


                {props.type == "new" ?
                    (<div onClick={() => register()} className="mt-4">
                        <Button type="primary" className="w-full">Cadastrar</Button>
                    </div>) :
                    <Link to={"/buy/" + props.id}>
                        <Button type="primary" className="w-full">Comprar</Button>
                    </Link>
                }
            </div>
        </div >
    )
}