import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/bits";
import { BOARDS } from "@/data/town";

export const Route = createFileRoute("/boards")({
  head: () => ({ meta: [{ title: "Boards · Town of Carroll" }] }),
  component: BoardsPage,
});

function BoardsPage() {
  return (
    <>
      <PageIntro
        kicker="Government"
        title="Boards"
        lede="Membership as posted by the town. Vacancies are shown where the page left a seat blank."
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-2">
        {BOARDS.map((board) => (
          <section key={board.name} className="border border-line bg-surface p-6">
            <h2 className="font-display text-2xl">{board.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{board.note}</p>
            <ul className="mt-4 divide-y divide-line">
              {board.seats.map((seat) => (
                <li key={seat.role + seat.name} className="flex items-baseline justify-between gap-4 py-2 text-sm">
                  <span>
                    <span className="font-semibold">{seat.name}</span>
                    <span className="block text-muted">{seat.role}</span>
                  </span>
                  {seat.extra ? <span className="shrink-0 text-muted">{seat.extra}</span> : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
