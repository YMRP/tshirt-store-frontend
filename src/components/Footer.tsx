import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bottom-0 bg-black text-white py-10 px-10 flex justify-around max-sm:flex-col max-sm:gap-5 items-center">
      <div>
        <p className="font-bold">T-SHIRT STORE | Todos los derechos reservados</p>
        <p>Pagina creada por: Yostin Manuel Ramos Pinto</p>
      </div>

      <div className="flex text-4xl gap-6 ">
        <FaReact className="hover:text-blue-500 duration-200" />
        <RiTailwindCssFill className="hover:text-blue-300 duration-200"/>
        <SiExpress className="hover:text-yellow-400 duration-200" />
        <SiMysql className="hover:text-amber-400 duration-200" />
      </div>
    </footer>
  );
}
