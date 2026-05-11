"use client";
import React, { useState } from 'react';

export default function AdminUsuariosPage() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "ShadowAdmin", email: "admin@gameplatform.com", rol: "Administrador", activo: true, fecha: "10 May 2026" },
    { id: 2, nombre: "Cliente Frecuente", email: "cliente@gameplatform.com", rol: "Cliente", activo: true, fecha: "12 May 2026" },
    { id: 3, nombre: "Juan Perez", email: "juan.p@correo.com", rol: "Cliente", activo: false, fecha: "01 Abr 2026" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', email: '', rol: 'Cliente' });

  const toggleEstado = (id: number) => {
    setUsuarios(usuarios.map(u => u.id === id ? { ...u, activo: !u.activo } : u));
  };

  const handleCrearUsuario = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
    
    setUsuarios([
      {
        id: newId,
        nombre: nuevoUsuario.nombre,
        email: nuevoUsuario.email,
        rol: nuevoUsuario.rol,
        activo: true,
        fecha: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
      },
      ...usuarios
    ]);
    setShowModal(false);
    setNuevoUsuario({ nombre: '', email: '', rol: 'Cliente' });
  };

  return (
    <div className="p-8 relative z-10 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Gestión de Usuarios</h1>
          <p className="text-slate-400">Administra las cuentas de clientes y permisos.</p>
        </div>
        <button onClick={() => setShowModal(true)} className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all hover:scale-105 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
          Nuevo Usuario
        </button>
      </div>

      <div className="bg-[#12141a] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="text-slate-500 text-xs uppercase tracking-widest border-b border-white/5 bg-[#0a0a0c]">
                <th className="p-4 font-bold">Usuario</th>
                <th className="p-4 font-bold">Rol</th>
                <th className="p-4 font-bold">Fecha Registro</th>
                <th className="p-4 font-bold">Estado</th>
                <th className="p-4 font-bold text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {usuarios.map((usuario) => (
                <tr key={usuario.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${usuario.rol === 'Administrador' ? 'bg-purple-600' : 'bg-blue-600'}`}>
                        {usuario.nombre.substring(0,2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-white">{usuario.nombre}</div>
                        <div className="text-xs text-slate-500">{usuario.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${usuario.rol === 'Administrador' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>
                      {usuario.rol}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-400">{usuario.fecha}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => toggleEstado(usuario.id)}>
                      <div className={`w-10 h-5 rounded-full flex items-center px-1 transition-colors ${usuario.activo ? 'bg-green-600' : 'bg-slate-700'}`}>
                        <div className={`w-3 h-3 bg-white rounded-full transform transition-transform ${usuario.activo ? 'translate-x-5' : 'translate-x-0'}`}></div>
                      </div>
                      <span className={`text-sm font-bold ${usuario.activo ? 'text-green-500' : 'text-slate-500'}`}>
                        {usuario.activo ? 'Activo' : 'Baneado'}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 bg-[#1c1f26] border border-white/5 rounded-lg text-slate-400 hover:text-white transition-colors" title="Editar">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Agregar Usuario */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#12141a] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <h2 className="text-xl font-bold text-white">Nuevo Usuario</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <form onSubmit={handleCrearUsuario} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-1">Nombre Completo</label>
                <input required type="text" value={nuevoUsuario.nombre} onChange={e => setNuevoUsuario({...nuevoUsuario, nombre: e.target.value})} className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500" placeholder="Ej. Carlos Mendoza" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-1">Correo Electrónico</label>
                <input required type="email" value={nuevoUsuario.email} onChange={e => setNuevoUsuario({...nuevoUsuario, email: e.target.value})} className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500" placeholder="correo@ejemplo.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-1">Rol</label>
                <select value={nuevoUsuario.rol} onChange={e => setNuevoUsuario({...nuevoUsuario, rol: e.target.value})} className="w-full bg-[#0a0a0c] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-purple-500">
                  <option>Cliente</option>
                  <option>Administrador</option>
                </select>
              </div>
              <div className="pt-4 flex gap-3">
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-3 rounded-xl font-bold text-slate-300 bg-[#1c1f26] hover:bg-[#2a2d36] transition-colors border border-white/5">Cancelar</button>
                <button type="submit" className="flex-1 py-3 rounded-xl font-bold text-white bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20">Registrar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
