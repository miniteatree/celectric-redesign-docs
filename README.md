# Celectric Catalog Static Mockup

Static front-end mockup for Celectric redesign based on:

- `external/CLIENT_PACK.md`
- `internal/MASTER_PLAN.md`

Goal: provide a quick previewable UI that maps cleanly to future Laravel Blade + Tailwind components.

## Included Pages

- `mockup/index.html` - Homepage with catalog positioning, category entry points, featured products, and RFQ panel.
- `mockup/brand-abb.html` - Brand page mockup (ABB) with summary, product families, featured models, docs/support, and brand RFQ block.
- `mockup/product-cea-410.html` - Product detail mockup with variant selector and grouped product/variant documents.

## Shared Design System + Behavior

- `mockup/assets/css/design-system.css`
  - Shared tokens and reusable primitives: buttons, cards, sections, chips, forms, docs list, layout objects.
- `mockup/assets/css/site.css`
  - Page-level composition styles.
- `mockup/assets/js/components.js`
  - Reusable layout section mounting (`site-header`, `site-footer`, `cta-strip`) to emulate Blade partial includes.
- `mockup/assets/js/main.js`
  - Interactions:
    - homepage search autocomplete mock behavior,
    - nav active state,
    - reveal animations,
    - product variant selector and dynamic document/spec updates.
- `mockup/assets/data/catalog.js`
  - Mock catalog/search/variant data.
- `mockup/components/COMPONENT_MAP.md`
  - Suggested Blade component mapping for Laravel port.

## Preview on GitHub Pages

After the GitHub Actions Pages workflow runs, the mockup can be viewed at:

- `https://miniteatree.github.io/celectric-redesign-docs/`
- `https://miniteatree.github.io/celectric-redesign-docs/brand-abb.html`
- `https://miniteatree.github.io/celectric-redesign-docs/product-cea-410.html`

## Preview Locally

1. Start a local static server from repo root:

```bash
cd /private/tmp/celectric-redesign-docs
python3 -m http.server 4173
```

2. Open pages in browser:

- `http://localhost:4173/mockup/index.html`
- `http://localhost:4173/mockup/brand-abb.html`
- `http://localhost:4173/mockup/product-cea-410.html`

## Notes

- This is plain HTML/CSS/JS only (no build tools).
- Content and IA follow documented direction: industrial catalog + RFQ conversion, variant-aware search, and canonical parent product page behavior for minor options.
