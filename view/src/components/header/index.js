import { Link } from "react-router-dom";
import Button from "../../templates/button";
import Logo from "../../templates/logo";
import Menu from "../../templates/menu";

import { useContext, useEffect } from "react";
import UserContext from "../../utils/context";
import Categories from "../../templates/categories";


export default function Header(props) {

  const { user } = useContext(UserContext);

  return (
    <div className={"w-full px-5 md:px-10 h-20 flex items-center justify-between z-20 fixed bg-white dark:bg-stone-850 " + props.className}>


      <div className="flex items-center">
        <Logo  />
        <div className="cursor-pointer ml-4 px-2 border text-primary hover:bg-primary hover:text-white border-primary dark:bg-primary dark:text-white dark:hover:bg-stone-900 rounded-full hidden lg:flex items-center justify-center">
          <span className="text-xs font-ibm">alpha 0.2</span>
        </div>
      </div>

      <div className="flex items-center justify-between">

        {props.search &&
          <div className="hidden md:flex items-center justify-between mr-4  rounded-full bg-white dark:bg-stone-850 border border-stone-300 dark:border-stone-700 h-11 px-4 pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-stone-400 dark:text-stone-700 mr-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            <input type="text" className="w-full outline-none text-ibm text-stone-700 bg-transparent dark:text-stone-400 dark:placeholder:text-stone-600" placeholder="Pesquisar" />
          </div>
        }


        {props.buttons != false &&
          <>

            <Categories />

            {user?.email &&
              <Link to="/ad/new">
                <Button type="primary" className="w-36 h-full mr-4">Anunciar</Button>
              </Link>
            }

            {!user.email ?
              <Link to="/login">
                <Button type="secondary" className="w-36 h-full">Entrar</Button>
              </Link>
              :
              <Menu />
            }
          </>
        }

      </div>

    </div>
  );
}