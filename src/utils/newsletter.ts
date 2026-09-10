/**
 * The TMM mailing list lives in Buttondown. Every subscribe form on the site
 * posts straight to it, and Buttondown handles the confirmation email and
 * unsubscribing. Until the account exists this stays empty, and every form
 * that depends on it renders nothing.
 */
export const BUTTONDOWN_USERNAME = "";

export const subscribeEndpoint = BUTTONDOWN_USERNAME
  ? `https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`
  : "";
