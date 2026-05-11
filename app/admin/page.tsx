"use client";
import React, { useState } from 'react';

export default function AdminInventarioPage() {
  const [juegos, setJuegos] = useState([
    { 
      id: 1, 
      titulo: "Cyberpunk Warriors", 
      categoria: "RPG", 
      precio: 59.99, 
      stock: 15, 
      descuento: "-20%", 
      disponible: true,
      imagen: "https://m.media-amazon.com/images/I/81vNDjsmH4L._AC_SX342_.jpg" 
    },
    { 
      id: 2, 
      titulo: "Space Odyssey", 
      categoria: "Aventura", 
      precio: 49.99, 
      stock: 22, 
      descuento: null, 
      disponible: true,
      imagen: "https://m.media-amazon.com/images/I/71Y8+E9bTGL._AC_SX342_.jpg" 
    },
    { 
      id: 3, 
      titulo: "Fantasy Realms", 
      categoria: "Fantasía", 
      precio: 39.99, 
      stock: 0, 
      descuento: "-15%", 
      disponible: false,
      imagen: "https://m.media-amazon.com/images/I/81xG-z+Wj8L._AC_SX342_.jpg" 
    },
    { 
      id: 4, 
      titulo: "Battle Royale X", 
      categoria: "Battle Royale", 
      precio: 29.99, 
      stock: 30, 
      descuento: null, 
      disponible: true,
      imagen: "https://m.media-amazon.com/images/I/81z7-H5NlCL._AC_SX342_.jpg" 
    },
    { 
      id: 5, 
      titulo: "Horror Nights", 
      categoria: "Terror", 
      precio: 44.99, 
      stock: 8, 
      descuento: "-75%", 
      disponible: true,
      imagen: "https://m.media-amazon.com/images/I/71oD41j2zEL._AC_SX342_.jpg" 
    },
    { 
      id: 6, 
      titulo: "Racing Legends", 
      categoria: "Carreras", 
      precio: 54.99, 
      stock: 18, 
      descuento: "-10%", 
      disponible: true,
      imagen: "https://m.media-amazon.com/images/I/81D0Z7sPqVL._AC_SX342_.jpg" 
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [nuevoJuego, setNuevoJuego] = useState({
    titulo: '',
    categoria: 'Acción',
    precio: '',
    stock: '',
    imagen: ''
  });

  const toggleDisponibilidad = (id: number) => {
    setJuegos(juegos.map(juego => {
      if (juego.id === id) {
        return { ...juego, disponible: !juego.disponible };
      }
      return juego;
    }));
  };

  const setOferta = (id: number, oferta: string | null) => {
    setJuegos(juegos.map(j => j.id === id ? { ...j, descuento: oferta } : j));
  };

  const eliminarJuego = (id: number) => {
    if(confirm("¿Estás seguro de que deseas eliminar este juego?")) {
      setJuegos(juegos.filter(j => j.id !== id));
    }
  };

  const handleCrearJuego = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = juegos.length > 0 ? Math.max(...juegos.map(j => j.id)) + 1 : 1;
    
    const gameToAdd = {
      id: newId,
      titulo: nuevoJuego.titulo,
      categoria: nuevoJuego.categoria,
      precio: parseFloat(nuevoJuego.precio) || 0,
      stock: parseInt(nuevoJuego.stock) || 0,
      descuento: null,
      disponible: true,
      imagen: nuevoJuego.imagen || "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200&auto=format&fit=crop"
    };

    setJuegos([gameToAdd, ...juegos]); // Agregar al principio de la lista
    setShowModal(false); // Cerrar modal
    setNuevoJuego({ titulo: '', categoria: 'Acción', precio: '', stock: '', imagen: '' }); // Limpiar
  };

  return (
    <div className="p-8 relative z-10 w-full">
      {/* Header con Título y Botón */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Gestión de Inventario</h1>
          <p className="text-slate-400">Administra el catálogo, precios, stock y ofertas de los juegos.</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all hover:scale-105 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
          Nuevo Juego
        </button>
      </div>

      {/* Tarjetas de Resumen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#12141a] border border-white/5 p-6 rounded-2xl flex items-center justify-between shadow-lg">
          <div>
            <div className="text-slate-500 text-sm mb-1 uppercase tracking-wider font-bold">Total Juegos</div>
            <div className="text-3xl font-black text-white">{juegos.length}</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-500 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
          </div>
        </div>
        <div className="bg-[#12141a] border border-white/5 p-6 rounded-2xl flex items-center justify-between shadow-lg">
          <div>
            <div className="text-slate-500 text-sm mb-1 uppercase tracking-wider font-bold">Disponibles</div>
            <div className="text-3xl font-black text-green-500">{juegos.filter(j => j.disponible).length}</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-green-600/20 text-green-500 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
        </div>
        <div className="bg-[#12141a] border border-white/5 p-6 rounded-2xl flex items-center justify-between shadow-lg">
          <div>
            <div className="text-slate-500 text-sm mb-1 uppercase tracking-wider font-bold">Con Descuento</div>
            <div className="text-3xl font-black text-red-500">{juegos.filter(j => j.descuento).length}</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <div className="bg-[#12141a] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="text-slate-500 text-xs uppercase tracking-widest border-b border-white/5 bg-[#0a0a0c]">
                <th className="p-4 font-bold">Juego</th>
                <th className="p-4 font-bold">Precio</th>
                <th className="p-4 font-bold">Stock</th>
                <th className="p-4 font-bold">Descuento</th>
                <th className="p-4 font-bold">Disponibilidad</th>
                <th className="p-4 font-bold text-center">Ofertas</th>
                <th className="p-4 font-bold text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {juegos.map((juego) => (
                <tr key={juego.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 flex items-center gap-4">
                    <img src={juego.imagen} alt={juego.titulo} className="w-12 h-16 object-cover rounded-md shadow-sm border border-white/10" />
                    <div>
                      <div className="font-bold text-sm text-white mb-0.5">{juego.titulo}</div>
                      <div className="text-xs text-slate-500">{juego.categoria}</div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-300 font-medium">${juego.precio}</td>
                  <td className="p-4 text-sm text-slate-400">{juego.stock} unidades</td>
                  <td className="p-4 text-sm">
                    {juego.descuento ? (
                      <span className="text-red-500 font-bold">{juego.descuento}</span>
                    ) : (
                      <span className="text-slate-600">Sin descuento</span>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => toggleDisponibilidad(juego.id)}>
                      {/* Toggle Switch */}
                      <div className={`w-10 h-5 rounded-full flex items-center px-1 transition-colors duration-300 ${juego.disponible ? 'bg-blue-600' : 'bg-slate-700'}`}>
                        <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform duration-300 ${juego.disponible ? 'translate-x-5' : 'translate-x-0'}`}></div>
                      </div>
                      <span className={`text-sm font-bold flex items-center gap-2 ${juego.disponible ? 'text-green-500' : 'text-slate-400'}`}>
                        {juego.disponible ? 'Disponible' : 'Agotado'}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    {juego.descuento ? (
                      <button onClick={() => setOferta(juego.id, null)} className="text-xs font-bold text-slate-400 hover:text-white border border-white/10 rounded px-3 py-1.5 transition-colors bg-transparent hover:bg-white/5">
                        Quitar Oferta
                      </button>
                    ) : (
                      <div className="flex justify-center gap-2">
                        <button onClick={() => setOferta(juego.id, '-20%')} className="bg-red-600 text-white text-xs font-bold rounded px-3 py-1.5 hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">-20%</button>
                        <button onClick={() => setOferta(juego.id, '-50%')} className="bg-red-600 text-white text-xs font-bold rounded px-3 py-1.5 hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">-50%</button>
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2.5 bg-[#1c1f26] border border-white/5 rounded-xl text-slate-400 hover:text-white transition-colors" title="Editar">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                      </button>
                      <button onClick={() => eliminarJuego(juego.id)} className="p-2.5 bg-[#1c1f26] border border-white/5 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors" title="Eliminar">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Agregar Nuevo Juego */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#12141a] border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <h2 className="text-xl font-bold text-white">Añadir Nuevo Juego</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <form onSubmit={handleCrearJuego} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-1">Título del Juego</label>
                <input required type="text" value={nuevoJuego.titulo} onChange={e => setNuevoJuego({...nuevoJuego, titulo: e.target.value})} className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Ej. The Witcher 3" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-1">Categoría</label>
                  <select value={nuevoJuego.categoria} onChange={e => setNuevoJuego({...nuevoJuego, categoria: e.target.value})} className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors">
                    <option>Acción</option>
                    <option>Aventura</option>
                    <option>RPG</option>
                    <option>Deportes</option>
                    <option>Terror</option>
                    <option>Carreras</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-1">Precio ($)</label>
                  <input required type="number" step="0.01" value={nuevoJuego.precio} onChange={e => setNuevoJuego({...nuevoJuego, precio: e.target.value})} className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="59.99" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-1">Stock Inicial</label>
                  <input required type="number" value={nuevoJuego.stock} onChange={e => setNuevoJuego({...nuevoJuego, stock: e.target.value})} className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="100" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-1">URL de Imagen</label>
                  <input type="url" value={nuevoJuego.imagen} onChange={e => setNuevoJuego({...nuevoJuego, imagen: e.target.value})} className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="https://..." />
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-3 rounded-xl font-bold text-slate-300 bg-[#1c1f26] hover:bg-[#2a2d36] transition-colors border border-white/5">
                  Cancelar
                </button>
                <button type="submit" className="flex-1 py-3 rounded-xl font-bold text-white bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20">
                  Guardar Juego
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
