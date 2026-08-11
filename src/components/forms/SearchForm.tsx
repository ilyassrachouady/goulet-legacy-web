import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2, Search } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitLead } from "@/lib/leads";
import { priceRanges, propertyTypes, sectors } from "@/lib/site-data";

const schema = z.object({
  nom: z.string().min(2, "Veuillez indiquer votre prénom et votre nom."),
  courriel: z.string().email("Veuillez indiquer un courriel valide."),
  telephone: z.string().min(10, "Veuillez indiquer un numéro de téléphone valide."),
  secteur: z.string().min(1, "Veuillez choisir un secteur."),
  type: z.string().min(1, "Veuillez choisir un type de propriété."),
  budget: z.string().min(1, "Veuillez choisir une fourchette de prix."),
  criteres: z.string().optional(),
  reference: z.string().max(0).optional(),
});

type Values = z.infer<typeof schema>;

export function SearchForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { secteur: "", type: "", budget: "" },
  });

  const onSubmit = async (values: Values) => {
    try {
      await submitLead({
        formulaire: "recherche-propriete",
        nom: values.nom,
        courriel: values.courriel,
        telephone: values.telephone,
        secteur: values.secteur,
        type: values.type,
        budget: values.budget,
        criteres: values.criteres ?? "",
      });
      setDone(true);
      reset();
      toast.success("Vos critères sont enregistrés.");
    } catch {
      toast.error("L'envoi a échoué. Vous pouvez aussi nous appeler directement.");
    }
  };

  if (done) {
    return (
      <div className="rounded-lg border border-border bg-surface p-8 text-center shadow-soft">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-5" aria-hidden="true" />
        </span>
        <p className="mt-5 font-display text-2xl">Vos critères sont enregistrés.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Nous vous transmettrons les propriétés qui correspondent réellement à ce que vous
          recherchez, dès qu'elles se présentent.
        </p>
        <Button variant="quiet" size="lg" className="mt-6" onClick={() => setDone(false)}>
          Modifier mes critères
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid gap-5 rounded-lg border border-border bg-surface p-6 shadow-soft sm:grid-cols-2 md:p-8"
    >
      <div>
        <Label htmlFor="rc-secteur" className="text-xs text-muted-foreground">
          Secteur recherché
        </Label>
        <select
          id="rc-secteur"
          className="mt-2 h-12 w-full rounded-md border border-input bg-transparent px-4 text-sm"
          {...register("secteur")}
        >
          <option value="">Choisir…</option>
          {sectors.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
        {errors.secteur && <p className="mt-1.5 text-xs text-primary">{errors.secteur.message}</p>}
      </div>

      <div>
        <Label htmlFor="rc-type" className="text-xs text-muted-foreground">
          Type de propriété
        </Label>
        <select
          id="rc-type"
          className="mt-2 h-12 w-full rounded-md border border-input bg-transparent px-4 text-sm"
          {...register("type")}
        >
          <option value="">Choisir…</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.type && <p className="mt-1.5 text-xs text-primary">{errors.type.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="rc-budget" className="text-xs text-muted-foreground">
          Fourchette de prix
        </Label>
        <select
          id="rc-budget"
          className="mt-2 h-12 w-full rounded-md border border-input bg-transparent px-4 text-sm"
          {...register("budget")}
        >
          <option value="">Choisir…</option>
          {priceRanges.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {errors.budget && <p className="mt-1.5 text-xs text-primary">{errors.budget.message}</p>}
      </div>

      <div>
        <Label htmlFor="rc-nom" className="text-xs text-muted-foreground">
          Prénom et nom
        </Label>
        <Input id="rc-nom" className="mt-2 h-12" autoComplete="name" {...register("nom")} />
        {errors.nom && <p className="mt-1.5 text-xs text-primary">{errors.nom.message}</p>}
      </div>

      <div>
        <Label htmlFor="rc-courriel" className="text-xs text-muted-foreground">
          Courriel
        </Label>
        <Input
          id="rc-courriel"
          type="email"
          className="mt-2 h-12"
          autoComplete="email"
          {...register("courriel")}
        />
        {errors.courriel && <p className="mt-1.5 text-xs text-primary">{errors.courriel.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="rc-tel" className="text-xs text-muted-foreground">
          Téléphone
        </Label>
        <Input
          id="rc-tel"
          type="tel"
          className="mt-2 h-12"
          autoComplete="tel"
          {...register("telephone")}
        />
        {errors.telephone && (
          <p className="mt-1.5 text-xs text-primary">{errors.telephone.message}</p>
        )}
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="rc-criteres" className="text-xs text-muted-foreground">
          Vos critères importants (optionnel)
        </Label>
        <Textarea
          id="rc-criteres"
          rows={4}
          placeholder="Nombre de chambres, garage, cour, proximité des écoles…"
          className="mt-2"
          {...register("criteres")}
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="rc-reference">Référence</label>
        <input id="rc-reference" tabIndex={-1} autoComplete="off" {...register("reference")} />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" variant="accent" size="xl" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <Search className="size-4" aria-hidden="true" />
          )}
          {isSubmitting ? "Envoi en cours…" : "Lancer ma recherche"}
        </Button>
      </div>
    </form>
  );
}
