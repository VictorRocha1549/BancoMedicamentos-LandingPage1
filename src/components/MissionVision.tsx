export default function MissionVision() {
  return (
    <section id="mision" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-wider">Nuestro Propósito</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mt-3">Misión y Visión</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c84a] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Misión */}
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#c9a84c]/10 rounded-2xl" />
            <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Misión</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Brindar acceso gratuito a medicamentos esenciales a las personas más vulnerables de nuestra comunidad en Guaymas, Sonora, 
                inspirados por el amor cristiano y el ejemplo de la Virgen de Guadalupe, promoviendo la salud y el bienestar integral de los enfermos 
                que más lo necesitan, sin distinción alguna.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#1e3a5f]/10 rounded-2xl" />
            <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#c9a84c] to-[#e8c84a] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Visión</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Ser reconocidos como el banco de medicamentos solidario más confiable y eficiente de la región de Guaymas, 
                expandiendo nuestro alcance para que ninguna persona enferma carezca de sus medicamentos por falta de recursos, 
                formando una red de apoyo comunitario que refleje los valores de solidaridad, servicio y amor al prójimo.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🙏', title: 'Fe', desc: 'Guiados por la esperanza' },
            { icon: '❤️', title: 'Caridad', desc: 'Servir con amor' },
            { icon: '🤝', title: 'Solidaridad', desc: 'Juntos somos más' },
            { icon: '⚕️', title: 'Servicio', desc: 'Compromiso con la salud' },
          ].map((value) => (
            <div key={value.title} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-[#1e3a5f]/5 transition-colors duration-300">
              <span className="text-3xl mb-3 block">{value.icon}</span>
              <h4 className="font-bold text-[#1e3a5f] text-lg">{value.title}</h4>
              <p className="text-gray-500 text-sm mt-1">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
