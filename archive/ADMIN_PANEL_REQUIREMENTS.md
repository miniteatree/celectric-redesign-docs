# Celectric Redesign - Admin Panel Requirements

## Goal
Build a strong internal admin panel to manage catalog content, enquiry flow, SEO fields, product documents, and Odoo synchronization visibility.

## Core Modules

### 1. Dashboard
- Overall product count
- Recent enquiries
- Sync status summary
- Content completeness alerts

### 2. Catalog Management
- Categories
- Brands
- Products
- Product variants / options
- Specifications
- Related products
- Product status (active, hidden, draft)

### 3. Product Documents
- Upload multiple documents per product
- Support PDF and other allowed file types
- Document title
- Document type
- Language
- Sort order
- Download visibility flag
- Optional version / revision label

### 4. SEO Management
- SEO title
- Meta description
- Slug
- Canonical URL
- Open Graph fields
- Structured content fields

### 5. AI Assistance
- Generate SEO title
- Generate meta description
- Suggest short description
- Suggest category introduction
- Flag missing SEO fields

### 6. Enquiry Management
- Enquiry list
- Enquiry details
- Enquiry items
- Customer data
- Status tracking
- Internal remarks

### 7. Integration Management
- Odoo sync logs
- Last sync timestamp
- Sync status per product
- Failure messages
- Field source visibility

## Product Document Rules
- A product may have multiple downloadable files.
- Files should be grouped by type where possible, for example:
  - Datasheet
  - User Manual
  - Catalog
  - Certificate
  - Technical Drawing
- Each file should support ordering and optional display labels.

## Variant Handling Support
Admin panel should support products with multiple options such as size, rating, or model variation.
Need to clearly distinguish:
- parent product
- child variant
- option attributes
- documents shared across parent product
- documents specific to a variant

## Notes
The admin panel should favor clarity over excessive flexibility.
Product managers need to see what is synced from Odoo and what is maintained locally.
