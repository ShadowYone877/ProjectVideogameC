"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function CatalogoPage() {
  const [filtro, setFiltro] = useState('Todos');

  const juegos = [
    { id: 1, titulo: "Elden Ring", precio: 59.99, descuento: "20% OFF", categoria: "RPG", imagen: "https://m.media-amazon.com/images/I/81xG-z+Wj8L._AC_SX342_.jpg" },
    { id: 2, titulo: "Cyberpunk 2077", precio: 29.99, descuento: "50% OFF", categoria: "Acción", imagen: "https://m.media-amazon.com/images/I/81vNDjsmH4L._AC_SX342_.jpg" },
    { id: 3, titulo: "Spider-Man: Miles Morales", precio: 49.99, descuento: null, categoria: "Aventura", imagen: "https://m.media-amazon.com/images/I/81z7-H5NlCL._AC_SX342_.jpg" },
    { id: 4, titulo: "God of War Ragnarok", precio: 69.99, descuento: "NUEVO", categoria: "Acción", imagen: "https://m.media-amazon.com/images/I/71Y8+E9bTGL._AC_SX342_.jpg" },
    { id: 5, titulo: "The Last of Us Part II", precio: 39.99, descuento: null, categoria: "Supervivencia", imagen: "https://m.media-amazon.com/images/I/71oD41j2zEL._AC_SX342_.jpg" },
    { id: 6, titulo: "Red Dead Redemption 2", precio: 19.99, descuento: "70% OFF", categoria: "Mundo Abierto", imagen: "https://m.media-amazon.com/images/I/81D0Z7sPqVL._AC_SX342_.jpg" },
  ];

  const juegosFiltrados = filtro === 'Todos' ? juegos : juegos.filter(j => j.categoria === filtro);

  return (
    <div className="w-full">
      <section className="py-16 bg-slate-900/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <h1 className="text-4xl font-extrabold mb-4">Catálogo de Juegos</h1>
          <p className="text-slate-400">Encuentra los mejores títulos para todas las plataformas.</p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filtros */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="bg-slate-900 p-6 rounded-2xl border border-white/5 sticky top-24">
            <h3 className="text-xl font-bold mb-6">Categorías</h3>
            <ul className="space-y-3">
              {['Todos', 'Acción', 'RPG', 'Aventura', 'Supervivencia', 'Mundo Abierto'].map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setFiltro(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${filtro === cat ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-6 mt-10">Precio</h3>
            <div className="space-y-4">
              <input type="range" className="w-full accent-blue-600" min="0" max="100" defaultValue="100" />
              <div className="flex justify-between text-sm text-slate-400">
                <span>$0</span>
                <span>$100+</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Grilla de Juegos */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center text-slate-400">
            <span>Mostrando {juegosFiltrados.length} resultados</span>
            <select className="bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-2 outline-none focus:border-blue-500">
              <option>Más Populares</option>
              <option>Menor Precio</option>
              <option>Mayor Precio</option>
              <option>Nuevos</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {juegosFiltrados.map((juego) => (
              <div key={juego.id} className="group bg-slate-900 rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all duration-300 shadow-xl relative flex flex-col">
                {juego.descuento && (
                  <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {juego.descuento}
                  </div>
                )}
                
                <div className="h-48 overflow-hidden relative">
                  <Link href={`/juegos/${juego.id}`}>
                    <img src={juego.imagen} alt={juego.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer" />
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80 pointer-events-none"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2 block">
                    {juego.categoria}
                  </span>
                  <Link href={`/juegos/${juego.id}`}>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors line-clamp-2 cursor-pointer">
                      {juego.titulo}
                    </h3>
                  </Link>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-2xl font-black text-white">${juego.precio}</span>
                    <button className="bg-white/10 hover:bg-blue-600 text-white p-3 rounded-xl transition-colors active:scale-90" aria-label="Comprar">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {juegosFiltrados.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              <svg className="mx-auto h-16 w-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold">No se encontraron juegos</h3>
              <p>Prueba con otra categoría</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
