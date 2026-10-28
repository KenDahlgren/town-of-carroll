import { createFileRoute } from "@tanstack/react-router";
import { Ext, PageIntro } from "@/components/site/bits";
import { MEETING, MINUTE_YEARS, PUBLICATIONS } from "@/data/town";

export const Route = createFileRoute("/minutes")({
  head: () => ({ meta: [{ title: "Minutes · Town of Carroll" }] }),
  component: MinutesPage,
});

function MinutesPage() {
  const agenda = PUBLICATIONS.find((item) => item.label === "Posted agenda");
  return (
    <>
      <PageIntro
        kicker="Records"
        title="Minutes"
        lede="From 2020 on, each meeting file is meant to hold the minutes, attachments, and any required transcript together. Earlier years often lack attachments. Minutes go back to 2008 here; older copies are at the clerk’s office."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-3">
        <aside className="border border-line bg-deep p-6 text-paper lg:col-span-1">
          <p className="text-xs font-semibold tracking-widest text-paper/70 uppercase">Next posted meeting</p>
          <h2 className="mt-3 font-display text-3xl">{MEETING.dateLabel}</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-paper/90">
            <li>{MEETING.start} board meeting</li>
            <li>{MEETING.budget} hearing on the 2027 budget</li>
            <li>{MEETING.moratorium} hearing on a one-year moratorium for mining, solar, and junk yards</li>
          </ul>
          {agenda ? (
            <Ext href={agenda.href} className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold underline decoration-paper/40 underline-offset-4">
              Agenda file on the town site
            </Ext>
          ) : null}
          <p className="mt-3 text-xs leading-relaxed text-paper/60">{agenda?.detail}</p>
        </aside>
        <div className="lg:col-span-2">
          <img
            src="/images/meeting-room.jpg"
            alt="Empty town hall meeting room with an oak table and tall windows"
            className="mb-6 h-48 w-full object-cover"
          />
          <h2 className="font-display text-2xl">By year</h2>
          <p className="mt-2 text-sm text-muted">Each year opens the town’s Dropbox folder.</p>
          <ul className="mt-4 grid grid-cols-3 gap-px bg-line sm:grid-cols-4">
            {MINUTE_YEARS.map((year) => (
              <li key={year.label} className="bg-paper">
                <Ext href={year.href} className="flex min-h-14 items-center justify-center font-display text-xl hover:bg-surface">
                  {year.label}
                </Ext>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
