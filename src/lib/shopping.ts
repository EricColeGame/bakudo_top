export type Localized = Record<"en" | "es" | "pt-br" | "de", string>;
export const words = (
  en: string,
  es: string,
  pt: string,
  de: string,
): Localized => ({ en, es, "pt-br": pt, de });
export const translate = (value: Localized, locale: string) =>
  value[locale as keyof Localized] || value.en;
export const shoppingHref = (locale: string, path = "") => `/${locale}${path}`;

export const categories = [
  {
    slug: "home-kitchen",
    icon: "home",
    name: words(
      "Home & Kitchen",
      "Hogar y cocina",
      "Casa e cozinha",
      "Haus & Küche",
    ),
    description: words(
      "A little more ease, every day.",
      "Más comodidad cada día.",
      "Mais praticidade todos os dias.",
      "Mehr Leichtigkeit im Alltag.",
    ),
    tips: [
      words(
        "Measure your space before choosing a size.",
        "Mide el espacio antes de elegir el tamaño.",
        "Meça o espaço antes de escolher o tamanho.",
        "Miss deinen Platz vor der Größenwahl.",
      ),
      words(
        "Include replacement parts and maintenance in your budget.",
        "Incluye recambios y mantenimiento en tu presupuesto.",
        "Inclua peças e manutenção no orçamento.",
        "Plane Ersatzteile und Pflege im Budget ein.",
      ),
    ],
  },
  {
    slug: "health-fitness",
    icon: "fitness",
    name: words(
      "Health & Fitness",
      "Salud y fitness",
      "Saúde e fitness",
      "Gesundheit & Fitness",
    ),
    description: words(
      "Find your everyday momentum.",
      "Encuentra tu ritmo diario.",
      "Encontre seu ritmo diário.",
      "Finde deinen täglichen Rhythmus.",
    ),
    tips: [
      words(
        "Choose equipment that fits your routine, space and abilities.",
        "Elige equipo para tu rutina, espacio y capacidades.",
        "Escolha equipamentos para sua rotina, espaço e capacidade.",
        "Wähle Ausrüstung passend zu Alltag, Platz und Fähigkeiten.",
      ),
      words(
        "Check cleaning instructions, fit and return conditions.",
        "Revisa limpieza, ajuste y condiciones de devolución.",
        "Confira limpeza, ajuste e condições de devolução.",
        "Prüfe Reinigung, Passform und Rückgabebedingungen.",
      ),
    ],
  },
  {
    slug: "tech-gadgets",
    icon: "tech",
    name: words(
      "Tech & Gadgets",
      "Tecnología",
      "Tecnologia",
      "Technik & Gadgets",
    ),
    description: words(
      "Smarter tools. Less friction.",
      "Herramientas útiles, menos complicaciones.",
      "Ferramentas úteis, menos complicações.",
      "Nützliche Technik. Weniger Aufwand.",
    ),
    tips: [
      words(
        "Confirm compatibility with the devices you already own.",
        "Confirma la compatibilidad con tus dispositivos.",
        "Confirme a compatibilidade com seus aparelhos.",
        "Prüfe die Kompatibilität mit deinen Geräten.",
      ),
      words(
        "Read the warranty and check local support before ordering.",
        "Revisa la garantía y el soporte local antes de comprar.",
        "Leia a garantia e confira o suporte local antes da compra.",
        "Prüfe Garantie und Support vor der Bestellung.",
      ),
    ],
  },
  {
    slug: "sleep-comfort",
    icon: "sleep",
    name: words(
      "Sleep & Comfort",
      "Descanso y confort",
      "Sono e conforto",
      "Schlaf & Komfort",
    ),
    description: words(
      "Make room for a softer landing.",
      "Un espacio para descansar mejor.",
      "Um espaço para descansar melhor.",
      "Mach es dir gemütlich.",
    ),
    tips: [
      words(
        "Consider your sleeping position and preferred materials.",
        "Ten en cuenta tu postura al dormir y los materiales.",
        "Considere sua posição de dormir e os materiais.",
        "Berücksichtige Schlafposition und bevorzugte Materialien.",
      ),
      words(
        "Read trial, return, delivery and care policies carefully.",
        "Revisa prueba, devoluciones, entrega y cuidados.",
        "Leia as condições de teste, devolução, entrega e cuidado.",
        "Lies Probe-, Rückgabe-, Liefer- und Pflegebedingungen.",
      ),
    ],
  },
  {
    slug: "personal-care",
    icon: "care",
    name: words(
      "Personal Care",
      "Cuidado personal",
      "Cuidados pessoais",
      "Körperpflege",
    ),
    description: words(
      "Small upgrades to your routine.",
      "Pequeñas mejoras en tu rutina.",
      "Pequenas melhorias na rotina.",
      "Kleine Verbesserungen für deine Routine.",
    ),
    tips: [
      words(
        "Match features to your routine instead of the longest feature list.",
        "Elige funciones útiles para tu rutina.",
        "Escolha funções úteis para sua rotina.",
        "Wähle Funktionen, die du im Alltag brauchst.",
      ),
      words(
        "Check replacement accessories, cleaning and local voltage.",
        "Comprueba accesorios, limpieza y voltaje local.",
        "Confira acessórios, limpeza e voltagem local.",
        "Prüfe Zubehör, Reinigung und Netzspannung.",
      ),
    ],
  },
];

export const guides = [
  {
    slug: "air-purifiers",
    category: "home-kitchen",
    image: "photo-1600210492486-724fe5c67fb0",
    imageAlt: words(
      "A bright living room",
      "Una sala luminosa",
      "Uma sala iluminada",
      "Ein helles Wohnzimmer",
    ),
    title: words(
      "A fresher start at home",
      "Un hogar más fresco",
      "Um lar mais agradável",
      "Frischer Wind für dein Zuhause",
    ),
    topic: words(
      "Air purifiers",
      "Purificadores de aire",
      "Purificadores de ar",
      "Luftreiniger",
    ),
    description: words(
      "Navigate room coverage, filter upkeep and noise before choosing an air purifier.",
      "Compara cobertura, filtros y ruido antes de elegir un purificador.",
      "Compare cobertura, filtros e ruído antes de escolher um purificador.",
      "Vergleiche Raumgröße, Filterpflege und Lautstärke vor dem Kauf.",
    ),
    focus: words(
      "Compare the stated room coverage and CADR at the fan speed you expect to use. Check the price and availability of replacement filters.",
      "Compara cobertura y CADR a la velocidad que usarás. Revisa el coste y disponibilidad de filtros.",
      "Compare cobertura e CADR na velocidade que pretende usar. Confira preço e disponibilidade dos filtros.",
      "Vergleiche Raumabdeckung und CADR bei deiner gewünschten Stufe. Prüfe Kosten und Verfügbarkeit der Ersatzfilter.",
    ),
    merchants: [
      { name: "Levoit", url: "https://levoit.com/collections/air-purifiers" },
    ],
  },
  {
    slug: "cookware",
    category: "home-kitchen",
    image: "photo-1556911220-bff31c812dba",
    imageAlt: words(
      "Cooking in a home kitchen",
      "Cocinando en casa",
      "Cozinhando em casa",
      "Kochen in der Küche",
    ),
    title: words(
      "Bring more to the table",
      "Disfruta más de tu cocina",
      "Mais sabor à mesa",
      "Mehr Freude am Kochen",
    ),
    topic: words(
      "Everyday cookware",
      "Utensilios de cocina",
      "Panelas para o dia a dia",
      "Kochgeschirr für jeden Tag",
    ),
    description: words(
      "Build a useful cookware collection around the meals you actually make.",
      "Elige utensilios para las comidas que preparas a diario.",
      "Escolha panelas para as refeições que você prepara.",
      "Stelle dein Kochgeschirr passend zu deinen Gerichten zusammen.",
    ),
    focus: words(
      "Check hob compatibility, oven temperature limits and handle comfort. Compare individual pieces with sets to avoid paying for unused sizes.",
      "Comprueba compatibilidad, temperatura de horno y asas. Compara piezas sueltas con juegos completos.",
      "Confira compatibilidade, limite de temperatura e cabos. Compare peças avulsas e conjuntos.",
      "Prüfe Herdkompatibilität, Ofentemperatur und Griffe. Vergleiche Einzelteile mit Sets, um ungenutzte Größen zu vermeiden.",
    ),
    merchants: [
      { name: "IKEA", url: "https://www.ikea.com/us/en/cat/cookware-kt003/" },
    ],
  },
  {
    slug: "fitness-trackers",
    category: "health-fitness",
    image: "photo-1523275335684-37898b6baf30",
    imageAlt: words(
      "A wristwatch on a light background",
      "Un reloj de pulsera",
      "Um relógio de pulso",
      "Eine Armbanduhr",
    ),
    title: words(
      "Keep moving, your way",
      "Muévete a tu manera",
      "Movimente-se do seu jeito",
      "Bleib in deinem Rhythmus",
    ),
    topic: words(
      "Fitness watches",
      "Relojes deportivos",
      "Relógios esportivos",
      "Fitnessuhren",
    ),
    description: words(
      "Find the right balance of activity tracking, battery life and everyday wear.",
      "Encuentra equilibrio entre actividad, batería y comodidad.",
      "Equilibre monitoramento, bateria e conforto diário.",
      "Finde die Balance zwischen Aktivitätsfunktionen, Akku und Tragekomfort.",
    ),
    focus: words(
      "Compare battery life with GPS enabled, phone compatibility and any subscription requirements. Activity estimates are not medical diagnoses.",
      "Compara batería con GPS, compatibilidad y suscripciones. Las estimaciones de actividad no son diagnósticos médicos.",
      "Compare bateria com GPS, compatibilidade e assinaturas. Estimativas de atividade não são diagnósticos médicos.",
      "Vergleiche GPS-Akkulaufzeit, Handykompatibilität und Abos. Aktivitätsschätzungen sind keine medizinischen Diagnosen.",
    ),
    merchants: [
      {
        name: "Garmin",
        url: "https://www.garmin.com/en-US/c/wearables-smartwatches/",
      },
    ],
  },
  {
    slug: "yoga-mats",
    category: "health-fitness",
    image: "photo-1544367567-0f2fcb009e0b",
    imageAlt: words(
      "Yoga practice outdoors",
      "Práctica de yoga al aire libre",
      "Prática de yoga ao ar livre",
      "Yoga im Freien",
    ),
    title: words(
      "A space to find your balance",
      "Encuentra tu equilibrio",
      "Um espaço para seu equilíbrio",
      "Dein Platz für mehr Balance",
    ),
    topic: words(
      "Yoga mats",
      "Esterillas de yoga",
      "Tapetes de yoga",
      "Yogamatten",
    ),
    description: words(
      "Choose a mat with the grip, cushioning and portability your practice needs.",
      "Elige agarre, amortiguación y portabilidad para tu práctica.",
      "Escolha aderência, amortecimento e portabilidade para sua prática.",
      "Wähle Halt, Polsterung und Transportgewicht für deine Übungen.",
    ),
    focus: words(
      "Compare thickness, weight and grip for your floor surface. Read the material and care details, especially if you need to avoid latex.",
      "Compara grosor, peso y agarre para tu suelo. Revisa materiales y cuidados, especialmente si evitas el látex.",
      "Compare espessura, peso e aderência. Leia materiais e cuidados, especialmente se precisa evitar látex.",
      "Vergleiche Dicke, Gewicht und Halt auf deinem Boden. Prüfe Material und Pflege, besonders wenn du Latex meiden musst.",
    ),
    merchants: [
      { name: "Manduka", url: "https://www.manduka.com/collections/yoga-mats" },
    ],
  },
  {
    slug: "wireless-headphones",
    category: "tech-gadgets",
    image: "photo-1546435770-a3e426bf472b",
    imageAlt: words(
      "Over-ear headphones",
      "Auriculares de diadema",
      "Fones de ouvido",
      "Over-Ear-Kopfhörer",
    ),
    title: words(
      "Tune into your everyday",
      "El sonido de tu día a día",
      "A trilha do seu dia",
      "Der Sound für deinen Alltag",
    ),
    topic: words(
      "Wireless headphones",
      "Auriculares inalámbricos",
      "Fones sem fio",
      "Kabellose Kopfhörer",
    ),
    description: words(
      "Make sense of noise cancellation, comfort and calls before you press play.",
      "Compara cancelación de ruido, comodidad y llamadas.",
      "Compare cancelamento de ruído, conforto e chamadas.",
      "Vergleiche Geräuschunterdrückung, Komfort und Anrufqualität.",
    ),
    focus: words(
      "Consider fit, microphone use and multipoint pairing. Compare battery figures with noise cancellation on and read the returns policy for fit testing.",
      "Considera ajuste, micrófono y conexión multipunto. Compara batería con cancelación de ruido y condiciones de devolución.",
      "Considere ajuste, microfone e conexão multiponto. Compare bateria com cancelamento de ruído e a política de devolução.",
      "Prüfe Passform, Mikrofon und Mehrgeräteverbindung. Vergleiche Akkulaufzeit mit Geräuschunterdrückung und Rückgabebedingungen.",
    ),
    merchants: [
      {
        name: "Sony",
        url: "https://electronics.sony.com/audio/headphones/c/all-headphones",
      },
    ],
  },
  {
    slug: "power-banks",
    category: "tech-gadgets",
    image: "photo-1564286027156-9ad736dfbbbb",
    imageAlt: words(
      "Two portable power banks",
      "Dos baterías portátiles",
      "Duas baterias portáteis",
      "Zwei Powerbanks",
    ),
    title: words(
      "A little power to go",
      "Energía para llevar",
      "Energia para levar",
      "Energie für unterwegs",
    ),
    topic: words(
      "Portable chargers",
      "Cargadores portátiles",
      "Carregadores portáteis",
      "Powerbanks",
    ),
    description: words(
      "Find portable power that matches your devices, bag and daily routine.",
      "Encuentra energía portátil para tus dispositivos y tu rutina.",
      "Encontre energia portátil para seus aparelhos e rotina.",
      "Finde mobile Energie passend zu deinen Geräten und deinem Alltag.",
    ),
    focus: words(
      "Compare USB-C output in watts, capacity in watt-hours and cable requirements. Check your airline’s current battery rules before travelling.",
      "Compara salida USB-C en vatios, capacidad en Wh y cables. Revisa las normas de tu aerolínea antes de viajar.",
      "Compare saída USB-C em watts, capacidade em Wh e cabos. Confira as regras da companhia aérea antes de viajar.",
      "Vergleiche USB-C-Leistung in Watt, Kapazität in Wh und Kabel. Prüfe vor Reisen die aktuellen Akkuregeln deiner Fluggesellschaft.",
    ),
    merchants: [
      {
        name: "Anker",
        url: "https://www.anker.com/collections/portable-chargers",
      },
    ],
  },
  {
    slug: "mattresses",
    category: "sleep-comfort",
    image: "photo-1505693416388-ac5ce068fe85",
    imageAlt: words(
      "A comfortable bedroom",
      "Un dormitorio acogedor",
      "Um quarto aconchegante",
      "Ein gemütliches Schlafzimmer",
    ),
    title: words(
      "Make yourself comfortable",
      "Descansa a tu gusto",
      "Conforto para descansar",
      "Mach es dir bequem",
    ),
    topic: words("Mattresses", "Colchones", "Colchões", "Matratzen"),
    description: words(
      "Start with support, size and return terms to find your next mattress.",
      "Compara soporte, tamaño y devoluciones para elegir colchón.",
      "Compare suporte, tamanho e devoluções para escolher seu colchão.",
      "Vergleiche Unterstützung, Größe und Rückgaberegeln für deine Matratze.",
    ),
    focus: words(
      "Check exact dimensions, bed-base compatibility and firmness preferences. Compare trial periods and any return collection fees before paying.",
      "Comprueba medidas, compatibilidad con la base y firmeza. Compara pruebas y costes de recogida antes de pagar.",
      "Confira medidas, compatibilidade com a base e firmeza. Compare períodos de teste e custos de coleta antes de pagar.",
      "Prüfe Maße, Bettgestell-Kompatibilität und Härtegrad. Vergleiche Probezeiten und Rückholgebühren vor dem Kauf.",
    ),
    merchants: [
      { name: "IKEA", url: "https://www.ikea.com/us/en/cat/mattresses-bm002/" },
    ],
  },
  {
    slug: "pillows",
    category: "sleep-comfort",
    image: "photo-1584100936595-c0654b55a2e2",
    imageAlt: words(
      "Soft cushions in a home",
      "Cojines suaves en casa",
      "Almofadas em casa",
      "Weiche Kissen zu Hause",
    ),
    title: words(
      "Find your softer side",
      "Tu lado más cómodo",
      "Seu lado mais confortável",
      "Entdecke deine weiche Seite",
    ),
    topic: words("Bed pillows", "Almohadas", "Travesseiros", "Kopfkissen"),
    description: words(
      "Compare pillow height, fill and care for your preferred sleeping position.",
      "Compara altura, relleno y cuidados según tu postura al dormir.",
      "Compare altura, enchimento e cuidados para sua posição de dormir.",
      "Vergleiche Höhe, Füllung und Pflege für deine Schlafposition.",
    ),
    focus: words(
      "Look at pillow height alongside mattress firmness. Check whether the cover and filling can be washed and how the pillow should be dried.",
      "Valora altura y firmeza del colchón. Revisa si funda y relleno son lavables y cómo secarlos.",
      "Avalie altura e firmeza do colchão. Confira lavagem da capa e enchimento e as instruções de secagem.",
      "Beachte Kissenhöhe und Matratzenhärte gemeinsam. Prüfe Wasch- und Trocknungshinweise für Bezug und Füllung.",
    ),
    merchants: [
      { name: "IKEA", url: "https://www.ikea.com/us/en/cat/pillows-20533/" },
    ],
  },
  {
    slug: "electric-toothbrushes",
    category: "personal-care",
    image: "photo-1575325345079-cce3a789be43",
    imageAlt: words(
      "Two electric toothbrushes",
      "Dos cepillos eléctricos",
      "Duas escovas elétricas",
      "Zwei elektrische Zahnbürsten",
    ),
    title: words(
      "Refresh your daily routine",
      "Renueva tu rutina diaria",
      "Renove sua rotina diária",
      "Frischer Schwung für deine Routine",
    ),
    topic: words(
      "Electric toothbrushes",
      "Cepillos eléctricos",
      "Escovas elétricas",
      "Elektrische Zahnbürsten",
    ),
    description: words(
      "Focus on useful brushing features and the ongoing cost of replacement heads.",
      "Compara funciones útiles y el coste de los cabezales.",
      "Compare funções úteis e o custo das cabeças de reposição.",
      "Achte auf nützliche Putzfunktionen und Ersatzbürstenkosten.",
    ),
    focus: words(
      "Compare timers, pressure feedback and head availability. For individual dental needs, ask your dentist rather than relying on product marketing.",
      "Compara temporizadores, sensor de presión y cabezales. Consulta al dentista para necesidades particulares.",
      "Compare temporizadores, sensor de pressão e cabeças. Consulte seu dentista para necessidades individuais.",
      "Vergleiche Timer, Druckkontrolle und Ersatzköpfe. Frage bei persönlichen Zahnproblemen deine Zahnarztpraxis.",
    ),
    merchants: [
      { name: "Oral-B", url: "https://oralb.com/en-us/products/shop-all/" },
    ],
  },
  {
    slug: "hair-dryers",
    category: "personal-care",
    image: "photo-1540544093-f8803cbd9c64",
    imageAlt: words(
      "A white hair dryer on a wooden surface",
      "Un secador blanco sobre madera",
      "Um secador branco sobre madeira",
      "Ein weißer Haartrockner auf Holz",
    ),
    title: words(
      "Good hair days start here",
      "Tu próximo buen día de pelo",
      "Seu próximo bom dia de cabelo",
      "Für deinen nächsten guten Haartag",
    ),
    topic: words(
      "Hair dryers",
      "Secadores de pelo",
      "Secadores de cabelo",
      "Haartrockner",
    ),
    description: words(
      "Explore heat settings, attachments and handling for your hair routine.",
      "Compara temperatura, accesorios y manejo para tu rutina.",
      "Compare temperatura, acessórios e manuseio para sua rotina.",
      "Vergleiche Wärmestufen, Aufsätze und Handhabung für deine Haarpflege.",
    ),
    focus: words(
      "Check included attachments, weight and heat controls. Confirm local voltage compatibility; a plug adapter alone does not convert voltage.",
      "Comprueba accesorios, peso y controles de calor. Un adaptador de enchufe no convierte el voltaje.",
      "Confira acessórios, peso e controles de calor. Um adaptador de tomada não converte voltagem.",
      "Prüfe Aufsätze, Gewicht und Wärmeregelung. Ein Steckeradapter allein wandelt keine Netzspannung um.",
    ),
    merchants: [
      { name: "Dyson", url: "https://www.dyson.com/hair-care/hair-dryers" },
    ],
  },
];

export type ShoppingGuide = (typeof guides)[number];
export function getCategory(slug: string) {
  const category = categories.find((item) => item.slug === slug);
  if (!category) throw new Error(`Unknown shopping category: ${slug}`);
  return category;
}
export const guideImage = (guide: ShoppingGuide, width = 800) =>
  `/images/shopping/${guide.image}.jpg`;
export const shoppingPaths = [
  "/browse",
  ...categories.map((category) => `/category/${category.slug}`),
  ...guides.map((guide) => `/guides/${guide.slug}`),
];
