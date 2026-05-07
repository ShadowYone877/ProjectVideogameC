"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState<'cliente' | 'admin'>('cliente');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, llena todos los campos.');
      return;
    }
    
    // Simulación de login con roles
    if (role === 'admin') {
      if (email === 'admin@gameplatform.com' && password === 'admin123') {
        localStorage.setItem('userRole', 'admin');
        window.dispatchEvent(new Event('storage'));
        router.push('/admin');
      } else {
        setError('Credenciales de Administrador incorrectas.');
      }
    } else {
      // rol cliente
      if (email === 'cliente@gameplatform.com' && password === 'cliente123') {
        localStorage.setItem('userRole', 'cliente');
        window.dispatchEvent(new Event('storage'));
        router.push('/catalogo');
      } else {
        setError('Credenciales de Cliente incorrectas.');
      }
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl mix-blend-screen"></div>
      
      <div className="max-w-md w-full space-y-8 bg-slate-900/60 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl relative z-10">
        <div>
          <div className="mx-auto w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center font-bold text-white text-3xl shadow-lg shadow-blue-600/30">
            G
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white tracking-tight">
            Iniciar Sesión
          </h2>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          
          {/* Selector de Rol */}
          <div className="flex bg-slate-950/50 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setRole('cliente')}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${role === 'cliente' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Cliente
            </button>
            <button
              type="button"
              onClick={() => setRole('admin')}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${role === 'admin' ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Administrador
            </button>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-sm p-3 rounded-xl text-center">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-4 py-3 bg-slate-950/50 border border-slate-800 placeholder-slate-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-colors"
                placeholder="Correo electrónico"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-4 py-3 bg-slate-950/50 border border-slate-800 placeholder-slate-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-colors"
                placeholder="Contraseña"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className={`h-4 w-4 ${role === 'admin' ? 'text-purple-600 focus:ring-purple-500' : 'text-blue-600 focus:ring-blue-500'} border-slate-700 rounded bg-slate-900`}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400">
                Recordarme
              </label>
            </div>

            <div className="text-sm">
              <Link href="#" className={`font-medium ${role === 'admin' ? 'text-purple-500 hover:text-purple-400' : 'text-blue-500 hover:text-blue-400'} transition-colors`}>
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white transition-all hover:scale-[1.02] active:scale-95 shadow-lg ${role === 'admin' ? 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 shadow-purple-600/25' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 shadow-blue-600/25'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900`}
            >
              Ingresar
            </button>
          </div>
          
          <div className="mt-4 text-center text-sm text-slate-400">
            ¿No tienes cuenta?{' '}
            <Link href="/registro" className={`font-medium ${role === 'admin' ? 'text-purple-500 hover:text-purple-400' : 'text-blue-500 hover:text-blue-400'} transition-colors`}>
              Regístrate aquí
            </Link>
          </div>

          <div className="mt-4 text-center text-xs text-slate-500 border-t border-white/10 pt-4">
            <p className="mb-1 uppercase tracking-widest font-bold">Credenciales de Prueba</p>
            <p>Cliente: <strong>cliente@gameplatform.com</strong> | Pass: <strong>cliente123</strong></p>
            <p>Admin: <strong>admin@gameplatform.com</strong> | Pass: <strong>admin123</strong></p>
          </div>
        </form>
      </div>
    </div>
  );
}
