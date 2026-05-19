import { ImageResponse } from "next/og";
import { OgArtboard } from "@/components/seo/OgArtboard";

export const dynamic = "force-static";

export const alt =
  "RodeMann Infrastructure B.V. — civil engineering and programme delivery";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<OgArtboard variant="share" />, {
    ...size,
  });
}
