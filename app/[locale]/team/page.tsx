import { getTranslations } from 'next-intl/server'
import { Card, CardContent } from '@/components/ui/card'
import type { TeamMember } from '@/types/team'
import Script from 'next/script'

function SectionGrid({ title, intro, members }: { title: string; intro?: string; members: TeamMember[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#184F88] mb-2">{title}</h2>
      {intro ? <p className="text-[#2A66A6] mb-6">{intro}</p> : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {members.map((m) => (
          <Card key={m.id} className="overflow-hidden">
            <div className="aspect-[4/3] bg-neutral-100" />
            <CardContent className="p-5">
              <div className="text-[#0F2C6B] text-lg font-bold">{m.name}</div>
              <div className="text-[#184F88] mt-1">{m.role}{m.specialty ? ' – ' + m.specialty : ''}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default async function TeamPage() {
  const t = await getTranslations('teamPage')
  const nav = await getTranslations('navigation')

  const medical: TeamMember[] = [
    { id: 'martin', name: 'Dr. Jean-Pierre MARTIN', role: t('headOfDepartment'), specialty: t('specialty.interventionalCardiology'), section: 'medical' },
    { id: 'bernard', name: 'Dr. Sophie BERNARD', role: t('hospitalPractitioner'), specialty: t('specialty.echocardiography'), section: 'medical' },
    { id: 'dubois', name: 'Dr. Michel DUBOIS', role: t('cardiologist'), specialty: t('specialty.cardiacRehabilitation'), section: 'medical' },
    { id: 'laurent', name: 'Dr. Marie LAURENT', role: t('hospitalPractitioner'), specialty: t('specialty.electrophysiology'), section: 'medical' },
  ]

  const paramedical: TeamMember[] = [
    { id: 'infermiere1', name: 'Camille DURAND', role: t('nurse'), specialty: t('specialty.usic'), section: 'paramedical' },
    { id: 'kine1', name: 'Lucas LEROY', role: t('physiotherapist'), specialty: t('specialty.rehabilitation'), section: 'paramedical' },
  ]

  const research: TeamMember[] = [
    { id: 'research1', name: 'Dr. Amina KHALID', role: t('researcher'), specialty: t('specialty.clinicalTrials'), section: 'research' },
  ]

  const administrative: TeamMember[] = [
    { id: 'admin1', name: 'Nathalie MOREAU', role: t('adminManager'), specialty: t('specialty.coordination'), section: 'administrative' },
  ]

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="sticky top-20 z-20 bg-white/90 backdrop-blur py-4 mb-6 text-[#184F88]">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#0063AF]">{t('title')}</h1>
      </div>

      <div className="team-layout grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-8">
        <aside className="sticky top-40 z-10 bg-white rounded-lg p-4 border h-max">
          <nav className="section-nav flex flex-col gap-2">
            <a href="#medical" className="px-3 py-2 rounded-md text-[#184F88] font-medium hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white transition-colors">{t('medicalTitle')}</a>
            <a href="#paramedical" className="px-3 py-2 rounded-md text-[#184F88] font-medium hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white transition-colors">{t('paramedicalTitle')}</a>
            <a href="#administrative" className="px-3 py-2 rounded-md text-[#184F88] font-medium hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white transition-colors">{t('administrativeTitle')}</a>
            <a href="#research" className="px-3 py-2 rounded-md text-[#184F88] font-medium hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white transition-colors">{t('researchTitle')}</a>
            <a href="#gallery" className="px-3 py-2 rounded-md text-[#184F88] font-medium hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white transition-colors">{t('galleryTitle')}</a>
          </nav>
        </aside>

        <main>
          <section id="medical" className="scroll-mt-24 lg:scroll-mt-[12rem] mb-12">
            <SectionGrid title={t('medicalTitle')} intro={t('medicalIntro')} members={medical} />
          </section>

          <section id="paramedical" className="scroll-mt-24 lg:scroll-mt-[12rem] mb-12">
            <SectionGrid title={t('paramedicalTitle')} intro={t('paramedicalIntro')} members={paramedical} />
          </section>

          <section id="research" className="scroll-mt-24 lg:scroll-mt-[12rem] mb-12">
            <SectionGrid title={t('researchTitle')} intro={t('researchIntro')} members={research} />
          </section>

          <section id="administrative" className="scroll-mt-24 lg:scroll-mt-[12rem] mb-12">
            <SectionGrid title={t('administrativeTitle')} intro={t('administrativeIntro')} members={administrative} />
          </section>

          <section id="gallery" className="scroll-mt-24 lg:scroll-mt-[12rem] mb-12">
            <h2 className="text-2xl font-semibold text-[#184F88] mb-2">{t('galleryTitle')}</h2>
            <p className="text-[#2A66A6] mb-6">{t('galleryIntro')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              <Card className="overflow-hidden"><div className="aspect-[4/3] bg-neutral-100" /><CardContent className="p-5 text-[#184F88]">{t('comingSoon')}</CardContent></Card>
            </div>
          </section>
        </main>
      </div>

      <Script id="team-scrollspy" strategy="afterInteractive">
        {`
          (function(){
            const ids = ['medical','paramedical','administrative','research','gallery'];
            const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
            if (sections.length === 0) return;
            let active = '';
            const setHash = (id) => {
              if (active === id) return;
              active = id;
              const url = new URL(window.location.href);
              url.hash = id ? '#' + id : '';
              history.replaceState(null, '', url);
            };

            const observer = new IntersectionObserver((entries) => {
              // Find the entry closest to top and sufficiently visible
              let best = null;
              for (const e of entries) {
                if (e.isIntersecting) {
                  if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
                }
              }
              if (best && best.target && best.intersectionRatio > 0.2) {
                setHash(best.target.id);
              } else {
                // Fallback: find first section below top
                const sorted = sections
                  .map(el => ({ id: el.id, top: el.getBoundingClientRect().top }))
                  .sort((a,b) => Math.abs(a.top) - Math.abs(b.top));
                if (sorted[0]) setHash(sorted[0].id);
              }
            }, { root: null, threshold: [0.2, 0.5, 0.8], rootMargin: '-160px 0px -60% 0px' });

            sections.forEach(s => observer.observe(s));
          })();
        `}
      </Script>
    </div>
  )
}
