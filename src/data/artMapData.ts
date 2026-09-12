import { ArtMapRegion } from '../types';

export const ART_MAP_REGIONS: ArtMapRegion[] = [
  {
    id: 'maharashtra',
    stateName: 'Maharashtra',
    ancientName: 'Maharatta / Aparanta & Vidarbha',
    zone: 'Western',
    mapCoordinates: { x: 38, y: 55 },
    summary: 'Home to the indigenous Warli ritual wall paintings of the Sahyadri mountains, the monumental rock-cut narrative murals of Ajanta and Ellora, and the post-independence Bombay Progressive Artists’ Group.',
    historicalContext: 'Located at the maritime and continental crossroads between northern and southern India, Maharashtra fostered continuous artistic traditions across two millennia: from 2nd century BCE Buddhist rock-cut chaityas to living tribal agrarian arts and the pioneering secular modernism that emerged in 1947 Mumbai.',
    hasFusionTradition: 'warli',
    traditions: [
      {
        id: 'warli-art',
        name: 'Warli Tribal Painting',
        category: 'Indigenous Ritual Murals',
        description: 'Centuries-old agrarian ritual art using crushed rice paste on mud-and-geru walls. Characterized by rhythmic geometric human figures formed by two inverted triangles and dynamic circular tarpa dance compositions that mirror natural and cosmic cycles.',
        keyMotifs: ['Tarpa Circle Dance', 'Devchauk (Sacred Wedding Square)', 'Mother Goddess Palaghata', 'Hunting & Sowing Scenes', 'Sun & Moon Glyphs'],
        materials: ['Rice flour paste', 'Water & gum resin binder', 'Bamboo stick chewed at tip (Kambadi)', 'Red-ochre geru clay background'],
        associatedEpochId: 'epoch-modern'
      },
      {
        id: 'ajanta-heritage',
        name: 'Ajanta & Ellora Cave Murals',
        category: 'Classical Fresco-Secco Murals',
        description: 'Rock-cut basalt sanctuaries preserving Jataka tale narratives, celestial Bodhisattvas (Padmapani, Vajrapani), and sculptural cave architecture developed under Vakataka and Rashtrakuta royal patronage.',
        keyMotifs: ['Tribhanga stance', 'Lotus-holding Bodhisattvas', 'Diaphanous drapery', 'Kailash monolithic excavation'],
        materials: ['Mud and vegetal plaster', 'Lapis lazuli', 'Terra vert', 'Lampblack', 'Red/yellow ochre'],
        associatedEpochId: 'epoch-gupta'
      },
      {
        id: 'bombay-progressives',
        name: 'Bombay Progressive Artists’ Group',
        category: 'Post-Colonial Modernism',
        description: 'Founded in 1947 Mumbai by M. F. Husain, F. N. Souza, S. H. Raza, K. H. Ara, and H. A. Gade, forging an autonomous modernist visual vocabulary merging Indian traditional vigor with international expressionism.',
        keyMotifs: ['Kinetic galloping horses', 'Bindu metaphysical geometry', 'Bold impasto palette-knife strokes', 'Deccani architectural horizons'],
        materials: ['Oil on canvas', 'Charcoal', 'Impasto gouache'],
        associatedEpochId: 'epoch-modern'
      }
    ],
    movements: [
      {
        name: 'Sahyadri Tribal Continuity',
        period: 'Prehistoric to Living Present',
        description: 'Unbroken matrilineal transmission of sacred mural painting during agricultural harvest (Gauri-Ganpati) and marriage ceremonies.'
      },
      {
        name: 'Vakataka Classical Muralism',
        period: 'c. 450–550 CE',
        description: 'Ajanta Cave 1, 2, 16, and 17 mural cycle defining the pinnacle of Indian classical painterly draftsmanship.'
      },
      {
        name: 'Bombay Progressive Modernism',
        period: '1947–1956',
        description: 'Rejection of sentimental revivalism in favor of muscular post-independence modernism.'
      }
    ],
    artists: [
      {
        name: 'Jivya Soma Mashe',
        era: '1934–2018 (Padma Shri)',
        significance: 'Pioneered the transition of Warli from ephemeral domestic mud walls to paper/canvas, introducing deep philosophic line rhythm to the global contemporary art world.'
      },
      {
        name: 'M. F. Husain',
        era: '1915–2011',
        significance: 'Founding member of the Bombay Progressives whose vigorous horses and epic Indian mythological themes defined twentieth-century Indian modernism.'
      },
      {
        name: 'S. H. Raza',
        era: '1922–2016',
        significance: 'Master of geometric abstraction who synthesized Tantric cosmology, the Bindu (focal center of energy), and vibrant Indian chromatic scales.'
      }
    ],
    representativeArtifactIds: ['husain-equine'],
    curatedArtworks: [
      {
        customTitle: 'The Great Tarpa Dance of the Sahyadri',
        medium: 'Rice flour paste and natural gum on Geru-primed cotton cloth',
        period: 'Contemporary Warli Tradition (c. 1980s)',
        locationText: 'Dahanu / Jawhar, Thane District, Maharashtra',
        customDescription: 'A monumental circular composition featuring hundreds of geometric villagers dancing hand-in-hand around the central Tarpa horn player, illustrating the eternal spiral of agricultural life and cosmic harmony.'
      }
    ]
  },
  {
    id: 'rajasthan',
    stateName: 'Rajasthan',
    ancientName: 'Rajputana / Maru-Desh',
    zone: 'Western',
    mapCoordinates: { x: 30, y: 36 },
    summary: 'The epicenter of Rajasthani court miniature ateliers (Kishangarh, Mewar, Bundi, Marwar) and the vibrant folk scroll painting tradition of Phad created for traveling balladeers in Bhilwara.',
    historicalContext: 'Shielded by the Aravalli hills and the Thar Desert, the Rajput kingdoms cultivated specialized court painting schools celebrated for passionate colorism, devotion to Radha-Krishna bhakti poetry, and continuous 30-foot scroll paintings functioning as portable shrines for wandering bardic priests (Bhopas).',
    hasFusionTradition: 'phad',
    traditions: [
      {
        id: 'phad-scroll',
        name: 'Phad Painting of Bhilwara',
        category: 'Narrative Scroll Art',
        description: 'Unfurled narrative scrolls measuring up to 30 feet in length, painted on hand-woven Khadi cloth treated with rice starch. They depict the heroic epics of folk deities Pabuji Rathore and Devnarayan, accompanied by nighttime performances with the bowed Ravanahatha instrument.',
        keyMotifs: ['Pabuji on black mare Kesar Kalmi', 'Equestrian processions', 'Continuous horizontal registers', 'Almond-shaped fish eyes', 'Bel-buti floral borders'],
        materials: ['Handwoven coarse cotton (Khadadi)', 'Rice paste & tamarind gum sizing', 'Raw mineral pigments (vermillion, orpiment, verdigris)', 'Lampblack contour drawing'],
        associatedEpochId: 'epoch-mughal'
      },
      {
        id: 'rajput-miniature',
        name: 'Rajput Miniature Schools',
        category: 'Courtly Illuminated Miniature',
        description: 'Intensely romantic and devotional paintings created in royal court workshops (Kishangarh, Bundi, Kotah, Mewar) featuring lyrical renditions of Gita Govinda, Barahmasa (twelve seasons), and royal hunting expeditions.',
        keyMotifs: ['Elongated eyes and arched brows', 'Radha as divine consort', 'Moonlit marble terraces', 'Monsoon rain clouds with golden lightning'],
        materials: ['Layered wasli paper', 'Agate stone burnishing', 'Crushed lapis lazuli, malachite, cinnabar', 'Purified gold leaf (vark)'],
        associatedEpochId: 'epoch-mughal'
      },
      {
        id: 'kalibangan-harappan',
        name: 'Kalibangan Indus Metallurgical Heritage',
        category: 'Proto-Historic Bronze & Terracotta',
        description: 'Ancient mature Harappan settlement on the dried Saraswati river basin, showcasing early copper smelting from nearby Khetri mines, bronze bull casting, and ploughed agricultural fields.',
        keyMotifs: ['Muscular hump and horns', 'Terracotta seals', 'Citadel geometries'],
        materials: ['Cast tin-bronze', 'Fired terracotta'],
        associatedEpochId: 'epoch-indus'
      }
    ],
    movements: [
      {
        name: 'Bhopa Bardic Scroll Performance',
        period: '10th Century CE to Present',
        description: 'Mobile shrine performances where husband (Bhopa) chants the epic while wife (Bhopi) illuminates the relevant Phad register with an oil lamp.'
      },
      {
        name: 'Kishangarh Lyrical Bhakti',
        period: 'c. 1735–1757 CE',
        description: 'Flourishing under Maharaja Sawant Singh (Nagari Das) and court painter Nihal Chand, crystallizing an ethereal romantic ideal.'
      }
    ],
    artists: [
      {
        name: 'Nihal Chand',
        era: 'c. 1710–1782',
        significance: 'Master painter of the Kishangarh court who invented the iconic, idealized depiction of Radha with sweeping arched eyebrows and translucent veil.'
      },
      {
        name: 'Shrilal Joshi',
        era: '1935–2018 (Padma Shri)',
        significance: 'Renowned Phad master of the Joshi lineage in Shahpura/Bhilwara who opened the esoteric family art to students, creating modern narrative epics.'
      },
      {
        name: 'Pradip Mukherjee',
        era: 'Contemporary Master',
        significance: 'Expanded Phad scrolls beyond traditional folklore to encompass Sanskrit classics including Kalidasa’s Meghaduta and the Bhagavad Gita.'
      }
    ],
    representativeArtifactIds: ['radha-krishna', 'bronze-bull'],
    curatedArtworks: [
      {
        customTitle: 'The Epic Scroll of Pabuji Rathore (Pabuji Ki Phad)',
        medium: 'Natural mineral and vegetable pigments on sized Khadi cloth',
        period: 'Joshi Family Atelier, Bhilwara (19th–20th Century)',
        locationText: 'Shahpura & Bhilwara, Rajasthan',
        customDescription: 'A complete 30-foot continuous scroll narrative containing over 200 figures depicting Pabuji protecting cattle, courtly assemblies, and heroic battles against the Khichi clan.'
      }
    ]
  },
  {
    id: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    ancientName: 'Tamilakam / Chola Mandala',
    zone: 'Southern',
    mapCoordinates: { x: 44, y: 82 },
    summary: 'Heartland of Chola lost-wax bronze casting, soaring Dravidian temple gopurams along the Kaveri delta, and opulent Tanjore gold-foil paintings.',
    historicalContext: 'Under the imperial Cholas (9th–13th centuries CE), bronze casters in Swamimalai and Thanjavur achieved the world’s most refined lost-wax metallurgical sculptures, guided by the sacred proportions of the Shilpa Shastras, creating processional deities (Utsavamurti) of supreme spiritual grace.',
    traditions: [
      {
        id: 'chola-bronze',
        name: 'Chola Lost-Wax Bronze Sculpture',
        category: 'Sacred Metallurgy (Panchaloha)',
        description: 'Five-metal lost-wax (cire perdue) casting creating iconic statues of Shiva Nataraja, Parvati, and Shaivite saints characterized by dynamic rhythm and strict proportional canons (Talamana).',
        keyMotifs: ['Ananda Tandava (Dance of Bliss)', 'Flaming arch (Prabhamandala)', 'Abhaya mudra', 'Apasmara dwarf of ignorance', 'Flowing Ganga tresses'],
        materials: ['Panchaloha alloy (copper, zinc, lead, gold, silver)', 'Beeswax-dammar model', 'Clay from Kaveri riverbed'],
        associatedEpochId: 'epoch-medieval'
      },
      {
        id: 'tanjore-painting',
        name: 'Thanjavur (Tanjore) Painting',
        category: 'Gilded Devotional Relief Painting',
        description: 'Rich, dense classical South Indian painting characterized by raised gesso work (sukka), embedded semi-precious stones, and pure 22-carat gold foil relief over hardwood panels depicting smiling, plump divine child figures.',
        keyMotifs: ['Balakrishna with butter pot', 'Embossed arched wooden pavilions', 'Ornate pillars', 'Semi-precious stone inlays'],
        materials: ['Jackwood / teak panel', 'Unbleached cloth sized with tamarind paste', 'Chalk powder & Arabic gum gesso', '22k Gold leaf'],
        associatedEpochId: 'epoch-mughal'
      },
      {
        id: 'dravidian-architecture',
        name: 'Dravidian Temple Architecture',
        category: 'Monumental Granite Architecture',
        description: 'From the monolithic rock-cut rathas of Mahabalipuram to the towering Brihadisvara Temple vimana in Thanjavur and the sculpted halls of Madurai Meenakshi.',
        keyMotifs: ['Multi-tiered Vimana', 'Soaring Gopuram gateway towers', 'Yali mythical beast pillars', 'Mandapa pillared pavilions'],
        materials: ['Hard granite stone', 'Chola mortar and interlocking dry masonry'],
        associatedEpochId: 'epoch-medieval'
      }
    ],
    movements: [
      {
        name: 'Imperial Chola Golden Age',
        period: 'c. 850–1279 CE',
        description: 'Reigns of Rajaraja Chola I and Rajendra Chola I, when the Kaveri delta produced peerless architectural and metallurgical masterworks.'
      },
      {
        name: 'Maratha-Nayaka Tanjore Revival',
        period: 'c. 1600–1850 CE',
        description: 'Flourishing of gold-foil panel painting under Nayaka governors and Maratha ruler Raja Serfoji II.'
      }
    ],
    artists: [
      {
        name: 'Swamimalai Sthapathis',
        era: 'Continuous Lineage (10th Century–Present)',
        significance: 'Hereditary bronze casters following ancient Sanskrit treatises (Manasara, Shilpa Ratna) maintaining uninterrupted lost-wax casting in the Kaveri river basin.'
      },
      {
        name: 'Rajaraja Chola I (Patron-Architect)',
        era: 'r. 985–1014 CE',
        significance: 'Visionary emperor who commissioned the Great Brihadisvara Temple at Thanjavur, dedicating exquisite bronze Natarajas to its sanctum.'
      }
    ],
    representativeArtifactIds: ['chola-nataraja'],
    curatedArtworks: [
      {
        customTitle: 'Tanjore Gilded Icon of Navaneetha Krishna',
        medium: '22k Gold leaf, Jaipur gems, and natural pigments on jackfruit wood panel',
        period: 'Thanjavur Court Workshop, Late 18th Century CE',
        locationText: 'Thanjavur, Tamil Nadu',
        customDescription: 'Exquisitely raised relief painting depicting the divine child Krishna seated under a carved gilded pavilion with real pearls and gemstone ornamentation.'
      }
    ]
  },
  {
    id: 'madhya-pradesh',
    stateName: 'Madhya Pradesh',
    ancientName: 'Avanti / Malwa & Jejakabhukti',
    zone: 'Central',
    mapCoordinates: { x: 44, y: 44 },
    summary: 'Heartland of Indian architectural evolution—from Ashokan Buddhist toranas at Sanchi to the soaring Nagara spires of Khajuraho and the vibrant animist dot-and-line art of the Gond tribe.',
    historicalContext: 'Situated across the Vindhya and Satpura mountain ranges, Madhya Pradesh preserves prehistoric rock art at Bhimbetka (c. 10,000 BCE), the earliest stone-carved Buddhist stupa gateways at Sanchi, and living forest folklore translated by Pardhan Gond storytellers into mesmerizing contemporary canvases.',
    traditions: [
      {
        id: 'gond-painting',
        name: 'Gond Tribal Painting',
        category: 'Indigenous Dot & Line Art',
        description: 'Practiced by the Pardhan Gond community who believe looking at sacred imagery brings good fortune. Each artist develops a personal signature pattern of fine dots, dashes, and scales depicting animals, ancestral memories, and the sacred Mahua and Saja trees.',
        keyMotifs: ['Tree of Life (Saja/Mahua)', 'Interlocking deer, birds, and fish', 'Bada Dev spirit presence', 'Microscopic line and dot fills'],
        materials: ['Handmade paper & canvas', 'Acrylic and ink', 'Traditional natural clay (Chuna, Geru, Ramraj)'],
        associatedEpochId: 'epoch-modern'
      },
      {
        id: 'khajuraho-nagara',
        name: 'Chandela Nagara Temple Carving',
        category: 'High-Relief Stone Architecture',
        description: 'Exquisite sandstone temples at Khajuraho featuring towering mountain-like shikharas and undulating bands of sculpted deities, celestial maidens (Surasundaris), musicians, and mithuna couples celebrating cosmic fertility.',
        keyMotifs: ['Shikhara cluster', 'Surasundari applying eye kohl', 'Mithuna erotic-spiritual union', 'Intricate lotus ceilings'],
        materials: ['Fine-grained buff and yellow sandstone', 'Interlocking dry masonry'],
        associatedEpochId: 'epoch-medieval'
      },
      {
        id: 'sanchi-buddhist',
        name: 'Sanchi Stupa & Torana Sculpture',
        category: 'Early Buddhist Monumental Relief',
        description: 'The monumental hemispherical Great Stupa commissioned by Emperor Ashoka with four monumental stone gateways (toranas) carved with Jataka tales, aniconic symbols of the Buddha, and lush Yakshis.',
        keyMotifs: ['Yakshi bracket figure', 'Dharmachakra wheel', 'Bodhi tree', 'Royal footprint symbols'],
        materials: ['Local grey-white sandstone from Udayagiri'],
        associatedEpochId: 'epoch-mauryan'
      }
    ],
    movements: [
      {
        name: 'Pardhan Gond Renaissance (Jangarh Kalam)',
        period: '1980s to Present',
        description: 'Movement initiated by master Jangarh Singh Shyam at Bharat Bhavan Bhopal, transforming ritual mud-wall Digna art into globally acclaimed contemporary painting.'
      },
      {
        name: 'Chandela Architectural Zenith',
        period: 'c. 950–1050 CE',
        description: 'Construction of the monumental Western Group of temples at Khajuraho representing the apex of central Indian Nagara style.'
      }
    ],
    artists: [
      {
        name: 'Jangarh Singh Shyam',
        era: '1962–2001',
        significance: 'Legendary Pardhan Gond painter who created the revolutionary "Jangarh Kalam" style, exhibiting at the Centre Pompidou Paris and initiating the contemporary indigenous art revolution.'
      },
      {
        name: 'Bhajju Shyam',
        era: 'Born 1971 (Padma Shri)',
        significance: 'Renowned Gond artist and author of "The London Jungle Book", famed for weaving contemporary global experiences into traditional Gond animist visual idioms.'
      },
      {
        name: 'Chandela Master Masons',
        era: '10th–11th Century CE',
        significance: 'Guild architects of Khajuraho who engineered the complex organic rhythm of the 31-meter Kandariya Mahadeva sikhara.'
      }
    ],
    representativeArtifactIds: ['sanchi-stupa', 'kandariya-mahadeva'],
    curatedArtworks: [
      {
        customTitle: 'Bada Dev and the Sacred Mahua Tree',
        medium: 'Ink and acrylic on handmade paper',
        period: 'Pardhan Gond Atelier, Dindori (Contemporary)',
        locationText: 'Patangarh / Bhopal, Madhya Pradesh',
        customDescription: 'A poetic Gond painting showcasing a massive sacred tree whose branches blossom into birds, deer, and spirits, decorated with microscopic dot-and-dash rhythmic textures.'
      }
    ]
  },
  {
    id: 'bihar',
    stateName: 'Bihar',
    ancientName: 'Magadha & Mithila',
    zone: 'Eastern',
    mapCoordinates: { x: 62, y: 38 },
    summary: 'Cradle of ancient imperial stone carving under the Mauryans, Buddhist monastic intellectual art at Nalanda, and the iconic domestic ritual painting of Madhubani / Mithila.',
    historicalContext: 'From the imperial capital of Pataliputra, Emperor Ashoka erected the mirror-polished sandstone pillars that gave India its national emblem. In the northern borderland of Mithila, women have created vibrant geometric and figurative wall paintings for weddings and festivals for generations.',
    traditions: [
      {
        id: 'madhubani-art',
        name: 'Madhubani / Mithila Painting',
        category: 'Domestic Ritual Murals & Scrolls',
        description: 'Matrilineal ritual art from Mithila practiced across distinctive sub-styles (Bharni, Kachni, Tantrik, Godna, Gobar). Known for double outlines filled with intricate cross-hatching, fish and lotus symbols of fertility, and episodes from the Ramayana.',
        keyMotifs: ['Kohbar sacred nuptial diagram', 'Bamboo grove (Bans)', 'Lotus (Kamal) & fish (Matsya)', 'Surya & Chandra', 'Radha-Krishna'],
        materials: ['Handmade paper treated with cow dung', 'Bamboo twigs & nib pens', 'Soot (lampblack), turmeric (yellow), indigo, kusum flower dyes'],
        associatedEpochId: 'epoch-modern'
      },
      {
        id: 'mauryan-lapidary',
        name: 'Mauryan Polished Sandstone Sculpture',
        category: 'Imperial Monolithic Sculpture',
        description: 'Third-century BCE Ashokan monolithic pillars topped with animal capitals, displaying mirror-like glassy polish (Mauryan luster) that stunned later generations and remains unexcelled.',
        keyMotifs: ['Four back-to-back lions', 'Ashoka Chakra (wheel of law)', 'Galloping horse, bull, elephant, lion', 'Inverted lotus bell'],
        materials: ['Chunar sandstone with metallic lustrous polish'],
        associatedEpochId: 'epoch-mauryan'
      }
    ],
    movements: [
      {
        name: 'Mithila Famine Relief Transition',
        period: '1966–1968',
        description: 'During a severe drought in Bihar, the All India Handicrafts Board encouraged Mithila women to transfer their ephemeral wall paintings onto paper, sparking a global art movement.'
      },
      {
        name: 'Imperial Mauryan Statecraft',
        period: 'c. 273–232 BCE',
        description: 'Ashoka’s conversion to Buddhism and dissemination of Dharma edicts carved on monolithic pillars across the subcontinent.'
      }
    ],
    artists: [
      {
        name: 'Jagdamba Devi',
        era: '1901–1984 (Padma Shri)',
        significance: 'First Madhubani painter to receive a national award in 1975, introducing the rich chromatic Bharni style to international collections.'
      },
      {
        name: 'Ganga Devi',
        era: '1928–1991 (Padma Shri)',
        significance: 'Pioneered the Kachni (monochromatic fine line) style and created the celebrated autobiographical Cancer Series documenting her chemotherapy treatments.'
      },
      {
        name: 'Mahasundari Devi',
        era: '1922–2013',
        significance: 'Formed women’s cooperatives in Mithila, empowering female artists through paper and tussar silk Madhubani creations.'
      }
    ],
    representativeArtifactIds: ['lion-capital'],
    curatedArtworks: [
      {
        customTitle: 'Traditional Kohbar Ghar Nuptial Painting',
        medium: 'Natural vegetal dyes and lampblack on handmade paper',
        period: 'Mithila Cultural Archive (Jitwarpur / Ranti, Bihar)',
        locationText: 'Madhubani District, Bihar',
        customDescription: 'A complex sacred nuptial diagram featuring the central lotus stalk penetrating a bamboo grove, surrounded by sun, moon, turtles, and fish representing cosmic union and fertility.'
      }
    ]
  },
  {
    id: 'odisha',
    stateName: 'Odisha',
    ancientName: 'Kalinga / Utkala',
    zone: 'Eastern',
    mapCoordinates: { x: 58, y: 56 },
    summary: 'Renowned for the sacred Pattachitra cloth scroll paintings of Raghurajpur, palm-leaf etched illustrations (Tala Pattachitra), and the colossal stone carvings of the Konark Sun Temple.',
    historicalContext: 'Centuries of devotion to Lord Jagannath of Puri created hereditary artisan guilds (Chitrakaras) who paint sacred icons on cloth treated with tamarind-paste and chalk, providing temporary worship icons (Anasara Patti) during the deity’s annual seclusion.',
    traditions: [
      {
        id: 'pattachitra-cloth',
        name: 'Pattachitra Scroll Painting',
        category: 'Sacred Cloth-Scroll Art',
        description: 'Elaborate painting tradition on cotton cloth stiffened with tamarind seed gum and chalk, delineated with crisp black lampblack outlines and filled with pure natural mineral colors. Themes center on Jagannath, Dasavatara, and Jayadeva’s Gita Govinda.',
        keyMotifs: ['Lord Jagannath triad (Balabhadra, Subhadra)', 'Dasavatara (ten avatars of Vishnu)', 'Kaliya Damana', 'Intricate floral scrolling borders', 'Conch & lotus motifs'],
        materials: ['Cotton cloth stiffened with tamarind-chalk paste (Patta)', 'Sea shell powder (white)', 'Hingula (cinnabar red)', 'Haritala (yellow)', 'Lampblack'],
        associatedEpochId: 'epoch-medieval'
      },
      {
        id: 'tala-pattachitra',
        name: 'Palm-Leaf Etching (Tala Pattachitra)',
        category: 'Incised Palm-Leaf Manuscript',
        description: 'Dried and treated palm leaves bound with cord, incised with an iron stylus (Lekhani) and rubbed with soot to reveal astonishingly delicate microscopic line illustrations.',
        keyMotifs: ['Gita Govinda verses', 'Ragini miniature depictions', 'Chauka geometric mandalas'],
        materials: ['Dried Palmyra palm leaves', 'Iron stylus', 'Soot and bean extract fixative'],
        associatedEpochId: 'epoch-medieval'
      },
      {
        id: 'kalinga-architecture',
        name: 'Kalinga Deula Temple Architecture',
        category: 'Monumental Stone Architecture',
        description: 'Distinctive Deula architectural style (Rekha, Pidha, and Khakhara) exemplified by the Lingaraja Temple and the colossal Sun Temple of Konark designed as a stone chariot with 24 carved wheels.',
        keyMotifs: ['Alasa Kanya female figures', 'Celestial musicians on roof tiers', 'Colossal stone chariot wheels', 'Gajasimha (lion over elephant)'],
        materials: ['Khondalite stone and chlorite'],
        associatedEpochId: 'epoch-medieval'
      }
    ],
    movements: [
      {
        name: 'Puri Temple Sevayat Guilds',
        period: '12th Century CE to Present',
        description: 'Ritual painters attached to the Jagannath Temple who maintain traditional iconographic canons for seasonal festivals and the annual Ratha Yatra.'
      },
      {
        name: 'Raghurajpur Heritage Craft Village',
        period: '1950s Revival',
        description: 'Transformation of the entire village into a living artisan community dedicated to Pattachitra, palm-leaf engraving, and cow-dung toys.'
      }
    ],
    artists: [
      {
        name: 'Jagannath Mahapatra',
        era: '1919–1992',
        significance: 'Master Chitrakar of Raghurajpur who led the mid-twentieth century revival of Pattachitra after American folklore researcher Halina Zealey documented the craft.'
      },
      {
        name: 'Raghunath Mohapatra',
        era: '1943–2021 (Padma Vibhushan)',
        significance: 'Legendary master sculptor and architect who preserved ancient Kalinga stone carving techniques and contributed to temple restorations across India.'
      }
    ],
    representativeArtifactIds: [],
    curatedArtworks: [
      {
        customTitle: 'The Ten Avatars of Vishnu (Dasavatara Pattachitra)',
        medium: 'Crushed conch shell, hingula, and haritala pigments on sized cotton cloth',
        period: 'Raghurajpur Artisan Guild, Puri (Traditional Workshop)',
        locationText: 'Raghurajpur, Puri District, Odisha',
        customDescription: 'A classic masterwork featuring Lord Jagannath in the central sanctum medallion, encircled by ten exquisitely bordered medallions illustrating each avatar from Matsya to Kalki.'
      }
    ]
  },
  {
    id: 'andhra-telangana',
    stateName: 'Andhra Pradesh & Telangana',
    ancientName: 'Andhradesha / Vengi & Golconda',
    zone: 'Southern',
    mapCoordinates: { x: 46, y: 64 },
    summary: 'Famed for Srikalahasti hand-drawn and Machilipatnam block-printed Kalamkari textiles, Vijayanagara temple murals at Lepakshi, and Deccani Sultanate miniature ateliers.',
    historicalContext: 'Flourishing along the Krishna and Godavari river valleys, Kalamkari (pen-work) developed as temple narrative hangings created with bamboo pens and natural vegetable mordants, while Golconda and Hyderabad emerged as wealthy cosmopolitan centers of Deccani art.',
    traditions: [
      {
        id: 'kalamkari-textile',
        name: 'Kalamkari (Srikalahasti & Machilipatnam)',
        category: 'Hand-Drawn & Block Mordant Textile',
        description: 'The ancient art of drawing on bleached cotton using a pointed bamboo reed pen (Kalam) dipped in fermented jaggery and alum mordants, dyed with natural madder root, indigo, and myrobalan to depict epics.',
        keyMotifs: ['Tree of Life with birds and animals', 'Ramayana epic narrative panels', 'Kalasha sacred urn', 'Peacock & Paisley arabesques'],
        materials: ['Hand-spun unbleached cotton', 'Buffalo milk & myrobalan wash', 'Fermented iron-cane jaggery rust', 'Alum mordant', 'Natural indigo and madder root'],
        associatedEpochId: 'epoch-mughal'
      },
      {
        id: 'lepakshi-murals',
        name: 'Lepakshi Vijayanagara Ceiling Murals',
        category: 'Temple Ceiling Frescoes',
        description: '16th-century Veerabhadra Temple ceiling paintings showcasing the pinnacle of Vijayanagara dynamic court style with elongated figures, profile eyes, and elaborate patterned textiles.',
        keyMotifs: ['Veerabhadra colossal form', 'Kiratarjuniya epic battle', 'Courtly dancers in patterned saris', 'Hanging pillar optical architecture'],
        materials: ['Lime plaster surface', 'Earth ochres and vegetable carbon black'],
        associatedEpochId: 'epoch-medieval'
      },
      {
        id: 'bidriware-craft',
        name: 'Bidriware Inlaid Metallurgy',
        category: 'Metal Inlay Craft',
        description: 'Unique zinc-copper alloy cast objects blackened with soil containing ammonium chloride and inlaid with delicate pure silver floral and geometric wires.',
        keyMotifs: ['Aftaba water ewers', 'Phool-patti flower vines', 'Star geometries'],
        materials: ['Zinc-copper alloy blackened with Bidar fort soil', 'Pure silver wire inlay'],
        associatedEpochId: 'epoch-mughal'
      }
    ],
    movements: [
      {
        name: 'Vijayanagara Lyrical Fresco Movement',
        period: 'c. 1530–1545 CE',
        description: 'Under the merchant brothers Virupanna and Veeranna, execution of India’s largest single ceiling fresco at Lepakshi.'
      },
      {
        name: 'Deccani Sultanate Synthesis',
        period: 'c. 1565–1687 CE',
        description: 'Golconda court painters blending Persian elegance, Ottoman aesthetics, and Deccani lush colorism.'
      }
    ],
    artists: [
      {
        name: 'Jonnalagadda Gurappa Chetty',
        era: 'Born 1937 (Padma Shri)',
        significance: 'Revitalized the Srikalahasti hand-painted Kalamkari tradition, training hundreds of artisans in ancient botanical mordant-dye chemistry and mythological drawing.'
      },
      {
        name: 'J. Niranjan',
        era: 'Contemporary Master',
        significance: 'Son of Gurappa Chetty who modernised Kalamkari compositions, exhibiting the Tree of Life globally while preserving strict 17-step natural dye protocols.'
      }
    ],
    representativeArtifactIds: [],
    curatedArtworks: [
      {
        customTitle: 'The Celestial Tree of Life (Kalamkari Hanging)',
        medium: 'Hand-drawn natural vegetable dyes and alum mordants on milk-treated cotton',
        period: 'Srikalahasti Master Atelier, Chittoor District (Traditional)',
        locationText: 'Srikalahasti, Andhra Pradesh',
        customDescription: 'A masterwork temple hanging depicting a winding banyan tree whose limbs harbor deer, peacocks, tigers, and celestial gandharvas, framed by an intricate lotus border.'
      }
    ]
  },
  {
    id: 'west-bengal',
    stateName: 'West Bengal',
    ancientName: 'Gauḍa & Vaṅga',
    zone: 'Eastern',
    mapCoordinates: { x: 70, y: 46 },
    summary: 'Birthplace of the Kalighat bazaar painting tradition, the 20th-century Bengal Renaissance that spearheaded modern Indian art, and the ornate terracotta temples of Bishnupur.',
    historicalContext: 'As nineteenth-century Calcutta transformed into the imperial capital, village scroll painters migrated to the Kalighat Kali temple, evolving swift, satirical brushwork. In the early 1900s, Abanindranath Tagore and the Bengal School launched the Swadeshi revival of Asian wash aesthetics.',
    traditions: [
      {
        id: 'kalighat-painting',
        name: 'Kalighat Pat Painting',
        category: 'Urban Bazaar Watercolor',
        description: 'Swift, calligraphic watercolor paintings developed by rural patuas outside the Kali temple. Famous for volumetric chiaroscuro shading, dramatic sweeping contours, and satirical critiques of Westernized Bengali babus.',
        keyMotifs: ['Goddess Kali standing on Shiva', 'Babu combing hair with courtesan', 'Cat with prawn in mouth', 'Falconer & peacock'],
        materials: ['Cheap mill-made paper', 'Broad squirrel-hair brushes', 'Colloidal gum with English watercolors and lampblack'],
        associatedEpochId: 'epoch-modern'
      },
      {
        id: 'bengal-school',
        name: 'Bengal School of Art (Swadeshi Modernism)',
        category: 'Nationalist Watercolor Wash',
        description: 'Founded by Abanindranath Tagore and E. B. Havell to reclaim authentic Indian aesthetic philosophy from colonial academic realism, synthesizing Ajanta line work, Mughal miniatures, and Japanese wash techniques.',
        keyMotifs: ['Bharat Mata as ascetic mother', 'Diaphanous atmospheric wash', 'Subdued dreamlike palette', 'Mythological introspection'],
        materials: ['Japanese-inspired watercolor wash technique on handmade paper'],
        associatedEpochId: 'epoch-modern'
      },
      {
        id: 'bishnupur-terracotta',
        name: 'Bishnupur Terracotta Temples',
        category: 'Relief Architectural Terracotta',
        description: '17th-century Malla king temples (Rasmancha, Jor Bangla) covered with thousands of exquisitely carved terracotta tiles illustrating the Mahabharata, battle boats, and Rasa Lila dancers.',
        keyMotifs: ['Curved Do-Chala bangla roof', 'Rasa dance mandalas', 'Battle boats and equestrian troops'],
        materials: ['Local Gangetic alluvial clay baked in wood kilns'],
        associatedEpochId: 'epoch-medieval'
      }
    ],
    movements: [
      {
        name: 'Swadeshi Nationalist Art Revival',
        period: 'c. 1905–1925',
        description: 'Intellectual and aesthetic rejection of British academic painting in favor of pan-Asian spiritual idealism centered at Santiniketan and Calcutta.'
      },
      {
        name: 'Santiniketan Bauhaus & Folk Modernism',
        period: 'c. 1920–1940s',
        description: 'Nandalal Bose, Benode Behari Mukherjee, and Ramkinkar Baij bringing art into living contact with nature and indigenous Santhal rural communities.'
      }
    ],
    artists: [
      {
        name: 'Abanindranath Tagore',
        era: '1871–1951',
        significance: 'Nephew of Rabindranath Tagore and founder of the Bengal School; created the iconic "Bharat Mata" and revived miniature brushwork across India.'
      },
      {
        name: 'Jamini Roy',
        era: '1887–1972 (Padma Bhushan)',
        significance: 'Rejected European oil painting to embrace rural Kalighat and Patua folk forms, painting with flat, bold local earth colors and almond-eyed stylized figures.'
      },
      {
        name: 'Nandalal Bose',
        era: '1882–1966',
        significance: 'Pioneered contextual modernism at Kala Bhavana Santiniketan, illustrated the Constitution of India, and designed the Haripura Congress posters.'
      }
    ],
    representativeArtifactIds: ['amrita-sher-gil'],
    curatedArtworks: [
      {
        customTitle: 'Babu with Pet Bird and Hookah (Kalighat Satire)',
        medium: 'Watercolour and colloidal ink on paper',
        period: 'Calcutta Bazaar Atelier (c. 1880 CE)',
        locationText: 'Kalighat, Kolkata, West Bengal',
        customDescription: 'A classic Kalighat watercolor capturing the decadent urban Calcutta babu with curled hair and dhoti, rendered with bold single-stroke shading and lyrical brush contours.'
      }
    ]
  },
  {
    id: 'karnataka',
    stateName: 'Karnataka',
    ancientName: 'Kuntala & Karnata Empire',
    zone: 'Southern',
    mapCoordinates: { x: 38, y: 70 },
    summary: 'Home of the Hoysala chloritic schist filigree friezes at Belur and Halebidu, Badami Chalukyan rock-cut caves, and delicate Mysore gold-leaf paintings.',
    historicalContext: 'The Deccan kingdoms of Karnataka produced astonishingly detailed architectural carvings because master sculptors exploited the soft working properties of chloritic schist (soapstone) that hardened upon atmospheric exposure, enabling micro-lacework in stone.',
    traditions: [
      {
        id: 'hoysala-sculpture',
        name: 'Hoysala Star-Shaped Temple Carvings',
        category: 'Micro-Filigree Soapstone Relief',
        description: 'Exquisitely undercut stone friezes adorning 12th-century star-shaped (stellate) temples at Belur, Halebidu, and Somnathpura, featuring continuous horizontal registers of elephants, lions, swans, and celestial dancers.',
        keyMotifs: ['Madanika bracket figures with mirror', 'Charging war elephants', 'Hoysala emblem (Sala slaying the tiger)', 'Ornate jeweled armlets'],
        materials: ['Greenish chloritic schist (soapstone)'],
        associatedEpochId: 'epoch-medieval'
      },
      {
        id: 'mysore-painting',
        name: 'Mysore Traditional Painting',
        category: 'Gesso & Gold Leaf Court Painting',
        description: 'Sister tradition to Tanjore art developed under the Wodeyar kings of Mysore, known for muted colors, delicate gesso work with fine gold foil, and expressive devotional countenances.',
        keyMotifs: ['Rajarajeshwari divine mother', 'Chamaradhari attendants', 'Muted tempera palette'],
        materials: ['Hardwood board', 'Lead white and zinc gesso', 'Pure gold leaf'],
        associatedEpochId: 'epoch-mughal'
      }
    ],
    movements: [
      {
        name: 'Hoysala Sculptural Guild Zenith',
        period: 'c. 1117–1268 CE',
        description: 'Era when master sculptors proudly signed their names (e.g. Ruvari Mallitamma, Dasoja of Balligavi) on individual stone panels, rare in ancient Indian art.'
      }
    ],
    artists: [
      {
        name: 'Ruvari Mallitamma',
        era: '13th Century CE',
        significance: 'Most prolific recorded Hoysala master sculptor, whose signed masterpieces adorn the Keshava Temple at Somanathapura and Amruteshwara Temple.'
      },
      {
        name: 'Dasoja of Balligavi',
        era: '12th Century CE',
        significance: 'Celebrated court sculptor who carved the famous "Darpana Sundari" (Lady with Mirror) Madanika bracket figure at Belur.'
      }
    ],
    representativeArtifactIds: ['hoysala-frieze'],
    curatedArtworks: [
      {
        customTitle: 'Darpana Sundari (Lady with the Mirror Bracket)',
        medium: 'Polished chloritic schist (soapstone)',
        period: 'Hoysala Court Workshop (c. 1117 CE)',
        locationText: 'Chennakeshava Temple, Belur, Karnataka',
        customDescription: 'A signature bracket sculpture illustrating an elegant celestial maiden admiring her reflection, adorned with micro-perforated stone pearls, rings, and an elaborate coiffure.'
      }
    ]
  },
  {
    id: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    ancientName: 'Madhyadesha / Kosala & Kashi',
    zone: 'Northern',
    mapCoordinates: { x: 50, y: 32 },
    summary: 'Heartland of classical Buddhist and Hindu sculptural canons at Sarnath and Mathura, and the royal ateliers of the Mughal Empire in Agra and Fatehpur Sikri.',
    historicalContext: 'The Gangetic plains of Uttar Pradesh witnessed the foundational aesthetic treatises of Indian art: Mathura established the early human depiction of the Buddha and Hindu pantheon in red sandstone, while 5th-century Sarnath perfected the serene spiritual idealism of the Gupta Golden Age.',
    traditions: [
      {
        id: 'sarnath-gupta',
        name: 'Sarnath Classical Sculptural School',
        category: 'Gupta Classical Sculpture',
        description: 'Renowned for transcendent spiritual serenity, smooth unornamented body surfaces, clinging diaphanous drapery, downcast introspective eyes, and elaborately carved floral halos.',
        keyMotifs: ['Dharmachakrapravartana Mudra', 'Diaphanous wet drapery', 'Elaborate lotus-halo', 'Three lines on neck (Trivali)'],
        materials: ['Fine-grained buff Chunar sandstone'],
        associatedEpochId: 'epoch-gupta'
      },
      {
        id: 'mughal-atelier',
        name: 'Imperial Mughal Painting',
        category: 'Courtly Illuminated Manuscript & Muraqqa',
        description: 'Synthesized Persian miniature aesthetics, Indian dynamic naturalism, and European Renaissance perspective under Emperors Akbar, Jahangir, and Shah Jahan.',
        keyMotifs: ['Single-hair brush portraits', 'Allegorical halos with angels', 'Botanical floral borders', 'Courtly durbars and animal studies'],
        materials: ['Burnished wasli paper', 'Lapis lazuli', 'Crushed pearls and rubies', 'Real gold illuminations'],
        associatedEpochId: 'epoch-mughal'
      },
      {
        id: 'mathura-school',
        name: 'Mathura Sculptural School',
        category: 'Kushan & Gupta Sculpture',
        description: 'Prolific ancient workshop at the junction of northern trade routes, creating energetic, muscular representations of the Buddha, Jain Tirthankaras, and Vishnu in spotted red sandstone.',
        keyMotifs: ['Spotted red sandstone', 'Open energetic eyes', 'Kushan royal garb', 'Abhaya mudra'],
        materials: ['Sikri spotted red sandstone'],
        associatedEpochId: 'epoch-gupta'
      }
    ],
    movements: [
      {
        name: 'Gupta Sarnath Synthesis',
        period: 'c. 375–550 CE',
        description: 'Apex of Indian classical spiritual sculpture achieving ideal harmony between physical form and inner meditation.'
      },
      {
        name: 'Akbari & Jahangiri Royal Workshops',
        period: 'c. 1560–1627 CE',
        description: 'Imperial kitābkhāna bringing together master painters from Gujarat, Rajasthan, Gwalior, and Tabriz to illustrate monumental chronicles (Akbarnama, Jahangirnama).'
      }
    ],
    artists: [
      {
        name: 'Bichitr',
        era: 'Active c. 1615–1650',
        significance: 'Mughal court master famous for psychological portraiture, allegorical compositions, and technical precision in paintings like "Jahangir on an Hourglass Throne".'
      },
      {
        name: 'Ustad Mansur (Nadir-ul-Asr)',
        era: 'Active c. 1590–1624',
        significance: 'Leading natural history painter for Emperor Jahangir, celebrated for peerless depictions of rare flora and fauna, including the Siberian crane and dodo.'
      }
    ],
    representativeArtifactIds: ['sarnath-buddha', 'mathura-vishnu', 'jahangir-hourglass'],
    curatedArtworks: [
      {
        customTitle: 'Dharmachakra Pravartana Buddha of Sarnath',
        medium: 'Chunar sandstone with matte silk finish',
        period: 'Sarnath Gupta Workshop (c. 475 CE)',
        locationText: 'Sarnath Archaeological Museum, Varanasi, Uttar Pradesh',
        customDescription: 'The supreme icon of classical Buddhist art depicting the historical Buddha turning the Wheel of the Law, his hands poised in teaching mudra before a halo of heavenly celestials.'
      }
    ]
  },
  {
    id: 'himachal-pradesh',
    stateName: 'Himachal Pradesh',
    ancientName: 'Trigarta / Jalandhara Hill States',
    zone: 'Northern',
    mapCoordinates: { x: 38, y: 18 },
    summary: 'Sanctuary of the Pahari miniature schools (Kangra, Basohli, Guler) that captured tender Vaishnava poetry against the green rolling backdrop of the Dhauladhar Himalayas.',
    historicalContext: 'Fleeing unrest in Delhi after Nadir Shah’s 1739 invasion, master painters from the Mughal court sought refuge in the sub-Himalayan valleys under the patronage of Rajput hill rajas, leading to the creation of the most delicate and lyrical paintings in Indian history.',
    traditions: [
      {
        id: 'kangra-miniature',
        name: 'Kangra Lyrical Miniature Painting',
        category: 'Sub-Himalayan Court Miniature',
        description: 'Known for tender lyrical emotion, pure rhythmic lines, porcelain-like facial complexions, and lush green mountain landscapes depicting the divine love of Radha and Krishna from Jayadeva’s Gita Govinda.',
        keyMotifs: ['Radha and Krishna sheltering under an umbrella', 'Verdant riverbanks of Yamuna', 'Porcelain skin tones', 'Golden dawn light'],
        materials: ['Wasli paper', 'Pure herbal and mineral colors', 'Gold leaf dusting', 'Single-hair squirrel brushes'],
        associatedEpochId: 'epoch-mughal'
      },
      {
        id: 'basohli-school',
        name: 'Basohli Primitive Passion School',
        category: 'Early Pahari Miniature',
        description: 'Vigorous early hill school characterized by fiery yellow and hot red borders, fierce geometric facial profiles with large beetle-wing iridescent fragments pasted to simulate emerald jewelry.',
        keyMotifs: ['Beetle-wing jewel inlays', 'Flaming monochromatic yellow grounds', 'Fierce Rasamanjari emotions'],
        materials: ['Handmade paper', 'Beetle wing (Sternocera chrysis) casings', 'Mineral cinnabar'],
        associatedEpochId: 'epoch-mughal'
      }
    ],
    movements: [
      {
        name: 'Sansar Chand Kangra Flourishing',
        period: 'c. 1775–1823 CE',
        description: 'Golden age under Raja Sansar Chand of Kangra, who commissioned hundreds of paintings celebrating the Rasikapriya, Bhagavata Purana, and Gita Govinda.'
      }
    ],
    artists: [
      {
        name: 'Nainsukh of Guler',
        era: 'c. 1710–1778',
        significance: 'Genius of Pahari painting who brought human intimacy, subtle naturalism, and psychological depth to hill court paintings.'
      },
      {
        name: 'Manaku of Guler',
        era: 'c. 1700–1760',
        significance: 'Elder brother of Nainsukh who illustrated the landmark 1730 Basohli Gita Govinda manuscript.'
      }
    ],
    representativeArtifactIds: ['pahari-kangra'],
    curatedArtworks: [
      {
        customTitle: 'Radha & Krishna in the Sub-Himalayan Woods',
        medium: 'Gouache with gold on burnished wasli paper',
        period: 'Kangra Valley Atelier (c. 1785 CE)',
        locationText: 'Kangra / Guler, Himachal Pradesh',
        customDescription: 'A tender Kangra miniature showing the divine lovers surrounded by blossoming mango trees, flying white cranes, and rolling blue mountain ridges.'
      }
    ]
  },
  {
    id: 'kerala',
    stateName: 'Kerala',
    ancientName: 'Chera Mandala / Malabar',
    zone: 'Southern',
    mapCoordinates: { x: 38, y: 88 },
    summary: 'Home of the revolutionary 19th-century oil master Raja Ravi Varma, who fused European academic realism with classical Sanskrit mythology, and ancient temple mural frescoes.',
    historicalContext: 'Flourishing along the spice-rich Malabar coast, Kerala developed majestic temple wood carvings and mineral-pigment wall frescoes (Mattancherry Palace), which culminated in the nineteenth century when royal artist Raja Ravi Varma established India’s first modern oleographic press.',
    traditions: [
      {
        id: 'ravi-varma-realism',
        name: 'Travancore Academic Realism',
        category: 'Oil on Canvas & Lithography',
        description: 'Pioneered by Raja Ravi Varma of Kilimanoor Palace, who brought classical European chiaroscuro and oil painting techniques to immortalize scenes from Kalidasa, the Mahabharata, and Indian feminine grace.',
        keyMotifs: ['Shakuntala pretending to remove a thorn', 'Damayanti and the Royal Swan', 'Lush Kerala riverine foliage', 'Richly woven gold-bordered Kasavu saris'],
        materials: ['Imported European oil paints', 'Fine-weave canvas', 'Lithographic limestone printing blocks'],
        associatedEpochId: 'epoch-modern'
      },
      {
        id: 'kerala-temple-murals',
        name: 'Kerala Temple Fresco Murals',
        category: 'Mineral Fresco-Secco Murals',
        description: 'Grand 16th–18th century murals adorning temple walls and palaces (Padmanabhapuram, Mattancherry) using five sacred colors (Panchavarna) characterized by round, voluptuous, heavily bejeweled divine figures.',
        keyMotifs: ['Ananthasayanam reclining Vishnu', 'Gajendra Moksha', 'Curling wave-like decorative flora', 'Flared ornaments'],
        materials: ['Lime and coconut-water plaster', 'Laterite stone pigment', 'Neelamari plant indigo'],
        associatedEpochId: 'epoch-medieval'
      }
    ],
    movements: [
      {
        name: 'Ravi Varma Oleograph Democratization',
        period: 'c. 1894–1920s',
        description: 'Founding of the Ravi Varma Fine Arts Lithographic Press near Mumbai, distributing millions of mythological prints into everyday households across India.'
      }
    ],
    artists: [
      {
        name: 'Raja Ravi Varma',
        era: '1848–1906',
        significance: 'Celebrated father of modern Indian painting who bridged Indian cultural iconography and European academic realism, creating the visual image of Indian deities that persists to this day.'
      },
      {
        name: 'Raja Raja Varma',
        era: '1860–1905',
        significance: 'Younger brother and close collaborator of Ravi Varma, who painted masterly realistic landscape backgrounds and managed the traveling studio.'
      }
    ],
    representativeArtifactIds: ['ravi-varma-shakuntala'],
    curatedArtworks: [
      {
        customTitle: 'Damayanti Talking to the Swan',
        medium: 'Oil on linen canvas',
        period: 'Kilimanoor Palace Studio (c. 1899 CE)',
        locationText: 'Travancore / Kilimanoor, Kerala',
        customDescription: 'A celebrated academic masterpiece capturing Princess Damayanti on a marble palace veranda listening with romantic anticipation to the golden swan singing of Nala.'
      }
    ]
  }
];
