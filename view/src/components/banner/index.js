
export default function Banner() {


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
        "investir em ideias"
    ];

    var text = texts[Math.floor(Math.random() * texts.length)];


    return (
        <div className="px-5 md:px-10 overflow-hidden h-96 pr-20 md:pr-10 pt-20 font-montserrat relative">

            <div className="h-full flex flex-col justify-center">
                <p className="text-xl md:text-5xl font-bold text-stone-700 dark:text-stone-300 z-10 relative">uma nova maneira de</p>
                <p className="text-5xl md:text-8xl font-bold text-primary z-10 relative">{text}</p>
            </div>

            <img className="w-72 md:w-96 absolute top-0 -right-40  md:-right-48 select-none -rotate-45" src="/bull.png" alt="" />
        </div >
    )
}