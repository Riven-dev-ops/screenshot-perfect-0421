import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-olive text-cream">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <p className="font-display text-lg tracking-[0.14em]">FOR ALL SEASONS</p>
          <p className="label-caps mt-1 text-[9px] opacity-70">Hamper and Hues</p>
          <p className="mt-4 max-w-xs text-sm opacity-80">
            Good food, beautiful gifts and memorable moments — all in one place.
          </p>
        </div>

        <div>
          <p className="label-caps mb-4 opacity-70">Explore</p>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <Link to="/cafe">Oi Café</Link>
            </li>
            <li>
              <Link to="/hampers">Hampers &amp; Gifts</Link>
            </li>
            <li>
              <Link to="/occasion">Occasion &amp; Décor</Link>
            </li>
            <li>
              <Link to="/corporate">Corporate Gifting</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="label-caps mb-4 opacity-70">Company</p>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/about" hash="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="label-caps mb-4 opacity-70">Reach Us</p>
          <ul className="space-y-2 text-sm opacity-90">
            <li>hello@forallseasons.in</li>
            <li>+91 90000 00000</li>
            <li>Pan India Delivery</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <p className="mx-auto max-w-[1280px] px-4 py-5 text-center text-xs opacity-60 md:px-6">
          © {new Date().getFullYear()} For All Seasons. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
