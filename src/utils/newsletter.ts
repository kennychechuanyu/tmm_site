/**
 * The TMM mailing list is a Google Group. Joining is one email to the group's
 * subscribe address, which Google confirms with a reply; leaving is the link
 * in every message. Until the group exists this stays empty, and every
 * sign-up spot on the site renders nothing.
 */
export const GOOGLE_GROUP = "tmm-network";

export const listAddress = GOOGLE_GROUP ? `${GOOGLE_GROUP}@googlegroups.com` : "";
export const subscribeAddress = GOOGLE_GROUP ? `${GOOGLE_GROUP}+subscribe@googlegroups.com` : "";
export const subscribeHref = GOOGLE_GROUP
  ? `mailto:${subscribeAddress}?subject=${encodeURIComponent("Subscribe to the TMM mailing list")}&body=${encodeURIComponent("Please add me to the TMM mailing list.")}`
  : "";
export const groupUrl = GOOGLE_GROUP ? `https://groups.google.com/g/${GOOGLE_GROUP}` : "";
