import { createNavigation } from 'next-intl/navigation';
import { routing } from './app/i18n/routing';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
