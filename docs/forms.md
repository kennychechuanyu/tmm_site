# Forms

The five forms (Join, Contact, Project idea, Discussion topic, Resource) post to one
destination, set in `src/utils/forms.ts`:

- `FORMS_ENDPOINT` empty → each form uses its Formspree address (free plan, 50 a month).
- `FORMS_ENDPOINT` set → all forms post to the coordinators' Google Apps Script, which
  appends a row to the "TMM website submissions" spreadsheet and emails the TMM inbox.
  The script's source and setup notes are kept by the coordinators, not in this repo.

`src/components/FormHandler.astro` submits in the background and shows the in-place
thank-you (`data-success`); if the send fails it falls back to an ordinary submit, which
lands on `/thanks/`. Every form carries a hidden `_gotcha` field: people never see it,
bots fill it in, and both destinations drop those.
