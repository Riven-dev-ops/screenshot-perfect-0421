import foodPizza from "@/assets/food-pizza.jpg";
import foodPasta from "@/assets/food-pasta.jpg";
import foodMomos from "@/assets/food-momos.jpg";
import foodBurger from "@/assets/food-burger.jpg";
import hamper1 from "@/assets/hamper-1.jpg";
import hamper2 from "@/assets/hamper-2.jpg";
import hamper3 from "@/assets/hamper-3.jpg";
import hamper4 from "@/assets/hamper-4.jpg";
import setupBirthday from "@/assets/setup-birthday.jpg";
import setupAnniversary from "@/assets/setup-anniversary.jpg";
import setupTable from "@/assets/setup-table.jpg";

export type Dish = {
  name: string;
  note: string;
  price: string;
  image: string;
};

export type Hamper = {
  name: string;
  note: string;
  price: string;
  image: string;
  tag?: string;
};

export const dishes: Dish[] = [
  {
    name: "Margherita Pizza",
    note: "Classic tomato sauce, mozzarella & fresh basil.",
    price: "₹ 189",
    image: foodPizza,
  },
  {
    name: "Creamy Alfredo Pasta",
    note: "Rich, creamy & comforting.",
    price: "₹ 199",
    image: foodPasta,
  },
  {
    name: "Peri Peri Momos",
    note: "6 pcs | Spicy, flavourful & saucy.",
    price: "₹ 149",
    image: foodMomos,
  },
  {
    name: "Cheddar Cheese Burger",
    note: "Crispy patty with melted cheddar.",
    price: "₹ 159",
    image: foodBurger,
  },
];

export const hampers: Hamper[] = [
  {
    name: "Festive Delight Hamper",
    note: "A warm celebration in a box.",
    price: "₹ 1,499",
    image: hamper1,
  },
  {
    name: "Classic Trio Hamper",
    note: "Three festive favourites.",
    price: "₹ 1,799",
    image: hamper2,
  },
  {
    name: "Grand Celebration Hamper",
    note: "A complete festive edit.",
    price: "₹ 2,499",
    image: hamper3,
    tag: "Bestseller",
  },
  {
    name: "Cake & Glow Hamper",
    note: "A graceful festive combination.",
    price: "₹ 1,299",
    image: hamper4,
  },
];

export const setups = [
  { name: "Birthday Setups", image: setupBirthday },
  { name: "Anniversary Setups", image: setupAnniversary },
  { name: "Table for Two", image: setupTable },
];
