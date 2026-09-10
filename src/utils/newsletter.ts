export const GOOGLE_GROUP = "tmm-network";

export const listAddress = GOOGLE_GROUP ? `${GOOGLE_GROUP}@googlegroups.com` : "";
export const subscribeAddress = GOOGLE_GROUP ? `${GOOGLE_GROUP}+subscribe@googlegroups.com` : "";
export const subscribeHref = GOOGLE_GROUP
  ? `mailto:${subscribeAddress}?subject=${encodeURIComponent("Subscribe to the TMM mailing list")}&body=${encodeURIComponent("Please add me to the TMM mailing list.")}`
  : "";
export const groupUrl = GOOGLE_GROUP ? `https://groups.google.com/g/${GOOGLE_GROUP}` : "";
