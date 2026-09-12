export type ArtifactCategory = 'sculpture' | 'painting' | 'architecture' | 'object';

export interface Hotspot {
  id: number;
  title: string;
  description: string;
  xPercent: number;
  yPercent: number;
}

export interface Artifact {
  id: string;
  name: string;
  subTitle: string;
  epochId: string;
  epochNumber: number;
  epochName: string;
  category: ArtifactCategory;
  categoryBadge: string;
  date: string;
  period: string;
  location: string;
  repository: string;
  accessionNo: string;
  material: string;
  dimensions: string;
  excavation?: string;
  stratigraphy?: string;
  nodeLabel: string;
  timelineCoordinate?: string;
  imageUrl: string;
  detailImageUrl?: string;
  altText: string;
  shortDescription: string;
  overviewNarrative: string[];
  historicalContext: string[];
  artisticSignificance: string[];
  technique: {
    title: string;
    narrative: string;
    points: string[];
  };
  provenance?: {
    narrative: string;
    register: string;
    conservationStandard: string;
    permanentInstallation: string;
  };
  curatorialQuote?: {
    text: string;
    author: string;
  };
  metallurgicalInsight?: string;
  dimensionsDetails?: {
    height?: string;
    patron?: string;
    movement?: string;
    significance?: string;
    casting?: string;
  };
  hotspots?: Hotspot[];
  tags: string[];
  relatedArtifactIds: string[];
}

export interface Epoch {
  id: string;
  number: string;
  title: string;
  subhead: string;
  dateRange: string;
  description: string;
  chronologyBadge: string;
  progressPercent: number;
  worksCount: number;
  artifactIds: string[];
}

// ----------------------------------------------------
// ACTIVITY 2: ART MAP TYPES
// ----------------------------------------------------
export interface RegionalTradition {
  id: string;
  name: string;
  category: string;
  description: string;
  keyMotifs: string[];
  materials: string[];
  associatedEpochId?: string;
}

export interface ArtMovement {
  name: string;
  period: string;
  description: string;
}

export interface MasterArtist {
  name: string;
  era: string;
  significance: string;
}

export interface RepresentativeArtworkRef {
  artifactId?: string; // Reuses existing artifact ID from museumData!
  customTitle?: string;
  customImage?: string;
  customDescription?: string;
  medium?: string;
  period?: string;
  locationText?: string;
}

export interface ArtMapRegion {
  id: string;
  stateName: string;
  ancientName?: string;
  zone: 'Western' | 'Northern' | 'Eastern' | 'Southern' | 'Central';
  mapCoordinates: { x: number; y: number }; // Percentage 0-100 on India map
  summary: string;
  historicalContext: string;
  traditions: RegionalTradition[];
  movements: ArtMovement[];
  artists: MasterArtist[];
  representativeArtifactIds: string[]; // Linked to ARTIFACTS in museumData.ts
  curatedArtworks?: RepresentativeArtworkRef[];
  hasFusionTradition?: 'warli' | 'phad';
}

// ----------------------------------------------------
// ACTIVITY 3: FUSION STUDIO TYPES
// ----------------------------------------------------
export type PaintingStyleId = 'warli' | 'phad';

export interface StyleCharacteristics {
  id: PaintingStyleId;
  name: string;
  region: string;
  stateId: string; // Links to ArtMap region!
  epochPeriod: string;
  primaryMedium: string;
  groundBase: string;
  colorPalette: { name: string; hex: string; pigmentOrigin: string }[];
  characteristics: string[];
  traditionalContext: string;
  sacredGeometry: string;
  visualOrganization: string;
  humanAnatomy: string;
  sampleImageUrl: string;
}

export type MotifCategory = 'figure' | 'narrative' | 'motif' | 'border' | 'sacred';
export type MotifTint = 'default' | 'monochrome-white' | 'vermillion' | 'ochre-gold' | 'charcoal';

export interface MotifDefinition {
  id: string;
  style: 'warli' | 'phad' | 'fusion';
  name: string;
  category: MotifCategory;
  description: string;
  defaultScale: number;
  symbolicMeaning: string;
  svgPath: string; // Key to SVG component/renderer
}

export interface CanvasElement {
  id: string;
  motifId: string;
  style: 'warli' | 'phad' | 'fusion';
  name: string;
  category: MotifCategory;
  x: number; // percentage on canvas (0 to 100)
  y: number; // percentage on canvas (0 to 100)
  scale: number; // 0.5 to 2.5
  rotation: number; // 0 to 360
  flipped: boolean;
  tint: MotifTint;
}

export interface FusionPreset {
  id: string;
  title: string;
  description: string;
  background: 'geru' | 'khadadi' | 'indigo' | 'bone';
  elements: CanvasElement[];
}

export type AppView = 'timeline' | 'artmap' | 'fusion' | 'inspection' | 'about';
