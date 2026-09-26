import { Plus, ShoppingCart } from "lucide-react";
import type { Dish, Hamper } from "@/data/catalog";

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card">
      <img
        src={dish.image}
        alt={dish.name}
        loading="lazy"
        width={912}
        height={736}
        className="h-40 w-full object-cover md:h-44"
      />
      <div className="p-4">
        <h3 className="font-display text-[17px]">{dish.name}</h3>
        <p className="mt-1 min-h-[34px] text-[13px] leading-snug text-muted-foreground">
          {dish.note}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-[17px]">{dish.price}</span>
          <button type="button" className="btn-dark px-4 py-2" aria-label={`Add ${dish.name}`}>
            Add <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>
    </article>
  );
}

export function HamperCard({ hamper }: { hamper: Hamper }) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="relative">
        <img
          src={hamper.image}
          alt={hamper.name}
          loading="lazy"
          width={912}
          height={736}
          className="h-44 w-full object-cover md:h-48"
        />
        {hamper.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-card px-3 py-1 text-[11px] text-foreground">
            {hamper.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-[17px]">{hamper.name}</h3>
        <p className="mt-1 text-[13px] leading-snug text-muted-foreground">{hamper.note}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-[17px]">{hamper.price}</span>
          <button type="button" className="btn-gold" aria-label={`Add ${hamper.name} to cart`}>
            <ShoppingCart className="h-3 w-3" /> Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
