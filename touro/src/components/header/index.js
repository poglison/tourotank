import Button from "../../templates/button";
import Logo from "../../templates/logo";


export default function Header() {
  return (
    <div className="w-full h-20 flex items-center justify-between p-10 z-10 relative">

      <Logo size="text-xl" />

      <div className="flex items-center justify-between">
        <Button type="primary" className="w-36 h-full mr-5">Investir</Button>
        <Button type="primary" className="w-36 h-full">Apresentar</Button>

      </div>

    </div>
  );
}