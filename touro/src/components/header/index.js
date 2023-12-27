import Logo from "../../templates/logo";


export default function Header() {
  return (
    <div className="w-full h-20 flex items-center justify-between p-8 z-10 relative">

      <Logo size="text-xl" />

      <div className="flex items-center justify-between">
        <div className="w-36 h-full bg-primary hover:bg-white border-2 border-primary hover:text-primary p-2 text-white rounded-full cursor-pointer flex items-center justify-center mr-4">Investir</div>
        <div className="w-36 h-full bg-primary hover:bg-white border-2 border-primary hover:text-primary p-2 text-white rounded-full cursor-pointer flex items-center justify-center">Apresentar</div>

      </div>

    </div>
  );
}