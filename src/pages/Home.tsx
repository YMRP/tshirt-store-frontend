import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Advantages from "../components/Advantages";
import Opinions from "../components/Opinions";
import Footer from "../components/Footer";

export default function Home() {
  const [usuario, setUsuario] = useState<{ correo?: string } | null>(null);

  useEffect(() => {
    const userString = localStorage.getItem("usuario");
    if (userString) {
      setUsuario(JSON.parse(userString));
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-amber-100 w-full flex-col">
      <Header />

      {/* Mostrar saludo solo si hay usuario */}
      {usuario && (
        <div className="bg-green-200 text-green-900 p-3 text-center font-semibold">
          Bienvenido, {usuario.correo}
        </div>
      )}

      <>
        <Hero />
        <FeaturedProducts />
        <Advantages />
        <Opinions />
        <Footer />
      </>
    </div>
  );
}
