import { Link } from "react-router-dom";
import Button from "../../templates/button";
import Logo from "../../templates/logo";
import Menu from "../../templates/menu";

import { useContext, useEffect } from "react";
import UserContext from "../../context/userContext";


export default function Header(props) {

  const { user } = useContext(UserContext);

  return (
    <div className={"w-full h-20 flex items-center justify-between p-5 md:p-10 z-20 relative " + props.className}>

      <Logo className="md:text-xl text-sm" />


      {props.buttons != false &&
        <div className="flex items-center justify-between">


          {!user?.username &&
            <Link to="/login">
              <Button type="primary" className="w-28 md:w-36 h-full mr-4">Investir</Button>
            </Link>
          }

          {user?.username &&
            <Link to="/login">
              <Button type="primary" className="w-44 h-full mr-4">Adicionar Projeto</Button>
            </Link>
          }




          {!user.username ?
            <Link to="/login">
              <Button type="secondary" className="w-28 md:w-36 h-full">Entrar</Button>
            </Link>
            :
            <Menu />
          }

        </div>
      }

    </div>
  );
}