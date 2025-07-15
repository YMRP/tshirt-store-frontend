import Button from "./Button";
import img1 from "../assets/img/1.jpg"; // Ajusta la ruta según la ubicación de tu componente

function FeaturedProducts() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="font-bold text-center bg-amber-300 w-full text-4xl p-3">
        "Producto destacado de hoy"
      </h2>
      <section className="grid grid-cols-2 w-6/12 gap-2 my-5 max-sm:grid-cols-1 ">
        <img
          src={img1}
          alt="Camisa Destacada"
          className="w-80 rounded-2xl shadow-2xl"
        />
        <div className="flex flex-col justify-around">
          <p className="text-4xl max-sm:text-2xl mb-5 ">
            Prueba nuestra nueva camisa para los programadores fascinados por{" "}
            <span className="font-black">VUE.JS</span>
          </p>
          <Button text="Comprar Ahora" />
        </div>
      </section>
    </section>
  );
}

export default FeaturedProducts;
