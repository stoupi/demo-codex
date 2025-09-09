import { redirect } from 'next/navigation';
import { routing } from './i18n/routing';

// This page is required for the locale redirect to work properly
export default function GlobalNotFound() {
  // Redirect to the default locale
  redirect(`/${routing.defaultLocale}`);
}
