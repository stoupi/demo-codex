## Landing Page v1 (Navbar + Hero)

- Feature: Adds a single, image-accurate navbar and a hero section to the localized home page.
- What it does: Renders a white top navigation (logo/title, centered links, language switch, donate CTA) and a blue gradient hero with headline, subtitle, and two CTAs. Colors adjusted to match design: brand blue `#1F6DB2` links, deep blue text `#184F88`, hero gradient `#2F6FB7→#2A66A6`, donate pink `#F05A7A`.
- How to use:
  - Content: Edit translations in `messages/*` under `navigation` and `home`.
  - Layout: Navbar is rendered in `app/[locale]/layout.tsx`; hero renders from `app/[locale]/page.tsx`.
  - Components: Update UI in `app/[locale]/components/navbar.tsx` and `app/[locale]/components/hero.tsx`.
  - Links: Use the i18n `Link` from `app/i18n/navigation` to preserve locale in URLs.
