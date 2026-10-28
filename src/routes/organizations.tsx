import { createFileRoute } from "@tanstack/react-router";
import { Ext, PageIntro } from "@/components/site/bits";
import { ORGANIZATIONS } from "@/data/town";

export const Route = createFileRoute("/organizations")({
  head: () => ({ meta: [{ title: "Organizations · Town of Carroll" }] }),
  component: OrganizationsPage,
});

function OrganizationsPage() {
  return (
    <>
      <PageIntro
        kicker="Community"
        title="Organizations"
        lede="Civic groups the town lists. Only the Lions Club link is published on the original page."
      />
      <ul className="mx-auto max-w-6xl divide-y divide-line border-y border-line px-5 py-10">
        {ORGANIZATIONS.map((org) => (
          <li key={org.name} className="flex min-h-14 items-center justify-between gap-4 py-3">
            <span className="font-display text-2xl">{org.name}</span>
            {org.href ? (
              <Ext href={org.href} className="text-sm font-semibold text-spruce">
                Site
              </Ext>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
}
