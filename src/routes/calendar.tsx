import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageIntro } from "@/components/site/bits";
import {
  KINDS,
  SUMMER_NOTE,
  eventsForMonth,
  isoDate,
  monthGrid,
  monthLabel,
  parseIso,
  type CalKind,
} from "@/data/calendar";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Calendar · Town of Carroll" },
      {
        name: "description",
        content:
          "Town Board meetings, justice court, Historical Society, and yearly Frewsburg events.",
      },
    ],
  }),
  component: CalendarPage,
});

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function CalendarPage() {
  const [cursor, setCursor] = useState({ year: 2026, month: 9 });
  const [todayIso, setTodayIso] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [kinds, setKinds] = useState<CalKind[]>(KINDS.map((kind) => kind.id));

  useEffect(() => {
    const now = new Date();
    setCursor({ year: now.getFullYear(), month: now.getMonth() });
    setTodayIso(isoDate(now.getFullYear(), now.getMonth(), now.getDate()));
  }, []);

  const events = useMemo(
    () => eventsForMonth(cursor.year, cursor.month).filter((event) => kinds.includes(event.kind)),
    [cursor, kinds],
  );
  const byDay = useMemo(() => {
    const map = new Map<string, typeof events>();
    for (const event of events) {
      const list = map.get(event.iso) ?? [];
      list.push(event);
      map.set(event.iso, list);
    }
    return map;
  }, [events]);
  const cells = monthGrid(cursor.year, cursor.month);
  const shown = selected ? (byDay.get(selected) ?? []) : events;

  function shift(delta: number) {
    const next = new Date(cursor.year, cursor.month + delta, 1);
    setCursor({ year: next.getFullYear(), month: next.getMonth() });
    setSelected(null);
  }

  function toggleKind(kind: CalKind) {
    setKinds((current) => {
      if (current.includes(kind)) {
        const next = current.filter((item) => item !== kind);
        return next.length === 0 ? current : next;
      }
      return [...current, kind];
    });
  }

  return (
    <>
      <PageIntro
        kicker="Town Hall"
        title="Calendar"
        lede="Posted notices and the regular schedules from the town site: board meetings, both court dockets, Historical Society Mondays, and the yearly Frewsburg events that have a rule for the date. Confirm a night with the clerk before you go."
      />
      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-col gap-4 border border-line bg-surface p-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => shift(-1)} className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line bg-paper text-lg">
              <span className="sr-only">Previous month</span>
              <span aria-hidden="true">‹</span>
            </button>
            <h2 className="min-w-52 text-center font-display text-2xl">{monthLabel(cursor.year, cursor.month)}</h2>
            <button type="button" onClick={() => shift(1)} className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line bg-paper text-lg">
              <span className="sr-only">Next month</span>
              <span aria-hidden="true">›</span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (!todayIso) return;
                const today = parseIso(todayIso);
                setCursor({ year: today.year, month: today.month });
                setSelected(todayIso);
              }}
              className="inline-flex min-h-11 items-center border border-line bg-paper px-3 text-sm font-semibold"
            >
              Today
            </button>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter calendar">
            {KINDS.map((kind) => {
              const on = kinds.includes(kind.id);
              return (
                <button
                  key={kind.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleKind(kind.id)}
                  className={
                    "inline-flex min-h-11 items-center gap-2 border px-3 text-sm font-semibold " +
                    (on ? "border-spruce bg-paper text-ink" : "border-line bg-paper text-muted")
                  }
                >
                  <Dot kind={kind.id} />
                  {kind.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-7 border-t border-l border-line bg-line">
              {WEEKDAYS.map((day) => (
                <div key={day} className="border-r border-b border-line bg-paper px-1 py-2 text-center text-xs font-semibold tracking-widest text-muted uppercase">
                  <span className="sm:hidden">{day.slice(0, 1)}</span>
                  <span className="hidden sm:inline">{day}</span>
                </div>
              ))}
              {cells.map((day, index) => {
                if (day == null) {
                  return <div key={`empty-${index}`} className="min-h-16 border-r border-b border-line bg-paper md:min-h-28" />;
                }
                const iso = isoDate(cursor.year, cursor.month, day);
                const dayEvents = byDay.get(iso) ?? [];
                const isSelected = selected === iso;
                const isToday = todayIso === iso;
                return (
                  <button
                    key={iso}
                    type="button"
                    onClick={() => setSelected(isSelected ? null : iso)}
                    aria-pressed={isSelected}
                    className={
                      "flex min-h-16 flex-col items-start gap-1 border-r border-b border-line p-1 text-left md:min-h-28 md:p-2 " +
                      (isSelected ? "bg-deep text-paper" : "bg-surface hover:bg-paper")
                    }
                  >
                    <span className={"text-sm font-semibold tabular-nums " + (isToday && !isSelected ? "text-copper" : "")}>
                      {day}
                      {isToday ? <span className="sr-only">, today</span> : null}
                    </span>
                    <span className="flex gap-1 md:hidden" aria-hidden="true">
                      {dayEvents.slice(0, 3).map((event) => (
                        <Dot key={event.title + event.time} kind={event.kind} light={isSelected} />
                      ))}
                    </span>
                    <span className="hidden w-full md:block">
                      {dayEvents.slice(0, 2).map((event) => (
                        <span key={event.title + event.time} className="mt-1 block truncate text-xs leading-tight">
                          {event.time} {event.title}
                        </span>
                      ))}
                      {dayEvents.length > 2 ? (
                        <span className={"mt-1 block text-xs " + (isSelected ? "text-paper/70" : "text-muted")}>
                          +{dayEvents.length - 2} more
                        </span>
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
            {cursor.month >= 5 && cursor.month <= 7 ? (
              <p className="mt-4 text-sm leading-relaxed text-muted">{SUMMER_NOTE}</p>
            ) : null}
          </div>

          <aside className="lg:col-span-2">
            <h2 className="font-display text-2xl">
              {selected
                ? new Date(selected + "T12:00:00").toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })
                : "This month"}
            </h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {shown.length === 0 ? (
                <li className="py-6 text-sm text-muted">Nothing on the published schedule.</li>
              ) : (
                shown.map((event) => (
                  <li key={event.iso + event.time + event.title} className="py-4">
                    <p className="text-xs font-semibold tracking-widest text-copper uppercase">
                      {event.source === "posted" ? "Posted notice" : "Regular schedule"}
                      {!selected ? ` · ${parseIso(event.iso).day}` : ""}
                    </p>
                    <p className="mt-1 font-semibold">
                      <Dot kind={event.kind} /> <span className="ml-2">{event.time}</span>
                    </p>
                    <h3 className="font-display text-xl">{event.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{event.detail}</p>
                  </li>
                ))
              )}
            </ul>
            <p className="mt-4 text-sm">
              <Link to="/minutes" className="font-semibold text-spruce underline decoration-line underline-offset-4">
                Meeting minutes
              </Link>
              <span className="mx-2 text-muted" aria-hidden="true">
                ·
              </span>
              <Link to="/events" className="font-semibold text-spruce underline decoration-line underline-offset-4">
                Yearly events
              </Link>
            </p>
          </aside>
        </div>
      </div>
    </>
  );
}

function Dot({ kind, light }: { kind: CalKind; light?: boolean }) {
  const tone =
    kind === "meeting"
      ? "bg-copper"
      : kind === "court"
        ? light
          ? "bg-paper"
          : "bg-spruce"
        : kind === "history"
          ? light
            ? "bg-paper/70"
            : "bg-muted"
          : light
            ? "bg-paper"
            : "bg-ink";
  return <span className={"inline-block size-2 " + tone} aria-hidden="true" />;
}
