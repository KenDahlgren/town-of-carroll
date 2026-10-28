import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/bits";
import { ATTRACTIONS } from "@/data/town";

export const Route = createFileRoute("/attractions")({
  head: () => ({ meta: [{ title: "Attractions · Town of Carroll" }] }),
  component: AttractionsPage,
});

function AttractionsPage() {
  return (
    <>
      <PageIntro
        kicker="Community"
        title="Attractions"
        lede="The town’s own description: farmland and forest in the Allegany foothills, with lakes, a state park, and Jamestown less than an hour away."
      />
      <div className="mx-auto max-w-6xl px-5 py-10">
        <img
          src="/images/foothills.jpg"
          alt="Rolling autumn fields with a distant barn and wooded ridges"
          className="mb-8 h-72 w-full object-cover"
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {ATTRACTIONS.map((place) => (
            <li key={place.name} className="border-t border-line pt-4">
              <h2 className="font-display text-2xl">{place.name}</h2>
              <p className="mt-2 leading-relaxed text-muted">{place.detail}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">
          Forty minutes south, toward Erie, the town notes horse racing, gaming, and auto racing.
          Ski hills and golf — from full courses to walking par-3s — are part of the same winter
          and summer circuit.
        </p>
      </div>
    </>
  );
}
