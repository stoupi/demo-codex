import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ['en', 'fr'],

	// Used when no locale matches
	defaultLocale: 'fr',

	// Localized pathnames per locale
	pathnames: {
		'/': {
			en: '/',
			fr: '/',
		},
		'/team': {
			en: '/team',
			fr: '/notre-equipe',
		},
		'/services': {
			en: '/services',
			fr: '/services',
		},
		'/news': {
			en: '/news',
			fr: '/actualites',
		},
		'/contact': {
			en: '/contact',
			fr: '/contact',
		},
		'/faq': {
			en: '/faq',
			fr: '/faq',
		},
		'/access': {
			en: '/access',
			fr: '/access',
		},
		'/appointments': {
			en: '/appointments',
			fr: '/rendez-vous',
		},
		'/info': {
			en: '/info',
			fr: '/informations-pratiques',
		},
		'/dashboard': {
			en: '/dashboard',
			fr: '/dashboard',
		},
		'/emergencies': {
			en: '/emergencies',
			fr: '/urgences',
		},
		'/research/miracl-ai': {
			en: '/research/miracl-ai',
			fr: '/recherche/miracl-ai',
		},
		'/research/addicto-usic': {
			en: '/research/addicto-usic',
			fr: '/recherche/addicto-usic',
		},
		'/research/andaman': {
			en: '/research/andaman',
			fr: '/recherche/andaman',
		},
		'/research/eacvi-mmvd': {
			en: '/research/eacvi-mmvd',
			fr: '/recherche/eacvi-mmvd',
		},
  		'/research/publications': {
  			en: '/research/publications',
  			fr: '/recherche/publications',
  		},
  		'/join': {
  			en: '/join',
  			fr: '/rejoindre'
  		}
  	},
 });
