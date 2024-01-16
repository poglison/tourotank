import { Link } from "react-router-dom"
import Skeleton from "../../templates/skeleton"

export default function Project(props) {


    return (
        <div className="mr-4">
            <Link to={"/project/" + props.id} className="w-full h-full bg-zinc-800">
                <div key={props.index} className="w-96 min-w-96 transition-all ease-in-out delay-300 select-none">

                    <Skeleton props={props} loading={props.loading} className="w-96 h-52 rounded-2xl select-none border-transparent border-[1.5px] hover: ">
                        <img src={props.image} alt={props.name} className="w-96 h-52 rounded-2xl select-none border-white border-[1.5px] hover: " />
                    </Skeleton>
                    <div className="mt-2">
                        <Skeleton props={props} loading={props.loading} className="w-full h-14 font-ibm text-xl font-bold text-black !m-0">
                            <p className="font-ibm text-xl font-bold text-black !m-0">{props.name}</p>
                        </Skeleton>

                        <p className="text-ibm text-xs font-normal text-zinc-100 !m-0">{props.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}