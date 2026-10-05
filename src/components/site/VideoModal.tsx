import { useEffect } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Video de ejemplo sobre el aguaymanto (Agencia Andina). Cambiar por el video oficial de la empresa. */
export const heroVideoUrl = "https://www.youtube.com/embed/TpypQL0JmJc?autoplay=1&rel=0";

export function VideoButton({
  onClick,
  className,
  tabIndex,
}: {
  onClick: () => void;
  className?: string;
  tabIndex?: number;
}) {
  return (
    <Button
      type="button"
      variant="onDark"
      size="lg"
      tabIndex={tabIndex}
      className={className}
      onClick={onClick}
    >
      <Play className="size-4 fill-current" aria-hidden="true" />
      Ver video
    </Button>
  );
}

export function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video sobre el aguaymanto"
      className="bg-primary/95 fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Cerrar video"
        onClick={onClose}
        className="border-cream/40 text-cream hover:bg-cream hover:text-primary absolute top-5 right-5 z-10 grid size-12 place-items-center rounded-full border backdrop-blur-sm transition-colors"
      >
        <X className="size-6" aria-hidden="true" />
      </button>
      <div
        className="w-full max-w-5xl overflow-hidden rounded-xl shadow-[var(--shadow-lift)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={heroVideoUrl}
            title="Video sobre el aguaymanto"
            className="absolute inset-0 size-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
