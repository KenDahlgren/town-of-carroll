import { createFileRoute } from "@tanstack/react-router";
import { Ext, PageIntro, Phone } from "@/components/site/bits";
import { SERVICE_GROUPS } from "@/data/town";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Local services · Town of Carroll" }] }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageIntro
        kicker="Community"
        title="Local services"
        lede="Fire, water, schools, congregations, and the town park — the list from the town’s services page, with the newer water and police numbers from the officials list where they differ."
      />
      <div className="mx-auto max-w-6xl space-y-12 px-5 py-10">
        {SERVICE_GROUPS.map((group) => (
          <section key={group.name}>
            <h2 className="font-display text-3xl">{group.name}</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {group.items.map((item) => (
                <li key={item.name} className="grid gap-1 py-4 md:grid-cols-3 md:items-baseline">
                  <h3 className="font-sans text-base font-semibold">
                    {item.href ? (
                      <Ext href={item.href} className="text-spruce underline decoration-line underline-offset-4">
                        {item.name}
                      </Ext>
                    ) : (
                      item.name
                    )}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted md:col-span-1">{item.detail}</p>
                  <p className="text-sm md:text-right">{item.phone ? <Phone display={item.phone} /> : null}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
