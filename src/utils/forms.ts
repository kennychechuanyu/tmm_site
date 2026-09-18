/**
 * Where the site's forms are sent.
 *
 * FORMS_ENDPOINT is the Google Apps Script web app that appends every
 * submission to the "TMM website submissions" spreadsheet and emails the
 * TMM inbox (code and setup notes: Work/TMM/website/forms). While it is
 * empty, each form falls back to its Formspree address.
 */
export const FORMS_ENDPOINT = "https://script.google.com/macros/s/AKfycbxCZ99hnsIkiqrQjw2fQTpqd7PMd69MA56JJIBxrStb3FiiyJGC3Rge9p85qHc3kDzi/exec";

export const formAction = (formspreeId: string) =>
  FORMS_ENDPOINT || `https://formspree.io/f/${formspreeId}`;
