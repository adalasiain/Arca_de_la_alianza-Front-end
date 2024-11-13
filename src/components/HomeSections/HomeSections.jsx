import React from 'react';
import './HomeSections.css';
import { useCarousel } from './Carousel';
import fondo from '../../assets/images/fondo.jpg';
import fondoCampana from '../../assets/images/fondoCampana.png';

function HomeSections() {
  const { getSlides, prevSlide, nextSlide, isAnimating1, isAnimating2 } = useCarousel();
  const { previous, current, next } = getSlides();

  return (
    <div>
      {/* Elemento Secciones del Inicio */}
      {/* Sección 1 Galería */}
      <div className="h-screen overflow-hidden relative flex justify-center">
        {/* Fondo */}
        <div className="flex justify-center items-center">
          <img src={fondo} alt="Fondo" className="absolute z-10 object-cover h-screen w-full" />
          <img src={fondoCampana} alt="Fondo Campana" className="absolute z-30 object-cover h-screen" />
          <div className="absolute z-20 bg-[#b87333] opacity-60 h-screen w-full"></div>
        </div>
        <div className="w-full absolute">
          <div className="circuloFondo absolute z-30 -left-[25vw] -top-[15vh]"></div>
        </div>
        {/* Subsecciones Galería */}
        <div className="w-full absolute z-40">
          <div className="grid grid-cols-12 gap-0 h-screen flex items-center">
            {/* Subseccion 1 */}
            <div className="col-span-5 px-10">
              <div className="grid grid-cols-2 gap-0 pb-14">
                <div className="col-span-1 flex justify-start">
                  <div className="arrowContainer">
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                  </div>
                </div>
                <div className="col-span-1 flex justify-end">
                  <div className="circleContainer">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-0 pb-5">
                <div className="col-span-1">
                  <div className="rectangle h-full"></div>
                </div>
                <div className="col-span-11">
                  <p className="league-spartan text-white text-8xl font-bold">VENTA DE</p>
                  <p className="league-spartan text-[#ee9f05] text-8xl font-bold">CAMPANAS</p>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-0 pb-8">
                <div className="col-span-12">
                  <p className="poppins text-white text-xl font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-0 pb-14">
                <div className="col-span-12 pl-3">
                  <button type="button" className="poppins text-3xl font-bold flex items-center text-white px-8 py-2 bg-[#b87333] hover:bg-[#ee9f05] focus:ring focus:outline-none focus:ring-[#ffbb05] rounded-full text-center">GALERÍA<svg className="w-10 h-10 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="m11 15l3-3l-3-3"/></g></svg></button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-0">
                <div className="col-span-1 flex justify-start">
                  <div className="circleContainer">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </div>
                <div className="col-span-1 flex justify-end">
                  <div className="arrowContainer">
                    <div className="biggerArrow"></div>
                    <div className="biggerArrow"></div>
                    <div className="biggerArrow"></div>
                    <div className="biggerArrow"></div>
                    <div className="biggerArrow"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Subseccion 2 */}
            <div className="col-span-7 h-full flex justify-center items-center">
              {/* Elemento 1 */}
              <div className={`grid grid-rows-12 gap-0 relative bg-white w-[30%] h-[60vh] rounded-[40px] relative -right-20 z-10 shadow-xl opacity-95 transition-opacity transform ${isAnimating1 ? 'bg-opacity-95 -translate-x-[0%] transition-all duration-500 ease-in-out' : ''} ${isAnimating2 ? 'bg-opacity-95 translate-x-[0%] transition-all duration-500 ease-in-out' : ''}`}>
                <div className="row-span-6 rounded-t-[40px] flex justify-center items-center overflow-hidden select-none">
                  <img src={previous.image} alt={previous.title} className={`object-cover w-full h-full p-6 rounded-[50px] transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60' : ''} ${isAnimating2 ? 'duration-500 opacity-60' : ''}`} />
                </div>
                <div className="row-span-4 px-6 pb-6">
                  <p className={`league-spartan text-black text-4xl font-bold pb-2 transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 select-none' : ''} ${isAnimating2 ? 'opacity-60 select-none' : ''}`}>{previous.title}</p>
                  <p className={`poppins text-black text-lg font-normal text-justify transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 select-none' : ''} ${isAnimating2 ? 'opacity-60 select-none' : ''}`}>{previous.description}</p>
                </div>
                <div className="row-span-2 rounded-b-[40px] flex justify-center">
                  <button type="button" className={`poppins text-lg font-semibold flex justify-between items-center text-white px-8 py-2 w-full h-12 mx-10 bg-black hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 pointer-events-none select-none' : ''} ${isAnimating2 ? 'duration-500 opacity-60 pointer-events-none select-none' : ''}`}>Detalles<svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="m11 15l3-3l-3-3"/></g></svg></button>
                </div>
              </div>
              {/* Elemento 2 */}
              <div className={`grid grid-rows-12 gap-0 relative bg-white bg-opacity-95 w-1/3 h-[70vh] rounded-[40px] z-20 shadow-xl transition-opacity transform ${isAnimating1 ? 'bg-opacity-80 -translate-x-[15%] transition-all duration-500 ease-in-out' : ''} ${isAnimating2 ? 'bg-opacity-80 translate-x-[15%] transition-all duration-500 ease-in-out' : ''}`}>
                <div className="row-span-6 rounded-t-[40px] flex justify-center items-center overflow-hidden opacity-95 select-none">
                  <img src={current.image} alt={current.title} className={`object-cover w-full h-full p-6 rounded-[50px] transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60' : ''} ${isAnimating2 ? 'duration-500 opacity-60' : ''}`} />
                </div>
                <div className="row-span-4 p-6 opacity-95">
                  <p className={`league-spartan text-black text-4xl font-bold pb-2 transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 select-none' : ''} ${isAnimating2 ? 'opacity-60 select-none' : ''}`}>{current.title}</p>
                  <p className={`poppins text-black text-lg font-normal text-justify transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 select-none' : ''} ${isAnimating2 ? 'opacity-60 select-none' : ''}`}>{current.description}</p>
                </div>
                <div className="row-span-2 rounded-b-[40px] flex justify-center opacity-95">
                  <button type="button" className={`poppins text-lg font-semibold flex justify-between items-center text-white px-8 py-2 w-full h-12 mx-10 bg-black hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 pointer-events-none select-none' : ''} ${isAnimating2 ? 'duration-500 opacity-60 pointer-events-none select-none' : ''}`}>Detalles<svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="m11 15l3-3l-3-3"/></g></svg></button>
                </div>
                <div className="absolute w-full h-10 h-[54%] flex flex-col justify-end">
                  <div className={`grid grid-cols-2 gap-0 ${isAnimating1 ? 'translate-x-[15%] pointer-events-none' : ''} ${isAnimating2 ? '-translate-x-[15%] pointer-events-none' : ''}`}>
                    <div className="row-col-1 flex justify-start relative -left-7">
                      <button onClick={prevSlide} type="button" className="poppins text-3xl font-bold flex items-center text-white px-0 py-0 bg-[#b87333] hover:bg-[#ee9f05] focus:ring focus:outline-none focus:ring-[#ffbb05] rounded-full text-center drop-shadow-md"><svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="m7.825 12l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T5.426 12t.063-.375t.212-.325l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7zm6.6 0l3.875 3.9q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T12.026 12t.063-.375t.212-.325l4.6-4.6q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7z"/></svg></button>
                    </div>
                    <div className="row-col-1 flex justify-end relative -right-7">
                      <button onClick={nextSlide} type="button" className="poppins text-3xl font-bold flex items-center text-white px-0 py-0 bg-[#b87333] hover:bg-[#ee9f05] focus:ring focus:outline-none focus:ring-[#ffbb05] rounded-full text-center drop-shadow-md"><svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M9.575 12L5.7 8.1q-.275-.275-.288-.687T5.7 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T5.7 17.3q-.275-.275-.275-.7t.275-.7zm6.6 0L12.3 8.1q-.275-.275-.288-.687T12.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T12.3 17.3q-.275-.275-.275-.7t.275-.7z"/></svg></button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Elemento 3 */}
              <div className={`grid grid-rows-12 gap-0 relative bg-white w-[30%] h-[60vh] rounded-[40px] relative -left-20 z-10 shadow-xl opacity-95 transition-opacity transform ${isAnimating1 ? 'bg-opacity-95 -translate-x-[0%] transition-all duration-500 ease-in-out' : ''} ${isAnimating2 ? 'bg-opacity-95 translate-x-[0%] transition-all duration-500 ease-in-out' : ''}`}>
                <div className="row-span-6 rounded-t-[40px] flex justify-center items-center overflow-hidden select-none">
                  <img src={next.image} alt={next.title} className={`object-cover w-full h-full p-6 rounded-[50px] transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60' : ''} ${isAnimating2 ? 'duration-500 opacity-60' : ''}`} />
                </div>
                <div className="row-span-4 px-6 pb-6">
                  <p className={`league-spartan text-black text-4xl font-bold pb-2 transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 select-none' : ''} ${isAnimating2 ? 'opacity-60 select-none' : ''}`}>{next.title}</p>
                  <p className={`poppins text-black text-lg font-normal text-justify transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 select-none' : ''} ${isAnimating2 ? 'opacity-60 select-none' : ''}`}>{next.description}</p>
                </div>
                <div className="row-span-2 rounded-b-[40px] flex justify-center">
                  <button type="button" className={`poppins text-lg font-semibold flex justify-between items-center text-white px-8 py-2 w-full h-12 mx-10 bg-black hover:bg-[#4c4c4c] focus:ring focus:outline-none focus:ring-[#989898] rounded-full transition-opacity transform ${isAnimating1 ? 'duration-500 opacity-60 pointer-events-none select-none' : ''} ${isAnimating2 ? 'duration-500 opacity-60 pointer-events-none select-none' : ''}`}>Detalles<svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="m11 15l3-3l-3-3"/></g></svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSections;