import { useEffect, useState } from "react";
import Header from "../../components/header";


export default function Hub() {

    const [touratanks, setTouratanks] = useState([]);

    useEffect(() => {
        const tanks = []

        for (let i = 0; i < 50; i++) {

            for (let j = 0; j < 50; j++) {
                tanks.push(
                    <span className={"absolute text-white font-montserrat font-bold opacity-5"}
                        style={{ top: i * 20 + "px", left: j * 9 + "%", fontSize: 100 + "%" }}>
                        tourtank</span>)
            }
        }

        setTouratanks(tanks)


    }, [])




    return (
        <div className="h-screen bg-primary relative overflow-hidden">
            {touratanks}


            <div className="p-20 w-full h-full flex flex-col items-center">

                <span className="text-white text-2xl font-ibm">Hub de Projetos</span>
                <span className="text-white text-2xl font-montserrat font-bold">tourtank</span>


            </div>

        </div>
    )
}