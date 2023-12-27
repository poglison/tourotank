

export default function Banner() {


    var texts = [
        "vender",
        "investir",
        "apresentar",
        "conectar",
        "empreender",
        "inovar",
        "crescer",
        "transformar",
        "construir",
        "sonhar",
        "criar",
        "desenvolver",
        "construir",
        "conquistar",
        "negociar",
        "startar",
        "startupear",
    ];

    var text = texts[Math.floor(Math.random() * texts.length)];


    return (
        <div className="p-10 pt-20 font-montserrat">


            <p className="text-5xl font-bold text-zinc-700">uma nova maneira de</p>



            <p className="text-8xl font-bold text-primary">{text}</p>
            
        </div>
    )
}