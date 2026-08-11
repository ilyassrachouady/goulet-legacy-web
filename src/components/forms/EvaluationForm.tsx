import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitLead } from "@/lib/leads";
import { propertyTypes, timelines } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const schema = z.object({
  nom: z.string().min(2, "Veuillez indiquer votre prénom et votre nom."),
  courriel: z.string().email("Veuillez indiquer un courriel valide."),
  telephone: z.string().min(10, "Veuillez indiquer un numéro de téléphone valide."),
  adresse: z.string().min(5, "Veuillez indiquer l'adresse de la propriété."),
  type: z.string().min(1, "Veuillez choisir un type de propriété."),
  delai: z.string().min(1, "Veuillez choisir un délai."),
  /** Champ piège antispam : doit rester vide. */
  reference: z.string().max(0).optional(),
});

type Values = z.infer<typeof schema>;

export function EvaluationForm({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [done, setDone] = useState(false);
  const dark = tone === "dark";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { type: "", delai: "" },
  });

  const fieldClass = cn(
    "h-12 rounded-md border bg-transparent px-4 text-sm",
    dark
      ? "border-cream/25 text-charcoal-foreground placeholder:text-cream/40 focus-visible:border-cream/70"
      : "border-input text-foreground placeholder:text-muted-foreground",
  );
  const labelClass = cn("text-xs tracking-wide", dark ? "text-cream/65" : "text-muted-foreground");
  const errorClass = "mt-1.5 text-xs text-primary";

  const onSubmit = async (values: Values) => {
    try {
      const result = await submitLead({
        formulaire: "evaluation-gratuite",
        nom: values.nom,
        courriel: values.courriel,
        telephone: values.telephone,
        adresse: values.adresse,
        type: values.type,
        delai: values.delai,
      });
      if (result === "email-draft") {
        toast.info(
          "Votre application de courriel est ouverte. Envoyez le message pour transmettre votre demande.",
        );
        return;
      }
      setDone(true);
      reset();
      toast.success("Demande envoyée. Nous vous revenons rapidement.");
    } catch {
      toast.error("L'envoi a échoué. Vous pouvez aussi nous appeler directement.");
    }
  };

  if (done) {
    return (
      <div
        className={cn(
          "rounded-lg border p-8 text-center",
          dark ? "border-cream/20 bg-cream/5" : "border-border bg-surface",
        )}
      >
        <span
          className={cn(
            "mx-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground",
          )}
        >
          <Check className="size-5" aria-hidden="true" />
        </span>
        <p className={cn("mt-5 font-display text-2xl", dark && "text-charcoal-foreground")}>
          Merci, votre demande est bien reçue.
        </p>
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed",
            dark ? "text-cream/70" : "text-muted-foreground",
          )}
        >
          Simon ou Sylvain communiquera avec vous afin de préparer l'analyse de votre propriété.
        </p>
        <Button
          variant={dark ? "onDark" : "quiet"}
          size="lg"
          className="mt-6"
          onClick={() => setDone(false)}
        >
          Envoyer une autre demande
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <Label htmlFor="ev-nom" className={labelClass}>
          Prénom et nom
        </Label>
        <Input
          id="ev-nom"
          className={cn(fieldClass, "mt-2")}
          autoComplete="name"
          aria-invalid={!!errors.nom}
          aria-describedby={errors.nom ? "ev-nom-error" : undefined}
          {...register("nom")}
        />
        {errors.nom && (
          <p id="ev-nom-error" role="alert" className={errorClass}>
            {errors.nom.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="ev-courriel" className={labelClass}>
          Courriel
        </Label>
        <Input
          id="ev-courriel"
          type="email"
          inputMode="email"
          autoComplete="email"
          aria-invalid={!!errors.courriel}
          aria-describedby={errors.courriel ? "ev-courriel-error" : undefined}
          className={cn(fieldClass, "mt-2")}
          {...register("courriel")}
        />
        {errors.courriel && (
          <p id="ev-courriel-error" role="alert" className={errorClass}>
            {errors.courriel.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="ev-tel" className={labelClass}>
          Téléphone
        </Label>
        <Input
          id="ev-tel"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          aria-invalid={!!errors.telephone}
          aria-describedby={errors.telephone ? "ev-tel-error" : undefined}
          className={cn(fieldClass, "mt-2")}
          {...register("telephone")}
        />
        {errors.telephone && (
          <p id="ev-tel-error" role="alert" className={errorClass}>
            {errors.telephone.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="ev-adresse" className={labelClass}>
          Adresse de la propriété
        </Label>
        <Input
          id="ev-adresse"
          autoComplete="street-address"
          aria-invalid={!!errors.adresse}
          aria-describedby={errors.adresse ? "ev-adresse-error" : undefined}
          className={cn(fieldClass, "mt-2")}
          {...register("adresse")}
        />
        {errors.adresse && (
          <p id="ev-adresse-error" role="alert" className={errorClass}>
            {errors.adresse.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="ev-type" className={labelClass}>
          Type de propriété
        </Label>
        <select
          id="ev-type"
          className={cn(fieldClass, "mt-2 w-full")}
          aria-invalid={!!errors.type}
          aria-describedby={errors.type ? "ev-type-error" : undefined}
          {...register("type")}
        >
          <option value="">Choisir…</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t} className="text-foreground">
              {t}
            </option>
          ))}
        </select>
        {errors.type && (
          <p id="ev-type-error" role="alert" className={errorClass}>
            {errors.type.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="ev-delai" className={labelClass}>
          Délai prévu pour vendre
        </Label>
        <select
          id="ev-delai"
          className={cn(fieldClass, "mt-2 w-full")}
          aria-invalid={!!errors.delai}
          aria-describedby={errors.delai ? "ev-delai-error" : undefined}
          {...register("delai")}
        >
          <option value="">Choisir…</option>
          {timelines.map((t) => (
            <option key={t} value={t} className="text-foreground">
              {t}
            </option>
          ))}
        </select>
        {errors.delai && (
          <p id="ev-delai-error" role="alert" className={errorClass}>
            {errors.delai.message}
          </p>
        )}
      </div>

      {/* Champ piège antispam, masqué aux personnes et aux lecteurs d'écran */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="ev-reference">Référence</label>
        <input id="ev-reference" tabIndex={-1} autoComplete="off" {...register("reference")} />
      </div>

      <div className="sm:col-span-2">
        <Button
          type="submit"
          variant={dark ? "accent" : "ink"}
          size="xl"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
          {isSubmitting ? "Envoi en cours…" : "Faire évaluer ma propriété"}
        </Button>
        <p className={cn("mt-4 text-xs", dark ? "text-cream/55" : "text-muted-foreground")}>
          Gratuit, confidentiel et sans engagement.
        </p>
      </div>
    </form>
  );
}
