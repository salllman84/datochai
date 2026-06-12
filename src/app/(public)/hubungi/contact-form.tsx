'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/cn';

const SUBJECT_OPTIONS = [
  'Ramalan Magnum 4D',
  'Ramalan Sports Toto 4D',
  'Ramalan Damacai 4D (Kuda)',
  'Ramalan Perdana 4D',
  'Ramalan 9 Lotto 4D',
  'Ramalan Grand Dragon Lotto 4D',
  'Platform & Teknikal',
  'Soalan tentang Metodologi AI',
  'Soalan tentang Ketepatan Ramalan',
  'Soalan tentang Pasukan Pakar',
  'Masalah Teknikal Laman Web',
  'Permainan Bertanggungjawab',
  'Privasi & Data Peribadi',
  'Pertanyaan Media / Kerjasama',
  'Lain-lain',
] as const;

type FieldName = 'nama' | 'emel' | 'sahkanEmel' | 'subjek' | 'mesej';

type FormState = Record<FieldName, string>;
type ErrorState = Partial<Record<FieldName, string>>;
type TouchedState = Partial<Record<FieldName, boolean>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_STATE: FormState = {
  nama: '',
  emel: '',
  sahkanEmel: '',
  subjek: '',
  mesej: '',
};

function validateField(name: FieldName, values: FormState): string | undefined {
  const value = values[name].trim();
  switch (name) {
    case 'nama':
      return value ? undefined : 'Sila masukkan nama anda.';
    case 'emel':
      if (!value) return 'Sila masukkan alamat emel anda.';
      return EMAIL_RE.test(value) ? undefined : 'Format emel tidak sah.';
    case 'sahkanEmel':
      if (!value) return 'Sila sahkan alamat emel anda.';
      return value === values.emel.trim() ? undefined : 'Emel tidak sepadan.';
    case 'subjek':
      return value ? undefined : 'Sila pilih subjek pertanyaan.';
    case 'mesej':
      return value ? undefined : 'Sila tuliskan mesej anda.';
    default:
      return undefined;
  }
}

function validateAll(values: FormState): ErrorState {
  const errors: ErrorState = {};
  (Object.keys(values) as FieldName[]).forEach((name) => {
    const error = validateField(name, values);
    if (error) errors[name] = error;
  });
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<ErrorState>({});
  const [touched, setTouched] = useState<TouchedState>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const name = event.target.name as FieldName;
    const next = { ...values, [name]: event.target.value };
    setValues(next);
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, next) }));
    }
  }

  function handleBlur(
    event: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const name = event.target.name as FieldName;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, values) }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateAll(values);
    setErrors(nextErrors);
    setTouched({ nama: true, emel: true, sahkanEmel: true, subjek: true, mesej: true });
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    // No real network call — simulate transmission then show success toast.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setValues(INITIAL_STATE);
      setTouched({});
      setErrors({});
    }, 1100);
  }

  // Apply valid (green) / error (red) borders only after a field is touched.
  function fieldClasses(name: FieldName) {
    const showError = touched[name] && errors[name];
    const showValid = touched[name] && !errors[name] && values[name].trim();
    return cn(
      'field',
      showError && 'border-crimson-500 focus:border-crimson-500 focus:ring-crimson-500/30',
      showValid && 'border-forest-600 focus:border-forest-600 focus:ring-forest-500/30',
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
      {submitted ? (
        <div
          role="status"
          aria-live="polite"
          className="flex items-start gap-3 rounded-2xl border border-forest-600/40 bg-forest-900/10 px-4 py-4 text-sm font-medium text-forest-800 dark:border-forest-500/30 dark:bg-forest-500/10 dark:text-forest-200"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest-600 dark:text-forest-300" />
          <span>
            Mesej anda telah berjaya dihantar. Pasukan kami akan menghubungi anda segera.
          </span>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nama" className="field-label">
            Nama <span className="text-crimson-600">*</span>
          </label>
          <input
            id="nama"
            name="nama"
            type="text"
            autoComplete="name"
            value={values.nama}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.nama && errors.nama)}
            placeholder="Nama penuh anda"
            className={fieldClasses('nama')}
          />
          {touched.nama && errors.nama ? (
            <p className="mt-1.5 text-xs font-medium text-crimson-600 dark:text-crimson-400">
              {errors.nama}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="subjek" className="field-label">
            Subjek <span className="text-crimson-600">*</span>
          </label>
          <select
            id="subjek"
            name="subjek"
            value={values.subjek}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.subjek && errors.subjek)}
            className={fieldClasses('subjek')}
          >
            <option value="" disabled>
              Pilih subjek pertanyaan
            </option>
            {SUBJECT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {touched.subjek && errors.subjek ? (
            <p className="mt-1.5 text-xs font-medium text-crimson-600 dark:text-crimson-400">
              {errors.subjek}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="emel" className="field-label">
            Emel <span className="text-crimson-600">*</span>
          </label>
          <input
            id="emel"
            name="emel"
            type="email"
            autoComplete="email"
            value={values.emel}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.emel && errors.emel)}
            placeholder="nama@contoh.com"
            className={fieldClasses('emel')}
          />
          {touched.emel && errors.emel ? (
            <p className="mt-1.5 text-xs font-medium text-crimson-600 dark:text-crimson-400">
              {errors.emel}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="sahkanEmel" className="field-label">
            Sahkan Emel <span className="text-crimson-600">*</span>
          </label>
          <input
            id="sahkanEmel"
            name="sahkanEmel"
            type="email"
            autoComplete="email"
            value={values.sahkanEmel}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(touched.sahkanEmel && errors.sahkanEmel)}
            placeholder="Masukkan semula emel anda"
            className={fieldClasses('sahkanEmel')}
          />
          {touched.sahkanEmel && errors.sahkanEmel ? (
            <p className="mt-1.5 text-xs font-medium text-crimson-600 dark:text-crimson-400">
              {errors.sahkanEmel}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="mesej" className="field-label">
          Mesej <span className="text-crimson-600">*</span>
        </label>
        <textarea
          id="mesej"
          name="mesej"
          rows={6}
          value={values.mesej}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(touched.mesej && errors.mesej)}
          placeholder="Tuliskan pertanyaan atau mesej anda di sini..."
          className={fieldClasses('mesej')}
        />
        {touched.mesej && errors.mesej ? (
          <p className="mt-1.5 text-xs font-medium text-crimson-600 dark:text-crimson-400">
            {errors.mesej}
          </p>
        ) : null}
      </div>

      <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-forest-700 dark:text-forest-300" />
        <span>
          Privasi anda dihormati. Maklumat yang dihantar melalui borang ini hanya digunakan untuk
          membalas pertanyaan anda dan tidak akan dikongsi dengan pihak ketiga.
        </span>
      </p>

      <button type="submit" disabled={submitting} className="btn-gold w-full sm:w-auto">
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Menghantar...
          </>
        ) : (
          <>Hantar Mesej &rarr;</>
        )}
      </button>
    </form>
  );
}
