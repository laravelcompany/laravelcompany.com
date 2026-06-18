import type { LocationData, ServiceModifierData, ServicePageData } from './types';
import { LOCATIONS } from './locations';
import { SERVICE_MODIFIERS } from './service-modifiers';

const COMPANY_NAME = 'Laravel Company';

export function getLocationBySlug(slug: string): LocationData | undefined {
  return LOCATIONS.find(l => l.slug === slug);
}

export function getModifierBySlug(slug: string): ServiceModifierData | undefined {
  return SERVICE_MODIFIERS.find(m => m.slug === slug);
}

export function isLocationSlug(slug: string): boolean {
  return slug.startsWith('laravel-development-company-in-');
}

export function isServiceVariantSlug(slug: string): boolean {
  return SERVICE_MODIFIERS.some(m => slug === `${m.slug}-laravel-development-company`);
}

export function parseSlug(slug: string): { type: 'location' | 'service-variant'; locationSlug?: string; modifierSlug?: string } {
  if (slug.startsWith('laravel-development-company-in-')) {
    const locationSlug = slug.replace('laravel-development-company-in-', '');
    return { type: 'location', locationSlug };
  }
  for (const m of SERVICE_MODIFIERS) {
    if (slug === `${m.slug}-laravel-development-company`) {
      return { type: 'service-variant', modifierSlug: m.slug };
    }
  }
  return { type: 'service-variant' };
}

export function generateLocationPageData(location: LocationData): ServicePageData {
  const keyword = `laravel development company in ${location.city}`;
  const canonical = `/services/${generateSlug(location)}/`;

  const relatedLocationSlugs = LOCATIONS
    .filter(l => l.slug !== location.slug && l.country === location.country)
    .slice(0, 3)
    .map(l => generateSlug(l));

  const relatedModifierSlugs = SERVICE_MODIFIERS
    .filter(m => m.featured)
    .slice(0, 3)
    .map(m => `${m.slug}-laravel-development-company`);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${COMPANY_NAME} - Laravel Development in ${location.city}`,
    description: `Top-rated Laravel development company in ${location.city}, ${location.country}. Custom web applications, SaaS platforms, and enterprise solutions.`,
    url: `https://laravelcompany.com/services/${generateSlug(location)}/`,
    image: 'https://laravelcompany.com/logo.svg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.region || location.country,
      addressCountry: location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    priceRange: '$$',
    telephone: location.localPhone || '+44 744 821 88 99',
    areaServed: location.serviceAreas,
    foundingDate: '2020',
    sameAs: [
      'https://twitter.com/laravelcompany',
      'https://github.com/laravelcompany',
      'https://linkedin.com/company/laravelcompany',
      'https://www.facebook.com/laravelcompany/',
    ],
  };

  return {
    slug: generateSlug(location),
    type: 'location',
    keyword,
    location: location.city,
    locationData: location,
    title: `Best Laravel Development Company in ${location.city} | ${COMPANY_NAME}`,
    description: `Top-rated Laravel development company in ${location.city}, ${location.country}. Custom web apps, SaaS platforms & enterprise solutions. ${location.laravelAdoptionRate} uses Laravel locally. Get a free quote.`,
    h1: `Laravel Development Company in ${location.city}`,
    intro: `We are a premier Laravel development company serving ${location.city}, ${location.country}. With deep expertise across ${location.serviceAreas.slice(0, 3).join(', ')} and beyond, we deliver custom web applications, SaaS platforms, and enterprise solutions tailored to ${location.city}'s unique business landscape.`,
    schema,
    canonical,
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services/' },
      { label: `Laravel Development in ${location.city}` },
    ],
    relatedSlugs: [...relatedModifierSlugs, ...relatedLocationSlugs],
  };
}

export function generateServiceVariantPageData(modifier: ServiceModifierData): ServicePageData {
  const keyword = `${modifier.modifier} laravel development company`;
  const slug = `${modifier.slug}-laravel-development-company`;
  const canonical = `/services/${slug}/`;

  const titlePrefix = modifier.modifier.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const topLocations = LOCATIONS.slice(0, 3).map(l => generateSlug(l));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `${titlePrefix} Laravel Development`,
    provider: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: 'https://laravelcompany.com',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
      },
    },
    description: modifier.description,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${titlePrefix} Laravel Services`,
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `${titlePrefix} Laravel Development` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Web Applications' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Platform Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise Laravel Solutions' } },
      ],
    },
  };

  return {
    slug,
    type: 'service-variant',
    keyword,
    modifier: modifier.modifier,
    modifierData: modifier,
    title: `${titlePrefix} Laravel Development Company | ${COMPANY_NAME}`,
    description: `${titlePrefix} Laravel development services. ${modifier.description}. ${modifier.trustSignal}. Get a free consultation and quote today.`,
    h1: `${titlePrefix} Laravel Development Company`,
    intro: `We are the ${modifier.modifier} Laravel development company for businesses that demand excellence. ${modifier.useCase} Our team delivers production-ready Laravel applications with clean architecture, comprehensive testing, and ongoing support.`,
    schema,
    canonical,
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services/' },
      { label: `${titlePrefix} Laravel Development` },
    ],
    relatedSlugs: [...topLocations],
  };
}

export function generateSlug(location: LocationData): string {
  return `laravel-development-company-in-${location.slug}`;
}

export function generateH1(keyword: string, location?: string, modifier?: string): string {
  if (location) return `Laravel Development Company in ${location}`;
  if (modifier) {
    const prefix = modifier.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return `${prefix} Laravel Development Company`;
  }
  return 'Laravel Development Company';
}
