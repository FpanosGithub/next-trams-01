export const menu = [
  {
    number: 1,
    title: 'Mantenimiento',
    items: [
      {
        name: 'Gestión de Flota',
        slug: 'flota',
        description: 'Geolocalización de la flota, información de vehículos y parámetros de servicio',
      },     
      {
        name: 'Operaciones',
        slug: 'work-flows',
        description: 'Flujos de trabajo en proceso, aprobaciones, situación, grado de avance y planificación',
      },
      {
        name: 'Comunicaciones',
        slug: 'external-comunications',
        description: 'Relación de comunicaciones con externos realizadas, relativas a la gestión como E.E.M.',
      },
      {
        name: 'Planificación',
        slug: 'manteinance-planning',
        description: 'Preventivos planificados, herramienta de planificación',
      },
    ],
  },
  {
    number: 2,
    title: 'Doc. EEM',
    items: [
      {
        name: 'Organigrama',
        slug: 'organization',
        description: 'Estructura organizativa para el mantenimiento',
      },
      {
        name: 'Planes Mantenimiento',
        slug: 'manteinance-plans',
        description:
          'Planes de mantenimiento de los vehículos y material rodante gestionado',
      },
      {
        name: 'Documentación Técnica',
        slug: 'technical-documentation',
        description:
          'Documentación Técnica del material rodante gestionado',
      },
    ],
  },
  {
    number: 3,
    title: 'Recursos',
    items: [
      {
        name: 'Personal Habilitado',
        slug: 'personnel',
        description: 'Relacción de personal habilitado para las distintas tareas de mantenimimiento',
      },
      {
        name: 'Talleres',
        slug: 'workshops',
        description: 'Centros de Mantenimiento habilitados para las tareas de mantenimiento',
      },
      {
        name: 'Instrumentación',
        slug: 'instrumentation',
        description: 'Instrumentos de medida y control',
      },
      {
        name: 'Herramienta',
        slug: 'tools',
        description: 'Control de Equipos y Herramientas disponibles para el mantenimiento ',
      },
    ],
  },
];