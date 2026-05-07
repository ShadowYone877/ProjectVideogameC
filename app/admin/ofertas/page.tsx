"use client";
import React from 'react';

export default function AdminOfertasPage() {
  return (
    <div className="p-8 relative z-10 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Gestión de Ofertas</h1>
          <p className="text-slate-400">Configura campañas promocionales y descuentos masivos.</p>
        </div>
        <button className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all hover:scale-105 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
          Nueva Oferta
        </button>
      </div>

      <div className="bg-[#12141a] border border-white/5 p-12 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl">
        <svg className="w-20 h-20 text-slate-700 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
        <h2 className="text-2xl font-bold text-white mb-2">Módulo en Construcción</h2>
        <p className="text-slate-400 max-w-md mx-auto">Esta sección estará disponible próximamente. La base visual con el botón superior ya está preparada.</p>
      </div>
    </div>
  );
}
