export interface LocationData {
  slug: string;
  city: string;
  country: string;
  region?: string;
  coordinates: { lat: number; lng: number };
  localPhone?: string;
  localAddress?: string;
  serviceAreas: string[];
  searchVolume?: number;
  competition: 'low' | 'medium' | 'high';
  timezone: string;
  currency: string;
  currencySymbol: string;
  hourlyRateLow: number;
  hourlyRateHigh: number;
  laravelAdoptionRate?: string;
  description: string;
}

export interface ServiceModifierData {
  modifier: string;
  slug: string;
  targetIntent: 'commercial' | 'transactional' | 'informational';
  priority: number;
  featured: boolean;
  description: string;
  useCase: string;
  ctaText: string;
  trustSignal: string;
}

export interface ServicePageData {
  slug: string;
  type: 'location' | 'service-variant';
  keyword: string;
  location?: string;
  locationData?: LocationData;
  modifier?: string;
  modifierData?: ServiceModifierData;
  title: string;
  description: string;
  h1: string;
  intro: string;
  schema: any;
  canonical: string;
  breadcrumbs: { label: string; href?: string }[];
  relatedSlugs: string[];
}
