import Logo from "../../templates/logo";


export default function Footer() {

    return (
        <div className="w-full p-4 pl-10">


            <div className="flex items-center">
                <Logo size="text-lg" />

                <span className="ml-2 text-xs">© 2023 Todos os direitos reservados</span>
            </div>

        </div>
    )
}