import MainLayout from '../Layouts/MainLayout';
import { useEffect, useMemo, useState } from 'react';
import { pageLabels } from '../Components/siteData';
import { useAccessibility } from '../Contexts/AccessibilityContext';
import { localize, localeCode } from '../i18n';

export default function SheetTable({ kind, title, subtitle }) {
  const { language } = useAccessibility();
  const text = (value) => localize(value, language);
  const [payload, setPayload] = useState({ headers: [], rows: [], configured: true });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/dati/${kind}`, { headers: { Accept: 'application/json' }, signal: controller.signal })
      .then(async (response) => {
        const body = await response.json();
        if (!response.ok) throw new Error(body.message || text(pageLabels.loadError));
        return body;
      })
      .then(setPayload)
      .catch((err) => { if (err.name !== 'AbortError') setError(err.message); })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [kind, language]);

  const rows = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase(localeCode(language));
    return needle
      ? payload.rows.filter((row) => row.some((cell) => String(cell).toLocaleLowerCase(localeCode(language)).includes(needle)))
      : payload.rows;
  }, [payload.rows, query, language]);

  const resolvedTitle = kind === 'results' ? text(pageLabels.resultsTitle) : title;
  const resolvedSubtitle = kind === 'results' ? text(pageLabels.resultsSubtitle) : subtitle;

  return (
    <MainLayout>
      <section className="mx-auto max-w-[90rem] px-4 py-14 lg:px-8">
        <p className="font-bold uppercase tracking-[.3em] text-cyan-300">{text(pageLabels.liveData)}</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">{resolvedTitle}</h1>
        <p className="mt-4 text-lg text-slate-300">{resolvedSubtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <input
            aria-label={text(pageLabels.searchTable)}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={text(pageLabels.searchPlaceholder)}
            className="w-full max-w-md rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500"
          />
          {payload.updatedAt && <p className="text-sm text-slate-500">{text(pageLabels.updated)}: {new Date(payload.updatedAt).toLocaleString(localeCode(language))}</p>}
        </div>
        {loading && <p className="mt-10 text-slate-300">{text(pageLabels.loading)}</p>}
        {!loading && (error || payload.message) && <div className="mt-8 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-5 text-amber-100">{error || payload.message}</div>}
        {!loading && payload.headers.length > 0 && (
          <div className="mt-8 overflow-x-auto rounded-3xl border border-white/10">
            <table className="min-w-full border-collapse text-left">
              <thead className="bg-cyan-300 text-slate-950"><tr>{payload.headers.map((header, index) => <th key={`${header}-${index}`} className="whitespace-nowrap px-4 py-3 font-black">{header || `${text(pageLabels.column)} ${index + 1}`}</th>)}</tr></thead>
              <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex} className="border-t border-white/10 odd:bg-white/[.03] hover:bg-white/[.07]">{row.map((cell, cellIndex) => <td key={cellIndex} className="whitespace-nowrap px-4 py-3 text-slate-200">{cell}</td>)}</tr>)}</tbody>
            </table>
            {rows.length === 0 && <p className="p-6 text-slate-400">{text(pageLabels.noResults)}</p>}
          </div>
        )}
      </section>
    </MainLayout>
  );
}
