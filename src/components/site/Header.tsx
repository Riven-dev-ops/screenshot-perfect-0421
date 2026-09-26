import { Link } from "@tanstack/react-router";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Oi Café", to: "/cafe" },
  { label: "Hampers & Gifts", to: "/hampers" },
  { label: "Occasion & Décor", to: "/occasion" },
  { label: "Corporate Gifting", to: "/corporate" },
  { label: "About", to: "/about" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center gap-6 px-4 md:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold font-display text-base tracking-tight text-olive">
            FS
          </span>
          <span className="hidden sm:block leading-tight">
            <span className="block font-display text-[15px] tracking-[0.14em] text-olive">
              FOR ALL SEASONS
            </span>
            <span className="block label-caps text-[9px] text-muted-foreground">
              Hamper and Hues
            </span>
          </span>
        </Link>

        <nav className="ml-4 hidden flex-1 items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] tracking-wide text-foreground"
              activeProps={{ className: "border-b border-olive pb-0.5" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4 text-foreground">
          <Search className="h-[18px] w-[18px]" aria-hidden />
          <User className="hidden h-[18px] w-[18px] sm:block" aria-hidden />
          <Heart className="hidden h-[18px] w-[18px] sm:block" aria-hidden />
          <span className="relative">
            <ShoppingBag className="h-[18px] w-[18px]" aria-hidden />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-olive text-[10px] text-cream">
              2
            </span>
          </span>
          <button
            type="button"
            className="lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-cream px-4 py-3 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
