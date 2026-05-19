import { ImageResponse } from "next/og";
import { OgArtboard } from "@/components/seo/OgArtboard";

/** Required for `output: "export"` — generate at build time only. */
export const dynamic = "force-static";

export const alt =
  "RodeMann Infrastructure B.V. — road construction, earthworks, and infrastructure logistics";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<OgArtboard variant="share" titlePrefix="Infrastructure" />, {
    ...size,
  });
}
