// IMPORTS
// import { useEffect, useRef } from "react";
import { NavigationItem } from "@/shared/types/navigation";
import { navigationItems } from "@/constants/navigation";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

export const Navbar = () => {
  //   const panelRefs = useRef(new Map<number, HTMLDivElement>());

  // Check and add the "-responsive" class based on position
  //   const checkAndSetResponsiveClass = () => {
  //     panelRefs.current.forEach((panel) => {
  //       if (!panel) return;

  //       const rect = panel.getBoundingClientRect();
  //       const screenPadding = 10; // Avoid edge overlap

  //       if (rect.right > window.innerWidth - screenPadding) {
  //         panel.classList.add("panel-responsive");
  //       } else if (rect.left < screenPadding) {
  //         panel.classList.add("panel-responsive");
  //       } else {
  //         panel.classList.remove("panel-responsive");
  //       }
  //     });
  //   };

  //   useEffect(() => {
  //     checkAndSetResponsiveClass();
  //     window.addEventListener("resize", checkAndSetResponsiveClass);
  //     return () => {
  //       window.removeEventListener("resize", checkAndSetResponsiveClass);
  //     };
  //   }, []);

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

            <div
              //   ref={(el) => el && panelRefs.current.set(item.id, el)}
              className="nav__item-panel"
            >
              <ul className="nav__item-panel--list">
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
