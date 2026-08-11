import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitLead } from "@/lib/leads";

const schema = z.object({
  nom: z.string().min(2, "Veuillez indiquer votre prénom et votre nom."),
  courriel: z.string().email("Veuillez indiquer un courriel valide."),
  telephone: z.string().min(10, "Veuillez indiquer un numéro de téléphone valide."),
  sujet: z.string().min(1, "Veuillez choisir un sujet."),
  courtier: z.string().min(1, "Veuillez choisir un courtier."),
  message: z.string().min(10, "Quelques mots de plus nous aideront à bien vous répondre."),
  reference: z.string().max(0).optional(),
});

type Values = z.infer<typeof schema>;

const sujets = [
  "Vendre ma propriété",
  "Acheter une propriété",
  "Investir",
  "Immobilier commercial",
  "Autre question",
];

export function ContactForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { sujet: "", courtier: "Peu importe" },
  });

  const onSubmit = async (values: Values) => {
    try {
      const result = await submitLead({
        formulaire: "contact",
        nom: values.nom,
        courriel: values.courriel,
        telephone: values.telephone,
        sujet: values.sujet,
        courtier: values.courtier,
        message: values.message,
      });
      if (result === "email-draft") {
        toast.info(
          "Votre application de courriel est ouverte. Envoyez le message pour nous joindre.",
        );
        return;
      }
      setDone(true);
      reset();
      toast.success("Message envoyé. Merci !");
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
        <p className="mt-5 font-display text-2xl">Message reçu.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Nous vous répondrons dans les meilleurs délais. Pour une réponse immédiate, appelez Simon
          au 438 399-4934.
        </p>
        <Button variant="quiet" size="lg" className="mt-6" onClick={() => setDone(false)}>
          Écrire un autre message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid gap-4 rounded-lg border border-border bg-surface p-4 shadow-soft sm:grid-cols-2 sm:gap-5 sm:p-6 md:p-8"
    >
      <div>
        <Label htmlFor="ct-nom" className="text-xs text-muted-foreground">
          Prénom et nom
        </Label>
        <Input id="ct-nom" className="mt-2 h-12" autoComplete="name" {...register("nom")} />
        {errors.nom && <p className="mt-1.5 text-xs text-primary">{errors.nom.message}</p>}
      </div>

      <div>
        <Label htmlFor="ct-courriel" className="text-xs text-muted-foreground">
          Courriel
        </Label>
        <Input
          id="ct-courriel"
          type="email"
          className="mt-2 h-12"
          autoComplete="email"
          {...register("courriel")}
        />
        {errors.courriel && (
          <p className="mt-1.5 text-xs text-primary">{errors.courriel.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="ct-tel" className="text-xs text-muted-foreground">
          Téléphone
        </Label>
        <Input
          id="ct-tel"
          type="tel"
          className="mt-2 h-12"
          autoComplete="tel"
          {...register("telephone")}
        />
        {errors.telephone && (
          <p className="mt-1.5 text-xs text-primary">{errors.telephone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="ct-sujet" className="text-xs text-muted-foreground">
          Sujet
        </Label>
        <select
          id="ct-sujet"
          className="mt-2 h-12 w-full rounded-md border border-input bg-transparent px-4 text-sm"
          {...register("sujet")}
        >
          <option value="">Choisir…</option>
          {sujets.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.sujet && <p className="mt-1.5 text-xs text-primary">{errors.sujet.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="ct-courtier" className="text-xs text-muted-foreground">
          Courtier souhaité
        </Label>
        <select
          id="ct-courtier"
          className="mt-2 h-12 w-full rounded-md border border-input bg-transparent px-4 text-sm"
          {...register("courtier")}
        >
          <option value="Peu importe">Peu importe</option>
          <option value="Simon Goulet">Simon Goulet — Rive-Sud</option>
          <option value="Sylvain Goulet">Sylvain Goulet — Estrie</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="ct-message" className="text-xs text-muted-foreground">
          Votre message
        </Label>
        <Textarea id="ct-message" rows={5} className="mt-2" {...register("message")} />
        {errors.message && <p className="mt-1.5 text-xs text-primary">{errors.message.message}</p>}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="ct-reference">Référence</label>
        <input id="ct-reference" tabIndex={-1} autoComplete="off" {...register("reference")} />
      </div>

      <div className="sm:col-span-2">
        <Button
          type="submit"
          variant="accent"
          size="xl"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
          {isSubmitting ? "Envoi en cours…" : "Envoyer ma demande"}
        </Button>
        <p className="mt-4 text-xs text-muted-foreground">
          Vos renseignements demeurent confidentiels et servent uniquement à vous répondre.
        </p>
      </div>
    </form>
  );
}
