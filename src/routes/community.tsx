import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/bits";

const LINKS = [
  { to: "/calendar", title: "Calendar", detail: "Board, court, Historical Society, and dated town events." },
  { to: "/events", title: "Yearly events", detail: "Egg hunt, lawn sales, Santa parade." },
  { to: "/attractions", title: "Attractions", detail: "Lakes, the Audubon, the Historical Society, Jamestown." },
  { to: "/businesses", title: "Businesses", detail: "A directory of shops and trades the town lists." },
  { to: "/organizations", title: "Organizations", detail: "Legion, Lions, VFW, 4-H, and the rod and gun club." },
  { to: "/services", title: "Local services", detail: "Fire, water, schools, churches, the park pavilion." },
  { to: "/trails", title: "Rails-to-Trails", detail: "The 2020 letter on the Frewsburg rail corridor." },
] as const;

export const Route = createFileRoute("/community")({
  head: () => ({ meta: [{ title: "Community · Town of Carroll" }] }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <>
      <PageIntro
        kicker="Frewsburg and beyond"
        title="Community"
        lede="Events, places, businesses, and the services that sit alongside town government."
      />
      <div className="mx-auto grid max-w-6xl gap-px bg-line px-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {LINKS.map((item) => (
          <Link key={item.to} to={item.to} className="bg-paper p-6 hover:bg-surface">
            <h2 className="font-display text-2xl">{item.title}</h2>
            <p className="mt-2 text-muted">{item.detail}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
