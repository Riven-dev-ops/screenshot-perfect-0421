import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, SectionHeading } from "@/components/site/SiteLayout";
import { DishCard, HamperCard } from "@/components/site/Cards";
import { dishes, hampers } from "@/data/catalog";
import heroHome from "@/assets/hero-home.jpg";
import catCafe from "@/assets/cat-cafe.jpg";
import catHampers from "@/assets/cat-hampers.jpg";
import catDecor from "@/assets/cat-decor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For All Seasons — More Than A Café" },
      {
        name: "description",
        content:
          "A space for food, gifts, décor and all your special moments. Oi Café, curated hampers and beautiful celebration setups.",
      },
      { property: "og:title", content: "For All Seasons — More Than A Café" },
      {
        property: "og:description",
        content: "A space for food, gifts, décor and all your special moments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const categories = [
  {
    title: "Oi Café",
    lines: ["Pizzas · Pasta · Momos", "Shakes · and more"],
    cta: "Order Food",
    to: "/cafe",
    image: catCafe,
  },
  {
    title: "Hampers & Gifts",
    lines: ["Premium hampers", "for every occasion"],
    cta: "Shop Hampers",
    to: "/hampers",
    image: catHampers,
  },
  {
    title: "Occasion & Décor",
    lines: ["Home décor · Table décor", "Celebrations · Bookings"],
    cta: "Book a Setup",
    to: "/occasion",
    image: catDecor,
  },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative">
        <img
          src={heroHome}
          alt="Café table with coffee, pizza and festive gift hampers"
          width={1920}
          height={912}
          className="h-[380px] w-full object-cover md:h-[460px]"
        />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1280px] flex-col justify-center px-4 md:px-6">
            <p className="label-caps text-olive">
              Good Food · Beautiful Gifts · Memorable Moments
            </p>
            <h1 className="mt-3 font-display text-[42px] leading-[1.05] text-olive md:text-[64px]">
              More Than
              <span className="script mt-1 block text-[54px] leading-[0.9] md:text-[80px]">
                A Café
              </span>
            </h1>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-olive">
              A space for food, gifts, décor and all your special moments.
            </p>
            <Link to="/cafe" className="btn-outline mt-6 w-fit border-olive text-olive">
              Explore All Seasons <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category arches */}
      <section className="mx-auto max-w-[1280px] px-4 py-12 md:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="relative overflow-hidden rounded-t-[999px] border border-border"
            >
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                width={1024}
                height={1104}
                className="h-[380px] w-full object-cover"
              />
              <div className="absolute inset-x-0 top-0 bg-cream/85 px-6 pb-6 pt-12 text-center">
                <h2 className="font-display text-[26px] tracking-[0.08em] text-olive">
                  {cat.title}
                </h2>
                {cat.lines.map((line) => (
                  <p key={line} className="label-caps mt-2 text-foreground">
                    {line}
                  </p>
                ))}
                <Link to={cat.to} className="btn-dark mt-5">
                  {cat.cta} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature picks */}
      <section className="mx-auto max-w-[1280px] px-4 pb-12 md:px-6">
        <SectionHeading title="Our Signature Picks" actionLabel="View Full Menu" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </div>
      </section>

      {/* Featured hampers */}
      <section className="mx-auto max-w-[1280px] px-4 pb-14 md:px-6">
        <SectionHeading title="Featured Hampers" actionLabel="View All Hampers" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hampers.map((hamper) => (
            <HamperCard key={hamper.name} hamper={hamper} />
          ))}
        </div>
      </section>

      {/* Occasion band */}
      <section className="grid md:grid-cols-2">
        <img
          src={catDecor}
          alt="Styled celebration table with candles and flowers"
          loading="lazy"
          width={1024}
          height={1104}
          className="h-64 w-full object-cover md:h-full"
        />
        <div className="bg-olive px-6 py-14 text-cream md:px-14">
          <p className="label-caps opacity-70">Occasion &amp; Décor</p>
          <h2 className="mt-3 text-[30px] leading-tight md:text-[38px]">
            Spaces Styled
            <br />
            For Your Special Moments
          </h2>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm opacity-90">
            <li>Home Décor</li>
            <li>Table Décor</li>
            <li>Celebration Setups</li>
            <li>Bookings</li>
          </ul>
          <Link to="/occasion" className="btn-outline mt-8">
            Plan Your Occasion <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
