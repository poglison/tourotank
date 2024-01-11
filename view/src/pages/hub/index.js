import { useEffect, useState } from "react";
import Header from "../../components/header";


export default function Hub() {

    const [touratanks, setTouratanks] = useState([]);


    return (
        <div className="h-screen bg-primary relative overflow-hidden">


            <div className="p-20 w-full h-full flex flex-col items-center">

                <span className="text-white text-2xl font-ibm">Hub de Projetos</span>
                <span className="text-white text-2xl font-montserrat font-bold">tourtank</span>


            </div>

        </div>
    )
}