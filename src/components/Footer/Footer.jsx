import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <div className="bg-[#b87333] w-full z-40 bottom-0 start-0 py-7">
        <div className="grid grid-rows-2 gap-0">
          <div className="row-span-1">
            <div className="grid grid-cols-2 gap-0">
              <div className="col-span-1 flex justify-center items-center">
                <p className="poppins text-white text-xl font-bold">Teléfono:</p> 
                <p className="poppins text-white text-xl font-normal pl-5">771 551 23 45</p>
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <p className="poppins text-white text-xl font-bold">Correo Electrónico:</p>
                <p className="poppins text-white text-xl font-normal pl-5">usermail@mail.com</p>
              </div>
            </div>
          </div>
          <div className="row-span-1 pt-2.5">
            <div className="grid grid-cols-1 gap-0">
              <div className="col-span-1 flex justify-center items-center">
                <p className="poppins text-white text-lg font-normal">© Arca de la Alianza 2024. Todos los derechos reservados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;