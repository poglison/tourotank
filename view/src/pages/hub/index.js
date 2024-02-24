import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import Button from "../../templates/button";
import FAQ from "../../components/faq";
import Container from "../../templates/container";

import { get } from "../../services";
import Skeleton from "../../templates/skeleton";

export default function Hub() {



    useEffect(() => {
        get("project").then((response) => {
            setLoading(false);
            setProjects(response);
        })
    }, [])

    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([
        {
            "title": "Projeto 1",
            "description": "Descrição do projeto 1",
            "owner": "Robin Spielmann",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 2000
        },
        {
            "title": "Projeto 2",
            "description": "Descrição do projeto 2",
            "owner": "Robin Spielmann",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 2000
        },
        {
            "title": "Projeto 3",
            "description": "Descrição do projeto 3",
            "owner": "Robin Spielmann",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 3000
        },
        {
            "title": "Projeto 4",
            "description": "Descrição do projeto 4",
            "owner": "Robin Spielmann",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 4000
        },
        {
            "title": "Projeto 5",
            "description": "Descrição do projeto 5",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 5000
        },
        {
            "title": "Projeto 6",
            "description": "Descrição do projeto 6",
            "owner": "Robin Spielmann",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 6000
        },
        {
            "title": "Projeto 7",
            "description": "Descrição do projeto 7",
            "owner": "Robin Spielmann",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 7000
        },
        {
            "title": "Projeto 8",
            "description": "Descrição do projeto 8",
            "owner": "Robin Spielmann",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 8000
        }
    ]);


    return (
        <div className="dark:bg-stone-950 h-screen relative">

            <Header className="top-0 bg-white dark:bg-stone-950 !fixed" search={true} />


            <Container className="flex flex-col items-center justify-center mt-40 mb-20 text-stone-700 dark:text-stone-300">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="flex items-center justify-center">
                        <h1 className="text-ibm text-4xl font-medium text-center mb-2 mr-3 ">Hub de Anúncios</h1>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="min-w-10 w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                        </svg>
                    </div>


                    <p className="text-4xl text-center text-primary font-bold font-montserrat">touratank</p>
                   
                </div>
            </Container>


            <div className="overflow-hidden flex justify-center items-center w-full bg-stone-50 dark:bg-stone-900 border-t-[1.5px] dark:border-stone-800 border-b-[1.5px] mt-8 pb-10 relative">

                <div className="flex flex-wrap justify-start mt-20 w-5/6 z-10">


                    {projects?.map((project, index) => {
                        return (
                            <Link to={"/project/" + project.id} className="w-full lg:w-[calc(33%-29px)] rounded-xl m-4 cursor-pointer"
                                key={index}>

                                <Skeleton loading={loading} className="w-full min-w-full min-h-72 h-96 rounded-xl overflow-hidden bg-white dark:bg-stone-950">
                                    <div className="relative w-full min-w-full min-h-72 h-96   border-[1.5px] dark:border-stone-800 rounded-xl overflow-hidden">
                                        <img src={project.image} className="relative w-full h-[calc(100%-112px)] object-cover" />

                                        <div className="bg-white dark:bg-stone-950 min-h-28 h-28 w-full p-2 pb-4 px-4 absolute bottom-0 z-20">
                                            <h1 className="text-ibm dark:text-stone-300 text-lg font-medium mt-2">{project.title}</h1>
                                            <p className="text-ibm dark:text-stone-400 text-sm mt-1">{project.description}</p>
                                        </div>
                                    </div>
                                </Skeleton>
                            </Link>
                        )
                    })}

                </div>
            </div>

            <Container>
                <FAQ/>
            </Container>

            <Footer />
        </div >
    )
}