const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

type Parts = { year: string; month?: string };

/** "2025-02" → { year: "2025", month: "Feb" }; "2025" → { year: "2025" }. */
const parse = (value: string): Parts => {
  const [year, month] = value.split("-");
  return { year, month: month ? MONTHS[Number(month) - 1] : undefined };
};

const label = ({ year, month }: Parts) => (month ? `${month} ${year}` : year);

/**
 * Human date range at the precision the data was given in.
 *   ("2025-02")            → "Feb 2025 — now"
 *   ("2025-10", "2025-12") → "Oct — Dec 2025"
 *   ("2021", "2024")       → "2021 — 2024"
 */
export function formatRange(start: string, end?: string): string {
  const s = parse(start);
  if (!end) return `${label(s)} — now`;
  const e = parse(end);
  if (s.year === e.year && s.month && e.month) return `${s.month} — ${e.month} ${e.year}`;
  return `${label(s)} — ${label(e)}`;
}
