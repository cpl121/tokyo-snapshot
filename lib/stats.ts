export interface StatRow {
  label: string
  value: string
  note?: string
}

export interface StatSection {
  id: string
  title: string
  icon: string
  description?: string
  rows: StatRow[]
}

export const sections: StatSection[] = [
  {
    id: 'poblacion',
    title: 'Población',
    icon: '👥',
    description:
      'Tokio es el área metropolitana más poblada del mundo, concentrando aproximadamente el 11% de la población total de Japón.',
    rows: [
      {
        label: 'Ciudad de Tokio (metrópoli)',
        value: '14.195.730 hab.',
        note: '2025',
      },
      {
        label: 'Área metropolitana (Gran Tokio)',
        value: '~37.036.000 hab.',
        note: '2025',
      },
      {
        label: 'Gran Tokio (6 prefecturas vecinas)',
        value: '~41.000.000 hab.',
        note: '2024',
      },
      {
        label: 'Variación anual',
        value: '−0,21%',
        note: 'Tendencia actual',
      },
      {
        label: 'Proporción sobre el total de Japón',
        value: '~11%',
        note: '2024',
      },
    ],
  },
  {
    id: 'densidad',
    title: 'Densidad de Población',
    icon: '🗺️',
    description: 'Tokio es la prefectura con mayor densidad de población de todo Japón.',
    rows: [
      {
        label: 'Densidad media (metrópoli)',
        value: '~6.225 hab./km²',
      },
      {
        label: 'Distrito más denso (Toshima)',
        value: '~23.700 hab./km²',
      },
      {
        label: 'Distritos superpoblados (Nakano, Taitō, Bunkyō)',
        value: '>20.000 hab./km²',
      },
    ],
  },
  {
    id: 'economia',
    title: 'Economía y PIB',
    icon: '📈',
    description:
      'Tokio es la 2.ª mayor economía metropolitana del mundo, solo por detrás de Nueva York.',
    rows: [
      {
        label: 'PIB de la metrópoli de Tokio',
        value: '¥120,2 billones',
        note: '~887.900 M USD · EF2022',
      },
      {
        label: 'Proporción del PIB nacional de Japón',
        value: '21,2%',
        note: 'EF2022',
      },
      {
        label: 'PIB del Gran Tokio',
        value: '~2,08 billones USD',
        note: '2022',
      },
      {
        label: 'PIB per cápita de Tokio',
        value: '~¥8,43 M',
        note: '~62.291 USD · EF2022',
      },
      {
        label: 'PIB per cápita de Japón',
        value: '~37.145 USD',
        note: '2024',
      },
      {
        label: 'Capitalización Bolsa de Tokio (TSE)',
        value: 'Top 3 mundial',
        note: '2024',
      },
      {
        label: 'Empresas cotizadas en la TSE',
        value: '~3.900',
        note: 'Nov 2024',
      },
      {
        label: 'Empresas con sede central en Tokio (capital >¥1.000M)',
        value: '~3.000',
        note: '50% del total nacional · 2024',
      },
    ],
  },
  {
    id: 'renta',
    title: 'Renta e Ingresos',
    icon: '💴',
    description:
      'Los trabajadores de Tokio ganan aproximadamente un 50% más que la media nacional.',
    rows: [
      {
        label: 'Salario bruto mensual medio (Tokio)',
        value: '~¥576.000',
        note: '~3.840 USD',
      },
      {
        label: 'Salario bruto anual medio (Tokio)',
        value: '~¥6.912.000',
        note: '~46.080 USD',
      },
      {
        label: 'Salario mediano mensual (Tokio)',
        value: '~¥517.000',
      },
      {
        label: 'Salario anual medio en Japón',
        value: '~¥4.600.000',
      },
      {
        label: 'Ingreso neto mensual del hogar (Japón)',
        value: '¥524.343',
      },
      {
        label: 'Salario mínimo por hora (Tokio)',
        value: '¥1.163',
        note: 'El más alto de Japón',
      },
      {
        label: 'Coeficiente de Gini (desigualdad)',
        value: '0,334',
        note: 'Desigualdad relativamente baja',
      },
    ],
  },
  {
    id: 'desempleo',
    title: 'Tasa de Paro',
    icon: '📊',
    description:
      'Una de las tasas de paro más bajas entre los países de la OCDE. Tokio, como motor económico del país, se sitúa generalmente por debajo de la media nacional.',
    rows: [
      {
        label: 'Tasa de desempleo en Japón (media anual)',
        value: '2,5%',
        note: '2024',
      },
      {
        label: 'Último dato mensual disponible',
        value: '2,6%',
        note: 'Dic 2025',
      },
    ],
  },
  {
    id: 'empresas',
    title: 'Establecimientos y Empresas',
    icon: '🏢',
    description:
      'Tokio concentra más del 10% de todas las empresas de Japón y acoge al 75% de las empresas extranjeras presentes en el país.',
    rows: [
      {
        label: 'Total de empresas en Tokio',
        value: '>660.000',
      },
      {
        label: 'Proporción sobre el total nacional',
        value: '>10%',
      },
      {
        label: 'Empleados en empresas de Tokio',
        value: '~9,6 millones',
      },
      {
        label: 'Pequeñas y medianas empresas',
        value: '99% del total',
      },
      {
        label: 'Empresas extranjeras operando en Tokio',
        value: '>75%',
        note: 'De todas las empresas foráneas en Japón',
      },
      {
        label: 'Empresas del Fortune 500 con sede en Tokio',
        value: 'Entre las más altas del mundo',
      },
    ],
  },
  {
    id: 'seguridad',
    title: 'Delincuencia y Seguridad',
    icon: '🛡️',
    description:
      'Tokio figura sistemáticamente entre las megalópolis más seguras del mundo. Los delitos más comunes son el robo de bicicletas y carterismo en zonas turísticas.',
    rows: [
      {
        label: 'Índice de criminalidad (Numbeo)',
        value: '24,33 — Bajo',
        note: '2025',
      },
      {
        label: 'Índice de seguridad (Numbeo)',
        value: '75,67 — Alto',
        note: '2025',
      },
      {
        label: 'Tasa de homicidios intencionales (Japón)',
        value: '0,78 por 100.000 hab.',
        note: '2024',
      },
      {
        label: 'Total de delitos registrados en Japón',
        value: '~737.680',
        note: '2024',
      },
      {
        label: 'Delitos registrados en Japón',
        value: '703.351',
        note: '2023',
      },
    ],
  },
  {
    id: 'coste-vida',
    title: 'Coste de Vida',
    icon: '🛒',
    description:
      'La depreciación del yen desde 2022 ha hecho Tokio más asequible para extranjeros en comparación con décadas anteriores.',
    rows: [
      {
        label: 'Gastos mensuales medios (persona soltera)',
        value: '~¥145.943/mes',
      },
      {
        label: 'Posición en ranking Mercer (coste de vida)',
        value: 'Puesto 49.º',
        note: '2024',
      },
      {
        label: 'Comida en restaurante económico',
        value: '~¥1.000',
      },
      {
        label: 'Abono transporte mensual',
        value: '~¥10.000–15.000',
      },
      {
        label: 'Suministros (electricidad, agua, etc.)',
        value: '~¥15.000–20.000/mes',
      },
      {
        label: 'Penetración de internet (Japón)',
        value: '~94%',
      },
    ],
  },
  {
    id: 'vivienda',
    title: 'Vivienda y Alquiler',
    icon: '🏠',
    description:
      'Los costes de entrada al alquiler (depósito, comisiones, etc.) equivalen habitualmente a 5–6 meses de renta.',
    rows: [
      {
        label: 'Estudio / piso individual (≤30 m², 23 distritos)',
        value: '¥101.623/mes',
        note: '+8,9% anual · 2025',
      },
      {
        label: 'Piso para pareja (30–50 m², 23 distritos)',
        value: '¥165.662/mes',
        note: '+9,8% anual · 2025',
      },
      {
        label: 'Piso de 3 habitaciones, centro de Tokio',
        value: '~¥390.000/mes',
      },
      {
        label: '1 dormitorio en Shinjuku',
        value: '~¥101.000/mes',
      },
      {
        label: '1 dormitorio en Shibuya (zona más cara)',
        value: '~¥128.000/mes',
      },
      {
        label: 'Precio de compra de piso (por m²)',
        value: '~¥1.150.000',
      },
      {
        label: 'Revalorización del suelo (2025 vs. 2024)',
        value: '+7,7%',
        note: '2025',
      },
    ],
  },
  {
    id: 'turismo',
    title: 'Turismo',
    icon: '✈️',
    description:
      'Tokio es uno de los destinos turísticos más visitados del mundo, con un récord de llegadas internacionales en 2024.',
    rows: [
      {
        label: 'Visitantes totales a Tokio (nacionales e internacionales)',
        value: '~524 millones',
        note: '2024',
      },
      {
        label: 'Variación anual',
        value: '+14%',
        note: 'vs. 2023',
      },
      {
        label: 'Turistas extranjeros llegados a Japón',
        value: '36,9 millones (récord)',
        note: '2024',
      },
      {
        label: '% de visitantes a Japón que pasan por Tokio',
        value: '~50%',
        note: '2024',
      },
      {
        label: 'Mes más concurrido',
        value: 'Julio (~54 millones)',
        note: '2024',
      },
      {
        label: 'Motivo principal de visita',
        value: 'Ocio/turismo (55%)',
      },
      {
        label: 'Principal mercado emisor',
        value: 'Corea del Sur',
        note: '2024',
      },
      {
        label: 'Segundo mercado emisor',
        value: 'Taiwán',
        note: '2024',
      },
    ],
  },
  {
    id: 'transporte',
    title: 'Transporte',
    icon: '🚇',
    description:
      'El Metro de Tokio es solo uno de varios operadores ferroviarios (JR East, Toei, ferrocarriles privados, autobuses). La red integrada de Tokio es la más utilizada del mundo.',
    rows: [
      {
        label: 'Viajeros diarios del Metro de Tokio',
        value: '~6,84 millones',
        note: 'EF2024',
      },
      {
        label: 'Viajeros anuales del Metro de Tokio',
        value: '~2.500 millones',
        note: 'EF2024',
      },
      {
        label: 'Variación anual de viajeros',
        value: '+5%',
        note: 'EF2024 vs. EF2023',
      },
      {
        label: 'Líneas del Metro de Tokio',
        value: '9 líneas / 180 estaciones / 195 km',
      },
    ],
  },
  {
    id: 'esperanza-vida',
    title: 'Esperanza de Vida',
    icon: '❤️',
    description:
      'Japón tiene una de las esperanzas de vida más altas del mundo. Tokio, con acceso sanitario de primer nivel, se sitúa igual o por encima de la media nacional.',
    rows: [
      {
        label: 'Esperanza de vida masculina (Japón)',
        value: '81,09 años',
        note: '2024',
      },
      {
        label: 'Esperanza de vida femenina (Japón)',
        value: '87,13 años',
        note: '2024',
      },
      {
        label: 'Ranking mundial masculino',
        value: '6.º en el mundo',
        note: '2024',
      },
      {
        label: 'Población mayor de 65 años (Japón)',
        value: '29%',
        note: '2024',
      },
      {
        label: 'Proyección de mayores de 65 años en 2065',
        value: '38,4%',
        note: 'Proyección',
      },
    ],
  },
  {
    id: 'educacion',
    title: 'Educación',
    icon: '🎓',
    description:
      'Tokio alberga algunas de las universidades más prestigiosas de Asia, incluyendo la Universidad de Tokio (la mejor valorada de Asia).',
    rows: [
      {
        label: 'Tasa de alfabetización adulta (Japón)',
        value: '~99%',
        note: 'Nacional',
      },
      {
        label: 'Titulados universitarios (25–34 años)',
        value: '66%',
        note: 'OCDE 2024',
      },
      {
        label: 'Titulados universitarios (25–64 años)',
        value: '57%',
        note: 'Media OCDE: 42% · OCDE 2024',
      },
      {
        label: 'Ranking OCDE en titulación universitaria',
        value: 'Top 5 mundial',
        note: '2024',
      },
      {
        label: 'Adultos con nivel de alfabetización bajo',
        value: '11%',
        note: 'Media OCDE: 27%',
      },
      {
        label: 'Universidades en Japón',
        value: '>800',
      },
    ],
  },
  {
    id: 'extranjeros',
    title: 'Población Extranjera',
    icon: '🌏',
    description:
      'Tokio atrae migración internacional en cifras récord, con una creciente presencia extranjera en los distritos centrales.',
    rows: [
      {
        label: 'Total de residentes extranjeros en Tokio',
        value: '>647.000',
        note: '2024',
      },
      {
        label: '% sobre la población total de Tokio',
        value: '~4,5–4,6%',
        note: '2024',
      },
      {
        label: 'En distritos centrales',
        value: '~10%',
        note: '1 de cada 10 residentes',
      },
      {
        label: 'Ciudadanos chinos (grupo mayoritario)',
        value: '>257.000',
        note: 'Ene 2024',
      },
      {
        label: 'Segundo grupo',
        value: 'Coreanos',
        note: '2024',
      },
      {
        label: 'Tercer grupo',
        value: 'Vietnamitas',
        note: '2024',
      },
      {
        label: 'Distritos con mayor concentración',
        value: 'Shinjuku, Toshima, Arakawa',
        note: '>10% de residentes extranjeros',
      },
      {
        label: 'Total de extranjeros en Japón',
        value: '~3,8 millones (récord histórico)',
        note: '2024–2025',
      },
    ],
  },
]

export const navLinks = sections.map((s) => ({ id: s.id, label: s.title }))

export const heroStats = [
  { value: '37M', label: 'Habitantes', sublabel: 'Área metropolitana' },
  { value: '2.ª', label: 'Economía urbana', sublabel: 'A nivel mundial' },
  { value: '24,33', label: 'Índice criminalidad', sublabel: 'Muy bajo · Numbeo' },
  { value: '87', label: 'Años esperanza de vida', sublabel: 'Femenina · Japón' },
]

export const kpiSummary = [
  {
    value: '37M',
    label: 'Habitantes',
    sublabel: 'Área metropolitana Gran Tokio',
  },
  {
    value: '2.ª',
    label: 'Economía urbana mundial',
    sublabel: 'PIB metropolitano ~887.900 M USD',
  },
  {
    value: '24,33',
    label: 'Índice de criminalidad',
    sublabel: 'Clasificado como Bajo · Numbeo 2025',
  },
  {
    value: '87 años',
    label: 'Esperanza de vida femenina',
    sublabel: '6.º ranking mundial masculino',
  },
]
