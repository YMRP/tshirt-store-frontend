import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import UserData from "./pages/UserData";
import AddShirts from "./pages/AddShirts";

import type { CarritoItems } from "./types/types";
import { toast } from "sonner";

export function Router() {
  const [carrito, setCarrito] = useState<CarritoItems[]>(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      try {
        return JSON.parse(carritoGuardado);
      } catch {
        return [];
      }
    }
    return [];
  });

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  // Función para agregar un producto al carrito
  const agregarCarrito = (producto: CarritoItems) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find(
        (item) => item.id === producto.id && item.talla === producto.talla // compara talla también
      );

      if (existe) {
        toast.success(
          <div >
            {"Se añadio una prenda mas"}
          </div>,
          { position: "bottom-right" }
        );
        return prevCarrito.map((item) =>
          item.id === producto.id && item.talla === producto.talla
            ? { ...item, cantidad: item.cantidad + producto.cantidad }
            : item
        );
      } else {
        toast.success(
        <div >
          {"Camisa añadida al carrito"}
        </div>,
        { position: "bottom-right" }
      );
        return [...prevCarrito, producto];
      }
    });
  };
  // Función para eliminar producto
  const eliminarCarrito = (
    id: number,
    talla?: "Chica" | "Mediana" | "Grande"
  ) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((item) => !(item.id === id && item.talla === talla))
    );
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/products"
          element={
            <Products agregarCarrito={agregarCarrito} carrito={carrito} />
          }
        />

        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/user-data"
          element={
            <UserData carrito={carrito} limpiarCarrito={limpiarCarrito} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              carrito={carrito}
              agregarCarrito={agregarCarrito}
              eliminarCarrito={eliminarCarrito}
              limpiarCarrito={limpiarCarrito}
            />
          }

        
        />

        <Route path="/add-shirts" element={<AddShirts/>}/>
      </Routes>
    </BrowserRouter>
  );
}
