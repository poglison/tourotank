import { Link } from "react-router-dom";
import { benefits } from "../utils/jsons";
import Button from "../templates/button";



export default function Benefits() {

    return (
        <div className="mt-10 md:mt-0 md:h-screen flex flex-col items-center justify-center w-full text-white font-ibm relative">
            <div className="w-2/3 flex flex-col items-center justify-center rounded-2xl text-primary p-4 pb-0">
                <span className="text-3xl font-bold">Benefícios</span>
                <span className="text-xl mt-1 text-stone-700 dark:text-stone-300 text-center">Conheça os benefícios de usar o tourotank</span>
            </div>

            <div className="w-full flex flex-col  md:!flex-row items-center justify-center">

                {benefits?.map((benefit, index) => (
                    <div key={index} className="w-72 h-48 flex flex-col justify-start items-center rounded-2xl text-primary p-4 mt-10 m-2 relative">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 min-w-12 h-12 min-h-12 mb-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                        </svg>

                        <span className="text-xl font-bold">{benefit.title}</span>
                        <span className="text-sm text-center mt-4 text-stone-700 dark:text-stone-300">{benefit.description}</span>
                    </div>
                ))}

            </div>

            <div className="flex justify-center w-full mt-10">
                <Link to="/ad/new" className="mr-10">
                    <Button type="primary" className="w-36 mr-10">Anunciar</Button>
                </Link>
                
                <Button type="secondary" className="w-36">Saiba mais</Button>
            </div>

        </div>
    );
}