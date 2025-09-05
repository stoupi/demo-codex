'use client';

import { Link, useRouter } from '@/app/i18n/navigation';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

export function Navbar() {
  const t = useTranslations('navigation');
  const router = useRouter();
  const locale = useLocale();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'fr' : 'en';
    const currentPath = window.location.pathname.replace(`/${locale}`, '');
    router.push(currentPath || '/', { locale: newLocale });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/logo.png" alt={t('logoAlt')} width={38} height={38} className="h-[38px] w-[38px] rounded-lg" />
          <div className="leading-tight">
            <div className="text-sm font-medium tracking-[0.08em] text-[#0063AF]">{t('service')}</div>
            <div className="text-sm font-bold uppercase tracking-wide text-[#0063AF]">{t('hospital')}</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-base">
          <Link href="/patients" className="text-[#0063AF] hover:text-[#0063AF]">{t('patients')}</Link>
          <Link href="/services" className="text-[#0063AF] hover:text-[#0063AF]">{t('care')}</Link>
          <Link href="/team" className="text-[#0063AF] hover:text-[#0063AF]">{t('team')}</Link>
          <Link href="/news" className="text-[#0063AF] hover:text-[#0063AF]">{t('news')}</Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-base text-[#0063AF] hover:bg-[#eef5fc]"
            title={locale === 'en' ? 'Passer en FR' : 'Switch to EN'}
          >
            {locale === 'fr' ? 'FR' : 'EN'} <span>▾</span>
          </button>
          <Link
            href="/donate"
            className="rounded-full bg-[#F05A7A] px-4 py-2 text-sm font-medium text-white hover:bg-[#E44F70]"
          >
            {t('donate')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
