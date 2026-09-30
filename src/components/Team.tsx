export default function Team() {
  const team = [
    {
      name: 'Pbro. Juan Carlos Méndez',
      role: 'Director Espiritual',
      bio: 'Guía espiritual del banco de medicamentos, inspirando el servicio a los más necesitados.',
      icon: '🙏'
    },
    {
      name: 'Dra. María Elena Rodríguez',
      role: 'Directora Médica',
      bio: 'Médica con 15 años de experiencia en servicio comunitario y salud pública.',
      icon: '⚕️'
    },
    {
      name: 'QBP. Roberto Sánchez',
      role: 'Farmacéutico Responsable',
      bio: 'Encargado del control de inventario y verificación de medicamentos.',
      icon: '💊'
    },
    {
      name: 'Lic. Ana Patricia Flores',
      role: 'Coordinadora Administrativa',
      bio: 'Gestión de recursos, donaciones y relaciones institucionales.',
      icon: '📋'
    },
    {
      name: 'Enf. Laura Martínez',
      role: 'Enfermera Jefe',
      bio: 'Atención directa a pacientes y orientación sobre medicamentos.',
      icon: '🩺'
    },
    {
      name: 'Sr. Pedro Gutiérrez',
      role: 'Voluntario Coordinador',
      bio: 'Lidera al equipo de voluntarios en las jornadas de distribución.',
      icon: '🤝'
    },
  ];

  return (
    <section id="equipo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-wider">Nuestro Equipo</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mt-3">Quiénes Servimos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c84a] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Un equipo comprometido con la salud y el bienestar de nuestra comunidad, 
            trabajando con vocación de servicio y amor al prójimo.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group text-center p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-[#c9a84c]/30 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{member.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-[#1e3a5f]">{member.name}</h3>
              <p className="text-[#c9a84c] font-medium text-sm mt-1">{member.role}</p>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
