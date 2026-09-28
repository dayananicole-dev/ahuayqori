import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="group bg-leaf text-leaf-foreground focus-visible:ring-ring fixed right-4 bottom-4 z-40 flex items-center gap-3 rounded-full py-3 pr-4 pl-3 shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:outline-none sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
      <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-all duration-400 group-hover:max-w-[12rem] group-focus-visible:max-w-[12rem]">
        ¿Necesitas información?
      </span>
    </a>
  );
}
