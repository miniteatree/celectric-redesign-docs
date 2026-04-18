# Celectric Redesign - Master Plan

## Purpose
This document consolidates the internal strategy, progress, workflow, SEO rules, search rules, admin needs, and active tasks.

## Objective
Create a clearer structure to plan, track, and execute the Celectric website redesign.

## Current Direction
Reference structure is based on Instrumart.
Working recommendation is to position Celectric as an industrial product catalog plus enquiry platform.

## Current Status
- Initial recommendation shared
- Direction leaning toward catalog + RFQ rather than full e-commerce
- Documentation structure created for external and internal use
- Search, variant, SEO, and sitemap logic documented
- Admin panel and AI-assisted SEO requirements documented

## End-to-End Workflow
1. Business direction confirmation
2. Information architecture and sitemap
3. Functional scope definition
4. Data model and Odoo integration planning
5. Admin panel requirements
6. Search and SEO strategy
7. Page-by-page module definition
8. Implementation planning
9. Development
10. QA and refinement
11. Client review and revisions
12. Launch preparation

## Strategic Recommendations
- Use a framework-based build rather than pure custom-from-scratch development
- Favor industrial catalog + RFQ flow for phase 1
- Keep product SEO structure clean and avoid exploding minor option pages
- Support strong search and autocomplete using variant keywords
- Build a strong admin panel with SEO and document management support
- Use AI as SEO assistance, not automatic truth

## Product Option and SEO Rules
### Default Rule
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

### Search Rule
Even when the option is not a standalone page, searchable variant phrases should still be indexed.
Examples:
- `product-a-10nm`
- `product a 10nm`
- `10nm product a`

Autocomplete can surface:
- `Product A (10nm)`

Destination:
- parent product page with matching option selected

### Standalone Variant Qualification Rule
A variant can become its own page only if several of the following are true:
- distinct model or part number
- clear standalone search intent
- materially different specifications
- separate document set
- separate price / inventory / commercial handling
- enough unique content to avoid thin duplication

## Search and Autocomplete Rules
Search should support:
- product name
- model number
- variant text such as size or rating
- brand name
- category name
- aliases / alternate spellings
- common joined forms such as `product-a-10nm`

Recommended result behavior:
- show the variant in autocomplete
- route to the parent product page
- preselect or highlight the matching option

## Product Document Rules
- A product may have multiple downloadable files
- Files may include PDF and other approved types
- Documents may be grouped by type
- Some documents may belong to the parent product, others to a specific variant

## Admin Panel Requirements Summary
- Catalog management
- Product variants / options
- Multiple product documents
- SEO fields
- AI assistance for SEO drafts
- Enquiry management
- Odoo sync visibility

## AI SEO Principles
- AI generates drafts, not final truth
- Human review is required before publish
- Technical specifications must not be invented
- AI should work from structured product data where possible

## Risks / Unknowns
- Unknown number of products and brands
- Unknown quality of existing product data
- Unknown whether pricing is fixed or enquiry-based
- Unknown internal quotation workflow
- Unknown whether existing CMS / backend must be reused
- Unknown variant complexity across products
- Unknown number and types of downloadable product documents

## Suggested Deliverables Next
- Framework recommendation
- Odoo integration plan
- Product data model
- Page-by-page module breakdown
- Implementation roadmap
- Client confirmation round

## Active Tasks
### Planning
- [x] Create project folder and base documentation
- [x] Create external client discussion file
- [x] Create internal status tracking file
- [x] Record initial strategic direction
- [~] Compare framework options
- [ ] Finalize framework recommendation
- [ ] Define project phases

### Information Architecture
- [ ] Draft sitemap
- [ ] Define main navigation
- [ ] Define page inventory
- [ ] Define homepage modules
- [ ] Define category page modules
- [ ] Define brand page modules
- [ ] Define product detail page modules
- [ ] Define resources center structure

### Product Data and SEO
- [ ] Define product data model
- [~] Define variant / option model
- [~] Decide SEO URL strategy for product options
- [~] Add client confirmation items for product option SEO handling
- [ ] Define canonical strategy
- [ ] Define metadata rules
- [ ] Define schema markup approach
- [ ] Define AI-assisted SEO workflow

### Search
- [~] Define search scope
- [~] Define autocomplete result structure
- [ ] Decide search engine approach
- [ ] Define filters and facets
- [x] Record requirement that autocomplete should surface searchable variant phrases like `product-a-10nm` even when SEO uses the parent product page

### Documents and Assets
- [ ] Define product image handling
- [ ] Define multi-document attachment model
- [ ] Define datasheet / PDF display rules
- [ ] Define file naming and categorization rules

### Integrations
- [ ] Define Odoo sync scope
- [ ] Define source-of-truth rules
- [ ] Define sync frequency
- [ ] Define sync failure handling
- [ ] Define admin visibility for sync status

### Admin Panel
- [ ] Define admin modules
- [ ] Define roles and permissions
- [ ] Define product management workflow
- [ ] Define enquiry management workflow
- [ ] Define SEO management workflow

### Delivery
- [ ] Prepare client discussion pack
- [ ] Prepare internal architecture notes
- [ ] Prepare implementation roadmap

## Progress Timeline
- 2026-04-18
  - Created project folder with separate external and internal documentation.
  - Proposed Celectric direction as industrial catalog + RFQ platform.
  - Recommended framework-based development instead of pure custom build.
  - Compared framework options beyond Laravel.
  - Confirmed strong need for admin panel and AI-assisted SEO.
  - Documented variant URL, search, and sitemap handling.
  - Added client confirmation materials for product option SEO.

## Note
Use this file as the main internal resume point for the project.
