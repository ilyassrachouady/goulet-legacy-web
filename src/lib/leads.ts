/**
 * Envoi des formulaires.
 *
 * Point d'intégration unique : le webhook de production est fourni par
 * VITE_FORM_WEBHOOK_URL. Sans webhook, on prépare un courriel à l'équipe au
 * lieu de simuler une réception qui n'aurait pas réellement eu lieu.
 */

export type FormPayload = Record<string, string> & { formulaire: string };

export const FORM_WEBHOOK_URL = import.meta.env.VITE_FORM_WEBHOOK_URL?.trim() ?? "";

export type LeadSubmission = "sent" | "email-draft";

export async function submitLead(payload: FormPayload): Promise<LeadSubmission> {
  const body = { ...payload, envoyeLe: new Date().toISOString(), source: "site-web" };

  if (!FORM_WEBHOOK_URL) {
    const subject = encodeURIComponent(`Demande Web — ${payload.formulaire}`);
    const message = encodeURIComponent(
      Object.entries(payload)
        .filter(([key]) => key !== "formulaire")
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n"),
    );
    window.location.assign(`mailto:goulets@sutton.com?subject=${subject}&body=${message}`);
    return "email-draft";
  }

  const res = await fetch(FORM_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error("Échec de l'envoi");
  return "sent";
}
