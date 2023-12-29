import { Link } from "react-router-dom";
import Button from "../../templates/button";
import Logo from "../../templates/logo";


export default function Header(props) {
  return (
    <div className={"w-full h-20 flex items-center justify-between p-10 pr-20 z-10 relative " + props.className}>

      <Logo size="text-xl" />


      {props.buttons != false &&
        <div className="flex items-center justify-between">

          <Link to="/chat">
            <Button type="primary" className="w-36 h-full mr-5">Investir</Button>
          </Link>

          <Link to="/chat">
            <Button type="secondary" className="w-36 h-full">Apresentar</Button>
          </Link>

        </div>
      }

    </div>
  );
}