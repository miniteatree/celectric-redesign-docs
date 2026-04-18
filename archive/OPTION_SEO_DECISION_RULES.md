# Celectric Redesign - Option SEO Decision Rules

## Goal
Provide a practical internal rule set for deciding whether a product option should remain within a parent product page or become a standalone SEO page.

## Default Rule
Minor options do not receive standalone indexable URLs.

Examples:
- size
- color
- cable length
- connector type
- minor rating differences

Default handling:
- parent page remains canonical
- option state may use frontend state or query param
- query param URL is not indexed
- sitemap includes only the parent product page

## Search Rule
Even when the option is not a standalone page, searchable variant phrases should still be indexed.

Examples:
- `product-a-10nm`
- `product a 10nm`
- `10nm product a`

Autocomplete can surface:
- `Product A (10nm)`

Destination:
- parent product page with matching option selected

## Standalone Variant Qualification Rule
A variant can become its own page only if several of the following are true:
- distinct model or part number
- clear standalone search intent
- materially different specifications
- separate document set
- separate price / inventory / commercial handling
- enough unique content to avoid thin duplication

## Sitemap Rule
### Include in sitemap
- parent product pages
- variant pages that qualify as distinct product models

### Exclude from sitemap
- option query parameter URLs
- UI state URLs
- minor option combinations

## Canonical Rule
- parent product page canonical to itself
- option-state URLs canonical to parent product page
- standalone model pages canonical to themselves

## Practical Decision Checklist
Before creating a standalone variant page, ask:
1. Is there unique search demand?
2. Is there a distinct model identifier?
3. Are the specs meaningfully different?
4. Are there distinct documents?
5. Can this page have enough unique value?

If most answers are no, keep it under the parent product page.
