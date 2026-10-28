import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/bits";
import { EVENTS } from "@/data/town";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [{ title: "Events · Town of Carroll" }] }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <PageIntro
        kicker="Community"
        title="Yearly events"
        lede="The standing seasons the town publishes. Dates that follow a rule — the Saturday before Easter, the second weekend in June, the Saturday after Thanksgiving — are on the calendar."
      />
      <p className="mx-auto max-w-6xl px-5 pt-8">
        <Link to="/calendar" className="font-semibold text-spruce underline decoration-line underline-offset-4">
          Open the meeting and events calendar
        </Link>
      </p>
      <ol className="mx-auto max-w-6xl space-y-0 px-5 py-10">
        {EVENTS.map((event) => (
          <li key={event.title} className="grid gap-2 border-t border-line py-6 md:grid-cols-4">
            <p className="text-xs font-semibold tracking-widest text-copper uppercase">{event.when}</p>
            <div className="md:col-span-3">
              <h2 className="font-display text-2xl">{event.title}</h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">{event.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
