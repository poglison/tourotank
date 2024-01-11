import { useEffect, useState } from "react";
import Header from "../../components/header";
import Projects from "../../components/projects";
import { Link } from "react-router-dom";


export default function Hub() {

    const [touratanks, setTouratanks] = useState([])


    return (
        <div className="h-screen bg-primary relative overflow-hidden">

            <Link to="/">
                <div className="bg-white h-10 w-10 rounded-full absolute top-10 left-10 flex justify-center items-center cursor-pointer hover:-ml-1 transition-all duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                </div>
            </Link>

            <div className="p-10 pb-0 w-full h-full flex flex-col items-center">

                <span className="text-white text-2xl font-ibm">Hub de Projetos</span>
                <span className="text-white text-2xl font-montserrat font-bold">tourtank</span>


                <div className="w-full h-screen bg-white mt-10 rounded-t-xl p-8 pr-0 pb-40">

                    <div className="w-full h-full overflow-auto">

                        <Projects hub={false} title="Mais vistos" />

                    </div>
                </div>

            </div>

        </div>
    )
}