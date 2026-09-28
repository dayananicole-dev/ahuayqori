import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/company";

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((f, i) => (
        <AccordionItem key={f.q} value={`item-${i}`} className="border-border border-b">
          <AccordionTrigger className="text-primary py-5 text-left text-base hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
