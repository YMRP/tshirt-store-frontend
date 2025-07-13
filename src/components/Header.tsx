import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-fit py-5 bg-blue-600 text-white font-bold flex justify-between px-4 items-center max-sm:flex-col gap-2 text-center" >
      <h1 className="text-4xl text-center">
        <Link to="/">{'{T-SHIRT STORE}'}</Link>
      </h1>

      <nav className="flex gap-6 max-sm:flex-col items-center max-sm:mt-5">
        <Link to="/products">Productos</Link>
        <Link to="/about-us">Sobre Nosotros</Link>
        <Link to="/cart">Carrito</Link>
        <Link to="/login" className="">
          <AiOutlineUser size={20} />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
