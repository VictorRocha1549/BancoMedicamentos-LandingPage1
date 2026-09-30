export default function Campaigns() {
  const campaigns = [
    {
      title: 'Jornada de Salud Navideña',
      date: 'Diciembre 2024',
      description: 'Distribución especial de medicamentos y atención médica durante la temporada navideña para familias vulnerables.',
      status: 'Activa',
      icon: '🎄'
    },
    {
      title: 'Medicamentos para el Adulto Mayor',
      date: 'Programa Permanente',
      description: 'Atención prioritaria y entrega de medicamentos crónicos a personas de la tercera edad de escasos recursos.',
      status: 'Permanente',
      icon: '👴'
    },
    {
      title: 'Campaña de Donación de Medicamentos',
      date: 'Todo el año',
      description: 'Recepción de donaciones de medicamentos en buen estado y dentro de su fecha de caducidad para ampliar nuestro inventario.',
      status: 'Activa',
      icon: '📦'
    },
    {
      title: 'Salud Infantil',
      date: 'Programa Permanente',
      description: 'Atención especializada en medicamentos pediátricos para niños de familias que no cuentan con seguridad social.',
      status: 'Permanente',
      icon: '👶'
    },
    {
      title: 'Jornada de Prevención de Diabetes',
      date: 'Noviembre 2024',
      description: 'Glucómetros gratuitos, orientación nutricional y medicamentos para el control de la diabetes en la comunidad.',
      status: 'Próximamente',
      icon: '💉'
    },
    {
      title: 'Apoyo a Enfermos Crónicos',
      date: 'Programa Permanente',
      description: 'Seguimiento y suministro continuo de medicamentos para pacientes con enfermedades crónicas degenerativas.',
      status: 'Permanente',
      icon: '❤️‍🩹'
    },
  ];

  return (
    <section id="campanas" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-wider">Nuestras Actividades</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mt-3">Campañas y Programas</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c84a] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trabajamos constantemente para llevar salud y esperanza a quienes más lo necesitan en nuestra comunidad.
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div key={campaign.title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{campaign.icon}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  campaign.status === 'Activa' ? 'bg-green-100 text-green-700' :
                  campaign.status === 'Permanente' ? 'bg-blue-100 text-blue-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  {campaign.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2 group-hover:text-[#c9a84c] transition-colors">{campaign.title}</h3>
              <p className="text-[#c9a84c] text-sm font-medium mb-3">{campaign.date}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{campaign.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
