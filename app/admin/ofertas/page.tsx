"use client";
import React, { useState } from 'react';

export default function AdminOfertasPage() {
  const [ofertas, setOfertas] = useState([
    { id: 1, campaña: "Cyber Monday Gaming", descuento: "50%", vigencia: "30 Nov 2026", activa: true },
    { id: 2, campaña: "Rebajas de Verano", descuento: "20%", vigencia: "31 Ago 2026", activa: false },
    { id: 3, campaña: "Descuento Especial FPS", descuento: "35%", vigencia: "15 May 2026", activa: true },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [nuevaOferta, setNuevaOferta] = useState({ campaña: '', descuento: '', vigencia: '' });

  const toggleEstado = (id: number) => {
    setOfertas(ofertas.map(o => o.id === id ? { ...o, activa: !o.activa } : o));
  };

  const handleCrearOferta = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = ofertas.length > 0 ? Math.max(...ofertas.map(o => o.id)) + 1 : 1;
    
    // Formatear la fecha ingresada a modo visual amigable
    const fechaObj = new Date(nuevaOferta.vigencia);
    const vigenciaFormat = fechaObj.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });

    setOfertas([
      {
        id: newId,
        campaña: nuevaOferta.campaña,
        descuento: nuevaOferta.descuento + "%",
        vigencia: vigenciaFormat !== 'Invalid Date' ? vigenciaFormat : nuevaOferta.vigencia,
        activa: true
      },
      ...ofertas
    ]);
    setShowModal(false);
    setNuevaOferta({ campaña: '', descuento: '', vigencia: '' });
  };

  return (
    <div className="p-8 relative z-10 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Gestión de Ofertas</h1>
          <p className="text-slate-400">Configura campañas promocionales y descuentos masivos.</p>
        </div>
        <button onClick={() => setShowModal(true)} className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all hover:scale-105 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
          Nueva Oferta
        </button>
      </div>

      <div className="bg-[#12141a] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="text-slate-500 text-xs uppercase tracking-widest border-b border-white/5 bg-[#0a0a0c]">
                <th className="p-4 font-bold">Campaña</th>
                <th className="p-4 font-bold">Descuento</th>
                <th className="p-4 font-bold">Vigencia Hasta</th>
                <th className="p-4 font-bold">Estado</th>
                <th className="p-4 font-bold text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {ofertas.map((oferta) => (
                <tr key={oferta.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-bold text-white">{oferta.campaña}</td>
                  <td className="p-4">
                    <span className="bg-red-500/20 text-red-500 font-bold px-3 py-1 rounded-full text-sm">
                      -{oferta.descuento}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-400">{oferta.vigencia}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => toggleEstado(oferta.id)}>
                      <div className={`w-10 h-5 rounded-full flex items-center px-1 transition-colors ${oferta.activa ? 'bg-blue-600' : 'bg-slate-700'}`}>
                        <div className={`w-3 h-3 bg-white rounded-full transform transition-transform ${oferta.activa ? 'translate-x-5' : 'translate-x-0'}`}></div>
                      </div>
                      <span className={`text-sm font-bold ${oferta.activa ? 'text-green-500' : 'text-slate-500'}`}>
                        {oferta.activa ? 'En Curso' : 'Finalizada'}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 bg-[#1c1f26] border border-white/5 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors" title="Eliminar">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Agregar Oferta */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#12141a] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <h2 className="text-xl font-bold text-white">Nueva Campaña de Ofertas</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <form onSubmit={handleCrearOferta} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-1">Nombre de la Campaña</label>
                <input required type="text" value={nuevaOferta.campaña} onChange={e => setNuevaOferta({...nuevaOferta, campaña: e.target.value})} className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500" placeholder="Ej. Cyber Monday Gaming" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-1">Descuento (%)</label>
                  <input required type="number" min="1" max="99" value={nuevaOferta.descuento} onChange={e => setNuevaOferta({...nuevaOferta, descuento: e.target.value})} className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500" placeholder="50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-1">Vigencia Hasta</label>
                  <input required type="date" value={nuevaOferta.vigencia} onChange={e => setNuevaOferta({...nuevaOferta, vigencia: e.target.value})} className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 [color-scheme:dark]" />
                </div>
              </div>
              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-3 rounded-xl font-bold text-slate-300 bg-[#1c1f26] hover:bg-[#2a2d36] transition-colors border border-white/5">Cancelar</button>
                <button type="submit" className="flex-1 py-3 rounded-xl font-bold text-white bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20">Lanzar Oferta</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
