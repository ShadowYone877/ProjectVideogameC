"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegistroPage() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !email || !password || !confirmPassword) {
      setError('Por favor, llena todos los campos.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    // Simulación de registro
    router.push('/');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl mix-blend-screen"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl mix-blend-screen"></div>
      
      <div className="max-w-md w-full space-y-8 bg-slate-900/60 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl relative z-10">
        <div>
          <div className="mx-auto w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center font-bold text-white text-3xl shadow-lg shadow-blue-600/30">
            G
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white tracking-tight">
            Crear Cuenta
          </h2>
          <p className="mt-2 text-center text-sm text-slate-400">
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" className="font-medium text-blue-500 hover:text-blue-400 transition-colors">
              Inicia sesión
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-sm p-3 rounded-xl text-center">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <input
                name="nombre"
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="appearance-none relative block w-full px-4 py-3 bg-slate-950/50 border border-slate-800 placeholder-slate-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-colors"
                placeholder="Nombre completo"
              />
            </div>
            <div>
              <input
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
              <input
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-4 py-3 bg-slate-950/50 border border-slate-800 placeholder-slate-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-colors"
                placeholder="Contraseña"
              />
            </div>
            <div>
              <input
                name="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="appearance-none relative block w-full px-4 py-3 bg-slate-950/50 border border-slate-800 placeholder-slate-500 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-colors"
                placeholder="Confirmar contraseña"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-600/25"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
