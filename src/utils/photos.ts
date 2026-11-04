import fs from "node:fs";

export function smallPhoto(src?: string): string | undefined {
  if (!src) return src;
  const match = src.match(/^\/images\/people\/([^/]+)\.(jpe?g|png|webp)$/i);
  if (!match) return src;
  const small = `/images/people/small/${match[1]}.webp`;
  return fs.existsSync(`public${small}`) ? small : src;
}
