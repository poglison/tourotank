import { useEffect, useState, useRef } from "react"
import Project from "../project"

export default function Projects() {

    var projects = [
        {
            "name": "WiGL",
            "description": "WiGL’s Back - Touchless Wireless Power",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 1000
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
        <div className="p-10 h-96 z-10 relative transition-all">


            <div className="projects flex overflow-auto transition rounded-xl cursor-pointer">
                <div className="absolute left-0 w-10 ml-2 mt-1 h-52 flex items-center justify-center text-zinc-400" onClick={() => moveScroll("left")}>
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
        </div>
    )
}