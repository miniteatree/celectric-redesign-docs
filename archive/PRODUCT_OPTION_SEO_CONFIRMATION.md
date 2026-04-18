# Celectric Website Redesign - Product Option SEO Confirmation

## Purpose
This file is for discussion and confirmation regarding how product options and variants should be handled in SEO structure, search, and sitemap inclusion.

## Core Recommendation
Most product options should not become separate indexable pages.

Examples of common options:
- size
- rating
- cable length
- connector type
- color
- packaging

For these cases, the recommended structure is:
- one main product page
- option selection within the page
- no separate sitemap entry for each option
- query parameter URLs are not treated as standalone SEO pages

## Why This Is Recommended
- avoids duplicate or near-duplicate pages
- keeps SEO authority concentrated on the main product page
- simplifies maintenance
- reduces thin content risk

## Recommended Handling Types

### Type A: Minor Product Options
Examples:
- Product A with sizes 10nm, 20nm, 30nm

Recommended handling:
- main page: `/products/product-a`
- optional UI state: `/products/product-a?size=10nm`
- sitemap includes only the main product page

### Type B: Searchable Variant Terms
Users may still search for phrases such as:
- `product-a-10nm`
- `product a 10nm`
- `10nm product a`

Recommended handling:
- these terms should be supported in search and autocomplete
- autocomplete may show: `Product A (10nm option)`
- clicking the result should open the main product page with that option selected

### Type C: Standalone Model Variants
A variant may deserve its own page only when it behaves like a distinct product model.
This may apply when:
- it has a unique model number
- it has significantly different specifications
- it has separate documents or commercial value
- customers are expected to search for it directly as a distinct item

Example:
- `/products/product-a-10nm`
- `/products/product-a-20nm`

These cases may be included in sitemap if confirmed as standalone product pages.

## Confirmation Items
Please confirm the preferred direction:

- [ ] Minor options should stay within one main product page by default
- [ ] Search should support variant-style keywords such as `product-a-10nm`
- [ ] Variant-style search results may lead to the main product page with the option preselected
- [ ] Only distinct model-level variants should receive separate product pages and sitemap entries
- [ ] Query parameter URLs for option states should not be treated as standalone SEO pages

## Notes
This approach balances SEO cleanliness, user discoverability, and long-term maintainability.
