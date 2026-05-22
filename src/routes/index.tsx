import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MD — Visual Storyteller" },
      { name: "description", content: "Portfolio of MD, a visual storyteller crafting cinematic work." },
      { property: "og:title", content: "MD — Visual Storyteller" },
      { property: "og:description", content: "Portfolio of MD, a visual storyteller crafting cinematic work." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/portfolio.html"
      title="MD — Visual Storyteller"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
}
