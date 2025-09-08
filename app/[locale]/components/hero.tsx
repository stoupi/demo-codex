import { getTranslations } from 'next-intl/server';
import { getHeroImageUrl } from '@/lib/services/settings';
import { getSetting } from '@/lib/services/settings';
import Image from 'next/image';
import { Link } from '@/app/i18n/navigation';
import { Button } from '@/components/ui/button';

type HeroProps = {
  locale: string;
};

export async function Hero({ locale }: HeroProps) {
  const t = await getTranslations({ locale, namespace: 'home' });
  let dbUrl: string | null = null;
  try {
    dbUrl = await getHeroImageUrl();
  } catch {
    dbUrl = null;
  }
  const imageUrl = dbUrl ?? process.env.NEXT_PUBLIC_HERO_IMAGE_URL ?? '/assets/nouveaularib.jpg';
  let teamUrl: string | null = null;
  try {
    teamUrl = await getSetting('HERO_TEAM_IMAGE_URL');
  } catch {
    teamUrl = null;
  }
  const teamImageUrl = teamUrl ?? process.env.NEXT_PUBLIC_HERO_TEAM_IMAGE_URL ?? '/assets/equipe.jpeg';

  return (
    <section className="relative overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden
      />
      {/* Blue overlay to create the tinted transparency */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#2F6FB7]/70 to-[#2A66A6]/70" />

      <div className="relative container mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-28 text-center sm:py-36 md:grid-cols-[1fr_auto] md:justify-between">
        {/* Left content: keep center alignment but shifted left by layout */}
        <div className="flex flex-col items-center gap-6">
          <h1 className="max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)] sm:text-6xl">
            {t('heroTitle')}
          </h1>
          <div className="flex flex-col items-center gap-1">
            <p className="max-w-3xl text-pretty text-[#E6F0FA] sm:text-xl">
              {t('heroSubtitle')}
            </p>
            <p className="text-[#E6F0FA] sm:text-xl">{t('chief')}</p>
          </div>
          <div className="flex flex-col items-center gap-5 sm:flex-row">
            <Link href="/appointments">
              <Button
                size="lg"
                className="h-40 w-32 rounded-[14px] bg-white p-4 text-[#1F6DB2] shadow-sm hover:bg-[#F6FBFF]"
              >
                <span className="flex flex-col items-center leading-tight text-lg font-medium text-center">
                  <span
                    className="mb-2 inline-block h-[50px] w-[50px] bg-[#1F6DB2]"
                    style={{
                      WebkitMaskImage: "url('/assets/icons/calendar-clock.svg')",
                      maskImage: "url('/assets/icons/calendar-clock.svg')",
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                    aria-hidden
                  />
                  <span>
                    {t('primaryCtaL1')}<br />
                    {t('primaryCtaL2')}<br />
                    {t('primaryCtaL3')}
                  </span>
                </span>
              </Button>
            </Link>
            <Link href="/access">
              <Button
                size="lg"
                variant="outline"
                className="h-40 w-32 rounded-[14px] border-2 border-white bg-transparent p-4 text-lg font-medium text-white hover:bg-white/10"
              >
                <span className="flex flex-col items-center text-center">
                  <span
                    className="mb-2 inline-block h-[50px] w-[50px] bg-[#1F6DB2]"
                    style={{
                      WebkitMaskImage: "url('/assets/icons/map-pinned.svg')",
                      maskImage: "url('/assets/icons/map-pinned.svg')",
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                    aria-hidden
                  />
                  {t('secondaryCtaL1')}<br />
                  {t('secondaryCtaL2')}
                </span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="h-40 w-32 rounded-[14px] border-2 border-white bg-transparent p-4 text-lg font-medium text-white hover:bg-white/10"
              >
                <span className="flex flex-col items-center text-center">
                  <span
                    className="mb-2 inline-block h-[50px] w-[50px] bg-[#1F6DB2]"
                    style={{
                      WebkitMaskImage: "url('/assets/icons/phone.svg')",
                      maskImage: "url('/assets/icons/phone.svg')",
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                    aria-hidden
                  />
                  {t('tertiaryCtaL1')}<br />
                  {t('tertiaryCtaL2')}
                </span>
              </Button>
            </Link>
          </div>
        </div>
        {/* Right: team image, larger and keeping original aspect ratio */}
        <div className="hidden md:block">
          <Image
            src={teamImageUrl}
            alt={t('teamImageAlt')}
            width={520}
            height={347}
            sizes="(min-width: 768px) 520px, 0px"
            className="h-auto w-[520px] rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
