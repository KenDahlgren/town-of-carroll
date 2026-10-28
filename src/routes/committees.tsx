import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/bits";
import { COMMITTEES } from "@/data/town";

export const Route = createFileRoute("/committees")({
  head: () => ({ meta: [{ title: "Committees · Town of Carroll" }] }),
  component: CommitteesPage,
});

function CommitteesPage() {
  return (
    <>
      <PageIntro
        kicker="Government"
        title="Committees"
        lede="Committee rosters from the town site. A chairman is named in the line where the town marked one."
      />
      <div className="mx-auto grid max-w-6xl gap-px bg-line px-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {COMMITTEES.map((committee) => (
          <section key={committee.name} className="bg-paper p-5">
            <h2 className="font-display text-xl">{committee.name}</h2>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {committee.members.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
