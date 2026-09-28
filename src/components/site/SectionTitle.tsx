import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase",
            align === "center" && "justify-center",
            tone === "dark" ? "text-gold-soft" : "text-leaf",
          )}
        >
          <span className="bg-gold inline-block h-px w-8" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl leading-[1.1] text-balance sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-cream" : "text-primary",
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            tone === "dark" ? "text-cream/75" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}
