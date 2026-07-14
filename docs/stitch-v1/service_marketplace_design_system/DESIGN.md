---
name: Service Marketplace Design System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434656'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#3737c5'
  on-tertiary: '#ffffff'
  tertiary-container: '#5153de'
  on-tertiary-container: '#e3e2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Manrope
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  xxxl: 64px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The brand personality is anchored in **Reliability, Growth, and Efficiency**. This design system bridges the gap between high-end professional tooling and accessible consumer experiences. It utilizes a **Modern Corporate** style that prioritizes clarity over decoration, ensuring that the platform feels like a high-performance utility rather than a social distraction.

The aesthetic is characterized by:
- **Precision:** Perfect alignment and consistent spacing to reflect professional standards.
- **Optimism:** Using vibrant, growth-oriented accents to encourage user action.
- **Transparency:** Clear visual hierarchies and open layouts that reduce cognitive load during complex service booking or management tasks.
- **Subtlety:** Using soft shadows and tonal shifts instead of heavy borders to create a sophisticated, airy environment.

## Colors

The palette is strategically split between trust-building foundations and growth-oriented accents:

- **Vibrant Blue (Primary):** Used for primary actions, navigation indicators, and branding. It signifies stability and the "Trust" required in a service-based economy.
- **Emerald Green (Secondary):** Reserved for growth-related indicators: success states, price savings, "Active" status, and completion confirmations.
- **Indigo (Tertiary):** Used sparingly for specialized professional features or data visualization to differentiate pro-tools from consumer-facing elements.
- **Slate Neutrals:** A cool-toned neutral scale provides the "clean" backdrop, ensuring the vibrant primary colors pop without overwhelming the user.

## Typography

**Manrope** has been selected for its exceptional balance between professional structure and friendly accessibility. It remains highly legible even at small sizes, which is critical for dense service descriptions and invoices.

- **Headlines:** Use tighter letter-spacing and heavier weights to create a sense of authority.
- **Body Text:** Standard weight (400) is used for maximum readability. Line heights are generous (1.5x) to ensure users can scan long service details without fatigue.
- **Labels:** Used for metadata, chips, and small captions. These utilize semi-bold and bold weights to ensure they stand out even at smaller scales.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop and tablet, and a **single-column vertical stack** for mobile. 

- **The 8pt Rhythm:** All spacing and sizing (margins, padding, component heights) are multiples of 8px (or 4px for fine-tuning). This ensures a mathematical consistency across all screens.
- **Margins & Gutters:** Mobile views use 16px side margins to maximize real estate, while desktop views expand to 32px margins with 24px gutters to allow the UI to breathe.
- **Content Density:** Professional dashboards should use `md` (16px) spacing for density, whereas consumer service discovery pages should use `lg` (24px) or `xl` (32px) to feel more inviting and less cluttered.

## Elevation & Depth

This design system uses **Tonal Layering** supplemented by **Ambient Shadows** to define hierarchy.

1.  **Level 0 (Floor):** Background (`#F8FAFC`).
2.  **Level 1 (Card/Surface):** White surfaces (`#FFFFFF`) with a very soft 1px border (`#E2E8F0`). This is the primary container for service listings.
3.  **Level 2 (Active/Hover):** When an element is focused or hovered, it gains a subtle shadow: `0px 4px 12px rgba(0, 0, 0, 0.05)`.
4.  **Level 3 (Overlays):** Modals and dropdowns use a more pronounced shadow: `0px 12px 32px rgba(0, 0, 0, 0.1)`.

Avoid high-contrast black shadows. Depth should feel like natural light hitting a clean, matte surface. Use backdrop blurs (12px) on fixed headers to maintain context of the content scrolling beneath.

## Shapes

A **Rounded (Level 2)** shape language is used to strike a balance between friendly (soft edges) and professional (structured alignment).

- **Standard Elements (Buttons, Inputs, Small Cards):** 0.5rem (8px) radius.
- **Large Containers (Service Detail Cards, Sections):** 1rem (16px) radius.
- **Utility Elements (Tags, Avatars, Pills):** Fully rounded/pill-shaped.

This consistency in rounding ensures that the "Modern" aesthetic feels intentional. Sharp corners are avoided to prevent the UI from feeling dated or overly aggressive.

## Components

### Buttons
- **Primary:** Solid Vibrant Blue with white text. 0.5rem rounding.
- **Secondary:** Transparent with Vibrant Blue border and text.
- **Ghost:** No border, Slate grey text; becomes blue on hover.
- *State:* Subtle scale-down effect (0.98) on click to provide tactile feedback.

### Form Inputs
- **Standard:** White background, 1px Slate-200 border. Focus state uses a 2px Vibrant Blue ring with 4px offset.
- **Labels:** Always placed above the input in `label-lg` for clarity.

### Cards (Service Listings)
- White background, 1px border, 1rem corner radius.
- Includes a top-right "Secondary" (Emerald) badge for ratings or "Verified" status.
- Image headers should have a 0.5rem inner margin or be full-bleed with top-radius matching the card.

### Chips & Status Badges
- **Status Badges:** Subtle tinted backgrounds (e.g., light green background with dark green text for "Completed").
- **Interactive Chips:** Solid light grey background that switches to Blue on selection.

### Professional Dashboard Specifics
- **Data Tables:** High-density, no borders between rows (only 1px divider lines). Use alternating row highlights for readability.
- **Progress Steps:** Linear indicators using Blue for "done," Blue-ring for "active," and Grey for "pending."