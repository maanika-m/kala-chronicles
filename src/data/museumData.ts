import { Epoch, Artifact } from '../types';

export const EPOCHS: Epoch[] = [
  {
    id: 'epoch-indus',
    number: '01',
    title: 'Indus Valley Civilization',
    subhead: 'PROTOCIVILIZATION',
    dateRange: 'c. 2500–1900 BCE',
    description: 'Harappan urbanism, copper metallurgy, lost-wax casting, and glyphic steatite seals along the Indus and Ghaggar-Hakra river valleys.',
    chronologyBadge: 'CHRONOLOGY: c. 2500 – 1900 BCE',
    progressPercent: 16,
    worksCount: 3,
    artifactIds: ['dancing-girl', 'priest-king', 'pashupati-seal', 'bronze-bull']
  },
  {
    id: 'epoch-mauryan',
    number: '02',
    title: 'Mauryan & Early Buddhist Art',
    subhead: 'IMPERIAL POLITY & DHARMA',
    dateRange: 'c. 322–185 BCE',
    description: 'Ashokan monumentalism, monolithic edicts, mirror-like Chunar sandstone polishing, and the stupa architecture of central India.',
    chronologyBadge: 'CHRONOLOGY: c. 322 – 185 BCE',
    progressPercent: 33,
    worksCount: 2,
    artifactIds: ['lion-capital', 'sanchi-stupa']
  },
  {
    id: 'epoch-gupta',
    number: '03',
    title: 'The Gupta Golden Age',
    subhead: 'CLASSICAL SYNTHESIS',
    dateRange: 'c. 320–550 CE',
    description: 'The crystallization of classical Indian aesthetics: clinging diaphanous drapery, luminous halos, and spiritual equilibrium across Sarnath and Mathura.',
    chronologyBadge: 'CHRONOLOGY: c. 320 – 550 CE',
    progressPercent: 50,
    worksCount: 2,
    artifactIds: ['sarnath-buddha', 'mathura-vishnu']
  },
  {
    id: 'epoch-medieval',
    number: '04',
    title: 'Medieval & Temple Art',
    subhead: 'MONUMENTAL DEVOTION',
    dateRange: 'c. 600–1500 CE',
    description: 'Cosmic bronzes of the Chola empire, soaring Nagara towers of Khajuraho, and the intricate stone tapestries of Pallava and Hoysala temples.',
    chronologyBadge: 'CHRONOLOGY: c. 600 – 1500 CE',
    progressPercent: 67,
    worksCount: 3,
    artifactIds: ['chola-nataraja', 'kandariya-mahadeva', 'hoysala-frieze']
  },
  {
    id: 'epoch-mughal',
    number: '05',
    title: 'Mughal & Rajput Painting',
    subhead: 'MINIATURE MASTERIES & PALACE ATELIERS',
    dateRange: 'c. 1500–1800 CE',
    description: 'Single-hair brush precision, lapis lazuli pigments, gold leaf illuminations on wasli paper, and divine romanticism in the hill kingdoms.',
    chronologyBadge: 'CHRONOLOGY: c. 1500 – 1800 CE',
    progressPercent: 83,
    worksCount: 3,
    artifactIds: ['jahangir-hourglass', 'radha-krishna', 'pahari-kangra']
  },
  {
    id: 'epoch-modern',
    number: '06',
    title: 'Modern & Contemporary Art',
    subhead: 'NATIONAL REAWAKENING & MODERNISM',
    dateRange: '1800s–Present',
    description: 'From academic realism and nationalist romanticism to post-colonial avant-garde expressions of the Progressive Artists’ Group.',
    chronologyBadge: 'CHRONOLOGY: 1800s – PRESENT',
    progressPercent: 100,
    worksCount: 3,
    artifactIds: ['ravi-varma-shakuntala', 'amrita-sher-gil', 'husain-equine']
  }
];

export const ARTIFACTS: Artifact[] = [
  // --- EPOCH 1: INDUS VALLEY ---
  {
    id: 'dancing-girl',
    name: 'Dancing Girl of Mohenjo-daro',
    subTitle: 'Bronze Figurine of an Unadorned Performer',
    epochId: 'epoch-indus',
    epochNumber: 1,
    epochName: 'Indus Valley Civilization',
    category: 'sculpture',
    categoryBadge: 'Sculpture • Lost-Wax Bronze',
    date: 'c. 2300–1750 BCE',
    period: 'Mature Harappan Phase (c. 2500–1900 BCE)',
    location: 'Mohenjo-daro, Sindh (Indus Valley)',
    repository: 'National Museum, New Delhi',
    accessionNo: 'NM-DELHI-1926.11',
    material: 'Lost-wax cast bronze (Cu-Sn-Pb)',
    dimensions: '10.5 cm × 5.0 cm × 2.5 cm',
    excavation: '1926 · HR Area, Mohenjo-daro by Ernest Mackay',
    stratigraphy: 'HR Area, Block 7, Room 40, Depth 6.4 ft below datum',
    nodeLabel: 'TIMELINE NODE 01.1',
    timelineCoordinate: 'T-2300.BCE.01',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXC4tTsaezyTXZlfDkdGU6FIo3i0gqJwwKFWIw4HxX8INjgK44hNAREcb182c8t5KVEBL77YPtA1xEBj3e0asKMlGb2hFn_SqXESuz4KY7gAP93KYlxhXr1ZqZ0g1QVyg0BjHhpBUs6O6CAM6y6XnNx8P8kEKnaz8y2LffU4rNQzmeL2jQY6Y8Yn1xGAduELhwCP8UW8NFDasnkR-tYZK3u-PW4UTJug3FuZBAQ49wvZrgtv_9X3CR',
    detailImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJe98iCpGKX_3Ntfw1Ikyq2dxOvjiRQMUifHWsTvc8enL8zlbmz_oYkFK9E57Wf9OTDhwHjzcfrtux1bes7igpu6bsH1CTrmjRAf20f84T0RcuNSbPHBTRdKhNcUnojZeHcvNVlyrQNLPUOGfY8El8wu9bwf6cMsUKYWHkDlpYX7VYiuJfzdvfZIUmOMqe89AKgQtX4b4FwBVVe9SRZT6HXWBEalXfzl7zl4S-R95xVj16aGqj-ed3',
    altText: 'An ancient bronze statuette of the Dancing Girl of Mohenjo-daro standing in a confident poised stance with hand on hip.',
    shortDescription: 'Cast using the lost-wax (cire-perdue) technique, exhibiting naturalistic poise, flexed limb geometry, and 25 bangles along her left arm.',
    overviewNarrative: [
      'Standing a mere 10.5 centimeters in height, this miniature bronze masterpiece portrays a young woman in an arresting posture of effortless confidence and autonomy. Resting her weight predominantly upon her right leg with her right hand placed firmly against her hip, she tilts her head upward with lively curiosity.',
      'Her left arm is enveloped from shoulder to wrist by twenty-four to twenty-five heavy bangles made of bone or shell, while her right arm bears only four bangles alongside a delicate cowrie-shell bead necklace resting lightly around her throat.',
      'Her hair is intricately parted and curled into a large, heavy coil that rests voluptuously against her right shoulder, documenting an elaborate standard of personal adornment in third-millennium BCE Harappan urban centres.'
    ],
    historicalContext: [
      'Unlike dynastic Egypt or Old Babylonian kingdoms, the Indus Valley Civilization (at Mohenjo-daro and Harappa) left no colossal royal tombs, no deified pharaonic monuments, and no depictions of military triumphs or absolute monarchs.',
      'Instead, urban planning concentrated on civic hydraulic infrastructures, standardized baked brick domestic architecture, communal granaries, and sophisticated covered sanitary drainage systems.',
      'Within this remarkably organized civic world, metallurgical craftsmanship was focused on portable, intimate sculpture. The Dancing Girl demonstrates an expansive trans-regional trade network linking Baluchistan minerals, Rajasthan copper mines at Khetri, and lapis lazuli maritime corridors reaching Sumer and the Persian Gulf.'
    ],
    artisticSignificance: [
      'The figurine is celebrated worldwide because its fluid anatomy and lively movement broke completely with the stiff, formal conventions typical of early bronze age sculptures across the Mediterranean and Middle East.',
      'Sir John Marshall, Director-General of the Archaeological Survey of India, was famously astounded upon inspecting her: "When I first saw them I found it difficult to believe that they were prehistoric; they seemed to upset all established ideas about early art. Modeling such as this was unknown in the ancient world up to the Hellenistic age of Greece."',
      'Her rhythmic three-bend stance is widely recognized as the earliest known visual precursor to the quintessential tribhanga (three-bend posture) that would later define the classical Indian sculptural and dance traditions across millennia.'
    ],
    technique: {
      title: 'Lost-Wax Metallurgical Mastery (Cire Perdue)',
      narrative: 'Spectrometric analysis shows the sculpture was executed in a high-grade tin-bronze alloy containing copper alloyed with tin, with trace amounts of lead and arsenic that increased metal fluidity during pouring.',
      points: [
        'Beeswax Sculpting: The artisan modeled the figure in pliable beeswax, forming intricate hollow arms and curling coils of hair.',
        'Clay Investment: The wax model was enveloped in successive coats of fine river silt clay and dried slowly.',
        'Firing & Pouring: The assembly was baked in an open charcoal hearth; molten wax drained out, replaced by liquid molten bronze poured at over 1,000°C.',
        'Cold Chisel Finishing: Microscopic analysis reveals file marks and cold chisel chasing along the bangles, earlobes, and neckline.'
      ]
    },
    provenance: {
      narrative: 'Unearthed in 1926 during the excavation campaign directed by Ernest J. H. Mackay in the HR Area of Mohenjo-daro. During the Partition of India in 1947, antiquities were apportioned; the Dancing Girl was conserved at the National Museum in New Delhi.',
      register: 'NM-DELHI-1926/77',
      conservationStandard: 'Active inert Nitrogen containment vitrine, 20°C ambient, 42% RH',
      permanentInstallation: 'Gallery of Pre-History, National Museum, Janpath, New Delhi'
    },
    curatorialQuote: {
      text: 'She stands as if taking a moment’s pause between rhythmic cadences, oblivious to antiquity.',
      author: 'Sir John Marshall (1931)'
    },
    metallurgicalInsight: 'Analysis reveals a tin-bronze alloy displaying an advanced understanding of metal ductility, cast hollow to optimize weight and tensile equilibrium.',
    hotspots: [
      {
        id: 1,
        title: 'Armour of Bangles',
        description: '24 to 25 continuous bangles adorning the entire left arm down to the wrist, modeled using lost-wax filament wrapping.',
        xPercent: 32,
        yPercent: 30
      },
      {
        id: 2,
        title: 'Dynamic Tribhanga Posture',
        description: 'Right fist placed firmly upon the right hip; head tilted back in defiant, relaxed confidence pre-dating classical Indian dance mudras.',
        xPercent: 68,
        yPercent: 52
      }
    ],
    tags: ['Lost-Wax Bronze', 'Tribhanga', 'Harappan', 'Prehistoric', 'National Museum'],
    relatedArtifactIds: ['priest-king', 'pashupati-seal', 'bronze-bull']
  },
  {
    id: 'priest-king',
    name: 'The Priest-King Bust',
    subTitle: 'Carved Steatite Ceremonial Portrait',
    epochId: 'epoch-indus',
    epochNumber: 1,
    epochName: 'Indus Valley Civilization',
    category: 'sculpture',
    categoryBadge: 'Sculpture • Steatite (Soapstone)',
    date: 'c. 2000–1900 BCE',
    period: 'Mature Harappan Phase (c. 2500–1900 BCE)',
    location: 'Mohenjo-daro, Sindh',
    repository: 'National Museum, Karachi',
    accessionNo: 'NMP-KARACHI-1927',
    material: 'Glazed Steatite (Soapstone)',
    dimensions: '17.5 cm × 11.0 cm × 8.0 cm',
    excavation: '1927 · DK-B Area, Mohenjo-daro by Ernest Mackay',
    nodeLabel: 'NODE 01.2 • c. 2000–1900 BCE',
    timelineCoordinate: 'T-2000.BCE.02',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_QkbOmZmAvEM5faYcua2yhxCZoK8g3s-VmcTGlnYvZzWwX0N0h3h0SNnSMwFrmZdvOBYwUvJcijOnwBC2oWAiF0YvYEbAIsBkUiXDGtyOkhXTAaFH0s3MrpooAH-gpKt9Hmp7YDpfw-U8jU5G-csEJrcWDRvshuDw1bDADPPqGf4LSWibVUpL0EVDg2wC2beHdNMFYw84h8Ewgb1wCmlIY1ZEtt1SeFDU08OEVGdIq7XpYV3CRc04',
    altText: 'An intimate macro view of the ancient soapstone Priest-King sculpture from Mohenjo-daro with trefoil patterned robes.',
    shortDescription: 'Carved with meditative half-closed slit eyes, fillet headband, armband medallion, and an ornate trefoil cloak originally filled with red cinnabar paste.',
    overviewNarrative: [
      'This iconic male bust is sculpted from soft steatite and baked to a durable porcelain-like finish. The figure portrays a solemn dignitary wearing a fillet diadem around his brow and a circular medallion armband on his right arm.',
      'A distinctive mantle decorated with raised trefoil rosettes is draped over his left shoulder, leaving the right arm bare in the traditional manner of sanctity that echoes into later Indian Buddhist and Vedic monastic dress.',
      'His slit, contemplative eyes were originally inlaid with shell or stone, looking downward in concentrated meditation toward the tip of his nose.'
    ],
    historicalContext: [
      'Excavated in the DK-B area of Mohenjo-daro in a domestic brick complex. While early British excavators labeled the figure a "Priest-King" in reference to Mesopotamian and Egyptian theocratic models, no evidence confirms the Harappans possessed a monarchical priesthood.',
      'Archaeologists suggest the figure may represent an elder of a governing civic council, a revered clan leader, or a spiritual mediator whose authority was ritual and administrative rather than autocratic.'
    ],
    artisticSignificance: [
      'The trefoil motif has deep astral associations, matching symbols found across contemporary Sumerian cylinder seals and Akkadian ritual iconography, attesting to maritime cultural exchange across the Indian Ocean.',
      'The trim, combed beard, shaved upper lip, and meditative stillness demonstrate an established canon of aristocratic gravitas and formal aesthetic restraint.'
    ],
    technique: {
      title: 'Steatite Carving & Thermal Hardening',
      narrative: 'Carved from hydrous magnesium silicate (steatite/soapstone) and subjected to controlled kiln firing at approximately 1,000°C to induce white enstatite recrystallization.',
      points: [
        'Precision Intaglio Carving: Drilled rosettes filled with red mineral paste (cinnabar).',
        'Inlaid Optics: Eye sockets recessed to house polished conch shell slivers.',
        'Thermal Glaze: Coated in a siliceous slurry before heat-hardening.'
      ]
    },
    tags: ['Steatite', 'Mohenjo-daro', 'Ritual Art', 'National Museum Karachi'],
    relatedArtifactIds: ['dancing-girl', 'pashupati-seal', 'bronze-bull']
  },
  {
    id: 'pashupati-seal',
    name: 'The Pashupati Seal',
    subTitle: 'Steatite Intaglio Master Seal',
    epochId: 'epoch-indus',
    epochNumber: 1,
    epochName: 'Indus Valley Civilization',
    category: 'object',
    categoryBadge: 'Object • Carved Steatite',
    date: 'c. 2350–2000 BCE',
    period: 'Mature Harappan Phase (c. 2500–1900 BCE)',
    location: 'Mohenjo-daro, Sindh',
    repository: 'National Museum, New Delhi',
    accessionNo: 'NM-DELHI-DK.5175',
    material: 'Carved Steatite with white alkaline glaze',
    dimensions: '3.4 cm × 3.4 cm × 0.5 cm',
    excavation: '1928–29 · DK-G Area, Mohenjo-daro by Ernest Mackay',
    nodeLabel: 'NODE 01.3 • c. 2350–2000 BCE',
    timelineCoordinate: 'T-2350.BCE.03',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM11Fyiz-DU1MXExYAaMhx8kOiDhHrIer5la4Mi38d7D8OQbImDZdgbvRD7QEujbROnfgHgFuT2pax9-vbKd6TDEI6VqYJdSwD5uvjoh_wOO3T14SbxWX2prXykGX66zpbvC1-1XPrHFCO3D4XW2Jm9rli51CqUABCcSjPm5UK_43YNGCxhzep81NRE60TpO1rhpxPX4r4avEMzp2XotOA3RYceVDEKXDf_83IZPGzpyZ-OhrvGICw',
    altText: 'A macro studio photograph of the Harappan Pashupati steatite seal depicting a seated horned yogic figure surrounded by fauna.',
    shortDescription: 'Often interpreted as a proto-Shiva deity seated in yogic mulabandhasana, flanked by wild fauna and seven undeciphered Indus pictographic characters.',
    overviewNarrative: [
      'This minuscule square seal is one of the most intellectually compelling artifacts recovered from ancient Asia. At its center sits a three-faced horned deity seated upon a low dais with heels pressed closely together in an advanced yogic asana (mulabandhasana).',
      'The seated figure wears fan-like horned headgear and heavy armlets. Around the central divinity roam four majestic wild beasts: an elephant and a tiger to his right, and a rhinoceros and a water buffalo to his left, with two horned deer or ibexes beneath his throne.',
      'Across the top edge are seven crisp glyphs of the yet-undeciphered Indus script, incised with astonishing microscopic precision.'
    ],
    historicalContext: [
      'Harappan seals served dual administrative and ritual functions: pressed into damp clay tags (bullae) to seal mercantile bales transported along riverways and caravan tracks to Oman and Mesopotamia, while also embodying protective amulets.',
      'Sir John Marshall recognized the composition as an archetype of Pashupati ("Lord of Animals"), an epithet of the Vedic and later Puranic deity Shiva, pointing to deep continuity in subcontinental spiritual iconography.'
    ],
    artisticSignificance: [
      'Represents the earliest recorded depiction of structured yogic meditation posture in the archaeological record of humanity.',
      'Combines fierce fauna with supreme serene authority, demonstrating that the Indus craftsmen possessed unmatched command of anatomical realism within a canvas under 3.5 centimeters.'
    ],
    technique: {
      title: 'Micro-Lapidary Intaglio & Glaze',
      narrative: 'Incised in negative relief using miniature copper chisels, burins, and quartz drills into soft steatite, then fired to create a lustrous white enstatite coating.',
      points: [
        'Negative Intaglio Carving: Enabled the production of crisp positive clay impressions.',
        'Faunal Realism: Dynamic depiction of tiger stripes, buffalo horns, and elephant skin wrinkles.',
        'Indus Glyphs: Undeciphered pictographic writing showing animal and anthropomorphic symbols.'
      ]
    },
    tags: ['Intaglio', 'Pashupati', 'Yoga', 'Harappan Script', 'Steatite'],
    relatedArtifactIds: ['dancing-girl', 'priest-king', 'bronze-bull']
  },
  {
    id: 'bronze-bull',
    name: 'Bronze Bull of Kalibangan',
    subTitle: 'Dynamic Lost-Wax Zebu Figurine',
    epochId: 'epoch-indus',
    epochNumber: 1,
    epochName: 'Indus Valley Civilization',
    category: 'sculpture',
    categoryBadge: 'Sculpture • Lost-Wax Bronze',
    date: 'c. 2400–2100 BCE',
    period: 'Mature Harappan Phase (c. 2500–1900 BCE)',
    location: 'Kalibangan, Rajasthan (Ghaggar Basin)',
    repository: 'Archaeological Survey of India',
    accessionNo: 'ASI-KBG-1961/04',
    material: 'Cast tin-bronze alloy',
    dimensions: '7.8 cm × 4.2 cm × 2.6 cm',
    excavation: '1961 · Kalibangan Citadel by B. B. Lal & B. K. Thapar',
    nodeLabel: 'TECHNICAL COMPARISON • c. 2400–2100 BCE',
    timelineCoordinate: 'T-2400.BCE.04',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiWOpn2y-Uz7gkYD1B28Z754-cS_kPZwP9dwAp6Er_Ed7UKWrpQRxwJFI2vKtpCcybR2Hx_89eLd2826U9wbUAxM5dp67Nj850lSLqwiOFghkJpJcAePW41TY15TbswPR3DHuGFdtxUrQCFQrVmnKUJlpDTZr3EvH7pPfuwKmNDIaNa1UZ8rJrqNFhMqYI-qdqaBHJJyUU1DNLADxZP06XkWJAOnzxb8Sjqihw0E7LqoPk5V94RJCq',
    altText: 'Harappan cast bronze bull figurine from Kalibangan with vigorous humped zebu anatomy.',
    shortDescription: 'A masterwork of dynamic animal anatomy showing a charging humped bull, demonstrating shared cire-perdue casting techniques across Harappan riverine settlements.',
    overviewNarrative: [
      'Excavated at the fortified site of Kalibangan on the banks of the dried-up Ghaggar River, this solid bronze figurine portrays a humped Indian zebu bull (Bos indicus) in a posture of coiled kinetic energy.',
      'Its lowered horns, muscular shoulder hump, and tensed hindquarters capture the raw physical vitality of domestic livestock revered in the agricultural heartland of the bronze age subcontinent.'
    ],
    historicalContext: [
      'Kalibangan is famed for the earliest documented furrowed agricultural field in human history. Cattle were not merely beasts of burden but sacred symbols of agricultural abundance and cosmic power.',
      'The discovery of bronze casting identical in technique to Mohenjo-daro across hundreds of miles proves the existence of uniform metallurgical guilds and trade standards throughout the civilization.'
    ],
    artisticSignificance: [
      'Presents a striking contrast to static votive animals: the bull leans forward as if about to charge or plow, embodying vital naturalism.',
      'Proves that lost-wax casting was not confined to imperial centers, but flourished across regional towns.'
    ],
    technique: {
      title: 'Solid Bronze Lost-Wax Casting',
      narrative: 'Cast in a single solid pour using copper-rich bronze alloy with high tin content to produce fine surface definition.',
      points: [
        'Single Solid Pour: Hollow investment mold without inner clay core.',
        'Anatomical Modeling: Naturalistic rendering of dewlap folds and dorsal hump.',
        'Corrosion Patina: Green copper carbonate and cuprite crust.'
      ]
    },
    tags: ['Zebu Bull', 'Kalibangan', 'Bronze Age', 'Lost-Wax Alloy'],
    relatedArtifactIds: ['dancing-girl', 'priest-king', 'pashupati-seal']
  },

  // --- EPOCH 2: MAURYAN & EARLY BUDDHIST ---
  {
    id: 'lion-capital',
    name: 'Lion Capital of Ashoka',
    subTitle: 'Monolithic Imperial Emblem of Sarnath',
    epochId: 'epoch-mauryan',
    epochNumber: 2,
    epochName: 'Mauryan & Early Buddhist Art',
    category: 'sculpture',
    categoryBadge: 'Monumental Sculpture • Polished Chunar Sandstone',
    date: 'c. 250 BCE',
    period: 'Mauryan Empire (c. 322–185 BCE)',
    location: 'Sarnath, Uttar Pradesh',
    repository: 'Sarnath Archaeological Museum',
    accessionNo: 'SARNATH-LC-01',
    material: 'Polished Chunar Sandstone',
    dimensions: '2.15 meters height',
    excavation: '1905 · Sarnath Deer Park by F. O. Oertel',
    nodeLabel: 'TIMELINE NODE 02.1 • NATIONAL EMBLEM ARCHIVE',
    timelineCoordinate: 'T-0250.BCE.01',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI9EUH0YxjP0RQZdfEY3t5Vp8eIn8YKN2z-JXVYmtECgvUesOC8mzzOfglumaAkKmAfu6Cx_JmFTeimdtY-MFKyuTpTGJ1a0mb3bIb0x_ORkzyXvB9xeuoJARogiZEz9JaHoTircmxjRZjDEaqgs7BOBOEBnSR9nKuZohgoda7pWNnBfPAPTOn76J-HM9pVLA7dWvLCRPQ98pXkZSd80rQ8uSoLTcnLrIDmE5EQ9Wk_PbDHze7oyoE',
    altText: 'A museum photograph of the Lion Capital of Ashoka sculpted from polished Chunar sandstone with four back-to-back Asiatic lions.',
    shortDescription: 'Carved from a single block of yellow-spotted sandstone with the famed glass-smooth “Mauryan polish”. Four lions sit back-to-back facing the cardinal directions, symbolizing the universal proclamation of the Buddha’s Dharmachakra.',
    overviewNarrative: [
      'Sculpted from a single colossal block of buff-colored Chunar sandstone, the Lion Capital originally surmounted Emperor Ashoka’s commemorative pillar at the Deer Park in Sarnath, where Siddhartha Gautama preached his first sermon (the Dhammacakkappavattana Sutta).',
      'Four muscular Asiatic lions sit back-to-back facing the four cardinal directions, their jaws parted in noble roar to proclaim the moral law (Dharma) across the universe. Beneath them sits a circular abacus carved with four dynamic wheels (Dharmachakras) interspersed with four symbolic animals: an elephant, horse, bull, and lion.',
      'The capital rests upon an inverted bell-shaped lotus, symbolizing purity rising above worldly attachments. It was adopted in 1950 as the official National Emblem of the Republic of India.'
    ],
    historicalContext: [
      'Following the traumatic Kalinga War (c. 261 BCE), Emperor Ashoka renounced conquest by sword (dig-vijaya) in favor of conquest through righteousness (dharma-vijaya).',
      'Ashoka erected monolithic inscribed pillars across India, Nepal, and Pakistan to broadcast edicts of non-violence, religious tolerance, and public welfare. The pillars served as monuments of both statecraft and spiritual renaissance.'
    ],
    artisticSignificance: [
      'Famed for its mirror-like "Mauryan polish", a lost stone-finishing technique that gave fine-grained sandstone the gleam of burnished marble.',
      'Combines Achaemenid Persian monumental craftsmanship with indigenous Indian symbolic theology and vibrant biological naturalism.'
    ],
    technique: {
      title: 'Monolithic Chunar Sandstone & Mauryan Polish',
      narrative: 'Quarried from the Chunar hills near Varanasi, transported via the Ganges river, and polished to glass-smooth optical reflectivity.',
      points: [
        'Monolithic Block: Sculpted from a single 50-ton block without mortar or iron pins.',
        'High-Gloss Polishing: Utilized diamond dust and silica paste rubbing to achieve a vitreous sheen.',
        'Dynamic Animal Reliefs: Galloping horse, charging bull, and walking elephant on the frieze.'
      ]
    },
    curatorialQuote: {
      text: 'The lions of Sarnath stand not as tyrants over conquered lands, but as noble sentinels proclaiming the reign of moral law across all directions.',
      author: 'A. K. Coomaraswamy (1927)'
    },
    dimensionsDetails: {
      patron: 'Emperor Ashoka the Great',
      height: '2.15 meters',
      casting: 'Monolithic Chunar Sandstone'
    },
    tags: ['Ashoka', 'Sarnath', 'National Emblem', 'Mauryan', 'Dharmachakra'],
    relatedArtifactIds: ['sanchi-stupa', 'sarnath-buddha']
  },
  {
    id: 'sanchi-stupa',
    name: 'Sanchi Great Stupa & Torana Carvings',
    subTitle: 'Monumental Gateway Reliquary Architecture',
    epochId: 'epoch-mauryan',
    epochNumber: 2,
    epochName: 'Mauryan & Early Buddhist Art',
    category: 'architecture',
    categoryBadge: 'Monumental Architecture • Carved Sandstone',
    date: 'c. 3rd–1st Century BCE',
    period: 'Mauryan to Shunga / Satavahana Eras',
    location: 'Sanchi, Raisen District, Madhya Pradesh',
    repository: 'Sanchi Archaeological Site / UNESCO World Heritage',
    accessionNo: 'SANCHI-STUPA-01',
    material: 'Carved Sandstone Gateways and Brick Core',
    dimensions: 'Hemispherical Dome 36.5 m diameter, 16.4 m height',
    excavation: 'Conserved by John Marshall (1912–1919)',
    nodeLabel: 'NODE 02.2 • MONUMENTAL ARCHITECTURE',
    timelineCoordinate: 'T-0150.BCE.02',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBFV_3_C8ag0L7P0qFbnktwOZThrOKKCeW_HimNre0sFN7q1Vlenr_Ir_gXzdcwRWbfHc_FaU_tas3yQppu1M1rUgp8n8noeqOmIGBCG5IcWY7jx4j2fq0T1PmCeyuGTMVLrKppp0EFgu-GoZUp58-zP9NjE-11XxZuFsUtKgsdgN1lFFVXwpGQBRuWPi2WySfEZw4rqM8W2kIRcmg6e9Iwbh-ESns-P0ncMZUwCfL5-AQplKBtrzF',
    altText: 'An architectural detail of the stone Torana gateway at the Great Stupa of Sanchi with intricate bas-relief carvings.',
    shortDescription: 'Intricately carved sandstone gateways (toranas) narrating Jataka tales, featuring the sensual shalabhanjika bracket figures and aniconic representations of the Buddha through footprints, lotuses, and umbrellas.',
    overviewNarrative: [
      'The Great Stupa at Sanchi is the oldest existing stone structure in India, initially commissioned by Ashoka over the corporal relics of the Buddha and later expanded during the Shunga and Satavahana dynasties.',
      'Its four magnificent stone gateways (toranas), oriented to the cardinal compass points, are covered from post to lintel with dense narrative reliefs depicting episodes from the life of Gautama Buddha and previous Jataka rebirths.',
      'Sensuous tree-nymph bracket figures (shalabhanjikas) lean gracefully from mango branches at the gateway corners, symbolizing fertility, natural abundance, and spiritual blessing.'
    ],
    historicalContext: [
      'In early Buddhist art, the Buddha was never depicted in human anthropomorphic form; rather, his presence was indicated through aniconic emblems: the Bodhi tree, empty thrones, footprints (buddhapada), wheels of the law, and umbrellas.',
      'Sanchi stood at the strategic intersection of the northern (Uttarapatha) and southern (Dakshinapatha) trade highways, funded entirely by collective donations of ivory carvers, merchants, monks, and laywomen.'
    ],
    artisticSignificance: [
      'Inscriptions on the South Torana explicitly state that it was sculpted by the ivory-carving guild of nearby Vidisha, explaining the microscopic, lace-like precision of the stone carving.',
      'Forms a bridge between indigenous nature-cults of Yakshas/Yakshis and the monastic theology of early Theravada Buddhism.'
    ],
    technique: {
      title: 'Guild Carving in Local Sandstone',
      narrative: 'Sandstone assembled using sophisticated mortise-and-tenon carpentry joints adapted directly from earlier wooden architectural traditions.',
      points: [
        'Carpentry in Stone: Imitation of timber fences, railings (vedika), and lintels.',
        'Continuous Narrative Friezes: Multiple chronological moments presented across single horizontal architraves.',
        'Aniconic Iconography: Worship of relics without human depiction of the Enlightened One.'
      ]
    },
    tags: ['Sanchi', 'Stupa', 'Torana', 'Buddhist Art', 'UNESCO'],
    relatedArtifactIds: ['lion-capital', 'sarnath-buddha']
  },

  // --- EPOCH 3: GUPTA GOLDEN AGE ---
  {
    id: 'sarnath-buddha',
    name: 'Sarnath Standing Buddha',
    subTitle: 'Pinnacle of Gupta Classical Grace',
    epochId: 'epoch-gupta',
    epochNumber: 3,
    epochName: 'The Gupta Golden Age',
    category: 'sculpture',
    categoryBadge: 'Sculpture • Chunar Sandstone',
    date: 'c. 5th Century CE',
    period: 'Gupta Dynasty (c. 320–550 CE)',
    location: 'Sarnath, Uttar Pradesh',
    repository: 'Sarnath Archaeological Museum',
    accessionNo: 'SARNATH-MUSEUM-B(B)1',
    material: 'Buff Chunar Sandstone',
    dimensions: '2.17 meters height',
    excavation: 'Sarnath Monastery Complex',
    nodeLabel: 'NODE 03.1 • SARNATH ATELIER',
    timelineCoordinate: 'T-0475.CE.01',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHtwzwKDyxr1Pa-4PPEDik9Y5o-aAMtRNhNZS4ESE9xpjHJq17M6PrMEf3Ru1UvZoKXPsn6--IVrWeitYYgA21ZL6CGSVrD3fKgNPp1h1I69tgktWL4FxSzNbglo-ycH1LqRXkC9OFU_MmTFJH-4yDXDwMiw3t4Sg5ZGaC3lmS3FnyERuiiZUZFcXhRFcOESEpcQnuKDIVjGSTsSkI5-jl3DwiYaPMLnoAISFyduyH8qp0e9sx5SfW',
    altText: 'A tall carved sandstone sculpture of the Standing Buddha from Sarnath with sheer drapery and ornate circular halo.',
    shortDescription: 'Exemplifies the pinnacle of Gupta classical grace: translucent smooth robes devoid of heavy folds, webbed fingers, elongated earlobes, and transcendent calmness.',
    overviewNarrative: [
      'This life-size standing Buddha is universally regarded as the ultimate realization of the classical Gupta aesthetic idiom. Carved in pale honey-toned Chunar sandstone, the Buddha stands in gentle samabhanga with downcast eyes in deep introspection.',
      'Unlike the heavy, Greek-influenced pleated drapery of Gandharan sculpture, here the monastic robes cling like diaphanous wet silk to the contours of the body, completely smooth except for the delicate hemline at the ankles and wrists.',
      'Behind the head rests an expansive circular halo (prabhamandala) carved with bands of scrolling acanthus foliage, lotus petals, and celestial vidyadharas bearing floral garlands.'
    ],
    historicalContext: [
      'The Gupta era is celebrated as the "Golden Age" of classical Indian art, literature, mathematics, and philosophy. Under the patronage of emperors like Chandragupta II and Kumaragupta, the sculptural workshops of Sarnath and Mathura established canonical standards of divine form (pratima-lakshana).',
      'The sculpture balances spiritual transcendence with sensual biological beauty, influenced by Kalidasa’s court poetry and the Natyashastra’s theory of aesthetic rasa.'
    ],
    artisticSignificance: [
      'The canonical facial features—lotus-petal eyes (padmapatraksha), bow-shaped eyebrows, snail-shell hair curls (dakshinavarta), and elongated earlobes—became the universal model exported to Southeast Asia, China, Korea, and Japan.',
      'Subtle treatment of smooth volume captures the concept of prana (inner spiritual breath) expanding the chest from within.'
    ],
    technique: {
      title: 'Subtractive Sandstone Chiseling & Polishing',
      narrative: 'Executed in fine-grained Chunar sandstone with matte, skin-soft surface finish contrasting against deeply undercut halo arabesques.',
      points: [
        'Translucent Drapery: Elimination of ridge lines in favor of pure bodily volume.',
        'High-Relief Halo: Intricate openwork scrolling contrasting with smooth facial planes.',
        'Abhayamudra: Raised right palm granting fearlessness and spiritual refuge.'
      ]
    },
    tags: ['Gupta', 'Sarnath Buddha', 'Classical', 'Abhayamudra', 'Halo'],
    relatedArtifactIds: ['mathura-vishnu', 'lion-capital']
  },
  {
    id: 'mathura-vishnu',
    name: 'Mathura Vishnu Relief',
    subTitle: 'Monumental Four-Armed Sovereign Iconography',
    epochId: 'epoch-gupta',
    epochNumber: 3,
    epochName: 'The Gupta Golden Age',
    category: 'sculpture',
    categoryBadge: 'Sculpture • Mottled Red Sandstone',
    date: 'c. 5th Century CE',
    period: 'Gupta Dynasty (c. 320–550 CE)',
    location: 'Mathura, Uttar Pradesh',
    repository: 'Mathura Government Museum',
    accessionNo: 'MATHURA-ARCH-V88',
    material: 'Mottled Red Sandstone (Sikri Sandstone)',
    dimensions: '1.45 meters height',
    excavation: 'Katra Keshavdev precinct, Mathura',
    nodeLabel: 'NODE 03.2 • MATHURA ATELIER',
    timelineCoordinate: 'T-0450.CE.02',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEiNrGa2nP3el8lN-_tmJZO36Wt2h_Y5vFw_1IE5U8XugRFkYWkpX29VM91v_FAinH1_l9o-9l-ltO8FShp_yd3Qk9P7ykQUTiqtAQJF6ktCJNQH3rPbFx1Eq7tUdBwo-iQ7ttg5sE1n9uBCSr_2lx03BFskmn66tCBUjxplgA_HA-CjoUagdL57L96LIjCPyM5wZ1b5QD5EhuRs0B8TlATMx3nDGE7Jjzc4HjP7aeDRctzRQgRPFa',
    altText: 'A red sandstone carved sculpture of four-armed Vishnu from Mathura with elaborate crown and pearl garlands.',
    shortDescription: 'Adorned with high cylindrical crown (kirita-mukuta) and pearl necklaces (kanthi), demonstrating the energetic masculine synthesis of the Mathura atelier.',
    overviewNarrative: [
      'Sculpted in the distinctive white-speckled mottled red sandstone of the Mathura region, this four-armed Vishnu stands as the supreme cosmic preserver. He wears a towering cylindrical crown (kirita-mukuta) decorated with lion masks, pearls, and jewel clusters.',
      'Around his neck hangs a long forest garland (vanamala) that drapes down to his knees, alongside multiple strands of beaded pearls and armlets. He holds his sacred attributes: the mace (gada), the discus (chakra), and the conch (shankha).',
      'The chest is carved with broad masculine shoulders and a serene face illuminated by half-open eyes and a subtle spiritual smile.'
    ],
    historicalContext: [
      'Mathura was one of the most prolific artistic hubs of ancient India for over eight centuries. Under the Guptas, its sculptors synthesized earlier robust Kushan physicality with spiritualized poise.',
      'The Gupta emperors took the title Parama-Bhagavata ("Supreme Devotees of Vishnu"), using Vishnu’s royal avatars (Varaha, Rama, Krishna) to legitimize righteous sovereign governance across the subcontinent.'
    ],
    artisticSignificance: [
      'Established the multi-armed divine convention in Hindu iconography: multiple limbs convey omnipotence and simultaneous cosmic actions.',
      'The interplay between the ornate headdress, necklaces, and smooth torso exemplifies the Gupta principle of rhythmic balance between ornament and unadorned surface.'
    ],
    technique: {
      title: 'Sikri Mottled Sandstone Carving',
      narrative: 'High-relief subtractive carving in local mottled red sandstone with intricate detailing of jewelry and fabrics.',
      points: [
        'Kirita-Mukuta Crown: Multi-tiered jewel crown with lion heads spitting pearls.',
        'Vanamala Garland: Deeply undercut floral wreath draping across the lower thighs.',
        'Iconographic Weapons: Anthropomorphic personification of mace (Gadanari) and discus.'
      ]
    },
    tags: ['Vishnu', 'Gupta', 'Mathura', 'Hindu Iconography', 'Crown'],
    relatedArtifactIds: ['sarnath-buddha', 'chola-nataraja']
  },

  // --- EPOCH 4: MEDIEVAL & TEMPLE ART ---
  {
    id: 'chola-nataraja',
    name: 'Shiva as Nataraja, Lord of the Dance',
    subTitle: 'Cosmic Dance of Creation & Dissolution',
    epochId: 'epoch-medieval',
    epochNumber: 4,
    epochName: 'Medieval & Temple Art',
    category: 'sculpture',
    categoryBadge: 'Masterpiece • Lost-Wax Cast Bronze',
    date: 'c. 11th Century CE',
    period: 'Late Chola Dynasty (c. 850–1279 CE)',
    location: 'Thanjavur / Tamil Nadu',
    repository: 'National Museum, New Delhi / Thanjavur Art Gallery',
    accessionNo: 'NM-DELHI-CHOLA-NR-89',
    material: 'Panchaloha (Sacred Five-Metal Bronze Alloy)',
    dimensions: '96.0 cm × 82.0 cm × 28.0 cm',
    excavation: 'Chidambaram temple environs, Tamil Nadu',
    nodeLabel: 'TIMELINE NODE 04.1 • CHOLA BRONZE CANON',
    timelineCoordinate: 'T-1050.CE.01',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkEWXgnM039gaE0-9y_lv2vGoo71MgOqDNHCxeW5GDbuDBlSVOqQJcr12EdVrRr6qEjyVI1H65Lxi3LUVDG78ae7YMufFzQdWLvl52GBVuoldEvBJ-e2dnfgTCkbTtkz14eiqTQHq7ACt_BlohV9idSWnpGPzQ0SyzT1OGpReHOv5-dhTU77R5ZqObnczebn_VlTk5jB_KAOG9UQgFmcmMjcrlDWFAB_RmZsLbkQUOcTWzWivaA5U_',
    altText: 'An exquisite high-detail photograph of a Chola dynasty Nataraja bronze depicting Shiva dancing within an arch of flames.',
    shortDescription: 'Performing the cosmic dance of creation and dissolution (anandatandava) encircled within an arch of fire (prabhamandala). In his upper hands he balances the drum of primordial sound (damaru) and the flame of destruction (agni).',
    overviewNarrative: [
      'The Chola bronze Nataraja is celebrated globally as one of humanity’s supreme artistic achievements, synthesizing physics, poetry, and theology into a single dynamic bronze composition.',
      'Shiva dances the Anandatandava ("Dance of Bliss") within a circular aureole of flames (prabhamandala) representing the cosmos. His upper right hand holds the hourglass drum (damaru) vibrating the sound of creation; his upper left hand holds the flame of cosmic dissolution (agni).',
      'His lower right hand gestures the reassurance of protection (abhayamudra); his lower left hand points diagonally downward to his lifted foot, signifying spiritual salvation and grace.',
      'Under his right foot, Shiva crushes Apasmara-purusha, the dwarf demon of ignorance and spiritual forgetfulness.'
    ],
    historicalContext: [
      'The Chola emperors (such as Rajaraja I and Rajendra I) ruled a maritime empire stretching across South India, Sri Lanka, the Maldives, and the Srivijaya kingdom of Southeast Asia. Their grand granite temples (like the Brihadisvara at Thanjavur) were centers of economic, artistic, and ritual life.',
      'These sacred bronzes (utsava murtis) were carried in public festival processions, adorned with silks, jewels, and floral garlands so all citizens could witness the divine.'
    ],
    artisticSignificance: [
      'The French sculptor Auguste Rodin declared the Chola Nataraja to possess "the most perfect movement of rhythmic life ever conceived in bronze sculpture."',
      'Modern physicists, notably Fritjof Capra and Carl Sagan, famously drew parallels between Shiva’s cosmic dance and the kinetic subatomic dance of matter and energy in modern quantum field theory.'
    ],
    technique: {
      title: 'Panchaloha Lost-Wax Casting',
      narrative: 'Cast solid in Panchaloha (sacred alloy of Copper, Silver, Gold, Brass, and Iron/Lead) by master hereditary sthapatis according to the strict iconometric proportions of the Shilpa Shastras.',
      points: [
        'Flying Locks of Hair: Wild flying matted locks (jata) carrying the river goddess Ganga.',
        'Flaming Aureole: Prabhamandala encircled with 34 individual tongues of fire.',
        'Gravitational Equilibrium: Perfectly balanced center of mass supported upon a single tensed right ankle.'
      ]
    },
    curatorialQuote: {
      text: 'How many times have I stood before this bronze in awe! The rhythm of the cosmos is caught in that gesture.',
      author: 'Auguste Rodin (1913)'
    },
    tags: ['Chola Bronze', 'Nataraja', 'Panchaloha', 'Shiva', 'Cosmic Dance'],
    relatedArtifactIds: ['kandariya-mahadeva', 'hoysala-frieze']
  },
  {
    id: 'kandariya-mahadeva',
    name: 'Kandariya Mahadeva Temple Reliefs',
    subTitle: 'Nagara Sandstone Architectural Symphony',
    epochId: 'epoch-medieval',
    epochNumber: 4,
    epochName: 'Medieval & Temple Art',
    category: 'architecture',
    categoryBadge: 'Temple Relief • Fine Sandstone',
    date: 'c. 1025–1050 CE',
    period: 'Chandela Dynasty (c. 9th–13th Century CE)',
    location: 'Khajuraho, Chhatarpur District, Madhya Pradesh',
    repository: 'Khajuraho Archaeological Site / UNESCO World Heritage',
    accessionNo: 'KHJ-KM-RELIEF-08',
    material: 'Warm Ochre Sandstone',
    dimensions: 'Shikhara height 31.0 m; reliefs life-size to 1.2 m',
    excavation: 'Conserved by Archaeological Survey of India',
    nodeLabel: 'NODE 04.2 • CHANDELA DYNASTY',
    timelineCoordinate: 'T-1035.CE.02',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaXfyb_IAzEz5VVnqK4lZNwBk2hJrX-ucrfeQdNULvbNA5RCvsaEabCPPNJXAMqA-cswp6atGDPTM_tRu6cQwLUoWZ4NqKFNxPOurTLJVxszde9W8Zaf9_cM1KHNip-9tcuI1DD9-hw5di1p4NVHmoMTMXde_IV30-NSvdzngf7w3brkWt-vaLAcVl9HmJbRs-403lszWVgnh-G8b9XCAYT5Id-Tvrs8Dfp2Nm0eSlwj1Sn7zgcjYN',
    altText: 'An architectural relief photograph from the Kandariya Mahadeva Temple in Khajuraho displaying dynamic celestial nymphs.',
    shortDescription: 'Sensuous, undulating sculptures of surasundaris and celestial guardians adorning the high plinths of the Chandela dynasty temple sanctuary.',
    overviewNarrative: [
      'The Kandariya Mahadeva is the crowning zenith of North Indian Nagara temple architecture. Its soaring main shikhara (tower) mimics the sacred mountain peaks of Kailash with 84 secondary miniature towers (urushringas) rising in rhythmic crescendo.',
      'Along the temple’s exterior friezes are over 870 intricately sculpted figures: celestial nymphs (surasundaris), apsaras applying eye kohl, dancers pulling thorns from their feet, fierce guardian deities, and divine lovers (mithunas).',
      'The figures are carved with dramatic curvilinear undercutting, catching brilliant shifts of natural sunlight and deep shade throughout the day.'
    ],
    historicalContext: [
      'Built under the patronage of Chandela King Vidyadhara to commemorate his successful defense against Mahmud of Ghazni’s invasions.',
      'Khajuraho’s celebrated erotic carvings (mithuna) represent the Tantric philosophy of non-dual bliss (ananda), celebrating the sacred union of Purusha (cosmic consciousness) and Prakriti (manifest nature).'
    ],
    artisticSignificance: [
      'Extreme mastery of curvilinear anatomy and dynamic diagonal axes, breaking free from the static wall plane into three-dimensional space.',
      'Unified cosmic vision where divine, human, and natural realms converge into a single architectural tapestry.'
    ],
    technique: {
      title: 'Deep Undercutting in Ochre Sandstone',
      narrative: 'High-relief carving with deep drill hollows allowing sculptures to appear almost freestanding from the structural ashlar masonry.',
      points: [
        'Ashlar Dry Masonry: Fitted together with mortise and tenon joints without cement or binder.',
        'Mithuna Composition: Complex intertwining limbs carved from single stone blocks.',
        'Chiaroscuro Effect: Architectural projections and recesses creating deep shadow zones.'
      ]
    },
    tags: ['Khajuraho', 'Nagara Temple', 'Surasundari', 'Chandela', 'Sandstone'],
    relatedArtifactIds: ['chola-nataraja', 'hoysala-frieze']
  },
  {
    id: 'hoysala-frieze',
    name: 'Hoysala Chloritic Schist Frieze',
    subTitle: 'Filigree Stone Carving of Belur & Halebidu',
    epochId: 'epoch-medieval',
    epochNumber: 4,
    epochName: 'Medieval & Temple Art',
    category: 'sculpture',
    categoryBadge: 'Frieze • Chloritic Schist (Soapstone)',
    date: 'c. 12th Century CE',
    period: 'Hoysala Empire (c. 1006–1346 CE)',
    location: 'Belur & Halebidu, Hassan District, Karnataka',
    repository: 'Chennakeshava Temple, Belur / Hoysaleswara Temple',
    accessionNo: 'HOY-BLR-FRIEZE-44',
    material: 'Chloritic Schist (Soft Soapstone)',
    dimensions: 'Relief panels ranging from 60 cm to 1.8 m',
    excavation: 'Hereditary ateliers directed by Ruvari Mallitamma',
    nodeLabel: 'NODE 04.3 • HOYSALA ATELIER',
    timelineCoordinate: 'T-1150.CE.03',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5DlVKpt1bICO8D6jecQh9K_w0b5KN98hFnCxQ0z8uzh7tuw4z3wKe_OwFpp1PhUrtv5_iVtD_-0iuQHE4u2Frk0mAwor3kd5L_Riml1eL7bIUY5IkFhAwawZ1REkD8YCUAkKKRelAnvnED2GLPPahHYHcLu3NbsadqraK4H7ltsBWuk5R0mXdtwUa8VqLuyxyYj4kA1_C3fyf6iE7lbsuQaAXWPEHv80Uf3bAPKFU11y5GoPBPGrV',
    altText: 'A detailed museum shot of a Hoysala chloritic schist frieze from Belur/Halebidu depicting intricate lace-like jewelry.',
    shortDescription: 'Unparalleled filigree-like stone carving rendered in soft chloritic schist, depicting celestial musicians, jewelry garlands, and mythical beasts.',
    overviewNarrative: [
      'The temples of Belur, Halebidu, and Somanathapura in Karnataka represent the ultimate zenith of micro-sculptural virtuosity in the history of world stone carving.',
      'Carved from chloritic schist—a soft soapstone that is easily worked with jeweler’s tools upon extraction and subsequently hardens upon atmospheric exposure—the artisans achieved filigree detailing comparable to ivory and silver lace.',
      'Continuous tiered horizontal friezes run along the star-shaped plinths: thousands of marching war elephants, charging cavalry, mythological makaras, scrolling foliage, and celestial musicians playing flutes and mridangams.'
    ],
    historicalContext: [
      'Commissioned by Hoysala King Vishnuvardhana following his conversion to Sri Vaishnavism by the philosopher-saint Ramanuja.',
      'Uniquely in Indian art history, Hoysala sculptors signed their individual masterpieces; masters like Ruvari Mallitamma and Dasoja proudly chiseled their signatures and home villages at the base of figures.'
    ],
    artisticSignificance: [
      'Jeweler’s Aesthetic in Stone: Beaded pearls, dangling earring tassels, and fingernails are carved in full three-dimensional undercut relief.',
      'Star-shaped stellate floor plans allowed maximum surface perimeter for narrative relief carving.'
    ],
    technique: {
      title: 'Chloritic Schist Micro-Chiseling',
      narrative: 'Fine steel jewelers’ burins and circular lathe turning for monolithic stone pillars.',
      points: [
        'Lathe-Turned Pillars: Fluted circular stone pillars turned on mechanical water-lathes.',
        'Under-Drilled Filigree: Individual stone beads carved hollow so threads can pass through.',
        'Stellate Architecture: Multi-pointed star foundation enhancing sculptural shadow.'
      ]
    },
    tags: ['Hoysala', 'Soapstone', 'Belur', 'Halebidu', 'Filigree'],
    relatedArtifactIds: ['chola-nataraja', 'kandariya-mahadeva']
  },

  // --- EPOCH 5: MUGHAL, RAJPUT & REGIONAL SCHOOLS ---
  {
    id: 'jahangir-hourglass',
    name: 'Emperor Jahangir on an Hourglass Throne',
    subTitle: 'Imperial Mughal Allegory by Bichitr',
    epochId: 'epoch-mughal',
    epochNumber: 5,
    epochName: 'Mughal & Rajput Painting',
    category: 'painting',
    categoryBadge: 'Miniature • Opaque Watercolor & Gold on Wasli',
    date: 'c. 1615–1618 CE',
    period: 'Mughal Empire, Reign of Jahangir (1605–1627)',
    location: 'Agra / Lahore Imperial Kārkhāna',
    repository: 'Freer Gallery of Art, Smithsonian Institution, Washington D.C.',
    accessionNo: 'F1942.15a',
    material: 'Opaque watercolor, gold leaf, and ink on wasli paper',
    dimensions: '48.0 cm × 33.0 cm (album folio)',
    excavation: 'From the Muraqqa-e-Gulshan Imperial Album',
    nodeLabel: 'NODE 05.1 • MUGHAL',
    timelineCoordinate: 'T-1615.CE.01',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0bzXNIWqMv313LUOW_9JrSPzOXf7mTM3OTC1j2a52lYwKaxcRFn9RKZ3v8sB8kE2Tegu62NsrfMJn0LFZThcpPueAMGxFZ7MVbRvhOWRSXqB5kt6O8VPZZGfiVexuZYY4xO7K3Me7S7GUnNBysFscFk7wePofewxpvQAlLFLGSCbQjGrfskazJsP3HrXEMX1etoOcrJI-bQF-YTd4s1P5gJO5LbBqw8EVP_3jfCvk_sVJWTSqK4RU',
    altText: 'An intricate Mughal miniature painting depicting Emperor Jahangir seated on an ornate hourglass throne receiving dignitaries.',
    shortDescription: 'Attributed to master court artist Bichitr; depicts the emperor favoring Sufi shaikhs over European and Ottoman dignitaries, incorporating Renaissance cherubs.',
    overviewNarrative: [
      'Painted by the celebrated imperial court master Bichitr, this luminous miniature is a triumph of political allegory and intellectual wit. Emperor Jahangir sits atop a colossal hourglass throne whose sands are running out, enveloped in a radiant golden halo combining the sun and the crescent moon.',
      'Flanking the throne, Jahangir presents a jewel-encrusted book of wisdom to an elderly Sufi Shaikh (Shaikh Husain of the Chishti shrine), declaring his preference for spiritual contemplation over temporal kingship.',
      'Waiting below in respectful protocol are the Ottoman Sultan, King James I of England (adapted directly from a British Jacobean portrait brought by Sir Thomas Roe), and the artist Bichitr himself, who holds a miniature painting displaying his signature beneath the imperial footstool.'
    ],
    historicalContext: [
      'The Mughal royal ateliers (kārkhānas) assembled Persian miniature masters, indigenous Indian artists, and European Renaissance engravings brought by Jesuit missionaries.',
      'Jahangir was an obsessive patron of art, natural history, and portraiture, demanding single-hair brush precision and psychological fidelity in court records.'
    ],
    artisticSignificance: [
      'A masterpiece of global cross-cultural visual synthesis: Persian decorative carpets, European winged putti and Western one-point perspective, combined with Indian jewel realism and royal hierarchy.',
      'The artist Bichitr subversively signs his name on the carpet footstool: a visual gesture of extreme humility before the throne that simultaneously immortalizes his masterly authorship.'
    ],
    technique: {
      title: 'Wasli Paper, Mineral Pigments & Burnished Gold',
      narrative: 'Layered handmade paper (wasli) coated in zinc-white gesso, burnished with agate stone, and illuminated with lapis lazuli, crushed beetle-wing green, cinnabar, and leaf gold.',
      points: [
        'Single-Hair Squirrel Brushes: Applied under magnifying lenses for eyelash and textile weave definition.',
        'Agate Stone Burnishing: Reverse-burnished to achieve gleaming lacquer-smooth surface depth.',
        'Illuminated Hasli Border: Golden arabesques and floral margins derived from Persian Safavid traditions.'
      ]
    },
    tags: ['Mughal Miniature', 'Jahangir', 'Bichitr', 'Wasli Paper', 'Smithsonian'],
    relatedArtifactIds: ['radha-krishna', 'pahari-kangra']
  },
  {
    id: 'radha-krishna',
    name: 'Radha & Krishna in a Monsoon Grove',
    subTitle: 'Rajasthani Lyricism & Divine Longing',
    epochId: 'epoch-mughal',
    epochNumber: 5,
    epochName: 'Mughal & Rajput Painting',
    category: 'painting',
    categoryBadge: 'Miniature • Pigment & Silver on Paper',
    date: 'c. 1760 CE',
    period: 'Kishangarh / Mewar School, Rajasthan',
    location: 'Kishangarh, Rajasthan',
    repository: 'National Museum, New Delhi',
    accessionNo: 'NM-DELHI-KSH-1760.19',
    material: 'Natural mineral pigments and silver leaf on wasli paper',
    dimensions: '32.5 cm × 24.0 cm',
    excavation: 'Royal collection of Maharaja Sawant Singh',
    nodeLabel: 'NODE 05.2 • RAJPUT',
    timelineCoordinate: 'T-1760.CE.02',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXLMD_EuvaKHUpno8Z9bT_XXOX6_xfGtmXEIE8x5OTLnplYBvBXcaRYUYdTAoLIHe4-oCaq663fvicsVkjECRxt1qTFWWCOx2yXNXOmDKJK1HiB2qw5rr0kOntZYFaIjXjpcyp9P_hISrDGKAJ4hg5khGgbHvGwQekPz5etI8XQZMC6tlXNnRStqQWcg7cuSPLWnozfl2HsFguze81joDegl5RoA8kjEe-xtBUV57wxVNsV5OEbXbI',
    altText: 'A Rajasthani Rajput miniature painting portraying Krishna and Radha sheltering beneath an umbrella in a lush dark monsoon grove.',
    shortDescription: 'Poetic visualization of Rāgamālā and the Gita Govinda, expressing divine longing through dramatic lightning, rolling monsoon clouds, and lush groves.',
    overviewNarrative: [
      'In this emotionally charged Rajasthani Rajput miniature, the divine lovers Radha and Krishna seek shelter under an embroidered umbrella as monsoon clouds gather over the groves of Vrindavan.',
      'Golden forks of lightning tear across an ominous indigo sky, while silver-leaf rain showers cascade through dense banyan trees alive with singing peacocks and nightingales.',
      'Radha is rendered in the distinctive Kishangarh ideal: elongated arched eyebrows, pointed chin, tilted lotus eyes, and diaphanous golden odhani scarf.'
    ],
    historicalContext: [
      'The Rajput courts of Rajasthan (Mewar, Kishangarh, Bundi, Kotah) channeled their deep Bhakti devotion into painting. Love poetry like Jayadeva’s Gita Govinda and the musical modes of Ragamala were visualized as living spiritual realities.',
      'Maharaja Sawant Singh of Kishangarh and his master painter Nihal Chand transformed his beloved court singer Bani Thani into the eternal archetype of Radha.'
    ],
    artisticSignificance: [
      'Radical departure from Mughal academic realism: Rajput art prioritized emotional intensity (bhava), vibrant flat planes of cinnabar red and peacock green, and expressive stylized profiles.',
      'Monsoon weather serves as an emotional amplifier for spiritual yearning (viraha) and divine reunion.'
    ],
    technique: {
      title: 'Vegetable & Mineral Pigment Washes',
      narrative: 'Painted with natural pigments derived from crushed malachite (green), red lead (sindoor), peori (warm cow-urine yellow), and silver foil for raindrops.',
      points: [
        'Silver Leaf Oxidation: Applied silver leaf burnished for lightning and rainfall.',
        'Symbolic Color Palette: Vibrant yellow garments signifying divine presence.',
        'Bhakti Lyricism: Direct translation of Jayadeva’s Sanskrit poetry into pigment.'
      ]
    },
    tags: ['Rajput', 'Radha Krishna', 'Kishangarh', 'Bhakti', 'Monsoon'],
    relatedArtifactIds: ['jahangir-hourglass', 'pahari-kangra']
  },
  {
    id: 'pahari-kangra',
    name: 'Pahari Kangra Lyrical Romance',
    subTitle: 'Sub-Himalayan Courtly Lyricism',
    epochId: 'epoch-mughal',
    epochNumber: 5,
    epochName: 'Mughal & Rajput Painting',
    category: 'painting',
    categoryBadge: 'Painting • Kangra Atelier Watercolor',
    date: 'c. 1780–1790 CE',
    period: 'Pahari Hill Kingdoms, Himachal Pradesh',
    location: 'Kangra Valley / Guler Atelier',
    repository: 'Chandigarh Museum and Art Gallery',
    accessionNo: 'CHAND-PAH-1785.03',
    material: 'Natural gouache and gold on Sialkoti paper',
    dimensions: '28.0 cm × 21.5 cm',
    excavation: 'Patronage of Raja Sansar Chand of Kangra',
    nodeLabel: 'NODE 05.3 • PAHARI',
    timelineCoordinate: 'T-1785.CE.03',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9YX947_3mW6J8OBrn8ODqmy1jyY6vN-LajiCRFBvIEdb-AE-aaOEWwqPVO3tNlP48Mls6qOGm6CLRLuvUMYWQqKzxhVn2RYpPi6wgNoSJAqtJ_8gSD_pbMwAlwJQf4kNYZXnU8m9TT4nnzhl3023uFgKOM0TOtSGYj6EU9oIsDGzuQm5O7lJKIvGF4jDj3a-UDSaqHzjXYEmVF-N_VitiiLOcFtXRdWMF-jXLctjl46KpR7HPoews',
    altText: 'A delicate Pahari Kangra school miniature painting featuring lyrical court maidens strolling through rolling Himalayan foothills.',
    shortDescription: 'Renowned for musical delicacy, rhythmic contours, and tranquil sub-Himalayan landscapes created under the patronage of Raja Sansar Chand.',
    overviewNarrative: [
      'Originating in the secluded valleys of the Western Himalayas, the Kangra school represents the pinnacle of lyrical sensitivity in Indian miniature painting. Court maidens stroll through flowering almond groves with rolling green foothills and river streams in the background.',
      'Figures are outlined with flowing calligraphic contours; soft pastel colors replace the intense fiery hues of the desert plains, reflecting the tranquil coolness of the Himalayan streams.',
      'The delicate facial rendering displays serene innocence, with fine muslin veils rendered transparent against porcelain skin tones.'
    ],
    historicalContext: [
      'Following the sack of Delhi by Nadir Shah in 1739, painters trained in the Mughal imperial studios fled to the peaceful mountain hill states (Pahari kingdoms) of Guler, Kangra, Basohli, and Chamba.',
      'Under the passionate patronage of Raja Sansar Chand of Kangra (reigned 1775–1823), the atelier produced thousands of paintings based on the Bhagavata Purana, Nala-Damayanti, and seasonal Barahmasa poetry.'
    ],
    artisticSignificance: [
      'Combines Mughal refinement of drawing with deep Vaishnavite poetic devotion and direct observation of alpine Himalayan flora.',
      'Celebrated by art historians for its musicality—every line seems to curve like the verse of a melodic thumri song.'
    ],
    technique: {
      title: 'Sialkoti Handmade Paper & Natural Lake Colors',
      narrative: 'Layered handmade bamboo-pulp paper (Sialkoti wasli) colored with delicate lake washes, crushed lapis lazuli, and mountain plant extracts.',
      points: [
        'Lyrical Contours: Continuous unhesitating brush stroke defining drapery folds.',
        'Himalayan Landscape: Distant misty blue mountain ridges and flowering creepers.',
        'Transparent Odhani: Multiple sheer glaze layers simulating thin muslin fabrics.'
      ]
    },
    tags: ['Pahari', 'Kangra', 'Miniature', 'Sansar Chand', 'Himalayas'],
    relatedArtifactIds: ['jahangir-hourglass', 'radha-krishna']
  },

  // --- EPOCH 6: MODERN & CONTEMPORARY ---
  {
    id: 'ravi-varma-shakuntala',
    name: 'Shakuntala Looking Back for Dushyanta',
    subTitle: 'Academic Realism Meets Classical Indian Epics',
    epochId: 'epoch-modern',
    epochNumber: 6,
    epochName: 'Modern & Contemporary Art',
    category: 'painting',
    categoryBadge: 'Painting • Oil on Canvas',
    date: '1898 CE',
    period: 'Colonial Era Academic Synthesis (Late 19th Century)',
    location: 'Travancore / Mumbai',
    repository: 'Sri Chitra Art Gallery, Thiruvananthapuram',
    accessionNo: 'SCAG-TRV-1898.01',
    material: 'Oil on canvas',
    dimensions: '142.0 cm × 96.0 cm',
    excavation: 'Painted for the Maharaja of Travancore',
    nodeLabel: 'NODE 06.1 • 1898 CE',
    timelineCoordinate: 'T-1898.CE.01',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp8vj3MfLAhbYbZlGbbo99ALHzILAyEp65O_fkt9z9Isv3LOshJcWAk0ijBV_N6zu7v3_-omA0YIFm1zIdvsgqoIAvgeRTliVmzLkd0FeGXkYhmqpmubaR7eLBmnPuyLcmeXXnEHYtjD7751bfqaPKle2_twR_asids0wsQAYE27yjAvfqxEihI8k2ekmjtcUN30glkPnAmrWUtl6DVkLSYR5Vn81YlbSWpfZKzDMtaVPxAKz7rCdy',
    altText: 'An oil painting by Raja Ravi Varma depicting Shakuntala pretending to remove a thorn from her foot while turning back to look at King Dushyanta.',
    shortDescription: 'By Raja Ravi Varma. A synthesis of European academic oil techniques with Indian mythological sensibility, immortalizing the pivotal turn from Kalidasa’s drama.',
    overviewNarrative: [
      'In this monumental narrative oil painting, Raja Ravi Varma captures the dramatic turning point from Kalidasa’s celebrated Sanskrit drama Abhijnanasakuntalam.',
      'Shakuntala pretends to stop to remove a thorn from the sole of her foot, twisting her body with enchanting grace to steal a longing backward glance at King Dushyanta, who observes her from behind forest foliage.',
      'Her companions smile knowingly, acknowledging her playful pretext. Ravi Varma renders the heavy folds of her gold-bordered sari, her floral jewelry, and the tropical foliage of the hermitage with rich academic realism.'
    ],
    historicalContext: [
      'Raja Ravi Varma (1848–1906) was of princely Travancore lineage. He mastered European academic realism, chiaroscuro lighting, and oil paints—mediums previously monopolized by colonial British painters.',
      'In 1894, he established the Ravi Varma Fine Arts Lithographic Press near Mumbai, distributing millions of oleographs of Hindu deities and epic heroines across Indian households, fundamentally democratizing visual culture.'
    ],
    artisticSignificance: [
      'First major modern Indian painter to visually give concrete, humanized, and relatable form to classical Sanskrit literary archetypes.',
      'Bridge between traditional indigenous iconographies and the emerging visual language of the modern Indian nation-state.'
    ],
    technique: {
      title: 'European Academic Oil Glazing',
      narrative: 'Layered oil glazes built upon an underdrawing, utilizing dramatic atmospheric lighting and textural differentiation between silk textiles and skin.',
      points: [
        'Anatomical Torsion: Dynamic twisting contrapposto pose capturing emotional hesitation.',
        'Textile Luster: Gold-thread zari borders rendered with impasto highlights.',
        'Atmospheric Perspective: Soft-focus forest backdrop heightening narrative intimacy.'
      ]
    },
    tags: ['Raja Ravi Varma', 'Oil on Canvas', 'Shakuntala', 'Academic Realism'],
    relatedArtifactIds: ['amrita-sher-gil', 'husain-equine']
  },
  {
    id: 'amrita-sher-gil',
    name: 'Three Girls (Group of Three)',
    subTitle: 'Modernist Melancholy & Post-Impressionist Dignity',
    epochId: 'epoch-modern',
    epochNumber: 6,
    epochName: 'Modern & Contemporary Art',
    category: 'painting',
    categoryBadge: 'Painting • Oil on Canvas',
    date: '1935 CE',
    period: 'Early Indian Modernism (1930s)',
    location: 'Shimla / Amritsar',
    repository: 'National Gallery of Modern Art (NGMA), New Delhi',
    accessionNo: 'NGMA-DELHI-1935.04',
    material: 'Oil on canvas',
    dimensions: '91.4 cm × 71.1 cm',
    excavation: 'Awarded the Gold Medal by Bombay Art Society (1937)',
    nodeLabel: 'NODE 06.2 • 1935 CE',
    timelineCoordinate: 'T-1935.CE.02',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPcd_xSis0CPMpUc5FK5FBmUNb4pmpmB6n3ig_Eh1RPkZ4WA_c2q2weDgxglV9dAu0rUutr_vZixrMoANByNLvaUibNXtF2AnUHfaNYokcbPS6mdJbPJXZokgAXn6f74TWOE4TNfINVJ_HzPuYaXB3OIe99dyeIEJOqSRA2ZrpOX1cmrAF6d9mdTzzT-3Wfn9qM28L7idMG0TCJzCOGW7PZPyOWYusX6zI5J8G_9Mmi3tV58NWQK_J',
    altText: 'A painting by Amrita Sher-Gil entitled Three Girls depicting three young Indian women in contemplative postures wearing terracotta and plum garments.',
    shortDescription: 'By Amrita Sher-Gil. Bridging Paris post-impressionism with the quiet tragedy and earthy dignity of rural Indian women.',
    overviewNarrative: [
      'Painted shortly after Amrita Sher-Gil returned to India from Paris in 1934, Three Girls portrays three young women seated in contemplative, quiet solemnity, dressed in radiant Indian fabrics of vermilion, plum, and turmeric yellow.',
      'Their dark, soulful eyes gaze out with quiet dignity, devoid of sentimental idealization or colonial exoticism. Their large, graceful hands rest passively upon their laps, silently waiting for lives whose courses would be determined by societal destiny.',
      'Sher-Gil simplifies the planes of their faces into bold, sculptural forms inspired both by Paul Gauguin and the ancient frescoes of Ajanta.'
    ],
    historicalContext: [
      'Born in Budapest to a Hungarian opera singer mother and an aristocratic Sikh scholar father, Amrita Sher-Gil (1913–1941) was trained at the École des Beaux-Arts in Paris.',
      'She chose to return to India, proclaiming: "I can only paint in India. Europe belongs to Picasso, Matisse, Braque... India belongs only to me." She died tragically at age 28, leaving a body of work designated a National Art Treasure.'
    ],
    artisticSignificance: [
      'Considered the mother of modern Indian art, she fundamentally shifted the gaze away from romanticized mythology toward the poignant reality of women in colonial India.',
      'Synthesized Western post-impressionist color theory with the monumental emotional depth of Rajput miniatures and Ajanta murals.'
    ],
    technique: {
      title: 'Bold Planar Oil Application',
      narrative: 'Executed with flat, saturated color blocks, eliminating unnecessary background details to concentrate dramatic force upon expression and posture.',
      points: [
        'Earthy Saturated Pigments: Terracotta red, mustard yellow, and deep aubergine plum.',
        'Ajanta Influence: Elongated, expressive fingers and heavy contemplative eyelids.',
        'Planar Simplification: Pure painterly masses creating monumental sculptural presence.'
      ]
    },
    tags: ['Amrita Sher-Gil', 'Modernism', 'NGMA', 'Oil on Canvas', 'Pioneering'],
    relatedArtifactIds: ['ravi-varma-shakuntala', 'husain-equine']
  },
  {
    id: 'husain-equine',
    name: 'Dynamic Equine Canvas',
    subTitle: 'Raw Kinetic Modernism by M. F. Husain',
    epochId: 'epoch-modern',
    epochNumber: 6,
    epochName: 'Modern & Contemporary Art',
    category: 'painting',
    categoryBadge: 'Painting • Oil on Canvas',
    date: 'c. 1960s',
    period: 'Progressive Artists’ Group (Post-Independence Modernism)',
    location: 'Mumbai / New Delhi',
    repository: 'Private Collection / NGMA Showcase',
    accessionNo: 'MFH-PAG-EQ-65',
    material: 'Oil and impasto on canvas',
    dimensions: '122.0 cm × 183.0 cm',
    excavation: 'Bombay Progressive Artists’ Group archive',
    nodeLabel: 'NODE 06.3 • BOMBAY PROGRESSIVES',
    timelineCoordinate: 'T-1965.CE.03',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPRJlBLbFNUkEL5hjxIMbSxgJCtgQXYGhFIthD8XitkLGNMG5wa3v-wDap0dTgbpQRfcUdWG-fx_GMqfO-BBizxILJK17BGu6L_quM-enH-Y3a5DfzBGqAKJ3HsKdBMPKnjpaSYKANaAHgnuOrU38EsgcXiT7GDpSxFRHijYDJHqVrFA6i96MbZvPI7ntmHnkPHQkdcbbNWNnFk5wsxWhLAnlk7oZDstD3Oz6J-hSCdKDuFu3Uv15y',
    altText: 'A modern Indian modernist painting by M. F. Husain depicting powerful charging wild horses rendered in vigorous cubist brushwork.',
    shortDescription: 'By M. F. Husain. Highlighting the raw kinetic power of galloping horses, executed with rapid cubist facetting, thick impasto strokes, and fearless calligraphic drawing.',
    overviewNarrative: [
      'In this monumental canvas, M. F. Husain captures the untamed vitality of charging wild horses, which became his most enduring and celebrated visual metaphor.',
      'With fearless calligraphic black outlines and thick palette-knife impasto strokes of ochre, burnt sienna, charcoal, and flashes of stark white, the horses tear across the canvas with primordial power.',
      'Their arching necks, flared nostrils, and flying hooves reflect the restless energy of a newly independent India forging its modern identity in the mid-twentieth century.'
    ],
    historicalContext: [
      'Founded in 1947 in Mumbai by M. F. Husain, F. N. Souza, S. H. Raza, K. H. Ara, and H. A. Gade, the Progressive Artists’ Group sought to break away from both British academic realism and revivalist sentimentalism.',
      'Husain drew inspiration from childhood memories of Muharram processions in Indore, Chinese brush master Xu Beihong’s equines, and European expressionism.'
    ],
    artisticSignificance: [
      'Symbol of Sovereign Modernity: The horse embodies freedom, vitality, and unconstrained forward momentum.',
      'Fuses Indian folk vitality with international cubist dynamism, defining post-colonial Indian modernism on the world stage.'
    ],
    technique: {
      title: 'Impasto Palette Knife & Calligraphic Contours',
      narrative: 'Executed with rapid, physical strokes using palette knives, oil impasto, and broad calligraphic brush lines on rough-weave canvas.',
      points: [
        'Kinetic Line Work: Rapid black outlines executed without preliminary sketch.',
        'Impasto Texturing: Heavy oil paint layers creating tangible physical velocity.',
        'Cubist Facetting: Anatomical forms broken into dynamic interlocking angular planes.'
      ]
    },
    tags: ['M. F. Husain', 'Progressive Artists', 'Equine', 'Modern Indian Art'],
    relatedArtifactIds: ['ravi-varma-shakuntala', 'amrita-sher-gil']
  }
];
