import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, SectionHeading } from "@/components/site/SiteLayout";
import { setups } from "@/data/catalog";
import catDecor from "@/assets/cat-decor.jpg";
import setupTable from "@/assets/setup-table.jpg";

export const Route = createFileRoute("/occasion")({
  head: () => ({
    meta: [
      { title: "Occasion & Décor — Celebrate, Simply." },
      {
        name: "description",
        content:
          "Beautiful spaces for your special moments — birthday setups, anniversary décor, table styling and bookings.",
      },
      { property: "og:title", content: "Occasion & Décor — Celebrate, Simply." },
      {
        property: "og:description",
        content: "Beautiful spaces for your special moments, styled by For All Seasons.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Occasion,
});

const services = [
  "Birthday Setups",
  "Anniversary Surprises",
  "Table Décor",
  "Home Celebrations",
  "Helium Balloons",
  "Flowers & Cakes",
];

function Occasion() {
  return (
    <SiteLayout>
      <section className="relative">
        <img
          src={catDecor}
          alt="Celebration setup with flowers, balloons and candles"
          width={1024}
          height={1104}
          className="h-[380px] w-full object-cover md:h-[460px]"
        />
        <div className="absolute inset-0 bg-cream/50">
          <div className="mx-auto flex h-full max-w-[1280px] flex-col justify-center px-4 md:px-6">
            <p className="label-caps text-olive">Occasion &amp; Décor</p>
            <h1 className="mt-2 font-display text-[40px] leading-tight text-olive md:text-[58px]">
              Celebrate,
              <br />
              Simply.
            </h1>
            <p className="label-caps mt-4 text-foreground">
              Beautiful spaces for your special moments
            </p>
            <Link to="/occasion" className="btn-dark mt-6 w-fit">
              Plan Your Occasion <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <ul className="mx-auto grid max-w-[1280px] grid-cols-3 gap-6 px-4 py-8 text-center md:grid-cols-6 md:px-6">
          {services.map((service) => (
            <li key={service} className="label-caps text-foreground">
              {service}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-12 md:px-6">
        <SectionHeading title="Our Setups" actionLabel="View All" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {setups.map((setup) => (
            <article key={setup.name} className="overflow-hidden rounded-lg border border-border">
              <img
                src={setup.image}
                alt={setup.name}
                loading="lazy"
                width={912}
                height={736}
                className="h-52 w-full object-cover"
              />
              <p className="bg-card px-4 py-3 text-[14px]">{setup.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative">
        <img
          src={setupTable}
          alt="Table for two at Oi Café"
          loading="lazy"
          width={912}
          height={736}
          className="h-72 w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center bg-olive/55">
          <div className="mx-auto w-full max-w-[1280px] px-4 text-cream md:px-6">
            <h2 className="text-[30px] leading-tight md:text-[38px]">
              Book a Table
              <br />
              at Oi Café
            </h2>
            <p className="label-caps mt-3">
              Perfect for birthdays, anniversaries and more
            </p>
            <span className="btn-outline mt-6">
              Check Availability <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
