import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import type { CarritoItems } from "../types/types";
import axios from "axios";
import { toast } from "sonner";

interface UserDataProps {
  carrito: CarritoItems[];
  limpiarCarrito: () => void;
}

const API_URL = import.meta.env.VITE_BACKEND_URL;

function UserData({ carrito, limpiarCarrito }: UserDataProps) {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...form,
      carrito,
    };

    console.log("Payload a enviar al backend:", payload);

    try {
      const response = await axios.post(`${API_URL}crearPedido`, payload);
      toast.success(
        <div>{`Pedido confirmado: ${response.data.pedidoId}`}</div>,
        { position: "top-right" }
      );

      setForm({
        nombre: "",
        correo: "",
        telefono: "",
        direccion: "",
        ciudad: "",
        codigoPostal: "",
      });

      limpiarCarrito(); // Llama directamente la función prop
    } catch (error) {
      console.error("Error al confirmar el pedido:", error);
      alert("Ocurrió un error al confirmar el pedido");
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
        {/* Resumen del carrito */}
        <div className="w-full max-w-2xl bg-white rounded shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Resumen del pedido
          </h2>
          {carrito.length === 0 ? (
            <p className="text-center text-gray-600">
              No hay productos en el carrito.
            </p>
          ) : (
            <ul className="divide-y">
              {carrito.map((item) => (
                <li
                  key={`${item.id}-${item.talla}`}
                  className="py-2 flex justify-between"
                >
                  <div>
                    <p className="font-semibold">{item.nombreCamisa}</p>
                    <p className="text-sm text-gray-600">Talla: {item.talla}</p>
                    <p className="text-sm text-gray-600">
                      Cantidad: {item.cantidad}
                    </p>
                  </div>
                  <p className="font-bold">${item.precio * item.cantidad}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Formulario del cliente */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">
            Datos del Envío
          </h1>

          {[
            "nombre",
            "correo",
            "telefono",
            "direccion",
            "ciudad",
            "codigoPostal",
          ].map((campo) => (
            <div className="mb-4" key={campo}>
              <label className="block text-gray-700 font-bold mb-2 capitalize">
                {campo === "codigoPostal" ? "Código postal" : campo}
              </label>
              <input
                type={
                  campo === "correo"
                    ? "email"
                    : campo === "telefono"
                    ? "tel"
                    : "text"
                }
                name={campo}
                value={form[campo as keyof typeof form]}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                placeholder={
                  campo === "nombre"
                    ? "Juan Pérez"
                    : campo === "correo"
                    ? "correo@ejemplo.com"
                    : campo === "telefono"
                    ? "55 1234 5678"
                    : ""
                }
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Confirmar envío
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default UserData;
