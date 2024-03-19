import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../templates/button";

export default function Banner() {
    const [select, setSelect] = useState("anunciar");

    var texts = [
        // "vender",
        // "investir",
        // "apresentar",
        // "conectar",
        // "empreender",
        // "inovar",
        // "crescer",
        // "transformar",
        // "construir",
        // "sonhar",
        // "criar",
        // "desenvolver",
        // "construir",
        // "conquistar",
        // "negociar",
        // "startar",
        // "investir em ideias",
        ">> cliques 👉",
    ];

    var text = texts[Math.floor(Math.random() * texts.length)];


    return (
        <div className="w-full px-5 md:px-10 overflow-hidden h-96 pr-20 md:pr-10 pt-20 font-montserrat relative">

            <div className="w-3/4 h-full flex flex-col justify-center">
                
                <h2 className="hidden md:flex text-xl md:text-5xl font-bold text-stone-700 dark:text-stone-300 z-10 relative">a negociação se resume a dois</h2>

                <div className="flex items-center flex-col md:flex-row">
                    <h1 className="hidden md:flex text-5xl md:text-8xl font-bold text-primary z-10 relative">cliques</h1>

                    <h1 className={"hidden md:flex ml-4 text-5xl md:text-8xl font-bold text-primary z-10 relative transition-all " + (select == "comprar" ? "rotate-30" : "")}><img className="w-24 mr-5" src="/imgs/cursor/point.png"></img></h1>

                    <div className="hidden md:flex flex-col mt-4 -ml-4">
                        <Link to="/ad/new" onMouseEnter={() => { setSelect("anunciar") }}>
                            <p className={"transition-all ml-4 font-montserkrat text-4xl text-stone-700 dark:text-stone-200 hover:text-primary font-bold " + (select == "anunciar" ? "!text-primary" : "")}>anunciar</p>
                        </Link>
                        <Link to="/hub" onMouseEnter={() => { setSelect("comprar") }}>
                            <p className={"transition-all ml-4 font-montserkrat text-4xl text-stone-700 dark:text-stone-200 hover:text-primary font-bold " + (select == "comprar" ? "!text-primary" : "")}>comprar</p>
                        </Link>
                    </div>

                </div>
            </div>

        </div >
    )
}