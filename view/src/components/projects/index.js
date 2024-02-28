import { useEffect, useState, useRef } from "react"
import Project from "../project"
import { Link } from "react-router-dom";

import { get } from "../../services"

export default function Projects(props) {

    const [projects, setProjects] = useState([1, 2, 3, 4, 5]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        get("ad").then(res => {
            setLoading(false);

            if (res.length < 10) {
                res = res.concat(res);
                setProjects(res);

            } else{
                setProjects(res);
            }
        })
    }, [])


    const moveScroll = (direction) => {
        if (direction === "left") {
            var i = 0;

            var interval = setInterval(() => {
                document.querySelector(".projects").scrollLeft += -10
                i = i + 10;
                if (i === 400) {
                    clearInterval(interval)
                }
            }, 1)

            if (document.querySelector(".projects").scrollLeft === 0) {
                document.querySelector(".projects").scrollLeft = document.querySelector(".projects").scrollWidth - document.querySelector(".projects").clientWidth;
            }

        } else {
            var i = 0;
            var interval = setInterval(() => {
                document.querySelector(".projects").scrollLeft += +10
                i = i + 10;
                if (i === 400) {
                    clearInterval(interval)
                }
            }, 1);

            if (document.querySelector(".projects").scrollLeft === document.querySelector(".projects").scrollWidth - document.querySelector(".projects").clientWidth) {
                document.querySelector(".projects").scrollLeft = 0;
            }

        }
    }

    return (
        <div className={"z-10 relative transition-all select-none " + props.className}>

            {props.title && <span className="text-ibm text-lg font-medium mb-1 block text-stone-800">{props.title}</span>}


            <div className="projects flex overflow-auto transition rounded-t-xl min-h-72">
                <div className="absolute left-0 w-10 ml-2 mt-1 h-52 flex items-center justify-center text-stone-400 cursor-pointer" onClick={() => moveScroll("left")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>


                {
                    projects?.map((project, index) => {
                        return (
                            <Project key={index} id={project.id} name={project.title} description={project.description} image={project.image} price={project.price} loading={loading} />
                        )
                    })
                }

                <div className="absolute right-0 w-10 mr-2 mt-1 h-52 flex items-center justify-center text-stone-400 cursor-pointer" onClick={() => moveScroll("right")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>

            </div>


            {props.hub !== false &&
                <div className="w-full flex flex-col md:flex-row justify-center items-center mt-5">
                    <span className="text-lg text-stone-700 dark:text-stone-300 font-ibm mr-1 text-center">Para ver mais anúncios, você pode entrar no nosso</span>

                    <Link to="/hub">
                        <div className="flex p-3 rounded-full   ease-in-out cursor-pointer font-ibm font-medium transition-all text-stone-800 hover:text-black dark:text-stone-200 dark:hover:text-stone-50 hover:underline hover:decoration-wavy decoration-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                            </svg>
                            <span className="ml-2">Hub de Anúncios</span>

                        </div>
                    </Link>
                </div>
            }
        </div>
    )
}