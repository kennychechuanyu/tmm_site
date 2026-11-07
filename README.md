# TMM website

Website of the Theory, Model, Measurement (TMM) Network: https://tmmpsych.vercel.app

Built with Astro and Tailwind CSS and hosted on Vercel. Pushing to `main` deploys the site.

## Running it locally

```bash
npm install
npm run dev
```

`npm run build` builds the site into `dist/` and then runs Pagefind for the search index, so search only works in a build (`npm run preview`), not in `npm run dev`.

## Where things are

- People: `src/data/people.ts`. Photos go in `public/images/people/` as `lastname-firstname.jpg`, at most 1200 px on the long side.
  The site shows a 400 px WebP copy with the same name from `public/images/people/small/` when there is one.
  Network members who took part in a past event (as speaker, panelist or moderator) or are named under `participants` in a news post get a photo card; the others are listed with their `position`, institution and unit (`role`).
- Events: `src/content/events/`
- Share images (the picture shown when a page link is shared): `public/images/share/`, 1200 × 630 PNG
- News and meeting notes: `src/content/news/`
- Resource collections: `src/data/collections.ts`, plus a page for each in `src/pages/resources/`
- Forms: `src/utils/forms.ts` holds the address all forms are sent to. If it is empty, each form uses its own Formspree address.
- Mailing list (Google Group): `src/utils/newsletter.ts`

Copyright TMM Network. All rights reserved.
