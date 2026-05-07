"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function JuegoDetallePage() {
  const params = useParams();
  const [agregado, setAgregado] = useState(false);

  // Datos simulados (Idealmente vendrían de una API basados en params.id)
  const juego = {
    titulo: "Elden Ring: Shadow of the Erdtree",
    precio: 39.99,
    desarrollador: "FromSoftware",
    lanzamiento: "21 Jun 2024",
    categoria: "RPG de Acción",
    rating: "4.9/5",
    imagen: "https://m.media-amazon.com/images/I/81xG-z+Wj8L._AC_SX342_.jpg",
    descripcion: "Una expansión masiva que te lleva a la Tierra Sombría, un lugar oscurecido por el Árbol Áureo. Descubre nuevos misterios, enfréntate a jefes temibles y explora un mundo interconectado lleno de peligros y maravillas.",
    requisitos: {
      so: "Windows 10/11",
      procesador: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
      ram: "12 GB RAM",
      graficos: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580"
    }
  };

  const handleAgregar = () => {
    setAgregado(true);
    setTimeout(() => setAgregado(false), 3000);
  };

  return (
    <div className="w-full">
      {/* Hero del Juego */}
      <section className="relative h-[60vh] flex items-end pb-12">
        <div className="absolute inset-0">
          <img src={juego.imagen} alt={juego.titulo} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-end gap-8">
          <img src={juego.imagen} alt="Cover" className="w-64 h-80 object-cover rounded-xl shadow-2xl border-4 border-slate-900 hidden md:block" />
          
          <div className="flex-1">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-2 block">{juego.categoria}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{juego.titulo}</h1>
            <div className="flex flex-wrap gap-6 text-sm text-slate-400 mb-6">
              <span className="flex items-center gap-2"><svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg> {juego.rating} Rating</span>
              <span>Desarrollador: <span className="text-white">{juego.desarrollador}</span></span>
              <span>Lanzamiento: <span className="text-white">{juego.lanzamiento}</span></span>
            </div>
          </div>

          <div className="bg-slate-900/80 backdrop-blur border border-white/10 p-6 rounded-2xl shadow-xl w-full md:w-80 shrink-0">
            <div className="text-4xl font-black text-white mb-6 text-center">${juego.precio}</div>
            <button 
              onClick={handleAgregar}
              className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg text-lg flex items-center justify-center gap-2 ${agregado ? 'bg-green-600 hover:bg-green-700 text-white shadow-green-600/30' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30'}`}
            >
              {agregado ? (
                <><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> ¡Agregado!</>
              ) : (
                <><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg> Añadir al Carrito</>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Detalles */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Acerca de este juego</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              {juego.descripcion}
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Requisitos del Sistema</h2>
            <div className="bg-slate-900 p-6 rounded-xl border border-white/5 space-y-3 text-sm">
              <p><strong className="text-slate-400">SO:</strong> {juego.requisitos.so}</p>
              <p><strong className="text-slate-400">Procesador:</strong> {juego.requisitos.procesador}</p>
              <p><strong className="text-slate-400">Memoria:</strong> {juego.requisitos.ram}</p>
              <p><strong className="text-slate-400">Gráficos:</strong> {juego.requisitos.graficos}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Juegos Similares</h2>
          {[1,2,3].map(i => (
            <Link href={`/catalogo`} key={i} className="flex gap-4 group">
              <div className="w-24 h-16 bg-slate-800 rounded overflow-hidden shrink-0">
                <img src={juego.imagen} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="font-bold text-sm group-hover:text-blue-400 transition-colors">Juego Relacionado {i}</h4>
                <p className="text-slate-500 text-xs mt-1">$29.99</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
