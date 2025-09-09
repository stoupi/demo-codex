import { getTranslations } from 'next-intl/server'
import Script from 'next/script'

export default async function InfoPage() {
  const t = await getTranslations('infoPage')

  return (
    <>
      <div className="sticky top-20 z-20">
        <div className="bg-[#0F2C6B] h-36 md:h-56">
          <div className="container mx-auto px-4 h-full flex items-end pb-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">{t('title')}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="section-layout grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-8">
          <aside className="sticky top-[19rem] md:top-[19rem] z-2 bg-white rounded-lg p-4 border h-max">
            <nav className="section-nav flex flex-col gap-2">
              <a href="#appointments" className="px-3 py-2 rounded-md text-[#184F88] font-medium hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white transition-colors">{t('appointmentsTitle')}</a>
              <a href="#access" className="px-3 py-2 rounded-md text-[#184F88] font-medium hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white transition-colors">{t('accessTitle')}</a>
              <a href="#faq" className="px-3 py-2 rounded-md text-[#184F88] font-medium hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white transition-colors">{t('faqTitle')}</a>
              <a href="#contact" className="px-3 py-2 rounded-md text-[#184F88] font-medium hover:bg-[#0F2C6B] hover:text-white focus:bg-[#0F2C6B] focus:text-white transition-colors">{t('contactTitle')}</a>
            </nav>
          </aside>

          <main>
            <section id="appointments" className="scroll-mt-24 lg:scroll-mt-[12rem] mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#184F88] mb-2">{t('appointmentsTitle')}</h2>
            </section>

            <section id="access" className="scroll-mt-24 lg:scroll-mt-[12rem] mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#184F88] mb-2">{t('accessTitle')}</h2>
            </section>

            <section id="faq" className="scroll-mt-24 lg:scroll-mt-[12rem] mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#184F88] mb-2">{t('faqTitle')}</h2>
            </section>

            <section id="contact" className="scroll-mt-24 lg:scroll-mt-[12rem] mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#184F88] mb-2">{t('contactTitle')}</h2>
            </section>
          </main>
        </div>

        <Script id="info-scrollspy" strategy="afterInteractive">
          {`
          (function(){
            const ids = ['appointments','access','faq','contact'];
            const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
            const nav = document.querySelector('.section-layout .section-nav');
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
    </>
  )
}

