import Opinion from "./Opinion";

export default function Opinions() {
  return (
    <section className="bg-green-500 h-fit flex flex-col gap-4 py-10">
      <h1 className="font-bold text-4xl p-3 text-center">
        Opiniones de nuestros clientes
      </h1>
      <div className="flex p-4 gap-2 max-sm:flex-col max-sm:gap-5">
        <Opinion
          name="María L. – Guadalajara, Jalisco"
          text="La calidad de la tela me sorprendió, súper suave y fresca. Además, el diseño que pedí llegó tal como en la foto. Sin duda volveré a comprar"
          stars="★★★★★"
        />
        <Opinion
          name="Carlos M. – CDMX"
          text="Buena atención y entrega rápida. Me gustó mucho el estampado, aunque hubiera preferido más variedad de colores en mi talla. Aun así, muy satisfecho."
          stars="★★★★"
        />
        <Opinion
          name="Andrea R. – Monterrey, NL"
          text="La compré para un regalo y quedó perfecta. Me encantó que apoyen diseño mexicano. 100% recomendada."
          stars="★★★★★"
        />
      </div>
    </section>
  );
}
