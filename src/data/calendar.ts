export type CalKind = "meeting" | "court" | "community" | "history";

export type CalEvent = {
  iso: string;
  time: string;
  title: string;
  detail: string;
  kind: CalKind;
  source: "posted" | "regular";
};

export const KINDS: { id: CalKind; label: string }[] = [
  { id: "meeting", label: "Town Board" },
  { id: "court", label: "Court" },
  { id: "history", label: "Historical Society" },
  { id: "community", label: "Community" },
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function monthLabel(year: number, month: number) {
  return `${MONTHS[month]} ${year}`;
}

export function isoDate(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function parseIso(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return { year, month: month - 1, day };
}

function nthWeekday(year: number, month: number, weekday: number, n: number) {
  const first = new Date(year, month, 1).getDay();
  const day = 1 + ((weekday - first + 7) % 7) + (n - 1) * 7;
  const last = new Date(year, month + 1, 0).getDate();
  return day <= last ? day : null;
}

function easter(year: number) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return { month: month - 1, day };
}

function timeValue(time: string) {
  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return 0;
  let hour = Number(match[1]) % 12;
  if (match[2] && match[3].toUpperCase() === "PM") hour += 12;
  return hour * 60 + Number(match[2]);
}

const BOARD_NOTE =
  "Standing date is the second Wednesday at Town Hall. The town’s pages list both 6:30 pm and 6:40 pm — call the clerk at 716-569-5365 to confirm.";

export function eventsForMonth(year: number, month: number): CalEvent[] {
  const items: CalEvent[] = [];
  const add = (day: number | null, event: Omit<CalEvent, "iso">) => {
    if (day == null) return;
    items.push({ ...event, iso: isoDate(year, month, day) });
  };

  const secondWednesday = nthWeekday(year, month, 3, 2);
  const postedNovember = year === 2026 && month === 10;
  if (!postedNovember) {
    add(secondWednesday, {
      time: "6:30 PM",
      title: "Town Board meeting",
      detail: BOARD_NOTE,
      kind: "meeting",
      source: "regular",
    });
  }

  if (postedNovember) {
    items.push(
      {
        iso: "2026-11-04",
        time: "6:30 PM",
        title: "Town Board meeting",
        detail:
          "Posted November meeting at Town Hall. This date is a Wednesday, but it is not the usual second Wednesday. A public hearing follows.",
        kind: "meeting",
        source: "posted",
      },
      {
        iso: "2026-11-04",
        time: "7:00 PM",
        title: "Public hearing · 2027 budget",
        detail: "Hearing on the 2027 Town Budget, held with the November board meeting.",
        kind: "meeting",
        source: "posted",
      },
      {
        iso: "2026-11-04",
        time: "7:15 PM",
        title: "Public hearing · one-year moratorium",
        detail: "Hearing on adopting a one-year moratorium covering mining, solar, and junk yards.",
        kind: "meeting",
        source: "posted",
      },
    );
  }

  for (const n of [2, 4]) {
    add(nthWeekday(year, month, 2, n), {
      time: "5:00 PM",
      title: "Justice Court · Robert Gray",
      detail: "Second and fourth Tuesday. Court clerk Tara Gray. Town Hall, 716-569-5219.",
      kind: "court",
      source: "regular",
    });
    add(nthWeekday(year, month, 3, n), {
      time: "10:00 AM",
      title: "Justice Court · Tamera Kinne-Gustafson",
      detail:
        "Second and fourth Wednesday. Court clerk Wanda Crossley. The clerk’s payment window is closed Wednesdays. 716-569-5219.",
      kind: "court",
      source: "regular",
    });
  }

  if (month >= 2 && month <= 10) {
    add(nthWeekday(year, month, 1, 3), {
      time: "6:30 PM",
      title: "Historical Society meeting",
      detail:
        "Third Monday, March through November, in the building behind Town Hall. Open to the public. Saturday visiting hours are May through September, 2:00–4:00 pm.",
      kind: "history",
      source: "regular",
    });
  }

  const easterDay = easter(year);
  if (easterDay.month === month) {
    const eve = new Date(year, easterDay.month, easterDay.day - 1);
    if (eve.getMonth() === month) {
      add(eve.getDate(), {
        time: "Daytime",
        title: "Easter egg hunt",
        detail:
          "Saturday before Easter, at the Frewsburg Central High School football field if the weather holds. Otherwise the high-school gym.",
        kind: "community",
        source: "regular",
      });
    }
  }
  if (easterDay.month === month + 1 && easterDay.day === 1) {
    const eve = new Date(year, easterDay.month, 0);
    if (eve.getMonth() === month) {
      add(eve.getDate(), {
        time: "Daytime",
        title: "Easter egg hunt",
        detail:
          "Saturday before Easter, at the Frewsburg Central High School football field if the weather holds. Otherwise the high-school gym.",
        kind: "community",
        source: "regular",
      });
    }
  }

  if (month === 5) {
    const saturday = nthWeekday(year, month, 6, 2);
    add(saturday, {
      time: "Weekend",
      title: "Community-wide lawn sales",
      detail:
        "Second weekend in June, continuing Sunday. Maps are at the clerk’s office. Call the Town Clerk to be added.",
      kind: "community",
      source: "regular",
    });
    if (saturday != null) {
      add(saturday + 1, {
        time: "Weekend",
        title: "Community-wide lawn sales",
        detail: "Second day of the community-wide lawn-sale weekend.",
        kind: "community",
        source: "regular",
      });
    }
  }

  if (month === 10) {
    const thanksgiving = nthWeekday(year, month, 4, 4);
    if (thanksgiving != null) {
      const parade = new Date(year, month, thanksgiving + 2);
      if (parade.getMonth() === month) {
        add(parade.getDate(), {
          time: "Daytime",
          title: "Santa parade and craft show",
          detail:
            "Saturday after Thanksgiving. Old Fashioned Santa Parade with horse-drawn displays, and a craft show at the fire department building.",
          kind: "community",
          source: "regular",
        });
      }
    }
  }

  return items.sort((a, b) => a.iso.localeCompare(b.iso) || timeValue(a.time) - timeValue(b.time));
}

export function monthGrid(year: number, month: number) {
  const lead = new Date(year, month, 1).getDay();
  const count = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < lead; i += 1) cells.push(null);
  for (let day = 1; day <= count; day += 1) cells.push(day);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export const SUMMER_NOTE =
  "The town also lists a Myers Memorial Library book sale, the Frewsburg Fire Company dice run, and Relief Zone events in the summer, without a fixed date.";
