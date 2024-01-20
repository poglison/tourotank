import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Button from "../../templates/button";
import { save } from "../../services";
import Skeleton from "../../templates/skeleton";



export default function InformationProject(props) {

    const [scroll, setScroll] = useState(false);
    const [percent, setPercent] = useState(10);
    const [infos, setInfos] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        setInfos({ ...infos, percent: percent })
    }, [percent])


    useEffect(() => {
        if (props.type != "new") {
            setInfos(props.project.infos);
        }
    }, [props.project])



    useEffect(() => {

        window.addEventListener('scroll', () => {

            if (window.scrollY >= 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);


    const register = async () => {

        save("project", { ...props.project, infos: infos, user: props.user }
        ).then((response) => {

            if (response.status == "404") {
                return;
            }

            navigate("/project/" + response.id)
        })
    }



    return (

        <div className={"mt-10 md:mt-0 md:fixed md:w-72 md:right-10 transition-all duration-300 " + (scroll ? "md:!-mt-28" : "")}>

            <div className="bg-white w-full h-full rounded-lg mb-2">

                <div className="border-[1.5px]   rounded-lg flex flex-col">


                    {props.type == "new" &&
                        <Link to={"/profile/" + props?.user?.id}>
                            <div className="flex items-center p-2 hover:bg-neutral-100 cursor-pointer rounded-t-lg">
                                <div className="w-10 min-w-10 h-10 bg-primary rounded-full">
                                    <img src="https://avatars.githubusercontent.com/u/7" alt="User" className="w-full h-full rounded-full" />
                                </div>
                            </div>
                        </Link>
                    }

                    {props.type != "new" &&
                        <Link to={"/profile/" + props.project.user?.id}>
                            <div className="flex items-center p-2 hover:bg-neutral-100 cursor-pointer rounded-t-lg">

                                <div className="mr-2">
                                    <Skeleton className="!w-10 !h-10 !rounded-full" loading={props.loading}>
                                        <div className="w-10 min-w-10 h-10 bg-primary rounded-full mr-2">
                                            <img src="https://avatars.githubusercontent.com/u/7" alt="User" className="w-full h-full rounded-full" />
                                        </div>
                                    </Skeleton>
                                </div>

                                <Skeleton className="h-6 truncate w-56" loading={props.loading}>
                                    <span className="text-sm truncate w-56">{props.project?.user?.displayName}</span>
                                </Skeleton>
                            </div>
                        </Link>
                    }

                    {props.type != "new" &&
                        <div className="flex items-center justify-between border-t-[1.5px]   p-2">

                            <div className="text-[13px] ml-2">
                                <Skeleton className="w-40 h-4" loading={props.loading}>
                                    <span >Último acesso:</span>

                                    <span className="font-medium ml-2">Hoje 10:00</span>
                                </Skeleton>
                            </div>


                            <div className="border-[1.5px]   w-10 h-10 flex items-center justify-center rounded-lg text-zinc-700 hover:text-zinc-900 hover:bg-neutral-100 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                                </svg>
                            </div>


                        </div>
                    }
                </div>
            </div>

            <div className="bg-white border-[1.5px]   p-4 rounded-lg">
                {props.type != "new" ?

                    <div className="w-full h-4 bg-zinc-200 rounded-full mb-4">
                        <div className="w-1/2 h-full bg-primary rounded-full flex items-center justify-center text-xs text-white">{infos?.percent}</div>
                    </div>
                    :
                    <div>
                        <span>% que será para investimento</span>

                        <div className="w-full h-4 mt-2 bg-zinc-200 rounded-full mb-4">
                            <div className={"h-full bg-primary rounded-full flex items-center justify-center text-xs text-white min-w-[15%]" + (percent == 0 ? " w-0" : " w-[" + percent + "%]")}>
                                <input onChange={(e) => setPercent(e.target.value > 100 ? 100 : e.target.value)} value={percent} maxLength={3} className="w-8 text-white placeholder:text-zinc-50 placeholder:text-xs bg-transparent outline-none" placeholder="10%" />
                            </div>
                        </div>
                    </div>
                }



                <div className="flex flex-col mb-4">
                    <span>Investimento minimo</span>

                    {props.type != "new" ?
                        <span className="text-2xl font-medium font-ibm text-primary">R$ {infos?.min}</span>
                        :
                        <input onChange={(e) => setInfos({ ...infos, min: e.target.value })} value={infos.min}
                            className="text-2xl font-medium font-ibm text-primary outline-none placeholder:text-sm placeholder:font-normal" placeholder="Digite o minimo que se pode investir" />
                    }
                </div>

                <div className={"flex justify-between mb-4 " + (props.type == "new" ? "flex-col" : "")}>
                    <div className="flex flex-col">
                        <span>Investido</span>

                        {props.type != "new" ?
                            <span className="text-2xl font-medium font-ibm text-primary">R$ {infos?.invested}</span>
                            :
                            <input onChange={(e) => setInfos({ ...infos, invested: e.target.value })} value={infos.invested}
                                className="text-2xl font-medium font-ibm text-primary outline-none placeholder:text-sm placeholder:font-normal" placeholder="Digite o quanto já foi investido" />
                        }
                    </div>

                    <div className={"flex flex-col " + (props.type == "new" ? "mt-4" : "")}>
                        <span>Investidores</span>

                        {props.type != "new" ?
                            <span className="text-2xl font-medium font-ibm text-primary">{infos?.investors}</span>
                            :
                            <input onChange={(e) => setInfos({ ...infos, investors: e.target.value })} value={infos.investors}
                                className="text-2xl font-medium font-ibm text-primary outline-none placeholder:text-sm placeholder:font-normal" placeholder="Digite quantos investidores teve" />
                        }
                    </div>
                </div>


                <div className="flex flex-col mb-4">
                    <span>Valuation</span>

                    {props.type != "new" ?
                        <span className="text-2xl font-medium font-ibm text-primary">R$ {infos?.valuation}</span>
                        :
                        <input onChange={(e) => setInfos({ ...infos, valuation: e.target.value })} value={infos.valuation}
                            className="text-2xl font-medium font-ibm text-primary outline-none placeholder:text-sm placeholder:font-normal" placeholder="Digite o quanto que vale o projeto" />
                    }
                </div>


                {props.type == "new" ?
                    (<div onClick={() => register()} className="mt-4">
                        <Button type="primary" className="w-full">Cadastrar</Button>
                    </div>) :
                    <Link to="/login">
                        <Button type="primary" className="w-full">Investir</Button>
                    </Link>
                }
            </div>
        </div >
    )
}