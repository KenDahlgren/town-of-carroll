import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/bits";

const CARDS = [
  {
    to: "/officials",
    title: "Officials",
    detail: "Supervisor, board, clerk, court, police, highway, water, and code enforcement.",
  },
  {
    to: "/boards",
    title: "Boards",
    detail: "Town Board, fire commissioners, planning, zoning, assessment review, and ethics.",
  },
  {
    to: "/committees",
    title: "Committees",
    detail: "Agriculture through water — who sits on each town committee.",
  },
  {
    to: "/forms",
    title: "Forms & publications",
    detail: "Budget, tax roll, water report, comprehensive plan. Permit forms are being revised.",
  },
] as const;

export const Route = createFileRoute("/government")({
  head: () => ({
    meta: [{ title: "Government · Town of Carroll" }],
  }),
  component: GovernmentPage,
});

function GovernmentPage() {
  return (
    <>
      <PageIntro
        kicker="Town Hall"
        title="Government"
        lede="The same four doors the old site listed — officials, boards, committees, and the documents they publish — set out so you can find a person or a filing without scrolling a single column."
      />
      <div className="mx-auto grid max-w-6xl gap-px bg-line px-5 py-10 md:grid-cols-2">
        {CARDS.map((card) => (
          <Link key={card.to} to={card.to} className="bg-paper p-6 hover:bg-surface md:p-8">
            <h2 className="font-display text-3xl">{card.title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{card.detail}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
