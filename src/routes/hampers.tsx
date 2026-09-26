import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gift } from "lucide-react";
import { SiteLayout, SectionHeading } from "@/components/site/SiteLayout";
import { HamperCard } from "@/components/site/Cards";
import { hampers } from "@/data/catalog";
import catHampers from "@/assets/cat-hampers.jpg";

export const Route = createFileRoute("/hampers")({
  head: () => ({
    meta: [
      { title: "Hampers & Hues — Thoughtful Gifts for Every Occasion" },
      {
        name: "description",
        content:
          "Premium hampers, festive boxes and custom gift sets from For All Seasons — made with love.",
      },
      { property: "og:title", content: "Hampers & Hues — Thoughtful Gifts" },
      {
        property: "og:description",
        content: "Premium hampers, festive boxes and custom gift sets, made with love.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Hampers,
});

const tabs = ["Festive Hampers", "Birthday Hampers", "Corporate Gifting", "Custom Hampers"];
const strip = ["Personalised Packaging", "Bulk Orders", "Corporate Gifting", "Pan India Delivery"];

function Hampers() {
  return (
    <SiteLayout>
      <section className="relative">
        <img
          src={catHampers}
          alt="Premium gift hamper with gold ribbon"
          width={1024}
          height={1104}
          className="h-[360px] w-full object-cover md:h-[440px]"
        />
        <div className="absolute inset-0 bg-cream/55">
          <div className="mx-auto flex h-full max-w-[1280px] flex-col justify-center px-4 md:px-6">
            <Gift className="h-6 w-6 text-olive" aria-hidden />
            <h1 className="mt-3 font-display text-[36px] leading-tight tracking-[0.06em] text-olive md:text-[52px]">
              HAMPERS &amp; HUES
            </h1>
            <p className="label-caps mt-3 text-foreground">
              Thoughtful gifts for every occasion
            </p>
            <Link to="/hampers" className="btn-dark mt-6 w-fit">
              Explore Hampers <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <ul className="mx-auto flex max-w-[1280px] flex-wrap gap-6 px-4 py-4 md:px-6">
          {tabs.map((tab, i) => (
            <li
              key={tab}
              className={`text-[13px] ${i === 0 ? "border-b border-olive pb-1 text-olive" : "text-muted-foreground"}`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-12 md:px-6">
        <SectionHeading title="Featured Hampers" actionLabel="View All" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hampers.map((hamper) => (
            <HamperCard key={hamper.name} hamper={hamper} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-12 md:px-6">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={catHampers}
            alt="Custom gift hamper"
            loading="lazy"
            width={1024}
            height={1104}
            className="h-64 w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-cream/70 px-6 md:px-14">
            <h2 className="text-[30px] leading-tight text-olive md:text-[38px]">
              Custom Hampers
            </h2>
            <p className="script text-[34px] leading-none text-olive md:text-[44px]">
              tailored just for you
            </p>
            <span className="btn-dark mt-5 w-fit">
              Build Your Own <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <ul className="mx-auto grid max-w-[1280px] grid-cols-2 gap-6 px-4 py-8 text-center md:grid-cols-4 md:px-6">
          {strip.map((item) => (
            <li key={item} className="label-caps text-foreground">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
