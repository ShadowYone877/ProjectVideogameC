import Link from 'next/link';

export default function SoportePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-20 text-center">
      <h1 className="text-4xl font-bold text-purple-400">Centro de Soporte</h1>
      <p className="mt-4 text-slate-400">¿Tienes problemas con tu descarga? Contáctanos.</p>
      <Link href="/" className="inline-block mt-8 text-purple-500 underline">
        Volver al inicio
      </Link>
    </div>
  );
}