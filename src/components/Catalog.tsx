import { useState, useEffect } from 'react';
import { fetchMedicamentos, type Medicamento } from '../lib/supabase';

export default function Catalog() {
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('todos');
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

  const categorias = ['todos', ...new Set(medicamentos.map(m => m.categoria))];

  const filtered = medicamentos.filter(m => {
    const matchCategory = filter === 'todos' || m.categoria === filter;
    const matchSearch = m.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       m.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const disponibles = medicamentos.filter(m => m.disponible).length;
  const agotados = medicamentos.filter(m => !m.disponible).length;

  return (
    <section id="catalogo" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-wider">Nuestro Inventario</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mt-3">Catálogo de Medicamentos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c84a] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Todos nuestros medicamentos son proporcionados de forma <strong className="text-[#1e3a5f]">completamente gratuita</strong> a quienes lo necesiten.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-10">
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <p className="text-2xl font-bold text-[#1e3a5f]">{medicamentos.length}</p>
            <p className="text-xs text-gray-500 mt-1">Total</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-green-100">
            <p className="text-2xl font-bold text-green-600">{disponibles}</p>
            <p className="text-xs text-gray-500 mt-1">Disponibles</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-red-100">
            <p className="text-2xl font-bold text-red-500">{agotados}</p>
            <p className="text-xs text-gray-500 mt-1">Agotados</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar medicamento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent outline-none transition-all"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-[#1e3a5f] text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#c9a84c] hover:text-[#1e3a5f]'
                }`}
              >
                {cat === 'todos' ? 'Todos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-12">
            <div className="w-12 h-12 border-4 border-[#c9a84c]/30 border-t-[#c9a84c] rounded-full animate-spin" />
          </div>
        )}

        {/* Medicine Cards Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((med) => (
              <MedicineCard key={med.id} medicamento={med} />
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-500 text-lg">No se encontraron medicamentos con ese criterio.</p>
          </div>
        )}

        {/* Free notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8e] text-white rounded-full px-8 py-4 shadow-lg">
            <svg className="w-6 h-6 mr-3 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="font-medium">Todos los medicamentos son proporcionados de forma GRATUITA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MedicineCard({ medicamento }: { medicamento: Medicamento }) {
  const categoryColors: Record<string, string> = {
    'Analgésico': 'bg-blue-100 text-blue-700',
    'Antiinflamatorio': 'bg-orange-100 text-orange-700',
    'Antibiótico': 'bg-red-100 text-red-700',
    'Gastrointestinal': 'bg-green-100 text-green-700',
    'Cardiovascular': 'bg-purple-100 text-purple-700',
    'Antidiabético': 'bg-teal-100 text-teal-700',
    'Antialérgico': 'bg-pink-100 text-pink-700',
    'Respiratorio': 'bg-cyan-100 text-cyan-700',
  };

  const colorClass = categoryColors[medicamento.categoria] || 'bg-gray-100 text-gray-700';

  return (
    <div className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-1`}>
      {/* Image area */}
      <div className="relative h-44 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        {medicamento.imagen_url ? (
          <img
            src={medicamento.imagen_url}
            alt={medicamento.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex flex-col items-center">
            <svg className="w-16 h-16 text-gray-300 group-hover:text-[#c9a84c] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span className="text-xs text-gray-400 mt-2">{medicamento.categoria}</span>
          </div>
        )}
        
        {/* Status badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
          medicamento.disponible
            ? 'bg-green-500 text-white'
            : 'bg-red-500 text-white'
        }`}>
          {medicamento.disponible ? '✓ Disponible' : '✗ Agotado'}
        </div>

        {/* Free badge */}
        <div className="absolute top-3 left-3 bg-[#c9a84c] text-[#1e3a5f] px-2 py-1 rounded-full text-xs font-bold">
          GRATUITO
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-[#1e3a5f] text-lg leading-tight">{medicamento.nombre}</h3>
        </div>
        <p className="text-[#c9a84c] font-semibold text-sm mb-2">{medicamento.gramaje}</p>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{medicamento.descripcion}</p>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}>
          {medicamento.categoria}
        </span>
      </div>
    </div>
  );
}
