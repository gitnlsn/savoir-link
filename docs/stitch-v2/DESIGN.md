---
name: Savoir Link
colors:
  surface: '#f8f9ff'
  surface-dim: '#d8dae0'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3f9'
  surface-container: '#eceef3'
  surface-container-high: '#e7e8ee'
  surface-container-highest: '#e1e2e8'
  on-surface: '#191c20'
  on-surface-variant: '#434654'
  inverse-surface: '#2e3135'
  inverse-on-surface: '#eff0f6'
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2551d8'
  primary: '#002b92'
  on-primary: '#ffffff'
  primary-container: '#003ec7'
  on-primary-container: '#adbcff'
  inverse-primary: '#b7c4ff'
  secondary: '#003ec6'
  on-secondary: '#ffffff'
  secondary-container: '#0052fe'
  on-secondary-container: '#dfe3ff'
  tertiary: '#00402a'
  on-tertiary: '#ffffff'
  tertiary-container: '#005a3c'
  on-tertiary-container: '#7bd1a6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#dde1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001452'
  on-secondary-fixed-variant: '#0038b6'
  tertiary-fixed: '#9df4c8'
  tertiary-fixed-dim: '#81d8ad'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#191c20'
  surface-variant: '#e1e2e8'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 36px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
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
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  caption:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  xxl: 4rem
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system for this platform reflects a "corporate but warm" personality, specifically tailored for the Brazilian services marketplace. It balances professional reliability with a welcoming, accessible atmosphere. The aesthetic leans into **Modern Corporate** with **Minimalist** influences, prioritizing clarity and ease of use to foster trust between service seekers and providers. 

Visual hierarchy is maintained through high-quality typography and a spacious layout. The emotional response should be one of confidence and efficiency—users should feel they are in a secure, professional environment that is nonetheless approachable and human-centric.

## Colors
The color strategy uses a "Trust Blue" core to anchor the professional identity of the marketplace. **Primary Blue (#003ec7)** is reserved for brand moments and structural headers, while **Action Blue (#0052ff)** is utilized for interactive elements like buttons and links to drive conversion. 

The **Emerald (#006c49)** secondary accent signifies growth, success, and confirmation, providing a refreshing contrast to the blues. Its lighter counterpart, **Light Container (#6cf8bb)**, is used for soft backgrounds in success states or category highlights. The background remains very light and airy to ensure content—specifically service listings—takes center stage.

## Typography
This design system utilizes **Manrope** across all levels to maintain a cohesive, modern look. The signature style element is the **ExtraBold (800)** weight for major headlines, providing a strong, authoritative voice that feels contemporary. 

Body text is kept clean and highly readable at **Regular (400)** weight. For smaller UI labels and buttons, a **SemiBold (600)** weight is used to ensure legibility against colorful backgrounds. Tracking is slightly tightened on larger headlines to increase visual impact and maintain a "tight" professional feel.

## Layout & Spacing
The system follows a **Fixed Grid** philosophy with a maximum content width of **1280px**, ensuring optimal line lengths for reading on large monitors. 

- **Desktop:** 12-column grid with 24px gutters.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px margins.

The spacing rhythm is based on a **4px/8px baseline**, promoting mathematical consistency. Sections should be separated by generous vertical whitespace (64px to 96px) to maintain the clean, "uncluttered" brand promise.

## Elevation & Depth
Depth is handled through **Soft Tonal Shadows** rather than harsh outlines. This creates a tactile, layered feel that suggests quality.

- **Level 0 (Floor):** The `#f8f9ff` background.
- **Level 1 (Card):** White surfaces with a very soft, diffused shadow: `0 4px 20px rgba(11, 28, 48, 0.05)`.
- **Level 2 (Hover/Active):** Slightly deeper shadow to imply lift: `0 12px 32px rgba(11, 28, 48, 0.08)`.
- **Overlays:** Modals and dropdowns use a protective scrim and a high-elevation shadow to focus user attention.

Surfaces should never feel "heavy"; the shadows should be just visible enough to distinguish the card from the off-white background.

## Shapes
The shape language is friendly and approachable, defined by generous curves. 
- **Cards & Containers:** Use a `16px` (rounded-2xl) radius to soften the interface and make the platform feel less "stiff" than traditional enterprise software.
- **Buttons & Chips:** Use a **Pill-shaped (rounded-full)** radius. This geometric extreme communicates action and approachability.
- **Form Inputs:** Use a slightly tighter `12px` radius to maintain a structural feel while still aligning with the overall rounded aesthetic.

## Components

### Buttons
- **Primary:** Action Blue (#0052ff) background, white text, pill-shaped.
- **Secondary:** Emerald (#006c49) background or outline, used for success-oriented actions (e.g., "Hire Professional").
- **Ghost:** Transparent background with Primary Blue text, used for secondary navigation or "Cancel" actions.

### Cards
- **Surface:** Solid white (#ffffff).
- **Border:** None, or a subtle 1px border in `#eef0f7` if placement is on a white section.
- **Radius:** 16px.
- **Padding:** 24px (Desktop), 16px (Mobile).

### Inputs & Form Fields
- **Default State:** Light grey border (#eef0f7), white background, 12px radius.
- **Focus State:** 2px border in Action Blue (#0052ff) with a soft blue outer glow.
- **Labels:** Manrope Bold (700) in Body Blue (#0b1c30).

### Chips & Badges
- **Status Chips:** Small, pill-shaped with light background tints (e.g., Light Emerald background with Dark Emerald text).
- **Service Tags:** Light Action Blue background with dark blue text, used for categorizing reverse-marketplace bids.

### Lists
- Service provider lists should use a "Row Card" format with generous 16px internal padding and clear separation between items using the standard spacing scale.