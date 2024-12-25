// IMPORTS
import { mainNavItems } from "@/data/navigation/main";
import { navigationRenderer } from "@/utils/renderNavigation";

export const Navbar = () => {
  return <ul className="nav">{navigationRenderer(mainNavItems)}</ul>;
};
