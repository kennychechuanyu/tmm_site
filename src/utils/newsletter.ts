export const BUTTONDOWN_USERNAME = "";

export const subscribeEndpoint = BUTTONDOWN_USERNAME
  ? `https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`
  : "";
