"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function CarritoPage() {
  // Simulación de estado del carrito
  const [items, setItems] = useState([
    { id: 1, titulo: "Elden Ring", precio: 59.99, cantidad: 1, imagen: "https://m.media-amazon.com/images/I/81xG-z+Wj8L._AC_SX342_.jpg" },
    { id: 2, titulo: "Cyberpunk 2077", precio: 29.99, cantidad: 2, imagen: "https://m.media-amazon.com/images/I/81vNDjsmH4L._AC_SX342_.jpg" },
  ]);

  const subtotal = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const impuestos = subtotal * 0.16;
  const total = subtotal + impuestos;

  const eliminarItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const actualizarCantidad = (id: number, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const nuevaCant = Math.max(1, item.cantidad + delta);
        return { ...item, cantidad: nuevaCant };
      }
      return item;
    }));
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-20 text-center">
        <svg className="w-24 h-24 text-slate-700 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
        <p className="text-slate-400 mb-8">Parece que aún no has agregado ningún juego a tu carrito.</p>
        <Link href="/catalogo" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20">
          Explorar Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-10">Tu Carrito de Compras</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Lista de Items */}
        <div className="flex-1 space-y-6">
          <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-bold text-slate-400 uppercase tracking-wider border-b border-white/10 pb-4">
            <div className="col-span-6">Producto</div>
            <div className="col-span-2 text-center">Precio</div>
            <div className="col-span-2 text-center">Cantidad</div>
            <div className="col-span-2 text-right">Subtotal</div>
          </div>

          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-900 p-4 md:p-0 md:bg-transparent rounded-2xl md:border-b border-white/5 md:pb-6">
              
              {/* Info Producto */}
              <div className="col-span-1 md:col-span-6 flex gap-4 items-center">
                <img src={item.imagen} alt={item.titulo} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl shadow-lg" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.titulo}</h3>
                  <button 
                    onClick={() => eliminarItem(item.id)}
                    className="text-red-400 text-sm hover:text-red-300 transition-colors flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    Eliminar
                  </button>
                </div>
              </div>

              {/* Precio Unitario */}
              <div className="col-span-1 md:col-span-2 text-left md:text-center font-medium text-slate-300">
                <span className="md:hidden text-slate-500 mr-2">Precio:</span>
                ${item.precio}
              </div>

              {/* Cantidad */}
              <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
                <div className="flex items-center bg-slate-950 rounded-lg border border-slate-800">
                  <button onClick={() => actualizarCantidad(item.id, -1)} className="px-3 py-1 hover:text-blue-400 transition-colors">-</button>
                  <span className="w-8 text-center font-bold">{item.cantidad}</span>
                  <button onClick={() => actualizarCantidad(item.id, 1)} className="px-3 py-1 hover:text-blue-400 transition-colors">+</button>
                </div>
              </div>

              {/* Subtotal Item */}
              <div className="col-span-1 md:col-span-2 text-left md:text-right font-bold text-lg text-blue-400">
                <span className="md:hidden text-slate-500 mr-2 text-base font-normal">Total:</span>
                ${(item.precio * item.cantidad).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Resumen del Pedido */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 sticky top-24 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 border-b border-white/5 pb-4">Resumen de Pedido</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-slate-300">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Impuestos (16%)</span>
                <span>${impuestos.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex justify-between text-2xl font-black mb-8 border-t border-white/10 pt-6">
              <span>Total</span>
              <span className="text-blue-400">${total.toFixed(2)}</span>
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Proceder al Pago
            </button>
            
            <p className="text-center text-xs text-slate-500 mt-6 flex items-center justify-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Pago 100% Seguro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}