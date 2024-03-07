

export default function Timeline(props) {


    return (

        <div className="w-full mt-8">
            <span className="text-ibm text-lg font-medium mb-4 block text-stone-800 dark:text-stone-200">{props.title ? props.title : "Linha do tempo"}</span>
            <div className="flex flex-col lg:flex-row w-full">
                <TimeLineCircle text="Ideia" check={props.check > 0 ? true : false} setCheck={props?.setCheck ? props.setCheck : null} index={1} />
                <TimelineItem check={props.check > 1 ? true : false} />
                <TimeLineCircle text="Conceito" check={props.check > 1 ? true : false} setCheck={props?.setCheck ? props.setCheck : null} index={2} />
                <TimelineItem check={props.check > 2 ? true : false} />
                <TimeLineCircle text="Protótipo" check={props.check > 2 ? true : false} setCheck={props?.setCheck ? props.setCheck : null} index={3} />
                <TimelineItem check={props.check > 3 ? true : false} />
                <TimeLineCircle text="Desenvolvimento" check={props.check > 3 ? true : false} setCheck={props?.setCheck ? props.setCheck : null} index={4} />
                <TimelineItem check={props.check > 4 ? true : false} />
                <TimeLineCircle text="Produção" check={props.check > 4 ? true : false} setCheck={props?.setCheck ? props.setCheck : null} index={5} />
            </div>
        </div>
    )
}


const TimeLineCircle = (props) => {
    return (
        <div onClick={() => props.setCheck ? props.setCheck(props.index) : null} className={"flex flex-col cursor-pointer items-center justify-center border w-full h-32 rounded " + (props.check ? "border-primary bg-primary/5 hover:bg-primary/10" : "  hover:bg-stone-50 dark:hover:bg-stone-900 dark:border-stone-700")}>
            <div className={"flex items-center justify-center w-10 h-10 rounded-full " + (props.check ? "bg-primary" : "bg-stone-300 border dark:border-stone-700")}>
                {props.check && <span className="text-white text-center font-ibm text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                </span>}
            </div>
            <span className="block mt-2 text-sm font-ibm text-stone-700 dark:text-stone-300">{props.text}</span>
        </div>
    )
}

const TimelineItem = (props) => {
    return (
        <div className="flex flex-row items-center justify-center lg:justify-normal">
            <div className={"h-10 w-px lg:h-px lg:w-10 " + (props.check ? "bg-primary" : "bg-stone-300 dark:bg-stone-800")}></div>
        </div>
    )
}