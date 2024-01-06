

export default function Timeline() {


    return (

        <div className="w-full h-screen mt-8">
            <span className="text-ibm text-lg font-medium mb-4 block text-zinc-800">Linha do tempo</span>
            <div className="flex w-full">
                <TimeLineCircle text="Ideia" check={true} />
                <TimelineItem  check={true} />
                <TimeLineCircle text="Conceito" check={true} />
                <TimelineItem />
                <TimeLineCircle text="Protótipo" />
                <TimelineItem />
                <TimeLineCircle text="Desenvolvimento" />
                <TimelineItem />
                <TimeLineCircle text="Produção" />
            </div>
        </div>
    )
}


const TimeLineCircle = (props) => {
    return (
        <div className={"flex flex-col items-center justify-center border w-full h-32 rounded " + (props.check ? "border-primary bg-primary/5 hover:bg-primary/10" : "border-zinc-300 hover:bg-zinc-50")}>
            <div className={"flex items-center justify-center w-10 h-10 rounded-full " + (props.check ? "bg-primary" : "bg-zinc-300 border border-zinc-400")}>
                {props.check && <span className="text-white text-center font-ibm text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                </span>}
            </div>
            <span className="block mt-2 text-sm font-ibm text-zinc-700">{props.text}</span>
        </div>
    )
}

const TimelineItem = (props) => {
    return (
        <div className="flex flex-row items-center">
            <div className={"h-px w-10 " + (props.check ? "bg-primary" : "bg-zinc-300")}></div>
        </div>
    )
}