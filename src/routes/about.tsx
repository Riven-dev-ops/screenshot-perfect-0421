import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Contact — For All Seasons" },
      {
        name: "description",
        content:
          "More than a brand, it's a feeling. Learn about For All Seasons and get in touch with us.",
      },
      { property: "og:title", content: "About & Contact — For All Seasons" },
      {
        property: "og:description",
        content: "More than a brand, it's a feeling. Get in touch with For All Seasons.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[760px] px-4 py-16 text-center md:px-6">
        <p className="script text-[40px] leading-none text-olive md:text-[52px]">
          More than a brand, it&apos;s a feeling
        </p>
        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
          For All Seasons brings together good food, beautiful gifts and memorable moments. From
          Oi Café&apos;s everyday favourites to curated hampers and beautifully styled
          celebrations, everything we make is made with love.
        </p>
      </section>

      <section id="contact" className="border-t border-border bg-card">
        <div className="mx-auto max-w-[760px] px-4 py-14 md:px-6">
          <h1 className="text-center text-[30px] md:text-[36px]">Contact</h1>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Write to us and we&apos;ll get back to you.
          </p>

          <form className="mt-8 grid gap-4">
            <input
              type="text"
              placeholder="Name"
              className="rounded-md border border-border bg-cream px-4 py-3 text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-md border border-border bg-cream px-4 py-3 text-sm"
            />
            <textarea
              rows={4}
              placeholder="Message"
              className="rounded-md border border-border bg-cream px-4 py-3 text-sm"
            />
            <button type="button" className="btn-dark w-fit">
              Send Message
            </button>
          </form>

          <ul className="mt-10 grid gap-2 text-center text-sm text-muted-foreground">
            <li>hello@forallseasons.in</li>
            <li>+91 90000 00000</li>
            <li>Pan India Delivery</li>
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
