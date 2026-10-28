import { createFileRoute } from "@tanstack/react-router";
import { Ext, PageIntro } from "@/components/site/bits";
import { PUBLICATIONS } from "@/data/town";

export const Route = createFileRoute("/forms")({
  head: () => ({ meta: [{ title: "Forms & publications · Town of Carroll" }] }),
  component: FormsPage,
});

function FormsPage() {
  return (
    <>
      <PageIntro
        kicker="Government"
        title="Forms & publications"
        lede="The town says permit forms are being updated and will be reposted. The publications below are the files currently linked from the site."
      />
      <div className="mx-auto max-w-6xl px-5 py-10">
        <p className="border border-copper/40 bg-surface px-4 py-3 text-sm">
          Forms are currently being updated and will be reposted.
        </p>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {PUBLICATIONS.map((item) => (
            <li key={item.href}>
              <Ext
                href={item.href}
                className="grid gap-1 py-4 hover:bg-surface sm:grid-cols-2 sm:items-baseline sm:gap-8"
              >
                <span className="font-semibold">{item.label}</span>
                <span className="text-sm text-muted">{item.detail}</span>
              </Ext>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          County assessment records live with the{" "}
          <Ext href="http://www.chau-assessors.org/" className="font-semibold text-spruce underline decoration-line underline-offset-4">
            Chautauqua County Assessor’s Office
          </Ext>
          . Senior housing information the town links is at{" "}
          <Ext href="https://www.seniorlivinghelp.org/assisted-living/new-york/" className="font-semibold text-spruce underline decoration-line underline-offset-4">
            Senior Living Help
          </Ext>
          .
        </p>
      </div>
    </>
  );
}
