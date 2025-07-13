export type ButtonProps = {
  text: string;
  type?: "submit" | "reset" | "button";
  onClick?: (e?: any) => void;
};

export type ProductProps = Pick<
  CamisaProps,
  "id" | "desc" | "imagen" | "nombreCamisa" | "precio"
> & {
  talla?: "Chica" | "Mediana" | "Grande";
};

export type CamisaProps = {
  id: number;
  nombreCamisa: string;
  precio: number;
  desc: string;
  imagen: string | undefined;
};

export type CarritoItems = CamisaProps & {
  cantidad: number;
  talla?: "Chica" | "Mediana" | "Grande";
};

export type CarritoProps = {
  // El carrito es un arreglo de productos en el carrito,
  // donde cada producto tiene sus datos y la cantidad seleccionada
  carrito: CarritoItems[];

  // Función para agregar un producto al carrito.
  // Recibe un objeto tipo CarritoItems (producto con cantidad)
  agregarCarrito: (producto: CarritoItems) => void;

  // Función para eliminar un producto del carrito,
  // recibe el id del producto que se quiere eliminar
  eliminarCarrito: (id: number, talla?: "Chica" | "Mediana" | "Grande") => void;
  limpiarCarrito: () => void;
};
