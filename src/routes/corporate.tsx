import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import corporate from "@/assets/corporate.jpg";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Gifting — For All Seasons" },
      {
        name: "description",
        content:
          "Premium hampers for your team, clients and partners. Customisation, branding and bulk orders available.",
      },
      { property: "og:title", content: "Corporate Gifting — For All Seasons" },
      {
        property: "og:description",
        content: "Premium hampers for your team, clients and partners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Corporate,
});

const features = ["Bulk Orders", "Customisation", "Branding Options", "Pan India Delivery"];

function Corporate() {
  return (
    <SiteLayout>
      <section className="relative">
        <img
          src={corporate}
          alt="Premium corporate gift boxes with gold ribbons"
          width={1600}
          height={608}
          className="h-[340px] w-full object-cover md:h-[400px]"
        />
        <div className="absolute inset-0 bg-olive/55">
          <div className="mx-auto flex h-full max-w-[1280px] flex-col justify-center px-4 text-cream md:px-6">
            <h1 className="text-[36px] leading-tight md:text-[52px]">Corporate Gifting</h1>
            <p className="label-caps mt-3">Premium hampers for your team, clients &amp; partners</p>
            <span className="btn-outline mt-6 w-fit">
              Get a Quote <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-12 md:px-6">
        <ul className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {features.map((feature) => (
            <li key={feature} className="label-caps text-foreground">
              {feature}
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
