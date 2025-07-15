import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Detectar si hay token o usuario en localStorage
    const token = localStorage.getItem("token");
    setUsuarioLogueado(!!token);
  }, []);

  const handleLogout = () => {
    // Eliminar token y usuario
    localStorage.removeItem("token");
    localStorage.removeItem("usuario"); // si guardas datos del usuario
    setUsuarioLogueado(false);
    // Redirigir a login
    navigate("/login");
  };

  return (
    <header className="w-full h-fit py-5 bg-blue-600 text-white font-bold flex justify-between px-4 items-center max-sm:flex-col gap-2 text-center">
      <h1 className="text-4xl text-center">
        <Link to="/">{'{T-SHIRT STORE}'}</Link>
      </h1>

      <nav className="flex gap-6 max-sm:flex-col items-center max-sm:mt-5">
        <Link to="/products">Productos</Link>
        <Link to="/about-us">Sobre Nosotros</Link>
        <Link to="/cart">Carrito</Link>

        {usuarioLogueado && (
          <Link
            to="/add-shirts"
            className="bg-green-600 px-3 py-1 rounded hover:bg-green-800 transition cursor-pointer"
          >
            Agregar Camisas
          </Link>
        )}

        {!usuarioLogueado && (
          <Link to="/login" className="">
            <AiOutlineUser size={20} />
          </Link>
        )}

        {usuarioLogueado && (
          <button
            onClick={handleLogout}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-800 transition cursor-pointer"
          >
            Cerrar Sesión
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
