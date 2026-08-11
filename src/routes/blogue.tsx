import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/blogue")({
  beforeLoad: () => {
    throw redirect({ to: "/contact", replace: true });
  },
  component: () => null,
});
