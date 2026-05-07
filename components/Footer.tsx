"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="border-t border-white/10 bg-slate-950 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/50">
                G
              </div>
              <span className="font-extrabold text-xl tracking-tight">GamePlatform</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Tu destino principal para encontrar los mejores videojuegos al mejor precio. Desarrollado con pasión para la comunidad gamer.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/catalogo" className="hover:text-blue-400 transition-colors">Catálogo Completo</Link></li>
              <li><Link href="/nosotros" className="hover:text-blue-400 transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/ubicaciones" className="hover:text-blue-400 transition-colors">Nuestras Tiendas</Link></li>
              <li><Link href="/soporte" className="hover:text-blue-400 transition-colors">Centro de Soporte</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Términos de Servicio</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Política de Privacidad</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Política de Reembolsos</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 GamePlatform. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link href="/admin" className="text-slate-600 hover:text-blue-400">Panel de Administración</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
