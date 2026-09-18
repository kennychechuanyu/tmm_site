export const FORMS_ENDPOINT = "https://script.google.com/macros/s/AKfycbxCZ99hnsIkiqrQjw2fQTpqd7PMd69MA56JJIBxrStb3FiiyJGC3Rge9p85qHc3kDzi/exec";

export const formAction = (formspreeId: string) =>
  FORMS_ENDPOINT || `https://formspree.io/f/${formspreeId}`;
