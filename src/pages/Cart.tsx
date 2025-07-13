import Header from "../components/Header";
import type { CarritoProps } from "../types/types";
import { PiEmpty } from "react-icons/pi";

function Cart({ carrito, eliminarCarrito }: CarritoProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 p-6  w-full ">
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
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold transition cursor-pointer block mx-0 mt-10">
              Comprar
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default Cart;
