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

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    const currentPath = window.location.pathname.replace(`/${locale}`, '');
    router.push(currentPath || '/', { locale: newLocale });
  };

  const [infoOpen, setInfoOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);

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
          <DropdownMenu open={infoOpen} onOpenChange={setInfoOpen}>
            <DropdownMenuTrigger
              className="text-[#0063AF] hover:text-[#0063AF] outline-none font-medium"
              onMouseEnter={() => setInfoOpen(true)}
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
              onMouseEnter={() => setInfoOpen(true)}
              onMouseLeave={() => setInfoOpen(false)}
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
          <DropdownMenu open={researchOpen} onOpenChange={setResearchOpen}>
            <DropdownMenuTrigger
              className="text-[#0063AF] hover:text-[#0063AF] outline-none font-medium"
              onMouseEnter={() => setResearchOpen(true)}
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
              onMouseEnter={() => setResearchOpen(true)}
              onMouseLeave={() => setResearchOpen(false)}
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
          <DropdownMenu open={teamOpen} onOpenChange={setTeamOpen}>
            <DropdownMenuTrigger
              className="text-[#0063AF] hover:text-[#0063AF] outline-none font-medium"
              onMouseEnter={() => setTeamOpen(true)}
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
              onMouseEnter={() => setTeamOpen(true)}
              onMouseLeave={() => setTeamOpen(false)}
            >
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/team#medical" className="w-full">{t('teamMedical')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/team#paramedical" className="w-full">{t('teamParamedical')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/team#research" className="w-full">{t('teamResearch')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/team#administrative" className="w-full">{t('teamAdministrative')}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-base md:text-lg py-2 text-[#0063AF] hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white data-[highlighted]:bg-[#0F2C6B] data-[highlighted]:text-white transition-colors" asChild>
                <Link href="/team#gallery" className="w-full">{t('teamGallery')}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/news" className="text-[#0063AF] hover:text-[#0063AF] font-medium">{t('news')}</Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-lg text-[#0063AF] hover:bg-[#eef5fc]"
            title={locale === 'en' ? 'Passer en FR' : 'Switch to EN'}
          >
            {locale === 'fr' ? 'FR' : 'EN'} <span>▾</span>
          </button>
          <Link
            href="/donate"
            className="group rounded-full bg-[#F05A7A] px-5 py-2.5 text-lg font-medium text-white hover:bg-[#E44F70]"
          >
            <span className="inline-flex items-center gap-2">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12 21s-6.716-4.21-9.193-7.476C.47 10.81 2.01 6.75 5.6 6.1c2.012-.36 3.814.57 4.9 2.13 1.086-1.56 2.888-2.49 4.9-2.13 3.59.65 5.13 4.71 2.793 7.424C18.716 16.79 12 21 12 21z"/>
              </svg>
              {t('donate')}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
