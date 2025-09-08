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

      <div className="relative container mx-auto grid max-w-8xl grid-cols-1 items-start md:items-stretch gap-7 px-5 md:px-12 py-28 text-center sm:py-34 md:grid-cols-[1fr_auto] md:justify-between">
        {/* Left content: keep center alignment but shifted left by layout */}
        <div className="flex flex-col items-center gap-6 md:justify-center">
          <h1 className="max-w-[60rem] text-balance text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)] sm:text-6xl">
            <span>{t('heroTitleL1')}</span>
            <br />
            <span>{t('heroTitleL2')}</span>
          </h1>
          <div className="flex flex-col items-center gap-1">
            <p className="max-w-[100rem] text-pretty text-[#E6F0FA] sm:text-xl font-semibold">
              {t('heroSubtitle')}
            </p>
            <p className="text-[#E6F0FA] sm:text-xl font-semibold">{t('chief')}</p>
          </div>
          <div className="flex flex-col items-center gap-5 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-40 w-36 cursor-pointer rounded-[14px] bg-white p-4 text-base text-[#0F2C6B] shadow-sm hover:bg-[#F05A7A] hover:text-white transition-colors duration-200 ease-out"
            >
              <a
                href="https://mon.aphp.fr/demande-rendez-vous/service-4-47-formulaire-1270"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex flex-col items-center leading-tight text-base font-medium text-center">
                  <span
                    className="mb-2 inline-block h-[50px] w-[50px] bg-[#0F2C6B] group-hover:bg-white transition-colors duration-200 ease-out"
                    style={{
                      WebkitMaskImage: "url('/assets/icons/calendar-clock.svg?v=3')",
                      maskImage: "url('/assets/icons/calendar-clock.svg?v=3')",
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
              </a>
            </Button>
            <Link href="/access">
              <Button
                size="lg"
                className="group h-40 w-36 cursor-pointer rounded-[14px] bg-[#FFDF6F] p-4 text-base font-medium text-[#0F2C6B] shadow-sm hover:bg-[#F05A7A] hover:text-white transition-colors duration-200 ease-out"
              >
                <span className="flex flex-col items-center text-center">
                  <span
                    className="mb-2 inline-block h-[50px] w-[50px] bg-[#0F2C6B] group-hover:bg-white transition-colors duration-200 ease-out"
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
                className="group h-40 w-36 cursor-pointer rounded-[14px] bg-[#0F2C6B] p-4 text-base font-medium text-white shadow-sm hover:bg-[#F05A7A] hover:text-white transition-colors duration-200 ease-out"
              >
                <span className="flex flex-col items-center text-center">
                  <span
                    className="mb-2 inline-block h-[45px] w-[45px] bg-white"
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
        <div className="hidden md:flex h-full items-stretch justify-self-end">
          <Image
            src={teamImageUrl}
            alt={t('teamImageAlt')}
            width={620}
            height={413}
            sizes="(min-width: 768px) 600px, 0px"
            className="w-[600px] h-auto rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
