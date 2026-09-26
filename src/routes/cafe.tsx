import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, SectionHeading } from "@/components/site/SiteLayout";
import { DishCard } from "@/components/site/Cards";
import { dishes } from "@/data/catalog";
import catCafe from "@/assets/cat-cafe.jpg";
import foodBurger from "@/assets/food-burger.jpg";

export const Route = createFileRoute("/cafe")({
  head: () => ({
    meta: [
      { title: "Oi Café — Good Food. Good Mood. Always." },
      {
        name: "description",
        content:
          "Pizzas, pasta, momos, shakes and more — freshly prepared at Oi Café by For All Seasons.",
      },
      { property: "og:title", content: "Oi Café — Good Food. Good Mood. Always." },
      {
        property: "og:description",
        content: "Pizzas, pasta, momos, shakes and more — freshly prepared at Oi Café.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cafe,
});

const strip = [
  "Freshly Prepared",
  "Premium Ingredients",
  "Secure Payments",
  "Pan India Delivery",
];

function Cafe() {
  return (
    <SiteLayout>
      <section className="relative">
        <img
          src={catCafe}
          alt="Cheese pull slice of pizza"
          width={1024}
          height={1104}
          className="h-[360px] w-full object-cover md:h-[440px]"
        />
        <div className="absolute inset-0 bg-olive/45">
          <div className="mx-auto flex h-full max-w-[1280px] flex-col justify-center px-4 text-cream md:px-6">
            <h1 className="font-display text-[46px] leading-none md:text-[68px]">
              Oi <span className="tracking-[0.12em]">CAFÉ</span>
            </h1>
            <p className="label-caps mt-4">Good Food. Good Mood. Always.</p>
            <Link to="/cafe" className="btn-outline mt-6 w-fit">
              Order Now <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-12 md:px-6">
        <SectionHeading title="Our Signature Picks" actionLabel="View Full Menu" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-12 md:px-6">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={foodBurger}
            alt="Cheddar cheese burger"
            loading="lazy"
            width={912}
            height={736}
            className="h-72 w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-end bg-olive/55 px-6 md:px-14">
            <div className="max-w-sm text-cream">
              <h2 className="text-[32px] leading-tight md:text-[40px]">
                Freshly Crafted Happiness
              </h2>
              <p className="mt-3 text-sm opacity-90">
                Real ingredients. Warm flavours. Everyday favourites.
              </p>
              <span className="btn-outline mt-6">
                View Full Menu <ArrowRight className="h-3 w-3" />
              </span>
            </div>
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
