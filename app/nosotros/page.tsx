import React from 'react';
import Link from 'next/link';

export default function NosotrosPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative py-24 bg-slate-900/50 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Nuestra Misión</h1>
          <p className="text-xl text-slate-400">
            Queremos conectar a los jugadores con sus universos favoritos, proporcionando la plataforma más rápida, segura y extensa del mercado.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">¿Quiénes Somos?</h2>
            <p className="text-slate-400 mb-4 leading-relaxed">
              En GamePlatform, no solo vendemos videojuegos; respiramos la cultura gamer. Nacimos en 2026 con un solo objetivo en mente: democratizar el acceso a los títulos de la más alta calidad, ofreciendo precios justos y una experiencia de usuario inigualable.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Nuestro equipo está conformado por veteranos de la industria, desarrolladores apasionados y jugadores de toda la vida que entienden exactamente lo que buscas cuando quieres descubrir tu próxima gran aventura.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-slate-900 rounded-2xl border border-white/5">
                <div className="text-4xl font-black text-blue-500 mb-2">+10K</div>
                <div className="text-sm font-bold text-slate-400 uppercase">Juegos</div>
              </div>
              <div className="p-6 bg-slate-900 rounded-2xl border border-white/5">
                <div className="text-4xl font-black text-blue-500 mb-2">+5M</div>
                <div className="text-sm font-bold text-slate-400 uppercase">Jugadores</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" 
              alt="Equipo GamePlatform" 
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
