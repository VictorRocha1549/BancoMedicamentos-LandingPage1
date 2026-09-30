import { useState, useEffect } from 'react';
import { fetchMedicamentos, type Medicamento } from '../lib/supabase';

export default function Catalog() {
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadMedicamentos();
  }, []);

  async function loadMedicamentos() {
    setLoading(true);
    const data = await fetchMedicamentos();
    setMedicamentos(data);
    setLoading(false);
  }

  const filtered = medicamentos.filter(m => {
    return m.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
           m.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
           m.gramaje.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const disponibles = medicamentos.filter(m => m.disponible).length;
  const agotados = medicamentos.filter(m => !m.disponible).length;

  return (
    <section id="catalogo" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] font-semibold text-xs uppercase tracking-[0.2em]">Inventario Actualizado</span>
            <div className="h-px w-8 bg-[#c9a84c]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] tracking-tight">
            Catálogo de Medicamentos
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#e8c84a] mx-auto mt-5" />
          <p className="text-gray-500 mt-5 max-w-xl mx-auto text-base leading-relaxed">
            Medicamentos proporcionados de forma <strong className="text-[#1e3a5f] font-semibold">completamente gratuita</strong> a quienes lo necesiten.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-6 sm:gap-10 bg-white rounded-2xl px-8 py-5 shadow-sm border border-gray-100">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1e3a5f]">{medicamentos.length}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Total</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-600">{disponibles}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Disponibles</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <p className="text-3xl font-bold text-red-500">{agotados}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Agotados</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#c9a84c]/20 to-[#1e3a5f]/20 rounded-2xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden group-focus-within:border-[#c9a84c] group-focus-within:shadow-md transition-all duration-300">
              <div className="pl-5 pr-3">
                <svg className="w-5 h-5 text-gray-400 group-focus-within:text-[#c9a84c] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Buscar medicamento por nombre o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-4 pr-5 text-gray-700 placeholder-gray-400 outline-none text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="pr-5 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 border-4 border-[#c9a84c]/20 rounded-full" />
              <div className="absolute inset-0 border-4 border-transparent border-t-[#c9a84c] rounded-full animate-spin" />
            </div>
            <p className="text-gray-400 mt-4 text-sm">Cargando medicamentos...</p>
          </div>
        )}

        {/* Medicine Cards Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((med, index) => (
              <MedicineCard key={med.id} medicamento={med} index={index} />
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-5 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg font-medium">No se encontraron medicamentos</p>
            <p className="text-gray-400 text-sm mt-1">Intenta con otro término de búsqueda</p>
          </div>
        )}

        {/* Free notice */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-[#1e3a5f] text-white rounded-xl px-8 py-4 shadow-lg shadow-[#1e3a5f]/10">
            <svg className="w-5 h-5 mr-3 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="font-medium text-sm tracking-wide">Todos los medicamentos son proporcionados de forma GRATUITA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MedicineCard({ medicamento, index }: { medicamento: Medicamento; index: number }) {
  return (
    <div
      className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-[#c9a84c]/40 hover:shadow-xl hover:shadow-[#1e3a5f]/5 transition-all duration-500 hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 ${
        medicamento.disponible
          ? 'bg-gradient-to-r from-emerald-400 to-emerald-500'
          : 'bg-gradient-to-r from-red-300 to-red-400'
      }`} />

      {/* Image area */}
      <div className="relative h-48 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        {medicamento.imagen_url ? (
          <img
            src={medicamento.imagen_url}
            alt={medicamento.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-gray-300 group-hover:text-[#c9a84c] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Status badge - top right */}
        <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm backdrop-blur-sm ${
          medicamento.disponible
            ? 'bg-emerald-500/90 text-white'
            : 'bg-red-500/90 text-white'
        }`}>
          {medicamento.disponible ? (
            <>
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-status-pulse" />
              Disponible
            </>
          ) : (
            <>
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Agotado
            </>
          )}
        </div>

        {/* Free badge - top left */}
        <div className="absolute top-3 left-3 bg-[#c9a84c] text-[#1e3a5f] px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">
          Gratuito
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name */}
        <h3 className="font-bold text-[#1e3a5f] text-lg leading-snug mb-2 group-hover:text-[#0a1929] transition-colors">
          {medicamento.nombre}
        </h3>

        {/* Gramaje & Presentación */}
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center px-2.5 py-1 bg-[#1e3a5f]/5 text-[#1e3a5f] text-xs font-semibold rounded">
            {medicamento.gramaje}
          </span>
          <span className="inline-flex items-center px-2.5 py-1 bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold rounded">
            {medicamento.presentacion}
          </span>
        </div>

        {/* Descripción */}
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {medicamento.descripcion}
        </p>

        {/* Bottom divider */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
              Presentación comercial
            </span>
            <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
              medicamento.disponible
                ? 'bg-emerald-50 text-emerald-600'
                : 'bg-red-50 text-red-500'
            }`}>
              <div className={`w-1.5 h-1.5 rounded-full ${
                medicamento.disponible ? 'bg-emerald-400' : 'bg-red-400'
              }`} />
              {medicamento.disponible ? 'En stock' : 'Sin stock'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
