import { GrDeliver } from "react-icons/gr";
import { GrUndo } from "react-icons/gr";
import { GiMexico } from "react-icons/gi";

function Advantages() {
  return (
    <section className="bg-red-400 h-fit flex flex-col gap-4 py-10 ">
      <h1 className="font-bold text-4xl p-3 text-center">Garantias</h1>
      <div className="flex justify-around max-sm:flex-col max-sm:gap-5">
        <div className="text-white flex flex-col items-center gap-1 0">
          <p className="text-2xl font-bold text-black">Envios gratís</p>
          <p className="text-black text-center w-1/2">
            Disfruta de entregas sin costo en todo el país, sin mínimo de
            compra.
          </p>
          <GrDeliver size={40} color="black" />
        </div>

        <div className="text-white flex flex-col items-center gap-1 ">
          <p className="text-2xl font-bold text-black">Cambios sin costo</p>
          <p className="text-black text-center w-1/2">
            Si no te queda o no es lo que esperabas, te ayudamos a cambiarlo sin pagar más.


          </p>
          <GrUndo size={40} color="black" />
        </div>

        <div className="text-white flex flex-col items-center gap-1 ">
          <p className="text-2xl font-bold text-black">Hecho en México</p>
          <p className="text-black text-center w-1/2">
         Apoya el talento local con camisetas diseñadas y confeccionadas en México.


          </p>
          <GiMexico size={40} color="black" />
        </div>

      


      </div>
    </section>
  );
}

export default Advantages;
