import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/bits";

export const Route = createFileRoute("/trails")({
  head: () => ({ meta: [{ title: "Rails-to-Trails · Town of Carroll" }] }),
  component: TrailsPage,
});

function TrailsPage() {
  return (
    <>
      <PageIntro
        kicker="Community"
        title="Rails-to-Trails"
        lede="The town still publishes this letter from April 15, 2020. It is a record of that moment, written by then-supervisor Russell Payne — not a current construction notice."
      />
      <article className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-5">
        <img
          src="/images/rail-trail.jpg"
          alt="An old railroad grade through autumn hardwoods, with a creek alongside"
          className="h-72 w-full object-cover lg:col-span-2 lg:h-full"
        />
        <div className="lg:col-span-3">
          <p className="text-sm text-muted">Frewsburg · April 15, 2020</p>
          <div className="mt-4 space-y-4 leading-relaxed">
            <p>Dear residents and visitors,</p>
            <p>
              Supervisor Russell Payne wrote that he had heard from Jim Fincher, director of
              Rails-to-Trails, that the New York State DEC had given permission to begin work on
              the segment in Frewsburg from Main Street to the Pennsylvania line. A contractor
              had agreed to donate time, equipment, and materials to clear and repair the old
              railway bed.
            </p>
            <p>
              The hope was that the corridor could eventually meet trails in Pennsylvania, and
              that the Town of Kiantone might help link it to the Jamestown Audubon sanctuary on
              Riverside Road, close to where the grade meets that road in Carroll.
            </p>
            <p>
              Respectfully submitted,
              <br />
              <span className="font-display text-xl">Russell Payne</span>
              <br />
              Town of Carroll Supervisor
              <br />
              5 West Main Street, Frewsburg, NY 14738
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
