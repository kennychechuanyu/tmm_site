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

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    location: z.string(),
    type: z.enum(["conference", "workshop", "webinar", "meetup"]),
    featured: z.boolean().default(false),
    registrationUrl: z.string().url().optional(),
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
