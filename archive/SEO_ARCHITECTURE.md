# Celectric Redesign - SEO Architecture

## Goal
Create a scalable SEO structure for a product catalog and enquiry platform without generating unnecessary duplicate pages.

## SEO Content Layers

### 1. Core Static Pages
Examples:
- Home
- About
- Contact
- Request Quote
- Resources

These pages should have dedicated metadata and structured content.

### 2. Category Pages
Examples:
- `/products/test-measurement`
- `/products/sensors`

Purpose:
- rank for category-level terms
- organize product discovery
- support filterable navigation

### 3. Brand Pages
Examples:
- `/brands/fluke`
- `/brands/abb`

Purpose:
- rank for brand-led searches
- show related products and brand summary

### 4. Product Pages
Examples:
- `/products/fluke-117-digital-multimeter`
- `/products/product-a`

Purpose:
- rank for product and model searches
- present specifications, documents, and enquiry CTA

### 5. Industry / Solution Pages
Examples:
- `/solutions/manufacturing`
- `/solutions/process-automation`

Purpose:
- capture use-case and industry search demand
- support commercial landing pages

## Variant SEO Rule
Default recommendation:
- keep one canonical parent product page
- do not create separate indexable pages for minor options

Examples of minor options:
- size
- rating
- color
- connector style

If needed for UI state:
- use query params
- canonical should point to the main product URL

## When a Variant Can Have Its Own SEO Page
A variant may justify its own page if it has:
- distinct model number
- unique search demand
- materially different specifications
- distinct documents or pricing logic
- enough content to avoid thin duplication

## URL Strategy

### Recommended structure
- `/products/{category-slug}` for category pages if desired
- `/brands/{brand-slug}`
- `/products/{product-slug}`
- `/solutions/{solution-slug}`
- `/resources/{resource-slug}`

### Avoid
- generating separate URLs for every minor variant
- indexable filter URLs without strategy
- duplicate pages with near-identical content

## Canonical Rules
- category canonical points to itself
- brand canonical points to itself
- product canonical points to main product page
- variant query URLs canonical to parent product page unless intentionally standalone

## Metadata Rules
Each indexable page should support:
- SEO title
- meta description
- slug
- canonical URL
- Open Graph title
- Open Graph description
- structured data where applicable

## Content Rules
- product pages should include structured specs and documents
- category pages should have intro copy and internal links
- brand pages should include brand summary and product listing
- solution pages should connect problems to products

## Indexation Rules
### Indexable by default
- core pages
- category pages
- brand pages
- product pages
- selected solution pages
- selected resource pages

### Usually non-indexable
- search results pages
- filtered result pages unless curated
- cart / RFQ process pages
- temporary parameter URLs

## Internal Linking
- homepage -> category pages
- category pages -> product pages
- brand pages -> product pages
- product pages -> related products / categories / brand page
- resources -> related products when relevant

## Structured Data Suggestions
- Organization
- Product
- BreadcrumbList
- FAQPage where suitable
- WebSite search action if implemented

## Practical Recommendation
Build SEO around clean parent pages and strong internal linking.
Use search indexing to expose variant terms instead of creating excessive duplicate product URLs.
