import { ImageResponse } from "next/og";
import { OgArtboard } from "@/components/seo/OgArtboard";

export const dynamic = "force-static";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<OgArtboard variant="apple" />, {
    ...size,
  });
}
