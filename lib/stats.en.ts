import { StatSection } from './stats'

export const sectionsEn: StatSection[] = [
  {
    id: 'poblacion',
    title: 'Population',
    icon: '👥',
    description:
      "Tokyo is the world's most populous metropolitan area, home to approximately 11% of Japan's total population.",
    rows: [
      { label: 'City of Tokyo (metropolis)', value: '14,195,730', note: '2025' },
      { label: 'Metropolitan area (Greater Tokyo)', value: '~37,036,000', note: '2025' },
      { label: 'Greater Tokyo (6 neighboring prefectures)', value: '~41,000,000', note: '2024' },
      { label: 'Annual change', value: '-0.21%', note: 'Current trend' },
      { label: "Share of Japan's total population", value: '~11%', note: '2024' },
    ],
  },
  {
    id: 'densidad',
    title: 'Population Density',
    icon: '🗺️',
    description: 'Tokyo is the most densely populated prefecture in all of Japan.',
    rows: [
      { label: 'Average density (metropolis)', value: '~6,225/km²' },
      { label: 'Most dense district (Toshima)', value: '~23,700/km²' },
      { label: 'Overcrowded districts (Nakano, Taito, Bunkyo)', value: '>20,000/km²' },
    ],
  },
  {
    id: 'economia',
    title: 'Economy & GDP',
    icon: '📈',
    description: "Tokyo is the world's 2nd largest metropolitan economy, behind only New York.",
    rows: [
      { label: 'Tokyo metropolis GDP', value: '¥120.2 trillion', note: '~$887.9B USD · FY2022' },
      { label: "Share of Japan's national GDP", value: '21.2%', note: 'FY2022' },
      { label: 'Greater Tokyo GDP', value: '~$2.08T USD', note: '2022' },
      { label: 'Tokyo GDP per capita', value: '~¥8.43M', note: '~$62,291 USD · FY2022' },
      { label: 'Japan GDP per capita', value: '~$37,145 USD', note: '2024' },
      { label: 'Tokyo Stock Exchange (TSE) market cap', value: 'Top 3 worldwide', note: '2024' },
      { label: 'Listed companies on TSE', value: '~3,900', note: 'Nov 2024' },
      {
        label: 'Tokyo-headquartered companies (capital >¥1B)',
        value: '~3,000',
        note: '50% of national total · 2024',
      },
    ],
  },
  {
    id: 'renta',
    title: 'Income & Wages',
    icon: '💴',
    description: 'Tokyo workers earn approximately 50% more than the national average.',
    rows: [
      { label: 'Average gross monthly salary (Tokyo)', value: '~¥576,000', note: '~$3,840 USD' },
      { label: 'Average gross annual salary (Tokyo)', value: '~¥6,912,000', note: '~$46,080 USD' },
      { label: 'Median monthly salary (Tokyo)', value: '~¥517,000' },
      { label: 'Average annual salary in Japan', value: '~¥4,600,000' },
      { label: 'Monthly household net income (Japan)', value: '¥524,343' },
      { label: 'Minimum hourly wage (Tokyo)', value: '¥1,163', note: 'Highest in Japan' },
      { label: 'Gini coefficient (inequality)', value: '0.334', note: 'Relatively low inequality' },
    ],
  },
  {
    id: 'desempleo',
    title: 'Unemployment Rate',
    icon: '📊',
    description:
      "One of the lowest unemployment rates among OECD countries. Tokyo, as the country's economic engine, generally sits below the national average.",
    rows: [
      { label: 'Japan unemployment rate (annual average)', value: '2.5%', note: '2024' },
      { label: 'Latest monthly figure available', value: '2.6%', note: 'Dec 2025' },
    ],
  },
  {
    id: 'empresas',
    title: 'Businesses & Companies',
    icon: '🏢',
    description:
      "Tokyo accounts for over 10% of all businesses in Japan and hosts 75% of the foreign companies present in the country.",
    rows: [
      { label: 'Total companies in Tokyo', value: '>660,000' },
      { label: 'Share of national total', value: '>10%' },
      { label: 'Employees in Tokyo companies', value: '~9.6 million' },
      { label: 'Small and medium enterprises', value: '99% of total' },
      {
        label: 'Foreign companies operating in Tokyo',
        value: '>75%',
        note: 'Of all foreign companies in Japan',
      },
      {
        label: 'Fortune 500 companies headquartered in Tokyo',
        value: 'Among the highest worldwide',
      },
    ],
  },
  {
    id: 'seguridad',
    title: 'Crime & Safety',
    icon: '🛡️',
    description:
      'Tokyo consistently ranks among the safest megacities in the world. The most common crimes are bicycle theft and pickpocketing in tourist areas.',
    rows: [
      { label: 'Crime index (Numbeo)', value: '24.33 — Low', note: '2025' },
      { label: 'Safety index (Numbeo)', value: '75.67 — High', note: '2025' },
      { label: 'Intentional homicide rate (Japan)', value: '0.78 per 100,000', note: '2024' },
      { label: 'Total recorded crimes in Japan', value: '~737,680', note: '2024' },
      { label: 'Recorded crimes in Japan', value: '703,351', note: '2023' },
    ],
  },
  {
    id: 'coste-vida',
    title: 'Cost of Living',
    icon: '🛒',
    description:
      'The depreciation of the yen since 2022 has made Tokyo more affordable for foreigners compared to previous decades.',
    rows: [
      { label: 'Average monthly expenses (single person)', value: '~¥145,943/month' },
      { label: 'Mercer cost of living ranking position', value: '49th place', note: '2024' },
      { label: 'Meal at a budget restaurant', value: '~¥1,000' },
      { label: 'Monthly transport pass', value: '~¥10,000–15,000' },
      { label: 'Utilities (electricity, water, etc.)', value: '~¥15,000–20,000/month' },
      { label: 'Internet penetration (Japan)', value: '~94%' },
    ],
  },
  {
    id: 'vivienda',
    title: 'Housing & Rent',
    icon: '🏠',
    description: 'Rental entry costs (deposit, fees, etc.) typically amount to 5-6 months of rent.',
    rows: [
      {
        label: 'Studio / single apartment (≤30 m², 23 wards)',
        value: '¥101,623/month',
        note: '+8.9% annual · 2025',
      },
      {
        label: 'Couple apartment (30-50 m², 23 wards)',
        value: '¥165,662/month',
        note: '+9.8% annual · 2025',
      },
      { label: '3-bedroom apartment, central Tokyo', value: '~¥390,000/month' },
      { label: '1 bedroom in Shinjuku', value: '~¥101,000/month' },
      { label: '1 bedroom in Shibuya (most expensive area)', value: '~¥128,000/month' },
      { label: 'Apartment purchase price (per m²)', value: '~¥1,150,000' },
      { label: 'Land value appreciation (2025 vs. 2024)', value: '+7.7%', note: '2025' },
    ],
  },
  {
    id: 'turismo',
    title: 'Tourism',
    icon: '✈️',
    description:
      'Tokyo is one of the most visited tourist destinations in the world, with a record number of international arrivals in 2024.',
    rows: [
      {
        label: 'Total visitors to Tokyo (domestic & international)',
        value: '~524 million',
        note: '2024',
      },
      { label: 'Annual change', value: '+14%', note: 'vs. 2023' },
      { label: 'Foreign tourists arriving in Japan', value: '36.9 million (record)', note: '2024' },
      { label: '% of Japan visitors passing through Tokyo', value: '~50%', note: '2024' },
      { label: 'Busiest month', value: 'July (~54 million)', note: '2024' },
      { label: 'Main reason for visit', value: 'Leisure/tourism (55%)' },
      { label: 'Top source market', value: 'South Korea', note: '2024' },
      { label: 'Second source market', value: 'Taiwan', note: '2024' },
    ],
  },
  {
    id: 'transporte',
    title: 'Transportation',
    icon: '🚇',
    description:
      "Tokyo Metro is just one of several rail operators (JR East, Toei, private railways, buses). Tokyo's integrated network is the most used in the world.",
    rows: [
      { label: 'Daily Tokyo Metro passengers', value: '~6.84 million', note: 'FY2024' },
      { label: 'Annual Tokyo Metro passengers', value: '~2.5 billion', note: 'FY2024' },
      { label: 'Annual passenger change', value: '+5%', note: 'FY2024 vs. FY2023' },
      { label: 'Tokyo Metro network', value: '9 lines / 180 stations / 195 km' },
    ],
  },
  {
    id: 'esperanza-vida',
    title: 'Life Expectancy',
    icon: '❤️',
    description:
      "Japan has one of the highest life expectancies in the world. Tokyo, with top-tier healthcare access, sits at or above the national average.",
    rows: [
      { label: 'Male life expectancy (Japan)', value: '81.09 years', note: '2024' },
      { label: 'Female life expectancy (Japan)', value: '87.13 years', note: '2024' },
      { label: 'Global male ranking', value: '6th in the world', note: '2024' },
      { label: 'Population aged 65+ (Japan)', value: '29%', note: '2024' },
      { label: 'Projected 65+ population in 2065', value: '38.4%', note: 'Projection' },
    ],
  },
  {
    id: 'educacion',
    title: 'Education',
    icon: '🎓',
    description:
      "Tokyo is home to some of Asia's most prestigious universities, including the University of Tokyo (Asia's top-ranked university).",
    rows: [
      { label: 'Adult literacy rate (Japan)', value: '~99%', note: 'National' },
      { label: 'University graduates (ages 25-34)', value: '66%', note: 'OECD 2024' },
      {
        label: 'University graduates (ages 25-64)',
        value: '57%',
        note: 'OECD average: 42% · OECD 2024',
      },
      { label: 'OECD university graduation ranking', value: 'Top 5 worldwide', note: '2024' },
      { label: 'Adults with low literacy level', value: '11%', note: 'OECD average: 27%' },
      { label: 'Universities in Japan', value: '>800' },
    ],
  },
  {
    id: 'extranjeros',
    title: 'Foreign Population',
    icon: '🌏',
    description:
      "Tokyo attracts record levels of international migration, with a growing foreign presence in the central districts.",
    rows: [
      { label: 'Total foreign residents in Tokyo', value: '>647,000', note: '2024' },
      { label: "% of Tokyo's total population", value: '~4.5-4.6%', note: '2024' },
      { label: 'In central districts', value: '~10%', note: '1 in 10 residents' },
      { label: 'Chinese citizens (largest group)', value: '>257,000', note: 'Jan 2024' },
      { label: 'Second largest group', value: 'Koreans', note: '2024' },
      { label: 'Third largest group', value: 'Vietnamese', note: '2024' },
      {
        label: 'Districts with highest concentration',
        value: 'Shinjuku, Toshima, Arakawa',
        note: '>10% foreign residents',
      },
      {
        label: 'Total foreigners in Japan',
        value: '~3.8 million (all-time record)',
        note: '2024-2025',
      },
    ],
  },
]

export const navLinksEn = sectionsEn.map((s) => ({ id: s.id, label: s.title }))

export const heroStatsEn = [
  { value: '37M', label: 'Residents', sublabel: 'Metropolitan area' },
  { value: '2nd', label: 'Urban economy', sublabel: 'Worldwide' },
  { value: '24.33', label: 'Crime index', sublabel: 'Very low · Numbeo' },
  { value: '87', label: 'Life expectancy', sublabel: 'Female · Japan' },
]

export const kpiSummaryEn = [
  { value: '37M', label: 'Residents', sublabel: 'Greater Tokyo metropolitan area' },
  { value: '2nd', label: 'Global urban economy', sublabel: 'Metropolitan GDP ~$887.9B USD' },
  { value: '24.33', label: 'Crime index', sublabel: 'Rated Low · Numbeo 2025' },
  { value: '87 yrs', label: 'Female life expectancy', sublabel: '6th worldwide male ranking' },
]
