

export default function Project(props) {


    return (
        <div key={props.index} className="w-96 min-w-96 mr-4 transition-all ease-in-out delay-300">
            <img src={props.image} alt={props.name} className="w-96 rounded-2xl" />
            <div className="mt-2">
                <p className="font-ibm text-xl font-bold text-black !m-0">{props.name}</p>
                <p className="text-ibm text-xs font-normal text-zinc-100 !m-0">{props.description}</p>
            </div>
        </div>
    )
}