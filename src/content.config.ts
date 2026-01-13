import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Events collection schema
const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    type: z.enum(["conference", "workshop", "webinar", "meetup"]),
    featured: z.boolean().default(false),
    registrationUrl: z.string().url().optional(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

// Resources collection schema
const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["tutorial", "paper", "software", "video", "dataset"]),
    author: z.string().optional(),
    publishedDate: z.coerce.date().optional(),
    externalUrl: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { events, resources };
