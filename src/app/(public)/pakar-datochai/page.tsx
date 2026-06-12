import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Check, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/ui/page-hero';
import { Section, SectionHeader } from '@/components/ui/section';
import { LinkedinIcon } from '@/components/ui/brand-icons';
import { EXPERTS, MARKETS } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Pakar datochai | Ramalan 4D DatoChai',
  description:
    'Kenali pasukan pakar di sebalik DatoChai. Dikuasakan oleh NVIDIA Senior AI Architect, Profesor Statistik & Penyelidik PhD untuk carta ramalan 4D saintifik.',
};

const FEATURE_TAGS = [
  'NVIDIA Senior AI',
  'PhD Penyelidik',
  '4 Negara Berbeza',
  '100% Boleh Disahkan',
] as const;

const STATS = [
  { value: '6', label: 'Pakar AI & Statistik' },
  { value: '40+', label: 'Tahun Pengalaman Gabungan' },
  { value: '4', label: 'Institusi Bertaraf Dunia' },
  { value: '2%', label: 'Saintis Terbaik Dunia (Stanford)' },
] as const;

export default function PakarDatoChaiPage() {
  const primaryMarket = MARKETS[0];

  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero
        tone="brand"
        eyebrow="Pasukan Pakar"
        title="Pakar DatoChai | Ramalan 4D DatoChai"
        subtitle="DatoChai – Platform Carta Ramalan 4D Paling Dipercayai Di Malaysia"
        crumbs={[{ label: 'Pakar DatoChai' }]}
      >
        <div className="space-y-4 text-sm leading-relaxed text-slate-200/90 sm:text-base">
          <p>
            Dapatkan kenalan lengkap pasukan pakar di belakang Ramalan 4D DatoChai — pasukan
            bertaraf dunia yang menggabungkan kepakaran mendalam dalam Kecerdasan Buatan, Machine
            Learning, Deep Learning dan Analisis Statistik secara praktikal.
          </p>
          <p>
            Pasukan kami terdiri daripada NVIDIA Senior AI Architect, profesor universiti dalam
            bidang Statistik, serta penyelidik PhD dalam AI/ML yang berpengalaman luas. Dengan
            gabungan kredibiliti akademik tertinggi dan pengalaman industri teknologi global, kami
            membangunkan ramalan 4D yang paling saintifik, telus dan berasaskan data di Malaysia.
          </p>
        </div>

        {/* Feature tags grid */}
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {FEATURE_TAGS.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-2 rounded-2xl border border-gold-500/30 bg-white/5 px-3 py-2.5 text-xs font-semibold text-gold-100 backdrop-blur-md sm:text-sm"
            >
              <Check className="h-4 w-4 shrink-0 text-nvidia-green" />
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-7">
          <Link href={`/${primaryMarket.slug}`} className="btn-gold">
            Carta Ramalan 4D Terkini <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHero>

      {/* ===== STATS GRID ===== */}
      <Section tone="light">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="glass-card glass-hover p-6 text-center">
              <p className="bg-gradient-text font-poppins text-4xl font-extrabold tracking-tight sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== EXPERT PROFILES ===== */}
      <Section tone="white">
        <SectionHeader
          eyebrow="E-E-A-T"
          title="Pakar Utama & Ketua Pasukan AI Saintifik"
          description="Pameran kepakaran dan kepercayaan — setiap individu dipaparkan dengan jelas beserta pautan rujukan luaran untuk membuktikan identiti nyata."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {EXPERTS.map((expert) => (
            <article key={expert.name} className="glass-card glass-hover flex h-full flex-col p-6 sm:p-8">
              {/* Header: avatar + identity */}
              <div className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-forest-900 to-gold-300 font-poppins text-xl font-bold text-white shadow-lg shadow-forest-900/20"
                >
                  {expert.initials}
                </span>
                <div className="min-w-0">
                  <h3 className="font-poppins text-xl font-bold text-foreground">{expert.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-forest-700 dark:text-forest-300">
                    {expert.role}
                  </p>
                  <p className="text-xs text-muted-foreground">{expert.org}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{expert.bio}</p>

              {/* Expertise bullets */}
              <ul className="mt-5 space-y-2.5">
                {expert.tags.map((tag) => (
                  <li key={tag} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-600 dark:text-forest-400" />
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>

              {/* LinkedIn */}
              {expert.linkedin ? (
                <div className="mt-auto pt-6">
                  <a
                    href={expert.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost hover:border-[#0a66c2]/60 hover:text-[#0a66c2]"
                  >
                    <LinkedinIcon className="h-4 w-4" /> Profil LinkedIn
                  </a>
                </div>
              ) : null}
            </article>
          ))}
        </div>

        {/* Trust footnote */}
        <div className="mt-10 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
          <BadgeCheck className="h-4 w-4 text-nvidia-green" />
          Nama, gelaran dan institusi setiap pakar adalah nyata dan boleh disahkan secara bebas.
        </div>
      </Section>
    </>
  );
}
