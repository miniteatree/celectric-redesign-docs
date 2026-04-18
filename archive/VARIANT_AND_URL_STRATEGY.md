# Celectric Redesign - Variant and URL Strategy

## Goal
Define how product options and variants should be handled for SEO, search, and maintainability.

## Core Principle
Not every product option should become its own indexable page.

## Recommended Strategy

### 1. Parent Product URL as Default
Use one main URL for the main product family.

Example:
- `/products/product-a`

This is the default for products where options such as size, rating, or minor specifications are variations of the same core product.

### 2. Option Selection on Product Page
Options such as size should normally be handled within the product page itself.
Possible implementation:
- frontend state switch
- query parameters if needed for UI persistence

Example:
- `/products/product-a?size=10nm`

### 3. When to Create Separate URLs
Create a separate URL only if the variant behaves like a distinct searchable product.
Typical criteria:
- unique model name or model number
- materially different technical specifications
- separate demand in search behavior
- separate documents or pricing logic
- useful as a standalone landing page

Example:
- `/products/product-a-10nm`
- `/products/product-a-20nm`

### 4. SEO Rule
If the option page is not intended to rank independently, canonical should point to the parent product page.

### 5. Search and Autocomplete Rule
Even if the SEO strategy uses one parent product page, autocomplete and search indexing should include variant terms.

Examples of searchable terms:
- product-a
- product-a 10nm
- product-a-10nm
- 10nm product-a
- brand + product-a 10nm

This allows users to discover the product by variant language while keeping the public page structure clean.

## Practical Recommendation
- Keep parent product as the main SEO page by default.
- Index variant attributes and generated aliases into search.
- Route autocomplete result to the parent product page, optionally preselecting the matching variant.

## Example Autocomplete Behavior
User searches:
- `product-a-10nm`

Autocomplete may show:
- Product A (10nm option)

Result click behavior:
- open `/products/product-a?size=10nm`
or
- open `/products/product-a` with 10nm preselected

## Benefits
- cleaner SEO structure
- less duplicate content
- better search discoverability
- easier maintenance
