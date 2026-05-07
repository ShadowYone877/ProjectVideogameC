import Link from 'next/link';

export default function CarritoPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-20 text-center">
      <h1 className="text-4xl font-bold text-cyan-400">Tu Carrito de Compras</h1>
      <p className="mt-4 text-slate-400">Aquí aparecerán los videojuegos que selecciones.</p>
      <Link href="/" className="inline-block mt-8 text-cyan-500 underline">
        Volver a la tienda
      </Link>
    </div>
  );
}