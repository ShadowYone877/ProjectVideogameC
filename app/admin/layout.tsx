"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    window.dispatchEvent(new Event('storage'));
    router.push('/');
  };

  return (
    <div className="flex h-[100vh] w-full overflow-hidden bg-slate-950">
      {/* Sidebar Admin */}
      <aside className="w-64 bg-slate-900 border-r border-white/10 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/50">A</div>
            <span className="font-extrabold tracking-tight text-white text-xl">AdminPanel</span>
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 mt-2 px-4">Menú Principal</div>
          <Link href="/admin" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${pathname === '/admin' ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            Juegos
          </Link>
          <Link href="/admin/usuarios" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${pathname === '/admin/usuarios' ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            Usuarios
          </Link>
          <Link href="/admin/ofertas" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${pathname === '/admin/ofertas' ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
            Ofertas
          </Link>
        </nav>
        
        <div className="p-4 border-t border-white/10 bg-slate-950/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg">
              AD
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">Administrador</p>
              <p className="text-xs text-slate-500 truncate">admin@gameplatform.com</p>
            </div>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors w-full px-4 py-2 hover:bg-red-500/10 rounded-lg font-bold text-left">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Salir al sitio público
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-slate-950 relative">
        {/* Decorative background element for admin */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>
        {children}
      </main>
    </div>
  );
}
