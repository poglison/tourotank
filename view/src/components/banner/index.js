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
        "cliques 👉",
    ];

    var text = texts[Math.floor(Math.random() * texts.length)];


    return (
        <div className="px-5 md:px-10 overflow-hidden h-96 pr-20 md:pr-10 pt-20 font-montserrat relative">

            <div className="h-full flex flex-col justify-center">
                <h2 className="text-xl md:text-5xl font-bold text-stone-700 dark:text-stone-300 z-10 relative">a negociação se resume a dois</h2>

                <div className="flex items-center">
                    <h1 className="text-5xl md:text-8xl font-bold text-primary z-10 relative">cliques</h1>

                    <h1 className={"ml-4 text-5xl md:text-8xl font-bold text-primary z-10 relative transition-all " + (select == "comprar" ? "rotate-30" : "")}>👉</h1>

                    <div className="flex flex-col mt-4 -ml-4">
                        <Link to="/ad/new" onMouseEnter={() => { setSelect("anunciar") }}>
                            <p className={"transition-all ml-4 font-montserkrat text-4xl text-stone-300 hover:text-primary font-bold " + (select == "anunciar" ? "!text-primary" : "")}>anunciar</p>
                        </Link>
                        <Link to="/ad/new" onMouseEnter={() => { setSelect("comprar") }}>
                            <p className={"transition-all ml-4 font-montserkrat text-4xl text-stone-300 hover:text-primary font-bold " + (select == "comprar" ? "!text-primary" : "")}>comprar</p>
                        </Link>
                    </div>

                </div>
            </div>

        </div >
    )
}