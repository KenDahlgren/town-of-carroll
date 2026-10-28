import type { ReactNode } from "react";
import { telHref } from "@/data/town";

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <p className="text-xs font-semibold tracking-widest text-copper uppercase">{kicker}</p>
        <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">{title}</h1>
        {lede ? <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p> : null}
      </div>
    </header>
  );
}

export function Phone({ display }: { display: string }) {
  return (
    <a className="text-spruce underline decoration-line underline-offset-2 hover:decoration-spruce" href={telHref(display)}>
      {display}
    </a>
  );
}

export function Ext({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
