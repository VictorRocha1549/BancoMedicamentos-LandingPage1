export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2440] via-[#1e3a5f] to-[#2d5a8e]" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(https://image.qwenlm.ai/generated-images/4231b324-7599-4cf4-9931-e74c444abea2/_result.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c9a84c] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c9a84c] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-5" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Cross symbol */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#e8c84a] flex items-center justify-center shadow-2xl shadow-[#c9a84c]/20">
            <svg className="w-12 h-12 text-[#1e3a5f]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11 2v7H4v2h7v11h2V11h7V9h-7V2z" />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Banco de Medicamentos
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#f0d78c] mb-6 italic">
          Santa María de Guadalupe
        </h2>
        <p className="text-xl sm:text-2xl text-white/80 mb-4 font-light">
          Salud de los Enfermos
        </p>
        <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
          Servimos a la comunidad de Guaymas, Sonora, brindando medicamentos de forma gratuita a quienes más lo necesitan, guiados por la fe y la caridad cristiana.
        </p>

        {/* Badge */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-10">
          <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">Medicamentos 100% Gratuitos</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#catalogo"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#c9a84c] to-[#e8c84a] text-[#1e3a5f] font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Ver Catálogo de Medicamentos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Contáctanos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
