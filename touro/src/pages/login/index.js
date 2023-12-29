import Header from "../../components/header";
import Button from "../../templates/button";
import Input from "../../templates/input";

export default function Login() {


    return (
        <div>
            <Header buttons={false} />

            <img src="/bullzinho.png" className="absolute h-screen" />


            <div className="w-full h-[calc(100vh-10rem)] flex justify-center items-center">

                <div className="w-1/2 lg:w-1/3  z-10 p-6">

                    <div className="mb-10 mt-2 flex items-center justify-center">

                        <span className="font-ibm text-xl font-medium text-primary">Entre agora no</span>

                        <span className="ml-2 font-montserrat text-2xl font-bold text-primary">tourank</span>
                    </div>
                    <Input placeholder="Email" type="email" className="mb-4" />

                    <Input placeholder="Senha" type="password" />

                    <Button className="mt-4 w-full" type="primary">Entrar</Button>

                    <div className="w-full mt-2 flex items-center justify-center">
                        <span className="text-sm text-zinc-500">Ainda não tem uma conta?</span>
                        <span className="flex items-center justify-center w-20 text-sm text-primary ml-1 underline cursor-pointer hover:font-medium hover:decoration-2">cadastre-se</span>

                    </div>
                </div>

            </div>
        </div>
    )
}


