import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { toInstants } from "../../utils/eventTime";

/**
 * /events/<slug>.ics — an "Add to calendar" file for every event that has a
 * date and a time. Times are emitted as UTC instants, so every calendar app
 * shows them in the viewer's own zone.
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getCollection("events");
  return events
    .filter((e) => toInstants(e.data.time, e.data.date, e.data.timezone) !== null)
    .map((e) => ({ params: { slug: e.slug }, props: { event: e } }));
};

const stamp = (iso: string) => iso.replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

const escapeText = (s: string) =>
  s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");

/** RFC 5545 line folding: at most 75 octets per line, continuation lines start with a space. */
const fold = (line: string) => {
  const out: string[] = [];
  let cur = "";
  let bytes = 0;
  for (const ch of line) {
    const b = Buffer.byteLength(ch, "utf8");
    if (bytes + b > 74) {
      out.push(cur);
      cur = " ";
      bytes = 1;
    }
    cur += ch;
    bytes += b;
  }
  out.push(cur);
  return out.join("\r\n");
};

export const GET: APIRoute = ({ props, site }) => {
  const { event } = props;
  const span = toInstants(event.data.time, event.data.date, event.data.timezone)!;
  const end = span.end ?? new Date(new Date(span.start).getTime() + 2 * 60 * 60 * 1000).toISOString();
  const pageUrl = new URL(`/events/${event.slug}/`, site).href;

  const description = [
    event.data.description,
    event.data.registrationUrl ? `Register: ${event.data.registrationUrl}` : "",
    `Details: ${pageUrl}`,
  ]
    .filter(Boolean)
    .join("\n\n");

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//TMM Network//Events//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${event.slug}@tmm-network`,
    `DTSTAMP:${stamp(new Date().toISOString())}`,
    `DTSTART:${stamp(span.start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${escapeText(event.data.title)}`,
    `DESCRIPTION:${escapeText(description)}`,
    `LOCATION:${escapeText(event.data.location)}`,
    `URL:${pageUrl}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return new Response(lines.map(fold).join("\r\n") + "\r\n", {
    headers: { "Content-Type": "text/calendar; charset=utf-8" },
  });
};
