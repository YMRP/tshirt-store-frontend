import { Link } from "react-router-dom";

function Hero() {
 return (
    <section className="relative bg-gradient-to-br from-blue-300 to-teal-400 py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        
        {/* Texto principal */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Camisetas únicas con estilo auténtico
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Descubre la colección 2025 — hechas en México, con diseños que te representan.
          </p>
<Link
  to="/products"
  className="inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl shadow hover:bg-yellow-200 transition"
>
  Ver productos
</Link>
        </div>

        {/* Imagen */}
        <div className="flex justify-center md:justify-end">
          <img
            src="./src\assets\img\example.jpg" 
            alt="Camiseta promocional"
            className="w-72 md:w-96 rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero
