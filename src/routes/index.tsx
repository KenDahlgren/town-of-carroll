import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Ext, Phone } from "@/components/site/bits";
import {
  CLERK_HOURS,
  LIHWAP,
  MEETING,
  PAY_TAXES,
  PAY_WATER,
  PUBLICATIONS,
  TASKS,
  TOWN,
  clerkStatus,
  daysUntil,
} from "@/data/town";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Town of Carroll, New York" },
      {
        name: "description",
        content:
          "Clerk hours, the November town board meeting, tax and water payments, and documents for the Town of Carroll in Frewsburg.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="bg-deep">
        <div className="mx-auto max-w-6xl">
          <img
            src="/images/main-street.jpg"
            alt="Autumn main street in a western New York village, with maples and a white clapboard town hall"
            className="h-80 w-full object-cover md:h-[28rem]"
          />
        </div>
      </section>

      <section className="mx-auto -mt-12 max-w-6xl px-5 md:-mt-20">
        <div className="grid border border-line bg-line md:grid-cols-5">
          <div className="bg-surface p-6 md:col-span-3 md:p-10">
            <p className="text-xs font-semibold tracking-widest text-copper uppercase">
              Frewsburg · Allegany foothills · 1825–2025
            </p>
            <h1 className="mt-3 font-display text-4xl text-ink md:text-6xl">Welcome to Carroll.</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              A rural town in southern Chautauqua County. Town Hall is on West Main Street.
              The clerk’s window, the court, highway, and water department are how most
              things get done — hours, payments, and the people to call are below.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Ext
                href={PAY_TAXES}
                className="inline-flex min-h-11 items-center bg-spruce px-4 text-sm font-semibold text-paper hover:bg-deep"
              >
                Pay property taxes
              </Ext>
              <Ext
                href={PAY_WATER}
                className="inline-flex min-h-11 items-center border border-spruce px-4 text-sm font-semibold text-spruce hover:bg-paper"
              >
                Pay a water bill
              </Ext>
            </div>
          </div>
          <MeetingCard />
        </div>
      </section>

      <Desk />

      <section id="hours" className="mx-auto mt-14 grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <HoursCard />
        <div>
          <h2 className="font-display text-3xl">Before you drive over</h2>
          <ul className="mt-4 space-y-4 text-base leading-relaxed">
            <li className="border-l-2 border-copper pl-4">
              The payment window is open for in-person transactions. The town still prefers
              mail, online payment, or the drop box to the left of the Town Hall door.
              Receipts are mailed back. Questions: <Phone display={TOWN.phone} />.
            </li>
            <li className="border-l-2 border-line pl-4">
              Highway and water doors are usually locked. Call highway at{" "}
              <Phone display="716-569-6161" /> or water at <Phone display="716-450-0088" />{" "}
              before you come.
            </li>
            <li className="border-l-2 border-line pl-4">
              Help with a water bill, including past-due amounts, is available through a New
              York program. Applications are at Town Hall.{" "}
              <Ext href={LIHWAP} className="font-semibold text-spruce underline decoration-line underline-offset-4">
                LIHWAP details
              </Ext>{" "}
              or Freshwater Future at <Phone display="231-348-8200" />.
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl">Documents on file</h2>
          <Link to="/forms" className="text-sm font-semibold text-spruce underline decoration-line underline-offset-4">
            All publications
          </Link>
        </div>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {PUBLICATIONS.slice(0, 6).map((item) => (
            <li key={item.href}>
              <Ext href={item.href} className="flex min-h-14 flex-col justify-center py-3 hover:bg-surface sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="font-semibold">{item.label}</span>
                <span className="text-sm text-muted">{item.detail}</span>
              </Ext>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl items-stretch gap-0 px-5 md:grid-cols-2">
        <img
          src="/images/foothills.jpg"
          alt="Autumn hay fields and wooded ridges in the Allegany foothills"
          className="h-72 w-full object-cover md:h-full"
        />
        <div className="flex flex-col justify-center border border-line bg-surface p-8 md:border-l-0">
          <p className="text-xs font-semibold tracking-widest text-copper uppercase">Two hundred years</p>
          <h2 className="mt-3 font-display text-3xl">1825–2025</h2>
          <p className="mt-4 leading-relaxed text-muted">
            The Historical Society keeps the town’s record — from the Underground Railroad
            to the logging that cleared these ridges — in the building behind Town Hall.
            Open Saturdays in summer, and by appointment.
          </p>
          <Link
            to="/history"
            className="mt-6 inline-flex min-h-11 items-center self-start font-semibold text-spruce underline decoration-line underline-offset-4"
          >
            Town history
          </Link>
        </div>
      </section>
    </>
  );
}

function MeetingCard() {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    setDays(daysUntil(MEETING.iso, new Date()));
  }, []);

  const when =
    days === null
      ? MEETING.dateLabel
      : days > 1
        ? `${days} days away`
        : days === 1
          ? "Tomorrow"
          : days === 0
            ? "Today"
            : "This date has passed";

  return (
    <aside className="bg-deep p-6 text-paper md:col-span-2 md:p-8">
      <p className="text-xs font-semibold tracking-widest text-paper/70 uppercase">Town Hall notice</p>
      <p className="mt-4 font-display text-3xl leading-tight">{when}</p>
      <p className="mt-1 text-sm text-paper/70">{MEETING.dateLabel}</p>
      <ol className="mt-6 space-y-3 text-sm leading-relaxed">
        <li>
          <span className="font-semibold">{MEETING.start}</span> — November town board meeting
        </li>
        <li>
          <span className="font-semibold">{MEETING.budget}</span> — Public hearing, 2027 town budget
        </li>
        <li>
          <span className="font-semibold">{MEETING.moratorium}</span> — Public hearing on a one-year
          moratorium covering mining, solar, and junk yards
        </li>
      </ol>
      <div className="mt-6 flex flex-wrap gap-x-5">
        <Link to="/calendar" className="inline-flex min-h-11 items-center text-sm font-semibold underline decoration-paper/40 underline-offset-4">
          Calendar
        </Link>
        <Link to="/minutes" className="inline-flex min-h-11 items-center text-sm font-semibold underline decoration-paper/40 underline-offset-4">
          Minutes and agendas
        </Link>
      </div>
    </aside>
  );
}

function Desk() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TASKS.slice(0, 4);
    return TASKS.filter((task) => `${task.title} ${task.detail} ${task.keys}`.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  return (
    <section className="mx-auto mt-14 max-w-6xl px-5">
      <div className="border border-line bg-surface p-6 md:p-8">
        <label htmlFor="desk" className="font-display text-3xl">
          What do you need?
        </label>
        <p className="mt-2 text-muted">Taxes, water, a permit, the highway garage, minutes.</p>
        <input
          id="desk"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try water, dog, permit, minutes"
          className="mt-5 w-full border border-line bg-paper px-4 py-3 text-base text-ink outline-none placeholder:text-muted focus:border-spruce"
        />
        <ul className="mt-4 divide-y divide-line">
          {results.length === 0 ? (
            <li className="py-4 text-muted">Nothing matches. Call the clerk at {TOWN.phone}.</li>
          ) : (
            results.map((task) => (
              <li key={task.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="font-semibold">{task.title}</p>
                  <p className="text-sm text-muted">{task.detail}</p>
                </div>
                {task.href ? (
                  <Ext href={task.href} className="inline-flex min-h-11 items-center text-sm font-semibold text-spruce">
                    Open
                  </Ext>
                ) : task.to ? (
                  <Link to={task.to} className="inline-flex min-h-11 items-center text-sm font-semibold text-spruce">
                    Go
                  </Link>
                ) : task.anchor ? (
                  <a href={task.anchor} className="inline-flex min-h-11 items-center text-sm font-semibold text-spruce">
                    Go
                  </a>
                ) : null}
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}

function HoursCard() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);
  useEffect(() => {
    setStatus(clerkStatus(new Date()));
  }, []);
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-3xl">Clerk’s window</h2>
        {status ? (
          <p className={"text-sm font-semibold " + (status.open ? "text-spruce" : "text-copper")}>{status.label}</p>
        ) : (
          <p className="text-sm text-muted">Checking today’s hours</p>
        )}
      </div>
      <table className="mt-4 w-full border-collapse text-left text-sm">
        <caption className="sr-only">Town Clerk office hours</caption>
        <tbody>
          {CLERK_HOURS.map((row) => {
            const isToday = status !== null && row.day === today;
            return (
              <tr key={row.day} className={isToday ? "bg-surface" : undefined}>
                <th scope="row" className="w-28 border-t border-line py-3 pr-3 font-semibold">
                  {row.day}
                  {isToday ? <span className="ml-2 text-xs font-semibold tracking-widest text-copper uppercase">Today</span> : null}
                </th>
                <td className="border-t border-line py-3">
                  <span className="block">{row.hours}</span>
                  {row.note ? <span className="block text-muted">{row.note}</span> : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
