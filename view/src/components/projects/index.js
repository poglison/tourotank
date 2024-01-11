import { useEffect, useState, useRef } from "react"
import Project from "../project"
import Button from "../../templates/button";
import { Link } from "react-router-dom";

export default function Projects(props) {

    var projects = [
        {
            "name": "Projeto 1",
            "description": "Descrição do projeto 1",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 2000
        },
        {
            "name": "Projeto 2",
            "description": "Descrição do projeto 2",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 2000
        },
        {
            "name": "Projeto 3",
            "description": "Descrição do projeto 3",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 3000
        },
        {
            "name": "Projeto 4",
            "description": "Descrição do projeto 4",
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
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 6000
        },
        {
            "name": "Projeto 7",
            "description": "Descrição do projeto 7",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 7000
        },
    ]


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
        <div className={"p-10 z-10 relative transition-all select-none " + props.className}>

            <div className="projects flex overflow-auto transition rounded-xl">
                <div className="absolute left-0 w-10 ml-2 mt-1 h-52 flex items-center justify-center text-zinc-400 cursor-pointer" onClick={() => moveScroll("left")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>


                {
                    projects.map((project, index) => {
                        return (
                            <Project key={index} name={project.name} description={project.description} image={project.image} price={project.price} />
                        )
                    })
                }

                <div className="absolute right-0 w-10 mr-2 mt-1 h-52 flex items-center justify-center text-zinc-400 cursor-pointer" onClick={() => moveScroll("right")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>

            </div>

            <div className="w-full flex flex-row justify-center items-center mt-5">
                <span className="text-lg text-zinc-700 font-ibm mr-1">Para ver mais projetos, você pode entrar no nosso</span>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="w-8 h-8 ml-4 mr-4 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> */}

                <Link to="/hub">
                    <div className="flex p-3 rounded-full border-white border-2 ease-in-out cursor-pointer font-ibm font-medium transition-all text-zinc-800 hover:text-black hover:underline hover:decoration-wavy decoration-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                        </svg>
                        <span className="ml-2">Hub de Projetos</span>

                    </div>
                </Link>
            </div>
        </div>
    )
}