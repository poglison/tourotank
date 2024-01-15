import { Link } from "react-router-dom";
import Button from "../../templates/button";
import Logo from "../../templates/logo";
import Menu from "../../templates/menu";

import { useContext, useEffect } from "react";
import UserContext from "../../context";


export default function Header(props) {

  const { user } = useContext(UserContext);

  return (
    <div className={"w-full h-20 flex items-center justify-between p-5 md:p-10 z-20 relative " + props.className}>


      <div className="flex items-center">
        <Logo className="md:text-xl text-sm" />
        <div className="cursor-pointer ml-4 px-2 border-[1.5px] text-primary hover:bg-primary hover:text-white border-primary rounded-full hidden md:flex items-center justify-center">
          <span className="text-xs font-ibm">beta 0.1</span>
        </div>
      </div>

      {props.search &&
        <div className="flex items-center justify-between w-1/2 md:w-1/4  rounded-full bg-white hover:bg-zinc-50  border-[1.5px] h-11 px-4 pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-zinc-300 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>

          <input type="text" className="w-full outline-none text-ibm text-zinc-700 bg-transparent" placeholder="Pesquisar" />
        </div>
      }


      {props.buttons != false &&
        <div className="flex items-center justify-between">







          {!user?.name &&
            <Link to="/login">
              <Button type="primary" className="w-28 md:w-36 h-full mr-4">Investir</Button>
            </Link>
          }

          {user?.name &&
            <Link to="/project/new">
              <Button type="primary" className="w-44 h-full mr-4">Adicionar projeto</Button>
            </Link>
          }




          {!user.name ?
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