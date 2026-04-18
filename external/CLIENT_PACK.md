# Celectric Website Redesign - Client Pack

## Purpose
This document consolidates the main client-facing discussion points, proposed structure, sitemap examples, and confirmation checklist.

## Project Goal
Redesign the Celectric website with reference to Instrumart's structure and strengths, adapted for Celectric's business model.

## Proposed Direction
Celectric should be rebuilt as an industrial product catalog and enquiry platform, not just a company profile website.

## Reference
- Reference site: https://www.instrumart.com/

## Key Recommendations

### 1. Site Positioning
- Industrial products catalog
- Strong product discovery
- RFQ / enquiry focused conversion flow
- Professional and specification-driven product pages

### 2. Main Navigation
- Products
- Brands
- Industries / Solutions
- Resources
- About
- Contact / Request Quote

### 3. Homepage Suggestions
- Large search bar
- Category entry points
- Brand highlights
- Featured products
- Industry / solution sections
- Strong enquiry CTA

### 4. Product Listing Page
- Clear category structure
- Filters by brand, category, and key specs
- Product cards with image, model, brand, and short specs
- CTA such as:
  - View Details
  - Add to Quote
  - Request Pricing

### 5. Product Detail Page
- Product title and model
- Brand
- Product images
- Key specifications summary
- Datasheet / document downloads
- Related products
- Enquiry / RFQ CTA

### 6. Conversion Flow
Recommended first phase:
- Quote cart / enquiry cart
- Customer fills in contact details and requirements
- Internal team follows up with quotation

This is recommended over full e-commerce checkout for the first release.

## Sitemap Proposal

### Top-Level Navigation
- Home
- Products
- Brands
- Solutions
- Resources
- About
- Contact / Request Quote

### Sitemap Structure
- `/`
- `/products`
- `/products/{category}`
- `/products/{subcategory}` where needed
- `/brands`
- `/brands/{brand}`
- `/products/{product-slug}`
- `/solutions`
- `/solutions/{solution}`
- `/resources`
- `/resources/{resource-type}`
- `/about`
- `/contact`
- `/request-quote`

## Product Option SEO Explanation

### Core Recommendation
Most product options should not become separate indexable pages.

Examples of common options:
- size
- rating
- cable length
- connector type
- color
- packaging

Recommended default:
- one main product page
- option selection within the page
- no separate sitemap entry for each option
- query parameter URLs are not treated as standalone SEO pages

### Case A: Minor Product Options
Example:
- Product A with sizes 10nm, 20nm, 30nm

Recommended handling:
- main page: `/products/product-a`
- optional UI state: `/products/product-a?size=10nm`
- sitemap includes only the main product page

### Case B: Searchable Variant Terms
Users may still search for phrases such as:
- `product-a-10nm`
- `product a 10nm`
- `10nm product a`

Recommended handling:
- support these terms in search and autocomplete
- autocomplete may show: `Product A (10nm option)`
- clicking the result opens the main product page with the option selected

### Case C: Standalone Model Variants
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

## Product Document Handling
A product may support multiple downloadable files.

Examples:
- datasheet
- user manual
- technical drawing
- certificate
- brochure

Recommended handling:
- display a Documents / Downloads section on the product page
- group files by type where appropriate
- support both product-level and variant-level documents where needed
- allow client to select one or more files and request them by email
- use secure download links for all document delivery, rather than direct public file URLs or large email attachments

### Secure Download Link Decision
For owner discussion and implementation planning, the recommended default is:
- all selected documents are delivered through secure download links
- backend validates requested document IDs before generating links
- links should be time-limited and non-guessable
- email should contain secure links instead of attaching the actual files

Why this is recommended:
- avoids mailbox attachment size limits
- reduces risk of uncontrolled public file sharing
- supports logging and audit trail of document requests
- is easier to extend later with access rules, expiry, and CRM / Odoo follow-up

### Expiry and Permission Rules
Recommended default rules:
- each secure download link should expire automatically after a short time window
- recommended default expiry: 24 to 72 hours
- each link should be unique per request, not a permanent shared URL
- links should only grant access to the exact files selected in that request
- unpublished or restricted documents must not be included in the generated links
- backend should be able to revoke a link if needed

Recommended permission model:
- public-download-eligible files can be requested by any website visitor through the request form
- restricted files should require internal approval before the secure link email is sent
- internal-only files must never be exposed through the public website flow
- admin should be able to mark each file as public, restricted, or internal-only

Owner discussion note:
- phase 1 can start with simple public vs restricted rules
- later phases can add customer login, account-based permissions, and partner-specific access

## Items To Confirm With Client
- Main business goal of the new website
- Product categories to highlight first
- Whether pricing is public or mostly enquiry-based
- Whether the first phase should be RFQ only or include direct checkout
- Required languages
- Need for brand pages
- Need for resources center / datasheet downloads
- Need for WhatsApp or direct sales contact CTA
- Whether minor product options should remain under one main product page for SEO
- Which product variants, if any, should be treated as standalone model pages

## Client Confirmation Checklist
Please confirm the preferred direction:

- [ ] Celectric should be positioned as an industrial catalog + enquiry platform
- [ ] Phase 1 should focus on RFQ / enquiry rather than full checkout
- [ ] Brand pages should be included
- [ ] Resources / document pages should be included
- [ ] Minor options should stay within one main product page by default
- [ ] Search should support variant-style keywords such as `product-a-10nm`
- [ ] Variant-style search results may lead to the main product page with the option preselected
- [ ] Only distinct model-level variants should receive separate product pages and sitemap entries
- [ ] Query parameter URLs for option states should not be treated as standalone SEO pages
- [ ] Products should support multiple downloadable documents

## Open Questions
- How many product categories are in scope for phase 1?
- Are product specifications already structured in existing data?
- Are brand assets and product images available?
- Is there an existing enquiry handling workflow?
- Does the client want SEO landing pages by industry or brand?

## Phase Proposal

### Phase 1
- New homepage
- Navigation restructure
- Category pages
- Product detail pages
- Brand pages
- Quote / enquiry flow
- Mobile responsive improvements

### Phase 2
- Advanced search
- Better filtering
- Resource center
- Related products
- SEO landing pages

### Phase 3
- User accounts
- Full cart and checkout
- Order management
- CRM integration

## Client Decisions Log
- Confirmed direction: document delivery should use secure download links for all selected files, instead of direct attachments.
