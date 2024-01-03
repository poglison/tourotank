import { Link } from "react-router-dom";
import Button from "../../templates/button";
import Logo from "../../templates/logo";
import Menu from "../../templates/menu";


export default function Header(props) {


  return (
    <div className={"w-full h-20 flex items-center justify-between p-5 md:p-10 z-20 relative " + props.className}>

      <Logo className="md:text-xl text-sm" />
      

      {props.buttons != false &&
        <div className="flex items-center justify-between">

          <Link to="/chat">
            <Button type="primary" className="w-36 h-full mr-5">Investir</Button>
          </Link>



          {false ?
            <Link to="/login">
              <Button type="secondary" className="w-36 h-full">Entrar</Button>
            </Link>
            :
            <Menu />
          }

        </div>
      }

    </div>
  );
}