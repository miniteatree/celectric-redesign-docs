# Celectric Redesign - Search and Autocomplete Strategy

## Goal
Define how search and autocomplete should work for products, variants, brands, and categories while keeping the public SEO structure clean.

## Core Principle
Search discoverability and SEO page structure do not need to be identical.
A product may use one canonical public page while still indexing many searchable variant terms.

## Search Scope
Search should support:
- product name
- model number
- variant text such as size or rating
- brand name
- category name
- aliases / alternate spellings
- common joined forms such as `product-a-10nm`

## Autocomplete Goals
Autocomplete should help users quickly find the correct product even when they search with variant-specific phrases.

Examples:
- `product-a`
- `product-a-10nm`
- `product a 10nm`
- `10nm product a`

## Recommended Result Behavior
If a variant is not a standalone SEO page:
- show the variant in autocomplete
- route to the parent product page
- preselect or highlight the matching option

Example result:
- `Product A (10nm option)`

Click result:
- `/products/product-a?size=10nm`
or
- `/products/product-a` with option preselected in UI

## Search Indexing Recommendation
Index should include:
- parent product title
- parent product slug
- brand
- category
- variant labels
- model names / model numbers
- generated search aliases
- document titles if relevant

## Alias Generation Examples
Parent product:
- Product A

Variant value:
- 10nm

Index aliases may include:
- `product a 10nm`
- `product-a-10nm`
- `10nm product a`
- `brand product a 10nm`

## Result Types
Autocomplete may display grouped results:
- Products
- Brands
- Categories
- Documents

## Variant Handling Rule
### Non-standalone variants
Use the parent product page as the destination.
These variants appear in search suggestions but do not create separate indexable pages.

### Standalone variants
If a variant acts like a distinct model, it may have:
- its own product page
- its own slug
- its own canonical URL
- its own SEO metadata

## Recommended Search Technology
Preferred direction:
- Laravel + Meilisearch
or
- Laravel + Typesense

These are suitable for:
- fast autocomplete
- typo tolerance
- grouped suggestions
- ranking control
- product catalog filtering

## UX Notes
- Show model / variant context directly in suggestion text
- Keep suggestions concise
- Prefer exact or high-confidence variant matches above generic results
- Allow keyboard navigation

## Example Autocomplete Output
User input:
- `product-a-10nm`

Suggestions:
- Product A (10nm)
- Product A (20nm)
- Brand X Product A Series

Destination behavior:
- Product A (10nm) -> parent page with 10nm selected

## Benefits
- users can search naturally
- SEO remains manageable
- duplicate pages are reduced
- maintenance is simpler
