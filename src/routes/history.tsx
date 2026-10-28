import { createFileRoute } from "@tanstack/react-router";
import { Ext, PageIntro, Phone } from "@/components/site/bits";
import { doc } from "@/data/town";

export const Route = createFileRoute("/history")({
  head: () => ({ meta: [{ title: "History · Town of Carroll" }] }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <>
      <PageIntro
        kicker="1825–2025"
        title="History"
        lede="Celebrating 200 years of the Town of Carroll. The Historical Society keeps the artifacts; the historians answer the questions."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <img
            src="/images/foothills.jpg"
            alt="Foothill farmland and autumn woods outside Frewsburg"
            className="h-64 w-full object-cover"
          />
          <h2 className="mt-8 font-display text-3xl">Historical Society</h2>
          <p className="mt-4 leading-relaxed">
            The society’s purpose is to preserve, protect, and share the past and present of
            Carroll and the country around it, and to work with anyone else doing the same.
          </p>
          <p className="mt-4 leading-relaxed">
            Meetings are in the Historical Society building behind Town Hall, the third Monday
            of each month from March through November at 6:30 pm, and they are open to the
            public. There is often a speaker, and always refreshments. Saturday hours run May
            through September, 2:00 to 4:00 pm. Other times are by appointment at{" "}
            <Phone display="716-489-1114" />. Admission is free.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            “We believe we should live in the present with an eye to the future and one foot
            planted firmly in the past.”
          </p>
          <Ext
            href={doc("/uploads/1/2/7/4/127469110/history.pdf")}
            className="mt-6 inline-flex min-h-11 items-center font-semibold text-spruce underline decoration-line underline-offset-4"
          >
            Read the town history booklet
          </Ext>
        </div>
        <aside className="space-y-4 lg:col-span-2">
          <article className="border border-line bg-surface p-5">
            <p className="text-xs font-semibold tracking-widest text-copper uppercase">Historian</p>
            <h2 className="mt-2 font-display text-2xl">Barbara Cessna</h2>
            <p className="mt-2 text-sm">
              <Phone display="716-569-5677" />
            </p>
            <p className="text-sm">
              <a className="break-all text-spruce" href="mailto:historiantownofcarroll@windstream.net">
                historiantownofcarroll@windstream.net
              </a>
            </p>
          </article>
          <article className="border border-line bg-surface p-5">
            <p className="text-xs font-semibold tracking-widest text-copper uppercase">Co-historian</p>
            <h2 className="mt-2 font-display text-2xl">Susan Richards</h2>
            <p className="mt-2 text-sm">
              <Phone display="716-569-3121" />
            </p>
            <p className="text-sm">
              <a className="break-all text-spruce" href="mailto:historiantownofcarroll@windstream.net">
                historiantownofcarroll@windstream.net
              </a>
            </p>
          </article>
        </aside>
      </div>
    </>
  );
}
