import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { COMMUNITY_PATHS, GOV_PATHS, NAV, PAY_TAXES, TOWN, type NavItem } from "@/data/town";

function Seal({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="32" cy="32" r="25.5" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <path
        d="M32 16.5c-6.2 0-10 3.6-10 8.2 0 5.4 4.6 7.6 10 9.6 5.2 1.9 8.2 3.4 8.2 7.2 0 3.4-2.8 5.6-8.2 5.6-4.8 0-8-1.8-9.4-4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M18 46.5h28" stroke="currentColor" strokeWidth="0.8" />
      <text
        x="32"
        y="53.5"
        textAnchor="middle"
        fill="currentColor"
        fontSize="5.2"
        fontFamily="Source Sans 3, sans-serif"
        letterSpacing="1.4"
      >
        1825
      </text>
    </svg>
  );
}

function activeParent(item: NavItem, path: string) {
  if (item.to === "/") return path === "/";
  if (item.label === "Government") return GOV_PATHS.some((p) => path === p);
  if (item.label === "Community") return COMMUNITY_PATHS.some((p) => path === p);
  return path === item.to;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    setMobile(false);
    setOpen(null);
  }, [path]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobile(false);
        setOpen(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="bg-deep text-paper">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2 text-sm">
          <p>
            {TOWN.street}, {TOWN.city}
            <span className="mx-2 text-line/70" aria-hidden="true">
              ·
            </span>
            <a className="underline decoration-paper/40 underline-offset-2 hover:decoration-paper" href={TOWN.phoneHref}>
              {TOWN.phone}
            </a>
          </p>
          <a
            className="inline-flex min-h-11 items-center bg-copper px-3 text-sm font-semibold text-paper hover:bg-deep"
            href={PAY_TAXES}
            target="_blank"
            rel="noreferrer"
          >
            Pay property taxes
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
          <Link to="/" className="flex min-h-11 items-center gap-3">
            <Seal className="size-11 text-spruce" />
            <span>
              <span className="block font-display text-xl leading-none text-ink">Town of Carroll</span>
              <span className="mt-1 block text-xs tracking-widest text-muted uppercase">
                Chautauqua County
              </span>
            </span>
          </Link>
          <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <DesktopItem
                key={item.label}
                item={item}
                path={path}
                open={open === item.label}
                onToggle={() => setOpen(open === item.label ? null : item.label)}
              />
            ))}
          </nav>
          <button
            type="button"
            className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center border border-line lg:hidden"
            aria-expanded={mobile}
            aria-controls="mobile-nav"
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{mobile ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
        {mobile ? (
          <nav id="mobile-nav" className="border-t border-line px-5 py-3 lg:hidden" aria-label="Mobile">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-line last:border-b-0">
                <Link
                  to={item.to}
                  className={
                    "flex min-h-11 items-center font-semibold " +
                    (activeParent(item, path) ? "text-spruce" : "text-ink")
                  }
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="pb-2 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="flex min-h-11 items-center text-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        ) : null}
      </header>

      <main id="content" className="flex-1">
        {children}
      </main>

      <footer className="mt-16 bg-deep text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl">Town of Carroll</p>
            <p className="mt-3 max-w-sm leading-relaxed text-paper/80">
              {TOWN.street}
              <br />
              {TOWN.mailing}
              <br />
              {TOWN.city}
            </p>
            <p className="mt-4 text-sm text-paper/80">
              Phone{" "}
              <a className="text-paper underline decoration-paper/40 underline-offset-2" href={TOWN.phoneHref}>
                {TOWN.phone}
              </a>
              <span className="mx-2" aria-hidden="true">
                ·
              </span>
              Fax {TOWN.fax}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest text-paper/60 uppercase">Government</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="inline-flex min-h-11 items-center hover:underline" to="/officials">Officials</Link></li>
              <li><Link className="inline-flex min-h-11 items-center hover:underline" to="/minutes">Minutes</Link></li>
              <li><Link className="inline-flex min-h-11 items-center hover:underline" to="/forms">Documents</Link></li>
              <li><Link className="inline-flex min-h-11 items-center hover:underline" to="/boards">Boards</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-widest text-paper/60 uppercase">Around town</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="inline-flex min-h-11 items-center hover:underline" to="/businesses">Businesses</Link></li>
              <li><Link className="inline-flex min-h-11 items-center hover:underline" to="/calendar">Calendar</Link></li>
              <li><Link className="inline-flex min-h-11 items-center hover:underline" to="/events">Yearly events</Link></li>
              <li><Link className="inline-flex min-h-11 items-center hover:underline" to="/attractions">Attractions</Link></li>
              <li><Link className="inline-flex min-h-11 items-center hover:underline" to="/history">History</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-paper/15">
          <p className="mx-auto max-w-6xl px-5 py-4 text-sm leading-relaxed text-paper/70">
            A redesigned reading of public information published by the Town of Carroll. Confirm meeting
            times, fees, and filings with the Town Clerk before you rely on them.
          </p>
        </div>
      </footer>
    </div>
  );
}

function DesktopItem({
  item,
  path,
  open,
  onToggle,
}: {
  item: NavItem;
  path: string;
  open: boolean;
  onToggle: () => void;
}) {
  const on = activeParent(item, path);
  if (!item.children) {
    return (
      <Link
        to={item.to}
        className={
          "inline-flex min-h-11 items-center px-3 text-sm font-semibold " +
          (on ? "text-spruce underline decoration-copper decoration-2 underline-offset-8" : "text-ink")
        }
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="relative">
      <button
        type="button"
        className={
          "inline-flex min-h-11 items-center gap-1 px-3 text-sm font-semibold " +
          (on ? "text-spruce" : "text-ink")
        }
        aria-expanded={open}
        onClick={onToggle}
      >
        {item.label}
        <span aria-hidden="true" className="text-xs text-muted">
          {open ? "–" : "+"}
        </span>
      </button>
      {open ? (
        <div className="absolute top-full left-0 z-30 min-w-56 border border-line bg-surface py-1 shadow-sm">
          <Link to={item.to} className="flex min-h-11 items-center px-4 text-sm font-semibold text-ink">
            {item.label} overview
          </Link>
          {item.children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              className={
                "flex min-h-11 items-center px-4 text-sm " +
                (path === child.to ? "bg-paper text-spruce" : "text-ink hover:bg-paper")
              }
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
