import { Section, SectionHeader } from '@/components/ui/section';
import { EXPERTS } from '@/lib/site-data';
import { LinkedinIcon } from '@/components/ui/brand-icons';

function ExpertCard({ expert }: { expert: (typeof EXPERTS)[number] }) {
  return (
    <article className="glass-card glass-hover flex h-full flex-col p-6">
      <div className="flex items-center gap-4">
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-forest-900 to-forest-700 font-poppins text-lg font-bold text-gold-300 shadow-lg shadow-forest-900/20">
          {expert.initials}
        </span>
        <div>
          <h3 className="font-poppins text-base font-bold text-foreground">{expert.name}</h3>
          <p className="text-sm font-medium text-forest-700 dark:text-forest-300">{expert.role}</p>
          <p className="text-xs text-muted-foreground">{expert.org}</p>
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{expert.bio}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {expert.tags.map((t) => (
          <span key={t} className="pill-forest text-[11px]">
            {t}
          </span>
        ))}
      </div>
      {expert.linkedin ? (
        <a
          href={expert.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-[#0a66c2] hover:text-[#0a66c2]"
        >
          <LinkedinIcon className="h-3.5 w-3.5" /> Profil LinkedIn
        </a>
      ) : null}
    </article>
  );
}

export function EEA_T() {
  return (
    <Section tone="base">
      <SectionHeader
        eyebrow="E-E-A-T · 100% Boleh Disahkan"
        title="Pasukan Pakar Saintifik Di Sebalik Ramalan 4D Datochai"
        description="Kredibiliti Datochai 4d dibina di atas kepakaran intelek manusia sebenar. Kami bukan sekadar skrip automatik; setiap carta ramalan yang diterbitkan telah melalui proses semakan dan pengesahan kualiti oleh pakar akademik dan jurutera industri berprestij global."
      />

      {/* Mobile: horizontal snap-scroll. Desktop: 3-column grid. */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 no-scrollbar md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-3">
        {EXPERTS.map((e) => (
          <div key={e.name} className="w-[85%] shrink-0 snap-center md:w-auto">
            <ExpertCard expert={e} />
          </div>
        ))}
      </div>
    </Section>
  );
}
