import { StyleCharacteristics, MotifDefinition, FusionPreset, CanvasElement } from '../types';

export const FUSION_STYLES: Record<'warli' | 'phad', StyleCharacteristics> = {
  warli: {
    id: 'warli',
    name: 'Warli Painting',
    region: 'Maharashtra (Sahyadri Foothills / Dahanu)',
    stateId: 'maharashtra',
    epochPeriod: 'Living Indigenous Tradition (Roots in Neolithic rock art)',
    primaryMedium: 'Ground rice paste mixed with water and natural tree gum (Kinkar)',
    groundBase: 'Sun-baked mud, cow dung, and red-ochre Geru clay plaster',
    colorPalette: [
      { name: 'Rice White', hex: '#f6f4ea', pigmentOrigin: 'Ground rice flour and water' },
      { name: 'Geru Ochre', hex: '#8b3a2b', pigmentOrigin: 'Red ferruginous clay (Red Ochre)' },
      { name: 'Cow Dung Base', hex: '#443d35', pigmentOrigin: 'Dried organic cow dung and earth plaster' },
      { name: 'Soot Black (Rare)', hex: '#1c1b1a', pigmentOrigin: 'Charcoal or cooking vessel soot' }
    ],
    characteristics: [
      'Geometric human figures constructed from two inverted triangles meeting at the vertex',
      'Simplified kinetic stick limbs conveying uninhibited community movement',
      'Rhythmic concentric arrangements (e.g. Tarpa spiral dance mirroring cycles of nature)',
      'Strictly limited, earthy monochromatic palette (white silhouette on terracotta red)',
      'Community and everyday-life themes: agrarian harvesting, marriage ceremonies, fishing, and sacred groves',
      'Total absence of hierarchical royal portraits, palaces, or weapon-wielding deities'
    ],
    traditionalContext: 'Painted exclusively by women (Savasinis) during sacred autumn harvest (Gauri-Ganpati) and marriage ceremonies to bless the homestead with agricultural fertility and ancestral protection.',
    sacredGeometry: 'Two triangles: the upper triangle represents the male sky/torso, while the lower represents the female earth/pelvis. Their junction at the vertex forms the cosmic waist, symbolizing eternal universal balance.',
    visualOrganization: 'Radial, spiral, and continuous sprawling organic compositions without rigid frame boundaries, allowing figures to disperse across the surface as if flowing with the natural terrain.',
    humanAnatomy: 'Stick limbs, triangular torso and hips, round head without detailed facial features, emphasizing collective communal identity over individual portraiture.',
    sampleImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXC4tTsaezyTXZlfDkdGU6FIo3i0gqJwwKFWIw4HxX8INjgK44hNAREcb182c8t5KVEBL77YPtA1xEBj3e0asKMlGb2hFn_SqXESuz4KY7gAP93KYlxhXr1ZqZ0g1QVyg0BjHhpBUs6O6CAM6y6XnNx8P8kEKnaz8y2LffU4rNQzmeL2jQY6Y8Yn1xGAduELhwCP8UW8NFDasnkR-tYZK3u-PW4UTJug3FuZBAQ49wvZrgtv_9X3CR'
  },
  phad: {
    id: 'phad',
    name: 'Phad Painting',
    region: 'Rajasthan (Bhilwara / Shahpura)',
    stateId: 'rajasthan',
    epochPeriod: 'Medieval to Contemporary (10th Century CE onward)',
    primaryMedium: 'Handmade vegetable and mineral gouache on sized cotton canvas',
    groundBase: 'Handwoven coarse Khadi cloth (Khadadi) sized with boiled rice starch and tamarind seed glue, then burnished with an agate stone (Mohra)',
    colorPalette: [
      { name: 'Cinnabar Vermillion', hex: '#c83827', pigmentOrigin: 'Hingula (natural cinnabar mineral)' },
      { name: 'Turmeric & Orpiment', hex: '#e8a938', pigmentOrigin: 'Haritala (arsenic trisulfide) & raw turmeric' },
      { name: 'Verdigris Green', hex: '#2d6b4f', pigmentOrigin: 'Zangar (copper acetate verdigris)' },
      { name: 'Indigo Blue', hex: '#264e70', pigmentOrigin: 'Natural Indigofera tinctoria leaf extract' },
      { name: 'Lampblack', hex: '#161413', pigmentOrigin: 'Kajal (mustard-oil lamp soot) for fine contours' }
    ],
    characteristics: [
      'Narrative horizontal compositions spanning up to 30 feet, acting as portable cloth temples',
      'Bold flat figures dressed in flared angarkhas, swirling ghaghras, and ornate Mewari turbans (Pagris)',
      'Strong, uninterrupted calligraphic black outlines executed with single-hair brushes',
      'Intensely saturated mineral color hierarchy indicating divine status, caste, and dramatic emotion',
      'Epic storytelling scenes depicting the heroic chivalric exploits of folk hero-deities Pabuji and Devnarayan',
      'Horizontal compartmentalization into continuous narrative registers with decorative floral borders (Bel-buti)'
    ],
    traditionalContext: 'Commissioned by nomadic pastoral communities (Rebaris) and performed at night by wandering priest-singers (Bhopas and Bhopis), who unfurl the scroll and chant the epic to the accompaniment of the Ravanahatha violin.',
    sacredGeometry: 'Rectilinear hierarchical grid where the central hero (Pabuji) is rendered colossal, with surrounding courtiers, musicians, and enemy forces scaled according to their narrative and spiritual importance.',
    visualOrganization: 'Horizontal and multi-tiered registers, packed with dense simultaneous narrative action, bordered by continuous ornamental floral and geometric fretwork.',
    humanAnatomy: 'Volumetric profiles with exaggerated almond-shaped fish eyes (Machhali Aankhen), pointed noses, curly sideburns, and distinct royal attire denoting martial nobility.',
    sampleImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB23n-m-c8g7k4gT_73mK38d41N1Z0_4pPqgU5eKqIu4o8R-wQ4g9iV-E0t9f7n-oP0yF3hY9k-Gg9l2f4k5h-H3h5j6k7l'
  }
};

export const MOTIF_LIBRARY: MotifDefinition[] = [
  // ----------------- WARLI MOTIFS -----------------
  {
    id: 'warli-tarpa-dance',
    style: 'warli',
    name: 'Tarpa Spiral Dance',
    category: 'figure',
    description: 'Circle of dancers moving in a spiral around the Tarpa musician, symbolizing the circular cycle of seasons and communal unity.',
    defaultScale: 1.2,
    symbolicMeaning: 'Cosmic spiral of life; no dancer turns their back to the center.',
    svgPath: 'warli-tarpa-dance'
  },
  {
    id: 'warli-dancers-pair',
    style: 'warli',
    name: 'Interlocked Dancers',
    category: 'figure',
    description: 'Two kinetic geometric figures arm-in-arm in spirited celebratory dance.',
    defaultScale: 1.0,
    symbolicMeaning: 'Communal harmony and human interdependence.',
    svgPath: 'warli-dancers-pair'
  },
  {
    id: 'warli-archer-hunter',
    style: 'warli',
    name: 'Warli Archer & Bow',
    category: 'figure',
    description: 'Slender triangular hunter drawing a taut longbow with feather-fletched arrow.',
    defaultScale: 0.9,
    symbolicMeaning: 'Subsistence living and kinship with the deep forest.',
    svgPath: 'warli-archer-hunter'
  },
  {
    id: 'warli-harvest-couple',
    style: 'warli',
    name: 'Paddy Harvest Couple',
    category: 'narrative',
    description: 'Farmers carrying woven grain baskets (Dala) and sickle tools after agricultural harvest.',
    defaultScale: 1.0,
    symbolicMeaning: 'Bountiful harvest and gratitude to mother earth.',
    svgPath: 'warli-harvest-couple'
  },
  {
    id: 'warli-sacred-chowk',
    style: 'warli',
    name: 'Sacred Devchauk Square',
    category: 'sacred',
    description: 'The geometric sanctum grid featuring Mother Goddess Palaghata, encircled by sacred diamond motifs.',
    defaultScale: 1.3,
    symbolicMeaning: 'Goddess of fertility and guardian of wedding unions.',
    svgPath: 'warli-sacred-chowk'
  },
  {
    id: 'warli-solar-radiance',
    style: 'warli',
    name: 'Concentric Solar Wheel',
    category: 'motif',
    description: 'Spoked solar disk with geometric rays radiating cosmic heat and life.',
    defaultScale: 0.8,
    symbolicMeaning: 'Surya, primeval source of life and agrarian rhythm.',
    svgPath: 'warli-solar-radiance'
  },
  {
    id: 'warli-horned-bull',
    style: 'warli',
    name: 'Sacred Horned Bull',
    category: 'motif',
    description: 'Graceful draught bull with crescent horns and triangular body.',
    defaultScale: 0.9,
    symbolicMeaning: 'Partner in ploughing and agricultural livelihood.',
    svgPath: 'warli-horned-bull'
  },
  {
    id: 'warli-thatched-hut',
    style: 'warli',
    name: 'Village Thatch Hut',
    category: 'motif',
    description: 'Bamboo mud dwelling with triangular thatched straw roof and palm frond.',
    defaultScale: 1.1,
    symbolicMeaning: 'Shelter, hearth, and sustainable forest architecture.',
    svgPath: 'warli-thatched-hut'
  },
  {
    id: 'warli-sawtooth-border',
    style: 'warli',
    name: 'Triangular Sawtooth Fringe',
    category: 'border',
    description: 'Rhythmic repeating border of interlocking triangles symbolizing mountain ranges.',
    defaultScale: 1.0,
    symbolicMeaning: 'Sahyadri mountain barrier and sacred perimeter.',
    svgPath: 'warli-sawtooth-border'
  },

  // ----------------- PHAD MOTIFS -----------------
  {
    id: 'phad-pabuji-steed',
    style: 'phad',
    name: 'Equestrian Hero Pabuji',
    category: 'figure',
    description: 'Deified folk hero Pabuji Rathore mounted upon his legendary black mare Kesar Kalmi with royal lance and plume.',
    defaultScale: 1.3,
    symbolicMeaning: 'Protector of pastoralists and embodiment of Rajput chivalry.',
    svgPath: 'phad-pabuji-steed'
  },
  {
    id: 'phad-courtly-falconer',
    style: 'phad',
    name: 'Court Noble with Falcon',
    category: 'figure',
    description: 'Rajasthani nobleman in profile wearing a flared pagri and holding a trained hunting falcon on gauntleted hand.',
    defaultScale: 1.0,
    symbolicMeaning: 'Nobility, regal vigilance, and courtly prestige.',
    svgPath: 'phad-courtly-falconer'
  },
  {
    id: 'phad-sarangi-bard',
    style: 'phad',
    name: 'Bhopa Epic Balladeer',
    category: 'narrative',
    description: 'Traveling bard chanting heroic verse while bowing the resonant Ravanahatha / Sarangi stringed instrument.',
    defaultScale: 1.0,
    symbolicMeaning: 'Living oral tradition and musical invocation of deities.',
    svgPath: 'phad-sarangi-bard'
  },
  {
    id: 'phad-royal-pavilion',
    style: 'phad',
    name: 'Scalloped Royal Chhatri',
    category: 'motif',
    description: 'Palatial cusped arch canopy with embroidered textile valance and flying victory pennants.',
    defaultScale: 1.2,
    symbolicMeaning: 'Sovereign courtly assembly and celestial palace architecture.',
    svgPath: 'phad-royal-pavilion'
  },
  {
    id: 'phad-desert-camel',
    style: 'phad',
    name: 'Caparisoned Royal Camel',
    category: 'motif',
    description: 'Desert camel draped in mirrored saddlecloth and decorative wool tassels.',
    defaultScale: 1.1,
    symbolicMeaning: 'Lifeline of the Thar desert and caravan trade.',
    svgPath: 'phad-desert-camel'
  },
  {
    id: 'phad-expressive-face',
    style: 'phad',
    name: 'Hero Profile & Fish Eye',
    category: 'figure',
    description: 'Iconic profile face featuring the dramatic Machhali (fish) eye, curved mustache, and vibrant saffron pagri.',
    defaultScale: 0.9,
    symbolicMeaning: 'Dynamic psychological presence and sharp Rajput gaze.',
    svgPath: 'phad-expressive-face'
  },
  {
    id: 'phad-talwar-swordsman',
    style: 'phad',
    name: 'Royal Shield & Talwar',
    category: 'narrative',
    description: 'Martial guardian with curved Rajasthani sword and rounded rhino-hide shield.',
    defaultScale: 1.0,
    symbolicMeaning: 'Bravery and steadfast protection of cows and villagers.',
    svgPath: 'phad-talwar-swordsman'
  },
  {
    id: 'phad-bel-buti-border',
    style: 'phad',
    name: 'Bel-Buti Lotus Vine Border',
    category: 'border',
    description: 'Continuous undulating scrolling floral vine with blossoming lotuses and curling tendrils.',
    defaultScale: 1.0,
    symbolicMeaning: 'Prosperity, divine beauty, and architectural framing.',
    svgPath: 'phad-bel-buti-border'
  },

  // ----------------- FUSION MOTIFS -----------------
  {
    id: 'fusion-geometric-pabuji',
    style: 'fusion',
    name: 'Warli-Phad Heroic Chieftain',
    category: 'figure',
    description: 'Warli geometric inverted-triangle anatomy wearing a regal Phad saffron pagri turban and holding a royal talwar.',
    defaultScale: 1.1,
    symbolicMeaning: 'Synthesis of tribal egalitarian geometry with heroic bardic nobility.',
    svgPath: 'fusion-geometric-pabuji'
  },
  {
    id: 'fusion-tarpa-procession',
    style: 'fusion',
    name: 'Scroll-Integrated Tarpa Band',
    category: 'narrative',
    description: 'Warli circular dancers integrated into a horizontal Phad narrative scroll register flanked by Phad musicians.',
    defaultScale: 1.2,
    symbolicMeaning: 'Unification of tribal cyclical dance with linear scroll storytelling.',
    svgPath: 'fusion-tarpa-procession'
  },
  {
    id: 'fusion-hybrid-border',
    style: 'fusion',
    name: 'Sawtooth-Lotus Hybrid Border',
    category: 'border',
    description: 'Warli sharp triangular sawteeth framing Phad undulating mineral lotus vines.',
    defaultScale: 1.0,
    symbolicMeaning: 'Harmonious geometric containment of organic Rajasthani botanical splendor.',
    svgPath: 'fusion-hybrid-border'
  },
  {
    id: 'fusion-devchauk-chhatri',
    style: 'fusion',
    name: 'Devchauk Palatial Canopy',
    category: 'sacred',
    description: 'Warli sacred wedding square surmounted by a Rajasthani scalloped courtly pavilion.',
    defaultScale: 1.2,
    symbolicMeaning: 'Sanctifying agrarian fertility within a sovereign architectural canopy.',
    svgPath: 'fusion-devchauk-chhatri'
  }
];

export const FUSION_PRESETS: FusionPreset[] = [
  {
    id: 'desert-harvest-ballad',
    title: 'The Desert Harvest Ballad',
    description: 'Synthesizes Warli’s collective agrarian harvest dance within Phad’s horizontal continuous scroll registers and heroic equestrian focal point.',
    background: 'geru',
    elements: [
      {
        id: 'el-1',
        motifId: 'fusion-hybrid-border',
        style: 'fusion',
        name: 'Sawtooth-Lotus Hybrid Border',
        category: 'border',
        x: 50,
        y: 6,
        scale: 1.5,
        rotation: 0,
        flipped: false,
        tint: 'default'
      },
      {
        id: 'el-2',
        motifId: 'phad-pabuji-steed',
        style: 'phad',
        name: 'Equestrian Hero Pabuji',
        category: 'figure',
        x: 25,
        y: 48,
        scale: 1.3,
        rotation: 0,
        flipped: false,
        tint: 'default'
      },
      {
        id: 'el-3',
        motifId: 'warli-tarpa-dance',
        style: 'warli',
        name: 'Tarpa Spiral Dance',
        category: 'figure',
        x: 68,
        y: 50,
        scale: 1.2,
        rotation: 0,
        flipped: false,
        tint: 'monochrome-white'
      },
      {
        id: 'el-4',
        motifId: 'phad-sarangi-bard',
        style: 'phad',
        name: 'Bhopa Epic Balladeer',
        category: 'narrative',
        x: 48,
        y: 65,
        scale: 0.9,
        rotation: 0,
        flipped: true,
        tint: 'default'
      },
      {
        id: 'el-5',
        motifId: 'warli-solar-radiance',
        style: 'warli',
        name: 'Concentric Solar Wheel',
        category: 'motif',
        x: 85,
        y: 22,
        scale: 0.8,
        rotation: 0,
        flipped: false,
        tint: 'ochre-gold'
      },
      {
        id: 'el-6',
        motifId: 'warli-sawtooth-border',
        style: 'warli',
        name: 'Triangular Sawtooth Fringe',
        category: 'border',
        x: 50,
        y: 94,
        scale: 1.5,
        rotation: 0,
        flipped: false,
        tint: 'monochrome-white'
      }
    ]
  },
  {
    id: 'chivalric-sacred-grove',
    title: 'Pabuji in the Sacred Grove',
    description: 'Combines Phad’s heroic courtly figures with Warli’s sacred Devchauk fertility diagrams and animist forest creatures.',
    background: 'khadadi',
    elements: [
      {
        id: 'el-1',
        motifId: 'phad-bel-buti-border',
        style: 'phad',
        name: 'Bel-Buti Lotus Vine Border',
        category: 'border',
        x: 50,
        y: 8,
        scale: 1.4,
        rotation: 0,
        flipped: false,
        tint: 'default'
      },
      {
        id: 'el-2',
        motifId: 'fusion-devchauk-chhatri',
        style: 'fusion',
        name: 'Devchauk Palatial Canopy',
        category: 'sacred',
        x: 50,
        y: 42,
        scale: 1.25,
        rotation: 0,
        flipped: false,
        tint: 'default'
      },
      {
        id: 'el-3',
        motifId: 'warli-archer-hunter',
        style: 'warli',
        name: 'Warli Archer & Bow',
        category: 'figure',
        x: 20,
        y: 65,
        scale: 1.0,
        rotation: 0,
        flipped: false,
        tint: 'monochrome-white'
      },
      {
        id: 'el-4',
        motifId: 'phad-courtly-falconer',
        style: 'phad',
        name: 'Court Noble with Falcon',
        category: 'figure',
        x: 80,
        y: 62,
        scale: 1.1,
        rotation: 0,
        flipped: true,
        tint: 'vermillion'
      },
      {
        id: 'el-5',
        motifId: 'warli-horned-bull',
        style: 'warli',
        name: 'Sacred Horned Bull',
        category: 'motif',
        x: 32,
        y: 78,
        scale: 0.9,
        rotation: 0,
        flipped: false,
        tint: 'monochrome-white'
      },
      {
        id: 'el-6',
        motifId: 'phad-desert-camel',
        style: 'phad',
        name: 'Caparisoned Royal Camel',
        category: 'motif',
        x: 68,
        y: 78,
        scale: 0.95,
        rotation: 0,
        flipped: true,
        tint: 'default'
      }
    ]
  },
  {
    id: 'synthesis-epic-wedding',
    title: 'The Sovereign Wedding Chowk',
    description: 'Fuses the Warli wedding square Devchauk with Phad martial champions and Rajasthani musicians under an architectural chhatri.',
    background: 'indigo',
    elements: [
      {
        id: 'el-1',
        motifId: 'warli-sacred-chowk',
        style: 'warli',
        name: 'Sacred Devchauk Square',
        category: 'sacred',
        x: 50,
        y: 50,
        scale: 1.3,
        rotation: 0,
        flipped: false,
        tint: 'monochrome-white'
      },
      {
        id: 'el-2',
        motifId: 'fusion-geometric-pabuji',
        style: 'fusion',
        name: 'Warli-Phad Heroic Chieftain',
        category: 'figure',
        x: 22,
        y: 52,
        scale: 1.1,
        rotation: 0,
        flipped: false,
        tint: 'vermillion'
      },
      {
        id: 'el-3',
        motifId: 'phad-royal-pavilion',
        style: 'phad',
        name: 'Scalloped Royal Chhatri',
        category: 'motif',
        x: 50,
        y: 18,
        scale: 1.2,
        rotation: 0,
        flipped: false,
        tint: 'ochre-gold'
      },
      {
        id: 'el-4',
        motifId: 'warli-dancers-pair',
        style: 'warli',
        name: 'Interlocked Dancers',
        category: 'figure',
        x: 78,
        y: 54,
        scale: 1.0,
        rotation: 0,
        flipped: true,
        tint: 'monochrome-white'
      },
      {
        id: 'el-5',
        motifId: 'phad-sarangi-bard',
        style: 'phad',
        name: 'Bhopa Epic Balladeer',
        category: 'narrative',
        x: 75,
        y: 78,
        scale: 0.9,
        rotation: 0,
        flipped: true,
        tint: 'default'
      }
    ]
  }
];

export interface FusionAnalysisReport {
  warliElements: string[];
  phadElements: string[];
  fusionElements: string[];
  totalElementsCount: number;
  compositionBalance: 'balanced' | 'warli-dominant' | 'phad-dominant' | 'minimal';
  creativeSynthesisEssay: string;
  pedagogicalKeyTakeaways: string[];
}

export function analyzeFusionComposition(elements: CanvasElement[], background: string): FusionAnalysisReport {
  const warliElements: string[] = [];
  const phadElements: string[] = [];
  const fusionElements: string[] = [];

  elements.forEach((el) => {
    if (el.style === 'warli') {
      warliElements.push(el.name);
    } else if (el.style === 'phad') {
      phadElements.push(el.name);
    } else {
      fusionElements.push(el.name);
    }
  });

  const warliCount = warliElements.length + fusionElements.length * 0.5;
  const phadCount = phadElements.length + fusionElements.length * 0.5;

  let compositionBalance: 'balanced' | 'warli-dominant' | 'phad-dominant' | 'minimal' = 'balanced';
  if (elements.length === 0) {
    compositionBalance = 'minimal';
  } else if (Math.abs(warliCount - phadCount) <= 1) {
    compositionBalance = 'balanced';
  } else if (warliCount > phadCount) {
    compositionBalance = 'warli-dominant';
  } else {
    compositionBalance = 'phad-dominant';
  }

  // Generate synthetic analysis
  let essay = '';
  if (elements.length === 0) {
    essay = 'The workspace is currently an empty canvas. Add motifs from both Warli (Maharashtra) and Phad (Rajasthan) to begin generating an analytical comparison of their visual syntax.';
  } else {
    essay = `This digital composition represents an intentional aesthetic dialogue between the egalitarian tribal abstraction of Maharashtra’s Warli tradition and the heroic, bardic narrative scroll traditions of Rajasthan’s Phad painting. By juxtaposing the two inverted triangles of Warli human figures with the volumetric, crowned profiles and continuous horizontal framing of Phad art, the artwork bridges two fundamentally contrasting socio-cultural functions: the intimate domestic blessing of harvest fertility and the monumental public performance of chivalric folk epics.`;
  }

  const pedagogicalKeyTakeaways: string[] = [
    'Contrast in Human Form: Warli anonymizes the human figure into pure geometric balance (two inverted triangles), while Phad personalizes subjects with expressive almond eyes (Machhali Aankhen), royal pagris, and caste-specific costume hierarchies.',
    'Spatial Mechanics: Warli employs non-hierarchical, organic radial rhythms (such as the circular Tarpa spiral), whereas Phad organizes visual space into stratified narrative registers functioning as portable shrines.',
    'Palette Dialectic: Warli relies on a stark monochromatic white rice paste against ferruginous Geru clay ground, contrasted here with Phad’s saturated mineral cinnabar, orpiment yellow, and bold black calligraphic contours.',
    'Synthesized Meaning: The fusion demonstrates that Indian traditional art is not monolithic; combining indigenous tribal rituals with feudal scroll bardics yields a new, hybrid visual language celebrating both communal harvest and epic folklore.'
  ];

  return {
    warliElements: Array.from(new Set(warliElements)),
    phadElements: Array.from(new Set(phadElements)),
    fusionElements: Array.from(new Set(fusionElements)),
    totalElementsCount: elements.length,
    compositionBalance,
    creativeSynthesisEssay: essay,
    pedagogicalKeyTakeaways
  };
}
