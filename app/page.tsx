"use client"; 
import React, { useState } from 'react';
import Link from 'next/link';

export default function GameStore() {
  
  const [carrito, setCarrito] = useState(0);

  const juegos = [
    { id: 1, titulo: "Elden Ring", precio: 59.99, categoria: "RPG", imagen: "⚔️" },
    { id: 2, titulo: "Cyberpunk 2077", precio: 29.99, categoria: "Acción", imagen: "🤖" },
    { id: 3, titulo: "FIFA 24", precio: 69.99, categoria: "Deportes", imagen: "⚽" },
    { id: 4, titulo: "Minecraft", precio: 19.99, categoria: "Sandbox", imagen: "🧱" },
  ];

  
  const agregarAlCarrito = () => {
    setCarrito(carrito + 1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500">
      {/* Barra de navegación */}
      <nav className="p-6 border-b border-white/10 flex justify-between items-center bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-black text-cyan-400 tracking-tighter uppercase">MAR STORE</h1>
        
        <div className="flex gap-6 items-center font-bold text-sm uppercase">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
          <Link href="/soporte" className="hover:text-cyan-400 transition-colors">Soporte</Link>
          
          {/* Aquí se muestra la cantidad dinámica */}
          <Link href="/carrito" className="bg-cyan-600 px-6 py-2 rounded-full hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-900/20">
            CARRITO ({carrito})
          </Link>
        </div>
      </nav>

      <header className="py-20 px-6 text-center">
        <h2 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent italic uppercase">
          CATÁLOGO GAMER
        </h2>
        <p className="text-slate-400">Haz clic en el botón + para agregar juegos al carrito.</p>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {juegos.map((juego) => (
            <div key={juego.id} className="group bg-slate-900 border border-white/5 rounded-3xl p-6 hover:border-cyan-500/50 transition-all duration-300 shadow-2xl">
              <div className="h-48 bg-slate-800 rounded-2xl mb-6 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                {juego.imagen}
              </div>
              <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest bg-cyan-500/10 px-2 py-1 rounded">
                {juego.categoria}
              </span>
              <h3 className="text-xl font-bold mt-3 group-hover:text-cyan-400 transition-colors">
                {juego.titulo}
              </h3>
              <div className="mt-8 flex justify-between items-center">
                <span className="text-2xl font-black text-white">${juego.precio}</span>
                
                {/* BOTÓN CON LA FUNCIÓN CLICK */}
                <button 
                  onClick={agregarAlCarrito}
                  className="bg-white text-black p-3 rounded-xl hover:bg-cyan-400 transition-colors active:scale-90 shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="M12 5v14"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}