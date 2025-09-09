import { getTranslations } from 'next-intl/server'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from '@/navigation'
import type { TeamGroup, TeamMember } from '@/types/team'
import Script from 'next/script'

function SectionGrid({ title, intro, members }: { title: string; intro?: string; members: TeamMember[] }) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#184F88] mb-2">{title}</h2>
      {intro ? <p className="text-[#2A66A6] mb-6">{intro}</p> : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {members.map((m) => (
          <Card key={m.id} className="overflow-hidden">
            <div className="aspect-[4/3] bg-neutral-100" />
            <CardContent className="p-5 text-center">
              <div className="text-[#0F2C6B] text-lg font-bold">{m.name}</div>
              {m.role || m.specialty ? (
                <div className="text-[#184F88] mt-1">{m.role}{m.specialty ? ' – ' + m.specialty : ''}</div>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function GroupedMembersSection({ title, intro, groups }: { title: string; intro?: string; groups: TeamGroup[] }) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#184F88] mb-2">{title}</h2>
      {intro ? <p className="text-[#2A66A6] mb-6">{intro}</p> : null}
      {groups.map((g) => (
        <div key={g.title} className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-[#184F88] mb-3">{g.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {g.members.map((m) => (
              <Card key={m.id} className="overflow-hidden">
                <div className="aspect-[4/3] bg-neutral-100" />
                <CardContent className="p-5 text-center">
                  <div className="text-[#0F2C6B] text-lg font-bold">{m.name}</div>
                  {m.role || m.specialty ? (
                    <div className="text-[#184F88] mt-1">{m.role}{m.specialty ? ' – ' + m.specialty : ''}</div>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default async function TeamPage() {
  const t = await getTranslations('teamPage')
  const nav = await getTranslations('navigation')

  const medicalGroups: TeamGroup[] = [
    {
      title: t('medicalGroups.professors'),
      members: [
        { id: 'patrick-henry', name: 'Pr Patrick HENRY', role: t('headOfDepartment'), section: 'medical' },
        { id: 'alain-cohen-solal', name: 'Pr Alain COHEN SOLAL', role: '', section: 'medical' },
        { id: 'jean-guillaume-dillinger', name: 'Pr Jean-Guillaume DILLINGER', role: '', section: 'medical' },
        { id: 'damien-logeart', name: 'Pr Damien LOGEART', role: '', section: 'medical' },
      ],
    },
    {
      title: t('medicalGroups.hospitalUniversity'),
      members: [
        { id: 'theo-pezel', name: 'Dr Théo PEZEL', role: '', section: 'medical' },
      ],
    },
    {
      title: t('medicalGroups.hospitalPractitioners'),
      members: [
        { id: 'florence-beauvais', name: 'Dr Florence BEAUVAIS', role: '', section: 'medical' },
        { id: 'trecy-goncalves', name: 'Dr Trecy GONCALVES', role: '', section: 'medical' },
        { id: 'morgane-herry', name: 'Dr Morgane HERRY', role: '', section: 'medical' },
        { id: 'alexandre-lafont', name: 'Dr Alexandre LAFONT', role: '', section: 'medical' },
        { id: 'antoine-lequipar', name: 'Dr Antoine LEQUIPAR', role: '', section: 'medical' },
        { id: 'geraldine-vedrenne', name: 'Dr Géraldine VEDRENNE', role: '', section: 'medical' },
      ],
    },
    {
      title: t('medicalGroups.clinicAssistants'),
      members: [
        { id: 'edouard-ballout', name: 'Dr Edouard BALLOUT', role: '', section: 'medical' },
        { id: 'emmanuel-gall', name: 'Dr Emmanuel GALL', role: '', section: 'medical' },
        { id: 'paul-jun-martial', name: 'Dr Paul-Jun MARTIAL', role: '', section: 'medical' },
      ],
    },
    {
      title: t('medicalGroups.affiliatedPractitioners'),
      members: [
        { id: 'f-bouabid', name: 'Dr F. BOUABID', role: '', section: 'medical' },
        { id: 'p-de-jode', name: 'Dr P. DE JODE', role: '', section: 'medical' },
        { id: 'a-foucher-lavergne', name: 'Dr A. FOUCHER LAVERGNE', role: '', section: 'medical' },
        { id: 'a-holeman', name: 'Dr A. HOLEMAN', role: '', section: 'medical' },
        { id: 'jph-kevorkian', name: 'Dr J-Ph. KEVORKIAN', role: '', section: 'medical' },
        { id: 'm-laporte', name: 'Dr M. LAPORTE', role: '', section: 'medical' },
        { id: 'c-luc', name: 'Dr C. LUC', role: '', section: 'medical' },
        { id: 'm-nicol', name: 'Dr M. NICOL', role: '', section: 'medical' },
      ],
    },
  ]

  const paramedical: TeamMember[] = [
    { id: 'infermiere1', name: 'Camille DURAND', role: t('nurse'), specialty: t('specialty.usic'), section: 'paramedical' },
    { id: 'kine1', name: 'Lucas LEROY', role: t('physiotherapist'), specialty: t('specialty.rehabilitation'), section: 'paramedical' },
  ]

  const paramedicalGroups: TeamGroup[] = [
    {
      title: t('paramedicalGroups.nurseManagers'),
      members: [
        { id: 'houriya-zaouch', name: 'Houriya ZAOUCH', role: t('seniorNurseManager'), section: 'paramedical' },
        { id: 'raphaelle-demabre', name: 'Raphaëlle DEMABRE', role: '', section: 'paramedical' },
        { id: 'fabrice-favreau', name: 'Fabrice FAVREAU', role: '', section: 'paramedical' },
      ],
    },
    {
      title: t('paramedicalGroups.nurses'),
      members: [
        { id: 'camille-durand', name: 'Camille DURAND', role: t('nurse'), specialty: t('specialty.usic'), section: 'paramedical' },
        { id: 'lucas-leroy', name: 'Lucas LEROY', role: t('physiotherapist'), specialty: t('specialty.rehabilitation'), section: 'paramedical' },
      ],
    },
    { title: t('paramedicalGroups.nurseAides'), members: [] },
  ]

  const research: TeamMember[] = [
    { id: 'research1', name: 'Dr. Amina KHALID', role: t('researcher'), specialty: t('specialty.clinicalTrials'), section: 'research' },
  ]

  const administrative: TeamMember[] = [
    { id: 'celine-verissimo', name: 'Céline VERISSIMO', role: t('medicalSecretary'), section: 'administrative' },
    { id: 'jasmina-blagojevic', name: 'Jasmina BLAGOJEVIC', role: t('medicalSecretary'), section: 'administrative' },
    { id: 'laetitia-grosjean', name: 'Laëtitia GROSJEAN', role: t('medicalSecretary'), section: 'administrative' },
    { id: 'aurore-lemay', name: 'Aurore LEMAY', role: t('medicalSecretary'), section: 'administrative' },
    { id: 'nicaise-baremon', name: 'Nicaise BAREMON', role: t('medicalSecretary'), section: 'administrative' },
    { id: 'filomena-monteiro-boavista', name: 'Filomena MONTEIRO BOAVISTA', role: t('medicalSecretary'), section: 'administrative' },
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
            <Link href="/join" className="mt-2 inline-flex items-center justify-center rounded-full bg-[#F05A7A] px-4 py-2 text-white font-medium text-lg hover:bg-[#E44F70]">
              <span
                className="mr-2 inline-block h-[20px] w-[20px] bg-white"
                style={{
                  WebkitMaskImage: "url('/assets/icons/heart-handshake.svg')",
                  maskImage: "url('/assets/icons/heart-handshake.svg')",
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                }}
                aria-hidden
              />
              {t('joinUs')}
            </Link>
          </nav>
        </aside>

        <main>
          <section id="medical" className="scroll-mt-24 lg:scroll-mt-[12rem] mb-12">
            <GroupedMembersSection title={t('medicalTitle')} intro={t('medicalIntro')} groups={medicalGroups} />
          </section>

          <section id="paramedical" className="scroll-mt-24 lg:scroll-mt-[12rem] mb-12">
            <GroupedMembersSection title={t('paramedicalTitle')} intro={t('paramedicalIntro')} groups={paramedicalGroups} />
          </section>

          <section id="administrative" className="scroll-mt-24 lg:scroll-mt-[12rem] mb-12">
            <SectionGrid title={t('administrativeTitle')} intro={t('administrativeIntro')} members={administrative} />
          </section>

          <section id="research" className="scroll-mt-24 lg:scroll-mt-[12rem] mb-12">
            <SectionGrid title={t('researchTitle')} intro={t('researchIntro')} members={research} />
          </section>

          <section id="gallery" className="scroll-mt-24 lg:scroll-mt-[12rem] mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#184F88] mb-2">{t('galleryTitle')}</h2>
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
            const nav = document.querySelector('.team-layout .section-nav');
            if (!nav || sections.length === 0) return;
            const links = Array.from(nav.querySelectorAll('a[href^="#"]'));

            const setActive = (id) => {
              links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + id));
              const url = new URL(window.location.href);
              if (url.hash !== '#' + id) {
                url.hash = '#' + id;
                history.replaceState(null, '', url);
              }
            };

            // Initialize based on current hash or first id
            const initial = (location.hash || '#'+ids[0]).slice(1);
            setActive(initial);

            const observer = new IntersectionObserver((entries) => {
              let bestId = null;
              let bestRatio = 0;
              for (const e of entries) {
                if (e.isIntersecting && e.intersectionRatio > bestRatio) {
                  bestId = e.target.id; bestRatio = e.intersectionRatio;
                }
              }
              if (bestId) {
                setActive(bestId);
              } else {
                const sorted = sections
                  .map(el => ({ id: el.id, top: el.getBoundingClientRect().top }))
                  .sort((a,b) => Math.abs(a.top) - Math.abs(b.top));
                if (sorted[0]) setActive(sorted[0].id);
              }
            }, { root: null, threshold: [0.2, 0.5, 0.8], rootMargin: '-160px 0px -60% 0px' });

            sections.forEach(s => observer.observe(s));
          })();
        `}
      </Script>
    </div>
  )
}
