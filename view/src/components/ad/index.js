import { Link } from "react-router-dom"
import Skeleton from "../../templates/skeleton"

export default function Ad(props) {


    return (
        <div className="mr-4">
            <Link to={"/ad/" + props.id} className="w-full h-full bg-stone-800">
                <div key={props.index} className="w-96 min-w-96 transition-all ease-in-out delay-300 select-none">

                    <Skeleton props={props} loading={props.loading} className="w-96 h-52 rounded-2xl select-none border-transparent border hover: ">
                        <img src={props.image} alt={props.name} className="object-cover w-96 h-52 rounded-2xl select-none border-white dark:border-stone-900 border" />
                    </Skeleton>
                    <div className="mt-2">
                        <Skeleton props={props} loading={props.loading} className="w-full h-14 font-ibm text-xl font-bold text-black !m-0">
                            <p className="font-ibm text-xl font-bold text-black dark:text-stone-300 !m-0 overflow-hidden overflow-ellipsis whitespace-nowrap">{props.name}</p>
                        </Skeleton>

                        <p className="text-ibm text-xs font-normal text-stone-600 dark:text-stone-500 !m-0 h-7 overflow-hidden overflow-ellipsis"
                        >{props.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}