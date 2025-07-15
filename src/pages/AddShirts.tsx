import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "sonner";

type Camisa = {
  id: number;
  nombreCamisa: string;
  precio: number;
  desc: string;
  imagen: string;
};

function AddShirts() {
  const [nombreCamisa, setNombreCamisa] = useState("");
  const [precio, setPrecio] = useState("");
  const [desc, setDesc] = useState("");
  const [imagen, setImagen] = useState("");
  const [loading, setLoading] = useState(false);
  const [camisas, setCamisas] = useState<Camisa[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const cargarCamisas = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getCamisasStock");
      setCamisas(response.data);
    } catch (error) {
      toast.error("Error al cargar camisas");
    }
  };

  useEffect(() => {
    cargarCamisas();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombreCamisa || !precio) {
      toast.error("El nombre y el precio son obligatorios");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      if (editId === null) {
        // Crear
        await axios.post(
          "http://localhost:3000/crearCamisa",
          { nombreCamisa, precio: parseFloat(precio), desc, imagen },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Camisa agregada");
      } else {
        // Modificar
        await axios.put(
          `http://localhost:3000/modCamisa/${editId}`,
          { nombreCamisa, precio: parseFloat(precio), desc, imagen },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Camisa modificada");
      }

      limpiarFormulario();
      cargarCamisas();
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      toast.error("Error al guardar la camisa");
    } finally {
      setLoading(false);
    }
  };

  const limpiarFormulario = () => {
    setNombreCamisa("");
    setPrecio("");
    setDesc("");
    setImagen("");
    setEditId(null);
  };

  const eliminarCamisa = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/deleteCamisa/${id}`);
      toast.success("Camisa eliminada");
      cargarCamisas();
    } catch (error) {
      toast.error("Error al eliminar la camisa");
    }
  };

  const editarCamisa = (camisa: Camisa) => {
    setNombreCamisa(camisa.nombreCamisa);
    setPrecio(camisa.precio.toString());
    setDesc(camisa.desc || "");
    setImagen(camisa.imagen || "");
    setEditId(camisa.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <main className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-10">
        <h2 className="text-2xl font-bold mb-4">
          {editId ? "Modificar Camisa" : "Añadir Camisa"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre de la camisa"
            value={nombreCamisa}
            onChange={(e) => setNombreCamisa(e.target.value)}
            className="border p-2"
            required
          />
          <input
            type="number"
            step="0.01"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="border p-2"
            required
          />
          <textarea
            placeholder="Descripción"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="border p-2"
          />
          <input
            type="text"
            placeholder="URL de la imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            className="border p-2"
          />

          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 text-white py-2 rounded ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {loading
              ? "Guardando..."
              : editId
              ? "Guardar cambios"
              : "Agregar Camisa"}
          </button>
        </form>
      </main>

      {/* Lista de Camisas */}
      <section className="max-w-4xl mx-auto mt-10 p-4">
        <h3 className="text-xl font-bold mb-4">Camisas en Stock</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {camisas.map((camisa) => (
            <div
              key={camisa.id}
              className="border p-4 shadow-sm rounded bg-gray-50"
            >
              <h4 className="text-lg font-bold">{camisa.nombreCamisa}</h4>
              <p className="text-gray-700">${camisa.precio.toFixed(2)}</p>
              {camisa.desc && <p className="text-sm">{camisa.desc}</p>}
              {camisa.imagen && (
                <img
                  src={camisa.imagen}
                  alt={camisa.nombreCamisa}
                  className="w-full object-cover mt-2 rounded"
                />
              )}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => editarCamisa(camisa)}
                  className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarCamisa(camisa.id)}
                  className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AddShirts;
