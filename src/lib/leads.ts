/**
 * Envoi des formulaires.
 *
 * Point d'intégration unique : brancher ici un webhook CRM (Zapier, Make,
 * HubSpot, Follow Up Boss…) ou une fonction serveur. Tant que
 * `FORM_WEBHOOK_URL` est vide, la soumission est simplement simulée côté
 * client afin de garder l'interface fonctionnelle.
 */

export type FormPayload = Record<string, string> & { formulaire: string };

export const FORM_WEBHOOK_URL = "";

export async function submitLead(payload: FormPayload): Promise<void> {
  const body = { ...payload, envoyeLe: new Date().toISOString(), source: "site-web" };

  if (!FORM_WEBHOOK_URL) {
    // Aucun CRM branché pour le moment : on simule un envoi réussi.
    await new Promise((resolve) => setTimeout(resolve, 900));
    if (typeof console !== "undefined") console.info("[Goulet Immobilier] Demande reçue", body);
    return;
  }

  const res = await fetch(FORM_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error("Échec de l'envoi");
}
