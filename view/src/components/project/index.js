import { Link } from "react-router-dom"

export default function Project(props) {


    return (
        <div className="mr-4">
            <Link to="/project" className="w-full h-full bg-zinc-800">
                <div key={props.index} className="w-96 min-w-96 transition-all ease-in-out delay-300 select-none">
                    <img src={props.image} alt={props.name} className="w-96 h-52 rounded-2xl select-none border-4 border-white hover:border-4 hover:border-zinc-300" />
                    <div className="mt-2">
                        <p className="font-ibm text-xl font-bold text-black !m-0">{props.name}</p>
                        <p className="text-ibm text-xs font-normal text-zinc-100 !m-0">{props.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}