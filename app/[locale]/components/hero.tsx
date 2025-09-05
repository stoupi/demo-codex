import { getTranslations } from 'next-intl/server';
import { Link } from '@/app/i18n/navigation';
import { Button } from '@/components/ui/button';

type HeroProps = {
  locale: string;
};

export async function Hero({ locale }: HeroProps) {
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#2F6FB7] to-[#2A66A6]">
      <div className="relative container mx-auto flex flex-col items-center gap-8 px-4 py-28 text-center sm:py-36">
        <h1 className="max-w-5xl text-balance text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)] sm:text-6xl">
          {t('heroTitle')}
        </h1>
        <p className="max-w-3xl text-pretty text-[#E6F0FA] sm:text-xl">
          {t('heroSubtitle')}
        </p>
        <div className="flex flex-col items-center gap-5 sm:flex-row">
          <Link href="/appointments">
            <Button size="lg" className="rounded-[14px] bg-white px-8 text-[#1F6DB2] shadow-sm hover:bg-[#F6FBFF]">
              {t('primaryCta')}
            </Button>
          </Link>
          <Link href="/patients">
            <Button size="lg" variant="outline" className="rounded-[14px] border-2 border-white bg-transparent px-8 text-white hover:bg-white/10">
              {t('secondaryCta')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
