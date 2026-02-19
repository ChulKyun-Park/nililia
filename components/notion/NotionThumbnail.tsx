"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { THUMBNAIL_FALLBACK_IMAGE_PATH } from "@/lib/assets";

interface NotionThumbnailProps {
  src?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function NotionThumbnail({
  src,
  alt,
  className,
  width = 1200,
  height = 675,
}: NotionThumbnailProps) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = useMemo(() => (src && !hasError ? src : THUMBNAIL_FALLBACK_IMAGE_PATH), [hasError, src]);

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      width={width}
      height={height}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
