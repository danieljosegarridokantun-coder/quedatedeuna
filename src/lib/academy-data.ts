// 1. Oferta de Áreas Transversales (Pensamiento Matemático, Comprensión Lectora, Redacción Indirecta)
export const transversalPlans = [
  {
    id: 'basico',
    name: 'Básico',
    price: 899,
    period: 'MXN',
    description: 'Lo esencial para empezar tu preparación con orden.',
    features: ['Acceso a la plataforma', 'Pensamiento Matemático', 'Comprensión Lectora', 'Redacción Indirecta']
  },
  {
    id: 'medio',
    name: 'Medio',
    price: 1499,
    period: 'MXN',
    description: 'El equilibrio perfecto entre práctica y profundidad.',
    features: ['Todo lo del Básico', 'Simuladores cronometrados', 'Explicaciones en video', 'Bases de datos de reactivos']
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 2699,
    period: 'MXN',
    description: 'Blindaje total con clases en vivo y ranking competitivo.',
    features: ['Todo lo del Medio', 'Clases en vivo semanales', 'Ranking competitivo entre alumnos', 'Asesoría directa 1-on-1']
  }
] as const; // Inferencia de tipo estricta

// 2. Oferta de Módulos Específicos (Acceso por 99 días - Pago Único)
export const specificCourses = [
  {
    id: 'ingenieria',
    name: 'Ingeniería',
    subtitle: 'Física y Cálculo',
    type: 'Pago único',
    duration: '99 días',
    modules: [
      {
        name: 'Cálculo Diferencial e Integral',
        slug: 'calculo',
        lessons: [
          { name: 'Límites y Continuidad', type: 'video', duration: '22:15' },
          { name: 'La Derivada y sus Aplicaciones', type: 'video', duration: '25:40' },
          { name: 'Integrales Inmediatas', type: 'text', wordCount: 2500 }
        ]
      },
      {
        name: 'Física Avanzada',
        slug: 'fisica',
        lessons: [
          { name: 'Sistemas de Fuerzas y Estática', type: 'video', duration: '19:30' },
          { name: 'Leyes de Newton y Dinámica', type: 'video', duration: '21:10' },
          { name: 'Electromagnetismo', type: 'text', wordCount: 1800 }
        ]
      }
    ]
  },
  {
    id: 'medicina',
    name: 'Medicina',
    subtitle: 'Ciencias de la Salud y Premedicina',
    type: 'Pago único',
    duration: '99 días',
    modules: [
      {
        name: 'Biología y Anatomía',
        slug: 'biologia-anatomia',
        lessons: [
          { name: 'La Célula y su Estructura', type: 'video', duration: '18:20' },
          { name: 'Sistema Óseo y Muscular', type: 'video', duration: '24:15' }
        ]
      },
      {
        name: 'Química y Premedicina',
        slug: 'quimica-premedicina',
        lessons: [
          { name: 'Estructura Atómica', type: 'video', duration: '15:45' },
          { name: 'Conceptos de Salud y Enfermedad', type: 'text', wordCount: 3000 }
        ]
      }
    ]
  }
] as const; // Inferencia de tipo estricta