# Component Map for Laravel Port

This mockup intentionally separates reusable markup patterns so conversion to Laravel Blade is direct.

## Proposed Blade Structure

- `resources/views/components/layout/site-header.blade.php`
- `resources/views/components/layout/site-footer.blade.php`
- `resources/views/components/layout/cta-strip.blade.php`
- `resources/views/components/search/global-autocomplete.blade.php`
- `resources/views/components/cards/category-card.blade.php`
- `resources/views/components/cards/product-card.blade.php`
- `resources/views/components/products/variant-selector.blade.php`
- `resources/views/components/products/document-groups.blade.php`
- `resources/views/components/forms/rfq-form.blade.php`

## File Mapping

- `mockup/index.html`
  - Homepage hero + autocomplete + category cards + featured product cards + RFQ panel.
- `mockup/brand-abb.html`
  - Brand hero + subnav + brand summary + family cards + brand product listing + brand RFQ panel.
- `mockup/product-cea-410.html`
  - Product detail, variant selector, grouped documents, and product RFQ block.

## Shared Assets

- `mockup/assets/css/design-system.css`
  - Tokens and reusable UI primitives (buttons, cards, sections, forms, docs list).
- `mockup/assets/css/site.css`
  - Page-level composition and section-specific styling.
- `mockup/assets/js/components.js`
  - Runtime placeholder mounting for header/footer/CTA strip to mimic Blade includes.
- `mockup/assets/js/main.js`
  - Behavior scripts: navigation state, reveal effects, autocomplete, variant/document switching.
- `mockup/assets/data/catalog.js`
  - Shared mock data for search suggestions and product variant/document state.
