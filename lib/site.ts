/**
 * Canonical site origin for metadata, OG URLs, JSON-LD, sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.your-domain.com).
 * On Vercel, VERCEL_URL is used as a fallback when the env var is unset.
 */
export function getSiteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    try {
      return new URL(fromEnv).origin;
    } catch {
      /* fall through */
    }
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const SITE_NAME = "RodeMann Infrastructure B.V.";
export const SITE_TAGLINE = "Engineering the Future, Today.";

export const SITE_DESCRIPTION =
  "RodeMann Infrastructure delivers road construction, earthworks, material supply, drainage, and coordinated heavy-equipment logistics across Saudi Arabia, the Middle East, and international markets — with disciplined programme control and measurable milestones.";

export const DEFAULT_PHONE = "+966 11 234 5678";
export const ADDRESS_LOCALITY = "Riyadh";
export const ADDRESS_COUNTRY = "SA";
