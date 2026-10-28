import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Ext, PageIntro, Phone } from "@/components/site/bits";
import { BUSINESSES } from "@/data/town";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const Route = createFileRoute("/businesses")({
  head: () => ({ meta: [{ title: "Businesses · Town of Carroll" }] }),
  component: BusinessesPage,
});

function BusinessesPage() {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState<string | null>(null);
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BUSINESSES.filter((biz) => {
      if (letter && !biz.name.toUpperCase().startsWith(letter)) return false;
      if (!q) return true;
      return `${biz.name} ${biz.address ?? ""} ${biz.phone ?? ""}`.toLowerCase().includes(q);
    });
  }, [query, letter]);

  return (
    <>
      <PageIntro
        kicker="Community"
        title="Businesses"
        lede="The directory the town publishes for Frewsburg and Carroll. Listings can go stale — call ahead."
      />
      <div className="mx-auto max-w-6xl px-5 py-8">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search a name, street, or phone"
          aria-label="Search businesses"
          className="w-full border border-line bg-surface px-4 py-3 outline-none placeholder:text-muted focus:border-spruce"
        />
        <div className="mt-4 flex flex-wrap gap-1" role="group" aria-label="Filter by letter">
          <button
            type="button"
            onClick={() => setLetter(null)}
            className={
              "inline-flex min-h-11 min-w-11 items-center justify-center border px-2 text-sm font-semibold " +
              (letter === null ? "border-spruce bg-spruce text-paper" : "border-line bg-surface")
            }
          >
            All
          </button>
          {LETTERS.map((char) => {
            const has = BUSINESSES.some((biz) => biz.name.toUpperCase().startsWith(char));
            return (
              <button
                key={char}
                type="button"
                disabled={!has}
                onClick={() => setLetter(letter === char ? null : char)}
                className={
                  "inline-flex min-h-11 min-w-11 items-center justify-center border text-sm font-semibold disabled:cursor-not-allowed disabled:text-line " +
                  (letter === char ? "border-spruce bg-spruce text-paper" : "border-line bg-surface")
                }
              >
                {char}
              </button>
            );
          })}
        </div>
        <p className="mt-4 text-sm text-muted">
          {list.length} {list.length === 1 ? "listing" : "listings"}
        </p>
        <ul className="mt-2 divide-y divide-line border-y border-line">
          {list.map((biz) => (
            <li key={biz.name} className="grid gap-1 py-4 sm:grid-cols-3 sm:items-baseline">
              <h2 className="font-semibold">
                {biz.href ? (
                  <Ext href={biz.href} className="text-spruce underline decoration-line underline-offset-4">
                    {biz.name}
                  </Ext>
                ) : (
                  biz.name
                )}
              </h2>
              <p className="text-sm text-muted">{biz.address}</p>
              <p className="text-sm sm:text-right">{biz.phone ? <Phone display={biz.phone} /> : <span className="text-muted">No phone listed</span>}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
