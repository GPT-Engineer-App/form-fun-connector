import { Home, Bike, ShoppingCart, Wrench, Newspaper, Info, PhoneCall } from "lucide-react";
import Index from "./pages/Index.jsx";
import SellYourBike from "./pages/SellYourBike.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Bikes for Sale",
    to: "/bikes-for-sale",
    icon: <ShoppingCart className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Sell Your Bike",
    to: "/sell-your-bike",
    icon: <Bike className="h-4 w-4" />,
    page: <SellYourBike />,
  },
  {
    title: "Workshop",
    to: "/workshop",
    icon: <Wrench className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "News",
    to: "/news",
    icon: <Newspaper className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <PhoneCall className="h-4 w-4" />,
    page: <Index />,
  },
];
