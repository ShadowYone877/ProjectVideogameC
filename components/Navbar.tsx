"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  
  useEffect(() => {
    // Sincronizar estado de sesión
    const checkRole = () => setRole(localStorage.getItem('userRole'));
    checkRole();
    window.addEventListener('storage', checkRole);
    return () => window.removeEventListener('storage', checkRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    setRole(null);
    window.dispatchEvent(new Event('storage'));
    router.push('/');
  };

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <nav className="border-b border-white/10 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/50">
            G
          </div>
          <span className="font-extrabold text-xl tracking-tight">GamePlatform</span>
        </Link>
        
        <div className="hidden md:flex gap-8 font-medium text-sm text-slate-300">
          <Link href="/" className="hover:text-blue-400 transition-colors">Inicio</Link>
          {role === 'cliente' && (
            <Link href="/catalogo" className="hover:text-blue-400 transition-colors">Catálogo</Link>
          )}
          <Link href="/nosotros" className="hover:text-blue-400 transition-colors">Nosotros</Link>
          <Link href="/ubicaciones" className="hover:text-blue-400 transition-colors">Ubicaciones</Link>
        </div>
        
        <div className="flex items-center gap-4">
          {role === 'cliente' && (
            <Link href="/carrito" className="relative p-2 text-slate-300 hover:text-blue-400 transition-colors bg-slate-800 rounded-full mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </Link>
          )}
          
          {role ? (
            <button onClick={handleLogout} className="text-sm font-bold text-red-400 hover:text-red-300 transition-colors bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">
              Cerrar Sesión
            </button>
          ) : (
            <Link href="/login" className="text-sm font-bold text-slate-300 hover:text-white transition-colors bg-blue-600/20 px-4 py-2 rounded-lg hover:bg-blue-600/30">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
