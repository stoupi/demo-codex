## Landing Page v1 (Navbar + Hero)

- Feature: Adds a single, image-accurate navbar and a hero section to the localized home page.
- What it does: Renders a white top navigation (logo/title, centered links, language switch, donate CTA) and a blue gradient hero with headline, subtitle, and two CTAs. Colors adjusted to match design: brand blue `#1F6DB2` links, deep blue text `#184F88`, hero gradient `#2F6FB7→#2A66A6`, donate pink `#F05A7A`. Background image supported via local file or env.
- How to use:
  - Content: Edit translations in `messages/*` under `navigation` and `home`.
  - Layout: Navbar is rendered in `app/[locale]/layout.tsx`; hero renders from `app/[locale]/page.tsx`.
  - Components: Update UI in `app/[locale]/components/navbar.tsx` and `app/[locale]/components/hero.tsx`.
  - Links: Use the i18n `Link` from `app/i18n/navigation` to preserve locale in URLs.
  - Background image: Default fallback is `public/assets/nouveaularib.jpg`. You can override via `NEXT_PUBLIC_HERO_IMAGE_URL` or DB setting `HERO_IMAGE_URL`.

### Tweaks
- Navbar menu links updated to brand blue `#0063AF` and font size 16px (`text-base`).
- Language button text updated to `#0063AF` and 16px.
 - Logo caption colors unified: service and hospital text now `#0063AF`; logo badge also `#0063AF`. Hover states for menu links match `#0063AF`.
 - Navbar logo now uses `public/assets/logo.png` via `next/image` with localized alt text.
 - Logo size increased to 44×44 with softer rounded corners (`rounded-lg`) to better match the text block height.
 - Increased letter-spacing on “Service de Cardiologie” to align visually with the uppercase hospital line.
 - Added a solid blue divider line between the two logo captions to match the design.
 - Corrected FR hero subtitle wording to: "Hôpital Lariboisière - Assistance Publique des Hôpitaux de Paris (AP-HP)".
- Donate button: added a heart icon that animates with a heartbeat on hover only.
- Donate button icon now sourced from `public/assets/heart.svg` and animated on hover.
 - Donate button: replaced static SVG with Lottie animation loader component using `/assets/heart.json` (plays on hover). Requires `lottie-web` to be installed to animate; otherwise falls back gracefully.
- Hero: added a line below subtitle — “Chef de service : Professeur Patrick HENRY” (localized).
- Hero spacing: grouped subtitle and chief lines with tighter spacing and same font size for visual cohesion.
 - Hero text: subtitle and chief name set to semi-bold (`font-semibold`).
- Navbar links: removed underline reveal animation on hover as requested.
- Navbar typography: increased font sizes for logo captions, menu links, language toggle, and “Faire un don” button; navbar remains sticky at top.
 - Navbar height increased (`h-20`) and Lottie heart removed from the donate button (replaced with a static heart icon).
- Renamed navbar link: “Espace patients” → “Informations pratiques” (EN: “Practical information”).
- Added dropdown submenu under “Informations pratiques” with: “Urgences”, “Prendre rendez-vous”, “Venir à Lariboisière”, “Nous contacter”.
- Dropdown UX: submenu opens on hover, aligns to the left edge of the parent label, and uses a larger font size to match the main menu style.
 - New navbar item: “Recherche” inserted between “Offre de soins” and “L'équipe”, with submenu items — Plateforme MIRACL.ai, Etude ADDICTO-USIC, Etude ANDAMAN, Etude EACVI-MMVD.
 - Submenu hover: items turn white text on deep blue `#0F2C6B` background for clear highlight.
- Hero: added a team image to the right of the title on desktop (`/assets/equipe.jpeg` by default, overridable via `HERO_TEAM_IMAGE_URL` setting or `NEXT_PUBLIC_HERO_TEAM_IMAGE_URL`).
- Hero layout: shifted content block to the left (keeps centered alignment within its column) and enlarged the team photo while preserving the original aspect ratio.
- Hero image sizing: reduced overall size slightly (to ~600px wide) and shifted further right (`pr-8` plus `-mr-[200px]`).
- Hero layout: foreground group shifted 100px to the left (`md:-ml-[100px]`).
 - Hero title split into two lines via i18n keys `heroTitleL1` and `heroTitleL2`. Foreground layout centered within container (removed previous offsets) to balance left/right spacing.
- Hero CTAs: updated labels and layout
  - Primary now “Prendre rendez-vous en ligne” with a calendar icon above the text (EN: “Book an appointment online”).
  - Secondary becomes “Venir à Lariboisière” (EN: “Getting to Lariboisière”).
  - Added third CTA “Nous contacter” (EN: “Contact us”).
  - All three CTAs re-styled to be taller than wide, with larger text, and the calendar icon scaled up 2x. Primary CTA text slightly reduced to match secondary’s visual size. On hover, all CTA backgrounds turn pink `#F05A7A` and text/icons turn white, with smooth transitions. Base color for the first two CTAs set to deep blue `#0F2C6B` (text and icons). Cursor changes to pointer on hover to emphasize clickability.
  - Icons: masked SVGs from `public/assets/icons` (50×50) now use brand blue `#1F6DB2` as fill; stroke widths normalized to 1.5px for calendar, map, and phone (with cache-busting on calendar `?v=3`).
  - Secondary CTA styling: background set to `#FFDF6F` with blue text/icons for contrast.
  - Tertiary CTA styling: background set to deep blue `#0F2C6B` with white text/icon (hover `#0D255B`).

## Asset: Hand-drawn Heart SVG

- Feature: Adds `public/assets/hand-drawn-heart.svg`, a human, hand-drawn style heart outline with subtle double-stroke for authenticity.
- What it does: Provides a brand-friendly decorative icon that pairs well with healthcare visuals.
- How to use:
  - As an `<img>`/background: `/assets/hand-drawn-heart.svg` from the `public` folder.
  - With Next.js: `<Image src="/assets/hand-drawn-heart.svg" alt="Heart" width={48} height={48} />`.
  - As inline SVG: import the file content or copy into a component to change stroke color via `currentColor`.
