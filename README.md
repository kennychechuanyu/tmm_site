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
- Events: `src/content/events/`
- News and meeting notes: `src/content/news/`
- Resource collections: `src/data/collections.ts`, plus a page for each in `src/pages/resources/`
- Forms: `src/utils/forms.ts` holds the address all forms are sent to. If it is empty, each form uses its own Formspree address.
- Mailing list (Google Group): `src/utils/newsletter.ts`

Copyright TMM Network. All rights reserved.
