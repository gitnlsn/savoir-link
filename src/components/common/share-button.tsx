"use client";

import { Check, Share2 } from "lucide-react";
import { useState } from "react";
import { cn } from "~/lib/utils";

interface ShareData {
  title: string;
  text: string;
  url: string;
}

interface ShareButtonProps {
  data: ShareData;
  contentType?: string;
  variant?: "outline" | "primary";
  size?: "sm" | "default";
  alwaysShowText?: boolean;
  className?: string;
}

export function ShareButton({
  data,
  variant = "outline",
  size = "default",
  alwaysShowText = false,
  className = "",
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    // Prefer the native share sheet when available (mobile).
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        // User dismissed or share failed — fall through to clipboard.
      }
    }

    try {
      await navigator.clipboard.writeText(data.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — nothing else to do.
    }
  };

  const sizeClasses =
    size === "sm" ? "px-4 py-2 text-label-md" : "px-6 py-3 text-label-lg";
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/20"
      : "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-on-primary";

  return (
    <button
      type="button"
      onClick={handleShare}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all active:scale-[0.98]",
        sizeClasses,
        variantClasses,
        className,
      )}
    >
      {copied ? (
        <Check className="h-4 w-4" />
      ) : (
        <Share2 className="h-4 w-4" />
      )}
      {(alwaysShowText || copied) && (
        <span>{copied ? "Link copiado!" : "Compartilhar"}</span>
      )}
    </button>
  );
}
