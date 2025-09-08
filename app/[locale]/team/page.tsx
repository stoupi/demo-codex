import { getTranslations } from 'next-intl/server'

export default async function TeamPage() {
  const t = await getTranslations('teamPage')
  const nav = await getTranslations('navigation')

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#0063AF] mb-8">{nav('team')}</h1>

      <section id="medical" className="scroll-mt-28 mb-12">
        <h2 className="text-2xl font-semibold text-[#184F88] mb-4">{t('medicalTitle')}</h2>
      </section>

      <section id="paramedical" className="scroll-mt-28 mb-12">
        <h2 className="text-2xl font-semibold text-[#184F88] mb-4">{t('paramedicalTitle')}</h2>
      </section>

      <section id="research" className="scroll-mt-28 mb-12">
        <h2 className="text-2xl font-semibold text-[#184F88] mb-4">{t('researchTitle')}</h2>
      </section>

      <section id="administrative" className="scroll-mt-28 mb-12">
        <h2 className="text-2xl font-semibold text-[#184F88] mb-4">{t('administrativeTitle')}</h2>
      </section>

      <section id="gallery" className="scroll-mt-28 mb-12">
        <h2 className="text-2xl font-semibold text-[#184F88] mb-4">{t('galleryTitle')}</h2>
      </section>
    </div>
  )
}

