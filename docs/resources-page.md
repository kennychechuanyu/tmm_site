# Resources Page

This page showcases curated academic resources relevant to theory, modeling, and measurement in psychological science.

## Page Structure

The page has three sections:

1. **Featured Resource** — One pinned resource with full editorial treatment (long description, themed subsections). Set `featured: true` on the resource.
2. **All Resources** — A responsive card grid (1/2/3 columns) for all non-featured resources. Each card shows type, title, source, year, and a 3-line description.
3. **Contribute** — Formspree submission form for community suggestions.

## How to Add a Resource

All resources are defined in the `resources` array at the top of `index.astro`.

### Add a new resource card:

```typescript
{
  title: "Resource Title",
  type: "Paper",                    // Paper, Tutorial, Software/Package, Dataset, Discussion Collection, Video, Other
  source: "Journal or Publisher",
  year: 2026,
  description: "1-3 sentence description. This appears on the card.",
  url: "https://...",               // link to the resource
  featured: false,                  // set true for ONE resource to pin at top
},
```

Add it anywhere in the `resources` array. The grid handles layout automatically.

### Make a resource featured:

Set `featured: true`. Only one resource should be featured at a time. The featured resource gets the full editorial layout with long-form description. Its detailed content (themed subsections, etc.) is written directly in the HTML below the `{featured && (` block.

### Resource types:

Use these labels consistently:
- `Discussion Collection` — journal special issues, commentary collections
- `Paper` — individual influential papers
- `Tutorial` — educational materials, workshops, guides
- `Software/Package` — packages, tools, code repositories
- `Dataset` — open datasets relevant to TMM themes
- `Video` — recorded talks, lectures
- `Other` — anything else

## Community Submissions

The Formspree form (ID: `xjggvlaw`) collects community-submitted resources. Submissions are emailed to the TMM account. To promote a submission to the page, add it to the `resources` array manually.

## Adding a collection URL

For resources with both a main article and a collection/browsing URL, use:

```typescript
{
  ...
  url: "https://...",              // main/target article
  collectionUrl: "https://...",    // collection page (optional)
},
```

The featured template renders both links. For card-grid items, only `url` is used as the card link.
