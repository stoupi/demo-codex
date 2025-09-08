'use client';

import { Link, useRouter } from '@/app/i18n/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { ChevronDownIcon } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';

export function Navbar() {
  const t = useTranslations('navigation');
  const router = useRouter();
  const locale = useLocale();

  const switchToLocale = (targetLocale: 'en' | 'fr') => {
    if (targetLocale === locale) return;
    const currentPath = window.location.pathname.replace(`/${locale}`, '');
    router.push(currentPath || '/', { locale: targetLocale });
  };

  const [openMenu, setOpenMenu] = useState<null | 'info' | 'research' | 'team' | 'language'>(null);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/logo.png" alt={t('logoAlt')} width={44} height={44} className="h-[44px] w-[44px] rounded-lg" />
          <div className="leading-tight w-max">
            <div className="text-base font-medium tracking-[0.08em] text-[#0063AF]">{t('service')}</div>
            <div className="my-0.5 h-[2px] w-full bg-[#0063AF]" />
            <div className="text-base font-bold uppercase tracking-wide text-[#0063AF]">{t('hospital')}</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-lg">
          <DropdownMenu open={openMenu === 'info'} onOpenChange={(o) => setOpenMenu(o ? 'info' : (openMenu === 'info' ? null : openMenu))}>
            <DropdownMenuTrigger
              className="text-[#0063AF] hover:text-[#0063AF] outline-none font-medium"
              onMouseEnter={() => setOpenMenu('info')}
            >
              <span className="inline-flex items-center gap-1">
                {t('patients')}
                <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={8}
              className="min-w-[18rem] text-[#0063AF]"
              onMouseEnter={() => setOpenMenu('info')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/emergencies" className="w-full">{t('emergencies')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/appointments" className="w-full">{t('bookOnline')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/access" className="w-full">{t('gettingHere')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/faq" className="w-full">{t('faq')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/contact" className="w-full">{t('contact')}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/services" className="text-[#0063AF] hover:text-[#0063AF] font-medium">{t('care')}</Link>
          <DropdownMenu open={openMenu === 'research'} onOpenChange={(o) => setOpenMenu(o ? 'research' : (openMenu === 'research' ? null : openMenu))}>
            <DropdownMenuTrigger
              className="text-[#0063AF] hover:text-[#0063AF] outline-none font-medium"
              onMouseEnter={() => setOpenMenu('research')}
            >
              <span className="inline-flex items-center gap-1">
                {t('research')}
                <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={8}
              className="min-w-[20rem] text-[#0063AF]"
              onMouseEnter={() => setOpenMenu('research')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/research/miracl-ai" className="w-full">{t('miracl')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/research/addicto-usic" className="w-full">{t('addicto')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/research/andaman" className="w-full">{t('andaman')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/research/eacvi-mmvd" className="w-full">{t('eacvi')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/research/publications" className="w-full">{t('publications')}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu open={openMenu === 'team'} onOpenChange={(o) => setOpenMenu(o ? 'team' : (openMenu === 'team' ? null : openMenu))}>
            <DropdownMenuTrigger
              className="text-[#0063AF] hover:text-[#0063AF] outline-none font-medium"
              onMouseEnter={() => setOpenMenu('team')}
            >
              <span className="inline-flex items-center gap-1">
                {t('team')}
                <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={8}
              className="min-w-[20rem] text-[#0063AF]"
              onMouseEnter={() => setOpenMenu('team')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/team#medical" className="w-full">{t('teamMedical')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/team#paramedical" className="w-full">{t('teamParamedical')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/team#administrative" className="w-full">{t('teamAdministrative')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/team#research" className="w-full">{t('teamResearch')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/team#gallery" className="w-full">{t('teamGallery')}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/news" className="text-[#0063AF] hover:text-[#0063AF] font-medium">{t('news')}</Link>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu open={openMenu === 'language'} onOpenChange={(o) => setOpenMenu(o ? 'language' : (openMenu === 'language' ? null : openMenu))}>
            <DropdownMenuTrigger
              className="text-[#0063AF] hover:text-[#0063AF] outline-none font-medium"
              onMouseEnter={() => setOpenMenu('language')}
            >
              <span className="inline-flex items-center gap-1">
                {locale === 'fr' ? 'FR' : 'EN'}
                <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="min-w-[10rem] text-[#0063AF]"
              onMouseEnter={() => setOpenMenu('language')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <DropdownMenuItem
                className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors"
                onClick={() => switchToLocale('fr')}
              >
                Français (FR)
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors"
                onClick={() => switchToLocale('en')}
              >
                English (EN)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a
            href="https://don-hopitaux-nord.aphp.fr/lariboisiere/cardiologie/~mon-don"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-[#F05A7A] px-5 py-2.5 text-lg font-medium text-white hover:bg-[#E44F70]"
          >
            <span className="inline-flex items-center gap-2">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12 21s-6.716-4.21-9.193-7.476C.47 10.81 2.01 6.75 5.6 6.1c2.012-.36 3.814.57 4.9 2.13 1.086-1.56 2.888-2.49 4.9-2.13 3.59.65 5.13 4.71 2.793 7.424C18.716 16.79 12 21 12 21z"/>
              </svg>
              {t('donate')}
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
