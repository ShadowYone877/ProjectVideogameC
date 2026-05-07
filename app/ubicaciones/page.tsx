import React from 'react';

export default function UbicacionesPage() {
  const sucursales = [
    {
      id: 1,
      nombre: "Sucursal Centro",
      direccion: "Av. Principal #123, Zona Centro",
      horario: "Lunes a Domingo, 10:00 AM - 9:00 PM",
      telefono: "(555) 123-4567"
    },
    {
      id: 2,
      nombre: "Sucursal Norte",
      direccion: "Plaza Las Américas, Local 45",
      horario: "Lunes a Sábado, 11:00 AM - 8:00 PM",
      telefono: "(555) 987-6543"
    }
  ];

  return (
    <div className="w-full">
      <section className="py-24 bg-slate-900/50 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Nuestras Ubicaciones</h1>
          <p className="text-xl text-slate-400">
            Visítanos en nuestras tiendas físicas para vivir la experiencia gamer en persona, probar los últimos lanzamientos y recibir asesoría experta.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold mb-8">Encuéntranos</h2>
            
            {sucursales.map((sucursal) => (
              <div key={sucursal.id} className="bg-slate-900 p-6 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <h3 className="text-lg font-bold">{sucursal.nombre}</h3>
                </div>
                <div className="space-y-3 text-sm text-slate-400">
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-slate-300">Dirección:</span> {sucursal.direccion}
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-slate-300">Horario:</span> {sucursal.horario}
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-slate-300">Teléfono:</span> {sucursal.telefono}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 h-[500px] bg-slate-900 rounded-3xl border border-white/5 overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-500">
              <span className="animate-pulse">Cargando mapa...</span>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10 filter invert hue-rotate-180 contrast-125 saturate-50"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
}
