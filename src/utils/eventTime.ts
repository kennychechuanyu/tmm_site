const DASH = /[–—-]/;

export function zonedToUtc(date: Date, hhmm: string, timeZone: string): Date {
  const [h, m] = hhmm.split(":").map(Number);
  const y = date.getUTCFullYear();
  const mo = date.getUTCMonth();
  const d = date.getUTCDate();

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
  start: string;
  end?: string;
}

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

  if (end && end.getTime() < start.getTime()) {
    end.setUTCDate(end.getUTCDate() + 1);
  }

  return { start: start.toISOString(), end: end?.toISOString() };
}
