import { RiAccountCircle2Line } from "react-icons/ri";
import { RiArrowLeftBoxFill } from "react-icons/ri";

function Login() {
  return (
    <div
      className=" min-h-screen bg-no-repeat bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M 0%2c228 C 57.6%2c207.4 172.8%2c125.6 288%2c125 C 403.2%2c124.4 460.8%2c247.8 576%2c225 C 691.2%2c202.2 748.8%2c5.4 864%2c11 C 979.2%2c16.6 1036.8%2c238.8 1152%2c253 C 1267.2%2c267.2 1382.4%2c116.2 1440%2c82L1440 560L0 560z' fill='%23184a7e'%3e%3c/path%3e%3cpath d='M 0%2c544 C 96%2c498.2 288%2c315.6 480%2c315 C 672%2c314.4 768%2c534.2 960%2c541 C 1152%2c547.8 1344%2c387.4 1440%2c349L1440 560L0 560z' fill='%232264ab'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
      }}
    >
      <div className="bg-white h-100 w-100 02 shadow-2xl flex flex-col items-center p-5 font-black gap-7">
        <RiAccountCircle2Line size={60} />

        <h1 className="text-4xl ">Iniciar Sesión</h1>
        <form>
          <div className="font-medium w-full flex flex-col gap-7">
            <div className="flex gap-3 justify-between">
              <label htmlFor="nombre" className="p-1">
                Nombre:{" "}
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                id="nombre"
                className="bg-gray-300 p-1"
              />
            </div>
            <div className="flex gap-3">
              <label htmlFor="nombre" className="p-1">
                Contraseña:{" "}
              </label>
              <input
                type="password"
                placeholder="Tu nombre"
                id="nombre"
                className="bg-gray-300 p-1"
              />
            </div>
            <button
              type="submit"
              className="bg-teal-400 font-black cursor-pointer p-2 mt-4 hover:bg-blue-300 duration-200"
            >
              INGRESAR
            </button>
            <a href="/" className="-m-4 flex items-center">
            {<RiArrowLeftBoxFill size={30} color="green"/>}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
