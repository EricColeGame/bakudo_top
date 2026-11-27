"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";

export function ShoppingImage({
  src,
  alt,
  eager = false,
}: { src: string; alt: string; eager?: boolean }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <span className="shop-image-fallback" role="img" aria-label={alt}>
      <ShoppingBag size={48} strokeWidth={1} />
    </span>
  ) : (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
