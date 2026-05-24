import {
  BookOpenText,
  CalendarHeart,
  CircleDot,
  Home,
  Layers3,
  Settings,
} from "lucide-react";

export const navigationItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/daily", label: "Daily", icon: CircleDot },
  { href: "/journal", label: "Journal", icon: BookOpenText },
  { href: "/intentions", label: "Intentions", icon: Layers3 },
  { href: "/reflection", label: "Reflection", icon: CalendarHeart },
  { href: "/settings", label: "Settings", icon: Settings },
];
