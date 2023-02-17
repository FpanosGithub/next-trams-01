export const menu = [
  {
    chapter:'Función 1',
    name: 'Gestión de la E.E.M.',
    items: [
      {
        name: 'Organigrama',
        slug: 'organization',
        description: 'Estructura organizativa para el mantenimiento',
      },
      {
        name: 'Documentación Sistema',
        slug: 'system-documentation',
        description: 'Manuales y procedimientos organizativos para ejecutar el mantenimiento como E.E.M.',
      },
      {
        name: 'Control Operaciones',
        slug: 'work-flows',
        description: 'Flujos de trabajo en proceso, aprobaciones, situación, grado de avance y planificación',
      },
      {
        name: 'Comunicaciones Externas',
        slug: 'external-comunications',
        description: 'Relación de comunicaciones con externos realizadas, relativas a la gestión como E.E.M.',
      },
    ],
  },
  {
    chapter:'Función 2',
    name: 'Gestión de la Documentación',
    items: [
      {
        name: 'Planes de Mantenimiento',
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
    chapter:'Función 3',
    name: 'Gestión de Flota',
    items: [
      {
        name: 'Geo-Localización',
        slug: 'localization',
        description: 'Localización de la flota, situación de servicio',
      },
      {
        name: 'Telemetría',
        slug: 'telemetry',
        description: 'Registros de parametros de circulación de los vehículos, Alarmas e incidencias',
      },
    ],
  },
  {
    chapter:'Función 4',
    name: 'Ejecución del Mantenimiento',
    items: [
      {
        name: 'Mantenimientos Realizados',
        slug: 'manteinance-done',
        description: 'Preventivos y correctivos realizados. Partes',
      },
      {
        name: 'Planificación Mantenimiento',
        slug: 'manteinance-planning',
        description: 'Preventivos planificados, herramienta de planificación',
      },
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