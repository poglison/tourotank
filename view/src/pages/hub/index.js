import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import Button from "../../templates/button";
import FAQ from "../../components/faq";

export default function Hub() {

    var projects = [
        {
            "name": "Projeto 1",
            "description": "Descrição do projeto 1",
            "owner": "Robin Spielmann",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 2000
        },
        {
            "name": "Projeto 2",
            "description": "Descrição do projeto 2",
            "owner": "Robin Spielmann",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 2000
        },
        {
            "name": "Projeto 3",
            "description": "Descrição do projeto 3",
            "owner": "Robin Spielmann",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 3000
        },
        {
            "name": "Projeto 4",
            "description": "Descrição do projeto 4",
            "owner": "Robin Spielmann",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 4000
        },
        {
            "name": "Projeto 5",
            "description": "Descrição do projeto 5",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 5000
        },
        {
            "name": "Projeto 6",
            "description": "Descrição do projeto 6",
            "owner": "Robin Spielmann",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 6000
        },
        {
            "name": "Projeto 7",
            "description": "Descrição do projeto 7",
            "owner": "Robin Spielmann",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 7000
        },
        {
            "name": "Projeto 8",
            "description": "Descrição do projeto 8",
            "owner": "Robin Spielmann",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 8000
        }
    ]



    return (
        <div className="h-screen relative">

            <Header className="top-0 bg-white !fixed" search={true} buttons={false} />


            <div className="flex flex-col items-center justify-center mt-40 mb-20 text-zinc-700">

                <div className="w-full flex justify-evenly">

                    <div className="w-1/2 flex flex-col justify-center items-center p-8 ">
                        <div className="flex items-center justify-center">
                            <h1 className="text-ibm text-4xl font-medium text-center mb-2 mr-3">Hub de projetos</h1>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                            </svg>
                        </div>


                        <p className="text-4xl text-center text-primary font-bold font-montserrat">touratank</p>
                        <div className="mt-8">
                            <Button className="!px-6">Criar novo projeto</Button>
                        </div>
                    </div>

                    <div className="w-1/2 flex justify-center items-center">

                        <div className="cursor-pointer bg-primary p-2 text-white mr-4 rounded-full border border-primary hover:bg-white hover:text-primary transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>


                        </div>

                        <img className="rounded-xl h-full border border-zinc-300" src="https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80" />

                        <div className="cursor-pointer bg-primary p-2 text-white ml-4 rounded-full border border-primary hover:bg-white hover:text-primary transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>


                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center w-full bg-zinc-50 border-t border-b mt-8 pb-10">
                <div className="flex flex-wrap justify-start mt-20 w-5/6 px-auto">

                    {projects.map((project, index) => {
                        return (
                            <div className="w-[calc(33%-29px)] rounded-xl m-4  transition-all duration-300" key={index}>
                                <div className="w-full h-70 border-zinc-300 border transition-all duration-300 rounded-xl overflow-hidden bg-white">
                                    <img src={project.image} className="w-full h-full object-cover" />

                                    <div className="p-2 pb-4 px-4">
                                        <h1 className="text-ibm text-lg font-medium mt-2">{project.name}</h1>
                                        <p className="text-ibm text-sm mt-1">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

            <FAQ className="!py-40" />

            <Footer />
        </div>
    )
}