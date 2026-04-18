# Celectric Website Redesign - SEO and Sitemap Cases

## Purpose
Examples to explain how product URLs, variants, search, and downloadable documents may be handled.

## Case 1: Main Product with Minor Options
Example product:
- Product A

Options:
- 10nm
- 20nm
- 30nm

### Recommended handling
Public page:
- `/products/product-a`

Optional UI state:
- `/products/product-a?size=10nm`

### Why
This avoids duplicate pages when the core content is largely the same.

### Search behavior
Users should still be able to search:
- `product-a-10nm`
- `product a 10nm`
- `10nm product a`

Autocomplete may show:
- Product A (10nm option)

## Case 2: Variant as a Distinct Model
Example:
- Product A-10NM
- Product A-20NM

### Recommended handling
If each version behaves as a distinct searchable model, separate pages may be justified:
- `/products/product-a-10nm`
- `/products/product-a-20nm`

### When this is appropriate
- separate model numbers
- different technical intent
- separate documents or pricing
- enough unique content

## Case 3: Multiple Product Documents
A product may support many downloadable files.

Examples:
- datasheet
- user manual
- technical drawing
- certificate
- brochure

### Recommended handling
Display a dedicated Documents / Downloads section on the product page.
Files may be grouped by type.

### Additional note
Some documents may belong to the main product, while others may belong to a specific variant.

## Case 4: Sitemap Priority Examples
Recommended high-priority indexable pages:
- Home
- Category pages
- Brand pages
- Product pages
- Solution pages
- Selected resource pages

Usually non-indexable:
- Search results pages
- RFQ step pages
- temporary filter URLs
- variant parameter URLs when they are not standalone pages
