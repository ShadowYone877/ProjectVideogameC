"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setRole(localStorage.getItem('userRole'));
  }, []);

  const handleCTA = () => {
    if (role === 'cliente') {
      router.push('/catalogo');
    } else {
      router.push('/login');
    }
  };

  return (
    <div className="flex flex-col flex-1 w-full relative">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        {/* Imagen de Fondo Real */}
        <img 
          src="https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/bc9c2bd0f8e916298539b7ef14dbcd81d867c2937746cb9f.jpg" 
          alt="Hero Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Bienvenido a la Nueva Era
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Tus Juegos Favoritos,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Al Mejor Precio.
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Descubre miles de títulos para PC, PlayStation y Xbox. Códigos instantáneos, pago seguro y soporte 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleCTA}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30 flex items-center gap-2"
              >
                {role === 'cliente' ? 'Explorar Catálogo' : 'Inicia Sesión para Comprar'}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Características Breves */}
      <section className="py-16 bg-slate-950 border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-500 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">Entrega Inmediata</h3>
              <p className="text-sm text-slate-400">Recibe tu código digital al instante en tu correo electrónico tras la compra.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-500 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">Pagos Seguros</h3>
              <p className="text-sm text-slate-400">Transacciones encriptadas con los métodos de pago más confiables.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-600/20 text-green-500 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">Mejores Ofertas</h3>
              <p className="text-sm text-slate-400">Ahorra hasta un 80% en los juegos más populares del momento.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}