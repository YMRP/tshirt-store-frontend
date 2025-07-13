import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      <Header />

      <div
        className="min-h-screen w-full flex items-center justify-center px-4 py-16 bg-white"
        style={{
          backgroundImage: `radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)`,
        }}
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white/80 p-6 rounded-2xl shadow-xl">
          {/* Imagen */}
          <div className="flex justify-center">
            <img
              src="src/assets/img/example.jpg"
              alt="Foto de nosotros"
              className="rounded-2xl w-full max-w-md shadow-lg object-cover"
            />
          </div>

          {/* Texto */}
          <article className="flex flex-col gap-5 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-gray-800">
              Sobre Nosotros
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              En <span className="font-bold text-teal-600">T-SHIRT STORE</span>, creemos que una camiseta es mucho más que una prenda: es una forma de expresión.  
              Nacimos con la idea de ofrecer diseños originales, cómodos y con identidad, elaborados con materiales de calidad e inspirados en la cultura mexicana.
              <br /><br />
              Cada pieza está pensada para representar tu estilo y contar una historia. Apoyamos el talento local y garantizamos productos duraderos que puedas usar con orgullo.
              <br /><br />
              Gracias por elegirnos. Seguimos diseñando para ti con pasión, telas suaves y buen gusto.
            </p>
          </article>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AboutUs;
