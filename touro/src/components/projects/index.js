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
        {
            "name": "Projeto 8",
            "description": "Descrição do projeto 8",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 8000
        },
        {
            "name": "Projeto 9",
            "description": "Descrição do projeto 9",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 9000
        },
        {
            "name": "Projeto 10",
            "description": "Descrição do projeto 10",
            "image": "https://www.startengine.com/discover/_next/image?url=https%3A%2F%2Fd19j0qt0x55bap.cloudfront.net%2Fproduction%2Fstartups%2F629aaf114ce5a82d86f2883f%2Fimages%2Fstartup_cover%2Ftombstone_psyonic-se-hero-image.jpg&w=2048&q=80",
            "price": 10000
        },

    ]


    return (
        <div className="p-10 h-96 mb-0 xl:mb-44">



            <div className="projects flex overflow-auto">

                {
                    projects.map((project, index) => {
                        return (
                            <Project key={index} name={project.name} description={project.description} image={project.image} price={project.price} />
                        )
                    })
                }

                <div className="absolute right-0 w-10 mr-14 mt-1 h-52 flex items-center justify-center text-zinc-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </div>

            </div>
        </div>
    )
}