/**
 * Turn the wall-clock times written in event frontmatter (e.g. "15:35–16:20",
 * meaning local time in the event's own zone) into absolute UTC instants at
 * build time, so the browser can re-render them in the viewer's zone.
 */

const DASH = /[–—-]/;

/** Wall-clock time in `timeZone` on `date` → the absolute instant. */
export function zonedToUtc(date: Date, hhmm: string, timeZone: string): Date {
  const [h, m] = hhmm.split(":").map(Number);
  const y = date.getUTCFullYear();
  const mo = date.getUTCMonth();
  const d = date.getUTCDate();

  // Interpret the wall clock as if it were UTC, then correct by however far
  // the target zone actually sits from UTC at that instant.
  const guess = Date.UTC(y, mo, d, h, m);
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
    .formatToParts(new Date(guess))
    .reduce<Record<string, string>>((acc, p) => {
      acc[p.type] = p.value;
      return acc;
    }, {});

  const seenAsUtc = Date.UTC(
    +parts.year,
    +parts.month - 1,
    +parts.day,
    +parts.hour,
    +parts.minute
  );
  return new Date(guess - (seenAsUtc - guess));
}

export interface LocalTime {
  /** ISO instant of the start, for the `datetime` attribute. */
  start: string;
  /** ISO instant of the end, when the source was a range. */
  end?: string;
}

/**
 * Parse a frontmatter time — "15:35" or "15:35–16:20", optionally with a
 * trailing label such as "CEST" — into absolute instants.
 */
export function toInstants(
  raw: string | undefined,
  date: Date | undefined,
  timeZone: string
): LocalTime | null {
  if (!raw || !date) return null;
  const times = raw.match(/\d{1,2}:\d{2}/g);
  if (!times || times.length === 0) return null;

  const hasRange = times.length > 1 && DASH.test(raw);
  const start = zonedToUtc(date, times[0], timeZone);
  const end = hasRange ? zonedToUtc(date, times[1], timeZone) : undefined;

  // A range that ends before it starts has crossed midnight in the event zone.
  if (end && end.getTime() < start.getTime()) {
    end.setUTCDate(end.getUTCDate() + 1);
  }

  return { start: start.toISOString(), end: end?.toISOString() };
}
