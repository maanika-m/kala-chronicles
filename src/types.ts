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
