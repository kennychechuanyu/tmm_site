# Resources Page

This page showcases curated academic resources relevant to theory, modeling, and measurement in psychological science.

## How to Add a Featured Resource

Featured resources are added directly in `index.astro`. Each featured resource is an `<article>` block within a `<Section>` component.

### Structure of a featured resource:

```html
<article class="mx-auto max-w-3xl">
  <!-- Eyebrow label -->
  <div class="flex items-center gap-3 mb-8">
    <span class="inline-block h-px w-10 bg-salmon-500"></span>
    <span class="font-sans text-[11px] font-medium uppercase text-salmon-600 dark:text-salmon-400" style="letter-spacing: 0.22em;">
      Type Label (e.g., Discussion Collection, Tutorial, Software)
    </span>
  </div>

  <!-- Title -->
  <h2 class="font-serif text-3xl font-normal text-slate-900 dark:text-white md:text-4xl" style="line-height: 1.15; letter-spacing: -0.02em;">
    Resource Title
  </h2>

  <!-- Meta (journal, year, article count, etc.) -->
  <div class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
    <span class="font-serif text-sm italic text-navy-600 dark:text-navy-400">Journal or Source</span>
    <span class="text-slate-300 dark:text-slate-600">·</span>
    <span class="font-sans text-sm text-slate-500 dark:text-slate-400">Year</span>
  </div>

  <!-- Divider -->
  <div class="mt-8 h-px bg-slate-200 dark:bg-slate-700"></div>

  <!-- Description -->
  <div class="mt-8 space-y-6 text-[15px] leading-[1.8] text-slate-600 dark:text-slate-400 text-justify">
    <p>Description paragraph...</p>
  </div>

  <!-- Link -->
  <div class="mt-10 flex items-center gap-3">
    <a href="URL" target="_blank" rel="noopener noreferrer"
       class="inline-flex items-center gap-2 font-sans text-sm font-semibold text-navy-600 transition-colors hover:text-salmon-600 dark:text-navy-400 dark:hover:text-salmon-400">
      Link text →
    </a>
  </div>

  <!-- Bottom rule -->
  <div class="mt-10 h-px bg-slate-200 dark:bg-slate-700"></div>
</article>
```

### For themed subsections within a description:

Use the bordered-left block pattern:

```html
<div class="space-y-5 border-l-2 border-slate-200 dark:border-slate-700 pl-6">
  <div>
    <p class="font-sans text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">Theme Title</p>
    <p class="text-sm leading-relaxed">Description of this theme...</p>
  </div>
  <!-- More themes... -->
</div>
```

## Adding Multiple Resources

To add more featured resources, duplicate the `<article>` block within a new `<Section>` component. Alternate between `background="white"` and `background="gray"` for visual separation:

```html
<Section background="white">
  <article><!-- First resource --></article>
</Section>

<Section background="gray">
  <article><!-- Second resource --></article>
</Section>
```

## Community-Submitted Resources

The page includes a "Contribute a Resource" section with a Formspree form (ID: `xjggvlaw`). Submissions are emailed to the TMM account and can then be manually added to the page by the coordinating team.

## Resource Type Labels

Use the eyebrow label to categorize:
- `Discussion Collection` — journal special issues, commentary collections
- `Tutorial` — educational materials, workshops
- `Software` — packages, tools, code repositories
- `Paper` — individual influential papers
- `Dataset` — open datasets relevant to TMM themes
- `Video` — recorded talks, lectures
