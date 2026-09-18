export const FORMS_ENDPOINT = "";

export const formAction = (formspreeId: string) =>
  FORMS_ENDPOINT || `https://formspree.io/f/${formspreeId}`;
