// IMPORTS
// import { useEffect, useRef } from "react";
import { NavigationItem } from "@/shared/types/navigation";
import { navigationItems } from "@/constants/navigation";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

export const Navbar = () => {
  const navigationRenderer = (items: NavigationItem[]) => {
    return items.map((item) => {
      if (item.children) {
        return (
          <li
            key={item.id}
            className={`nav__item ${item.main ? "has-sub-main" : "has-sub"}`}
          >
            <div className="nav__item-title">
              {item.bullet && <CircleRoundedIcon sx={{ fontSize: "12px" }} />}
              <span className={item.bullet ? "nav__item-title--wrap" : ""}>
                {item.name}
              </span>
              {item.main ? (
                <ArrowLeftRoundedIcon />
              ) : (
                <ChevronLeftRoundedIcon fontSize="small" />
              )}
            </div>

            <div className="nav__item-panel">
              <ul className="nav__item-panel--list border-2 border-blue-500">
                {navigationRenderer(item.children)}
              </ul>
            </div>
          </li>
        );
      } else {
        return (
          <li key={item.id} className="nav__item">
            <a href={item.link}>
              <div className="nav__item-title">
                {item.bullet && <CircleRoundedIcon sx={{ fontSize: "12px" }} />}
                <span className={item.bullet ? "nav__item-title--wrap" : ""}>
                  {item.name}
                </span>
              </div>
            </a>
          </li>
        );
      }
    });
  };
  return <ul className="nav">{navigationRenderer(navigationItems)}</ul>;
};
