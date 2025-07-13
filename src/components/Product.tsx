import { useState } from "react";
import type { ProductProps, CarritoItems } from "../types/types";

type ProductComponentProps = ProductProps & {
  id?: number;
  agregarCarrito: (producto: CarritoItems) => void;
};

const tallas = ["Chica", "Mediana", "Grande"] as const;
type Talla = (typeof tallas)[number];

function Product({
  id,
  nombreCamisa,
  precio,
  imagen,
  talla = "Mediana", // talla por defecto
  desc,
  agregarCarrito,
}: ProductComponentProps) {
  // Estado para guardar la talla seleccionada
  const [tallaSeleccionada, setTallaSeleccionada] = useState(talla);
  const handleChangeTalla = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTallaSeleccionada(e.target.value as Talla);
  };
  const handleAgregar = () => {
    console.log("agregando producto con id", id, "talla", tallaSeleccionada);
    const productoParaCarrito: CarritoItems = {
      id,
      nombreCamisa,
      precio,
      desc,
      imagen,
      cantidad: 1,
      talla: tallaSeleccionada, // <-- Aquí envías la talla seleccionada
    };
    agregarCarrito(productoParaCarrito);
  };

  return (
    <div className="flex flex-col bg-white p-2 shadow-2xl border-2 hover:border-green-400 duration-200">
      <img
        src={
          imagen ||
          "https://res.cloudinary.com/teepublic/image/private/s--7eTH3SH8--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1639001503/production/designs/26181465_0.jpg"
        }
        alt={nombreCamisa}
        className="w-full object-cover mb-2 "
      />
      <p className="text-2xl font-black text-center mb-3">{nombreCamisa}</p>

      <p className="text-center mb-3 max-w-xs">{desc}</p>

      <div className="flex justify-between mb-2">
        <p>Tallas: </p>
        <select
          name="tallas"
          id="tallas"
          className="w-32 border rounded px-1"
          value={tallaSeleccionada} // Controlamos el select con estado
          onChange={handleChangeTalla}
        >
          <option value="Grande">Grande</option>
          <option value="Mediana">Mediana</option>
          <option value="Chica">Chica</option>
        </select>
      </div>

      <p>
        Precio: <span className="font-black">${precio}</span>
      </p>

      <button
        onClick={handleAgregar}
        className="bg-green-500 font-black hover:bg-green-400 duration-200 cursor-pointer mt-2 max-sm:text-2xl max-sm:py-2"
      >
        Añadir al carrito
      </button>
    </div>
  );
}

export default Product;
