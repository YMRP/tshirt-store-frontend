import { useState } from "react";
import Header from "../components/Header";
import type { CarritoProps } from "../types/types";
import { PiEmpty } from "react-icons/pi";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; // importa esto arriba

function Cart({ carrito, eliminarCarrito }: CarritoProps) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const navigate = useNavigate();
  const comprar = () => {
    setMostrarModal(true);
  };

  const confirmarCompra = () => {
    setMostrarModal(false);
    // Aquí podrías hacer una petición a una API o vaciar el carrito, etc.
    // Navega a la página de datos del usuario y pasa el carrito
    navigate("/user-data");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 p-6 w-full">
        {carrito.length === 0 ? (
          <div className="flex flex-col items-center gap-10 mt-20">
            <p className="text-4xl font-black text-center text-gray-700">
              El carrito está vacío.
            </p>
            <PiEmpty size={70} color="red" />
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Tu carrito</h2>
            <ul className="space-y-4">
              {carrito.map((item) => (
                <li
                  key={`${item.id}-${item.talla ?? "default"}`}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <div>
                    <p className="font-semibold text-lg">{item.nombreCamisa}</p>
                    <p className="text-gray-600">Cantidad: {item.cantidad}</p>
                    {item.talla && (
                      <p className="text-gray-600">Talla: {item.talla}</p>
                    )}
                  </div>
                  <button
                    onClick={() => eliminarCarrito(item.id!, item.talla)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold transition cursor-pointer"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={comprar}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold transition cursor-pointer block mx-0 mt-10"
            >
              Comprar
            </button>
          </div>
        )}
      </main>
      <Footer />

      {/* Modal */}
      {mostrarModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4">
              ¿Deseas realizar la compra?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmarCompra}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold transition"
              >
                Sí
              </button>
              <button
                onClick={() => setMostrarModal(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded font-semibold transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
