export default function Permit() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-wider">Marco Legal</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mt-3">Permiso Sanitario</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c84a] mx-auto mt-4 rounded-full" />
          </div>

          {/* Permit Card */}
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a84c]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-[#c9a84c] rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-8 h-8 text-[#1e3a5f]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">COFEPRIS</h3>
                  <p className="text-white/70 text-sm">Comisión Federal para la Protección contra Riesgos Sanitarios</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <p className="text-white/60 text-sm mb-1">Número de Permiso</p>
                  <p className="text-xl font-bold text-[#f0d78c]">BPM-2024-GYM-0847</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <p className="text-white/60 text-sm mb-1">Titular</p>
                    <p className="font-semibold">Banco de Medicamentos Santa María de Guadalupe</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <p className="text-white/60 text-sm mb-1">Responsable Sanitario</p>
                    <p className="font-semibold">QBP. Roberto Sánchez</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <p className="text-white/60 text-sm mb-1">Fecha de Emisión</p>
                    <p className="font-semibold">15 de Enero, 2024</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <p className="text-white/60 text-sm mb-1">Vigencia</p>
                    <p className="font-semibold">15 de Enero, 2027</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <p className="text-white/60 text-sm mb-2">Ubicación Autorizada</p>
                  <p className="font-semibold">Calle Obregón #245, Col. Centro, Guaymas, Sonora, C.P. 85400</p>
                </div>
              </div>

              <div className="mt-8 flex items-center text-sm text-white/60">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>Permiso vigente y verificado ante la Secretaría de Salud</span>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <svg className="w-8 h-8 text-[#1e3a5f] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-sm font-medium text-[#1e3a5f]">Cumplimiento Normativo</p>
              <p className="text-xs text-gray-500 mt-1">NOM-164-SSA1</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <svg className="w-8 h-8 text-[#1e3a5f] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-medium text-[#1e3a5f]">Control de Caducidad</p>
              <p className="text-xs text-gray-500 mt-1">Verificación constante</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <svg className="w-8 h-8 text-[#1e3a5f] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p className="text-sm font-medium text-[#1e3a5f]">Trazabilidad</p>
              <p className="text-xs text-gray-500 mt-1">Registro completo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
