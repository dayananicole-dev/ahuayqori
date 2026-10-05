import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { products } from "@/data/products";

const schema = z.object({
  nombre: z.string().min(3, "Ingresa tu nombre completo"),
  empresa: z.string().optional(),
  email: z.string().email("Ingresa un correo válido"),
  telefono: z.string().min(6, "Ingresa un teléfono de contacto"),
  ciudad: z.string().min(2, "Ingresa tu ciudad"),
  tipoCliente: z.string().min(1, "Selecciona el tipo de cliente"),
  producto: z.string().min(1, "Selecciona un producto"),
  cantidad: z.string().optional(),
  asunto: z.string().min(3, "Indica el asunto"),
  mensaje: z.string().min(10, "Cuéntanos brevemente tu requerimiento"),
});

export type ContactValues = z.infer<typeof schema>;

const tipos = [
  "Cliente particular",
  "Restaurante / hotel / cafetería",
  "Tienda",
  "Distribuidor",
  "Empresa",
  "Otro",
];

export function ContactForm({ defaultProduct }: { defaultProduct?: string | undefined }) {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(schema),
    defaultValues: { producto: defaultProduct ?? "" },
  });

  /** Listo para conectarse luego a un correo, CRM o backend. */
  const onSubmit = async (values: ContactValues) => {
    await new Promise((r) => setTimeout(r, 600));
    // eslint-disable-next-line no-console
    console.log("Consulta recibida:", values);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border-leaf/30 bg-accent rounded-xl border p-10 text-center">
        <CheckCircle2 className="text-leaf mx-auto size-12" aria-hidden="true" />
        <h3 className="text-primary mt-5 text-xl">¡Consulta enviada!</h3>
        <p className="text-muted-foreground mx-auto mt-3 max-w-md text-sm leading-relaxed">
          Gracias por contactarnos. Hemos recibido tu consulta y nos comunicaremos contigo pronto.
        </p>
        <Button variant="quiet" className="mt-7" onClick={() => setSent(false)}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  const field = (name: keyof ContactValues) =>
    errors[name] ? { "aria-invalid": true, "aria-describedby": `${name}-error` } : {};

  const Err = ({ name }: { name: keyof ContactValues }) =>
    errors[name] ? (
      <p id={`${name}-error`} className="text-destructive mt-1.5 text-xs">
        {errors[name]?.message as string}
      </p>
    ) : null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border-border bg-card grid gap-5 rounded-xl border p-7 shadow-[var(--shadow-card)] sm:grid-cols-2 sm:p-9"
    >
      <div>
        <Label htmlFor="nombre">Nombre completo *</Label>
        <Input id="nombre" className="mt-2" {...register("nombre")} {...field("nombre")} />
        <Err name="nombre" />
      </div>
      <div>
        <Label htmlFor="empresa">Empresa</Label>
        <Input id="empresa" className="mt-2" {...register("empresa")} />
      </div>
      <div>
        <Label htmlFor="email">Correo electrónico *</Label>
        <Input id="email" type="email" className="mt-2" {...register("email")} {...field("email")} />
        <Err name="email" />
      </div>
      <div>
        <Label htmlFor="telefono">Teléfono *</Label>
        <Input id="telefono" type="tel" className="mt-2" {...register("telefono")} {...field("telefono")} />
        <Err name="telefono" />
      </div>
      <div>
        <Label htmlFor="ciudad">Ciudad *</Label>
        <Input id="ciudad" className="mt-2" {...register("ciudad")} {...field("ciudad")} />
        <Err name="ciudad" />
      </div>
      <div>
        <Label htmlFor="tipoCliente">Tipo de cliente *</Label>
        <select
          id="tipoCliente"
          className="border-input bg-background focus-visible:ring-ring mt-2 h-10 w-full rounded-md border px-3 text-sm focus-visible:ring-1 focus-visible:outline-none"
          {...register("tipoCliente")}
          {...field("tipoCliente")}
        >
          <option value="">Selecciona una opción</option>
          {tipos.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <Err name="tipoCliente" />
      </div>
      <div>
        <Label htmlFor="producto">Producto de interés *</Label>
        <select
          id="producto"
          className="border-input bg-background focus-visible:ring-ring mt-2 h-10 w-full rounded-md border px-3 text-sm focus-visible:ring-1 focus-visible:outline-none"
          {...register("producto")}
          {...field("producto")}
        >
          <option value="">Selecciona un producto</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
          <option value="otro">Otro / por definir</option>
        </select>
        <Err name="producto" />
      </div>
      <div>
        <Label htmlFor="cantidad">Cantidad aproximada</Label>
        <Input id="cantidad" className="mt-2" placeholder="Ej. 50 kg semanales" {...register("cantidad")} />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="asunto">Asunto *</Label>
        <Input id="asunto" className="mt-2" {...register("asunto")} {...field("asunto")} />
        <Err name="asunto" />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="mensaje">Mensaje *</Label>
        <Textarea id="mensaje" rows={5} className="mt-2" {...register("mensaje")} {...field("mensaje")} />
        <Err name="mensaje" />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" variant="gold" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
          <Send className="size-4" />
          {isSubmitting ? "Enviando..." : "Enviar consulta"}
        </Button>
      </div>
    </form>
  );
}
