
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
        <div className="p-10 pt-20 font-montserrat">

            <p className="text-2xl md:text-5xl font-bold text-zinc-700 z-10 relative">uma nova maneira de</p>
            <p className="text-4xl md:text-8xl font-bold text-primary z-10 relative">{text}</p>

            <img className="w-72 md:w-96 absolute top-0 -right-40 mt-16 md:mt-0 md:-right-48 select-none -rotate-45" src="/bullzinho.png" alt="" />
        </div >
    )
}