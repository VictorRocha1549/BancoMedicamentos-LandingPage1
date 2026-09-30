import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1929] via-[#132f4c] to-[#1a3a5c]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#c9a84c]/8 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#2d5a8e]/20 rounded-full blur-3xl animate-float-slower" />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-[#c9a84c]/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] animate-grid-fade">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#c9a84c]/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      {/* Radial light effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)]" />

      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Emblem */}
        <div className="mb-10 flex justify-center animate-emblem-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-[#c9a84c]/20 rounded-full blur-xl animate-pulse-slow" />
            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#c9a84c] via-[#e8c84a] to-[#c9a84c] flex items-center justify-center shadow-2xl shadow-[#c9a84c]/30 border-2 border-[#e8c84a]/50">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#0a1929] flex items-center justify-center border border-[#c9a84c]/30">
                <svg className="w-12 h-12 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 2v7H4v2h7v11h2V11h7V9h-7V2z" />
                </svg>
              </div>
            </div>
            {/* Rotating ring */}
            <div className="absolute inset-[-8px] border border-[#c9a84c]/20 rounded-full animate-spin-very-slow" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-5 leading-tight tracking-tight animate-fade-up" style={{ animationDelay: '0.5s' }}>
          Banco de Medicamentos
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up" style={{ animationDelay: '0.7s' }}>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#c9a84c]" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#f0d78c] italic tracking-wide">
            Santa María de Guadalupe
          </h2>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#c9a84c]" />
        </div>

        <p className="text-xl sm:text-2xl text-white/70 mb-3 font-light tracking-wider animate-fade-up" style={{ animationDelay: '0.9s' }}>
          Salud de los Enfermos
        </p>
        
        <p className="text-base sm:text-lg text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '1.1s' }}>
          Al servicio de la comunidad de Guaymas, Sonora. Brindamos medicamentos de forma gratuita 
          a quienes más lo necesitan, guiados por la fe y la caridad cristiana.
        </p>

        {/* Badge */}
        <div className="inline-flex items-center bg-white/5 backdrop-blur-md border border-[#c9a84c]/20 rounded-full px-8 py-4 mb-12 animate-fade-up shadow-lg shadow-black/20" style={{ animationDelay: '1.3s' }}>
          <span className="relative flex h-3 w-3 mr-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
          </span>
          <span className="text-white/90 text-sm font-medium tracking-wide">Medicamentos 100% Gratuitos para la Comunidad</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up" style={{ animationDelay: '1.5s' }}>
          <a
            href="#catalogo"
            className="group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#c9a84c] to-[#e8c84a] text-[#1e3a5f] font-bold rounded-lg shadow-lg shadow-[#c9a84c]/20 hover:shadow-xl hover:shadow-[#c9a84c]/30 hover:scale-[1.03] transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Ver Catálogo de Medicamentos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-10 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-[#c9a84c]/50 transition-all duration-300 backdrop-blur-sm"
          >
            Contáctanos
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#c9a84c] rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
