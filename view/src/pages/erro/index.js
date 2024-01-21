import Header from "../../components/header";
import Button from "../../templates/button";
import Container from "../../templates/container";


export default function Erro() {


    return (
        <div>
            <Header />

            <Container className="flex justify-center items-center h-[calc(100vh-150px)]">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-14 h-14 text-primary mr-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>

                        <h1 className="text-5xl font-bold font-ibm text-primary mb-2">Erro 404</h1>

                    </div>

                    <span className="text-sm font-normal text-zinc-600">Volte para onde voce estava clicando aqui</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-primary w-6 h-6 absolute ml-72 rotate-45">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                    </svg>


                    <Button className="text-sm mt-5 w-full">Voltar</Button>

                </div>
            </Container>
        </div>
    )
}