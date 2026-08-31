import { defineCollection, z } from "astro:content";

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().optional(),
    type: z.enum(["meeting-notes", "announcement", "update"]).default("update"),
    featured: z.boolean().default(false),
  }),
});

const personSchema = z.object({
  name: z.string(),
  institution: z.string(),
  photo: z.string().optional(),
  photoCredit: z.string().optional(),
  photoCreditUrl: z.string().url().optional(),
  role: z.string().optional(),
  bio: z.string().optional(),
  website: z.string().url().optional(),
  links: z.array(z.object({
    label: z.string(),
    url: z.string().url(),
  })).optional(),
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date().optional(),
    endDate: z.date().optional(),
    location: z.string(),
    type: z.enum(["conference", "workshop", "webinar", "meetup"]),
    featured: z.boolean().default(false),
    registrationUrl: z.string().url().optional(),
    /** Human-readable time range shown next to the date, e.g. "15:30–19:20 CEST". */
    time: z.string().optional(),
    about: z.string().optional(),
    questions: z.array(z.object({
      label: z.string(),
      text: z.string(),
    })).optional(),
    speakers: z.array(personSchema).optional(),
    panelists: z.array(personSchema).optional(),
    /** Talks in running order; `speaker` must match a name in `speakers`. */
    talks: z.array(z.object({
      time: z.string().optional(),
      speaker: z.string(),
      title: z.string(),
      abstract: z.string(),
    })).optional(),
  }),
});

const resources = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(["tutorial", "paper", "software", "dataset", "slides", "video", "other"]),
    author: z.string().optional(),
    url: z.string().url().optional(),
    date: z.date().optional(),
  }),
});

export const collections = { news, events, resources };
