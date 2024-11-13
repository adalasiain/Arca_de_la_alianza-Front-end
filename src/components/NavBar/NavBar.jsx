import React from 'react';
import './NavBar.css';
import logo from '../../assets/images/logo.png';

function NavBar() {
  return (
    <div>
      {/* Elemento NavBar */}
      <nav className="bg-[#b87333] w-full z-40 top-0 start-0 lg:px-[2%] xl:px-[2%] 2xl:px-[8%]">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto lg:p-4 xl:p-4">
          {/* Botón Logo */}
          <button href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="lg:h-11 xl:h-11" alt="Logo" />
            <span className="poppins font-semibold text-white self-center lg:text-2xl xl:text-2xl whitespace-nowrap">Arca de la Alianza</span>
          </button>
          {/* Botón Carrito */}
          <div className="flex order-2 space-x-0 rtl:space-x-reverse">
            <button type="button" className="poppins lg:text-lg xl:text-lg font-bold flex text-white bg-transparent hover:bg-[#ee9f05] focus:ring focus:outline-none focus:ring-[#ffbb05] rounded-full lg:px-4 lg:py-2 xl:px-4 xl:py-2 text-center"><svg className="w-7 h-7 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="white" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96"/></svg>Carrito de Compras</button>
          </div>
          {/* Redirecciones Páginas */}
          <div className="items-center justify-between flex w-auto order-1">
            <ul className="flex flex-row p-0 mt-0 border-0 border-gray-100 rounded-lg bg-transparent space-x-8 rtl:space-x-reverse">
              <li>
                <button href="#" className="poppins font-bold lg:text-lg xl:text-lg block lg:py-2 lg:px-3 xl:py-2 xl:px-3 text-[#ee9f05] rounded p-0">Inicio</button>
              </li>
              <li>
                <button href="#" className="poppins font-bold lg:text-lg xl:text-lg block lg:py-2 lg:px-3 xl:py-2 xl:px-3 text-white rounded hover:text-[#ee9f05] p-0">Productos</button>
              </li>
              <li>
                <button href="#" className="poppins font-bold lg:text-lg xl:text-lg block lg:py-2 lg:px-3 xl:py-2 xl:px-3 text-white rounded hover:text-[#ee9f05] p-0">Galería</button>
              </li>
              <li>
                <button href="#" className="poppins font-bold lg:text-lg xl:text-lg block lg:py-2 lg:px-3 xl:py-2 xl:px-3 text-white rounded hover:text-[#ee9f05] p-0">Conócenos</button>
              </li>
              <li>
                <button href="#" className="poppins font-bold lg:text-lg xl:text-lg block lg:py-2 lg:px-3 xl:py-2 xl:px-3 text-white rounded hover:text-[#ee9f05] p-0">Contacto</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;