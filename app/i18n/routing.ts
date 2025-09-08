import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr'],

  // Used when no locale matches
  defaultLocale: 'fr',

  // Localized pathnames per locale
  pathnames: {
    '/team': {
      en: '/team',
      fr: '/notre-equipe'
    }
  }
});
