import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import { PageIntro, Phone } from "@/components/site/bits";
import { GROUPS, OFFICIALS } from "@/data/town";

export const Route = createFileRoute("/officials")({
  head: () => ({
    meta: [{ title: "Officials · Town of Carroll" }],
  }),
  component: OfficialsPage,
});

function OfficialsPage() {
  const [group, setGroup] = useState<(typeof GROUPS)[number] | "All">("All");
  const [query, setQuery] = useState("");
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return OFFICIALS.filter((person) => {
      if (group !== "All" && person.group !== group) return false;
      if (!q) return true;
      return `${person.name} ${person.title} ${person.email ?? ""} ${person.note ?? ""}`
        .toLowerCase()
        .includes(q);
    });
  }, [group, query]);

  return (
    <>
      <PageIntro
        kicker="Government"
        title="Officials"
        lede="Names, phones, and emails as published by the town. The regular board meeting is the second Wednesday; confirm the clock time with the clerk — the town’s own pages list both 6:30 and 6:40 pm."
      />
      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a name or office"
            aria-label="Search officials"
            className="w-full border border-line bg-surface px-4 py-3 text-ink outline-none placeholder:text-muted focus:border-spruce md:max-w-sm"
          />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by office">
            <Chip on={group === "All"} onClick={() => setGroup("All")}>
              All
            </Chip>
            {GROUPS.map((name) => (
              <Chip key={name} on={group === name} onClick={() => setGroup(name)}>
                {name}
              </Chip>
            ))}
          </div>
        </div>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {list.length === 0 ? (
            <li className="py-8 text-muted">No one matches that search.</li>
          ) : (
            list.map((person) => (
              <li key={person.title + person.name} className="grid gap-2 py-5 md:grid-cols-12 md:gap-6">
                <p className="text-xs font-semibold tracking-widest text-copper uppercase md:col-span-3">
                  {person.group}
                </p>
                <div className="md:col-span-5">
                  <h2 className="font-display text-2xl">{person.name}</h2>
                  <p className="text-muted">{person.title}</p>
                </div>
                <div className="text-sm leading-relaxed md:col-span-4">
                  {person.phones?.map((phone) => (
                    <p key={phone}>
                      <Phone display={phone} />
                    </p>
                  ))}
                  {person.email ? (
                    <p>
                      <a className="break-all text-spruce underline decoration-line underline-offset-2" href={`mailto:${person.email}`}>
                        {person.email}
                      </a>
                    </p>
                  ) : null}
                  {person.note ? <p className="mt-1 text-muted">{person.note}</p> : null}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}

function Chip({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={
        "inline-flex min-h-11 items-center border px-3 text-sm font-semibold " +
        (on ? "border-spruce bg-spruce text-paper" : "border-line bg-surface text-ink")
      }
    >
      {children}
    </button>
  );
}
