# Geo-Localized Landing Pages Documentation

## Overview
This project generates geo-localized landing pages for countries and cities using Astro's dynamic routing system.

## File Structure

```
src/
├── pages/
│   ├── [country]/
│   │   ├── index.astro          # Country landing page
│   │   └── [city].astro        # City landing page
├── components/
│   └── ProjectCalculator.astro  # Reusable calculator component
├── data/
│   ├── countries-cities.json    # Country/city mapping
│   ├── country-content.json    # Country-specific content
│   └── city-content.json      # City-specific content
└── utils/
    └── slugify.js              # URL slug generation utility
```

## How to Update Country/City List

1. Edit `src/data/countries-cities.json`
2. Add or remove countries/cities following the structure:
   ```json
   {
     "Country-Name": ["City1", "City2", "City3"]
   }
   ```
3. **Important**: Replace spaces in country names with hyphens (e.g., "Bosnia-and-Herzegovina")

4. Run `npm run build` to generate all pages

## How to Customize Local Content

### Country-Level Content
Edit `src/data/country-content.json`:

```json
{
  "Country-Name": {
    "currency": "EUR",           // ISO currency code
    "currencySymbol": "€",       // Display symbol
    "services": "Description of local software services...",
    "laws": "Local regulations (GDPR, tax laws, etc.)...",
    "slang": "Local business culture and greetings...",
    "expertName": "Expert Name",
    "expertTitle": "Job Title"
  }
}
```

### City-Level Content
Edit `src/data/city-content.json`:

```json
{
  "City Name": {
    "techScene": "Local tech ecosystem description...",
    "culturalNotes": "City-specific cultural notes...",
    "contractNotes": "Local contract considerations..."
  }
}
```

## How to Adjust Currency Rates or Calculator Logic

### Currency Rates
Edit the `baseRates` object in `src/components/ProjectCalculator.astro`:

```javascript
const baseRates = {
  'EUR': 65,    // €65/hour
  'GBP': 60,    // £60/hour
  'USD': 70,    // $70/hour
  // Add more currencies as needed
};
```

### Calculator Logic
Modify the multipliers in the same file:

- **Complexity multipliers**: `complexityMultipliers` (low: 0.7, medium: 1.0, high: 1.5)
- **Project type multipliers**: `projectMultipliers` (website: 0.8, ecommerce: 1.2, etc.)

## Adding New Countries

1. Add the country and its cities to `countries-cities.json`
2. Add country content to `country-content.json`
3. Add city content for each city to `city-content.json`
4. Rebuild the project

## Schema.org Structured Data

The JSON-LD structured data is automatically generated for each page with:
- Article type markup
- contentLocation (city or country)
- Local expert as author with homeLocation and workLocation
- Proper headline, description, dates

The schema is dynamically generated in both `[country]/index.astro` and `[country]/[city].astro`.

## Build Statistics

- Total pages generated: 443 (39 countries + 152 cities)
- Build time: ~35 seconds
- Fully static output (no server-side runtime required)

## Testing

After building, verify:
1. All country pages are accessible at `/country-name/`
2. All city pages are accessible at `/country-name/city-name/`
3. Calculator works with local currency
4. JSON-LD schema is valid (use Google's Rich Results Test)
5. No broken links between country and city pages
