
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
        <div className="h-96 p-5 md:p-10 pr-20 md:pr-10 pt-20 font-montserrat">

            <div className="h-full flex flex-col justify-center">
                <p className="text-xl md:text-5xl font-bold text-zinc-700 z-10 relative">uma nova maneira de</p>
                <p className="text-5xl md:text-8xl font-bold text-primary z-10 relative">{text}</p>
            </div>

            <img className="w-72 md:w-96 absolute top-0 -right-40 mt-16 md:mt-0 md:-right-48 select-none -rotate-45" src="/bullzinho.png" alt="" />
        </div >
    )
}