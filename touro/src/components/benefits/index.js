import Button from "../../templates/button";



export default function Benefits() {

    var benefits = [
        {
            title: "Invista em qualquer lugar",
            description: "Você pode investir de qualquer lugar e a qualquer hora, basta ter um dispositivo com acesso a internet.",
            icon: "m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
        },
        {
            title: "Invista a partir de R$ 1,00",
            description: "Você pode investir a partir de R$ 1,00, assim você pode investir em vários projetos.",
            icon: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        },

        {
            title: "Invista com segurança",
            description: "Você pode investir com segurança, pois todos os projetos são analisados antes de serem publicados.",
            icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
        },
        {
            title: "Invista com rentabilidade",
            description: "Você pode investir com rentabilidade, pois todos os projetos são analisados antes de serem publicados.",
            icon: "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
        }
    ]

    return (
        <div className="flex flex-col items-center justify-center w-full text-white font-ibm relative p-10">
            <div className="w-2/3 flex flex-col items-center justify-center rounded-2xl text-primary p-4 pb-0">
                <span className="text-3xl font-bold">Benefícios</span>
                <span className="text-xl mt-1 text-zinc-700">Conheça os benefícios de investir no tourank</span>
            </div>

            <div className="w-full flex items-center justify-center">

                {benefits.map((benefit) => (
                    <div className="w-72 h-48 flex flex-col justify-start items-start rounded-2xl text-primary p-4 mt-10 m-2 relative">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                        </svg>

                        <span className="text-xl font-bold">{benefit.title}</span>
                        <span className="text-sm mt-4 text-zinc-700">{benefit.description}</span>
                    </div>
                ))}

            </div>

            <div className="flex justify-center w-full mt-4">
                <Button type="primary" className="w-36 mr-4">Invista</Button>
                <Button type="secondary" className="w-36">Saiba mais</Button>
            </div>

        </div>
    );
}