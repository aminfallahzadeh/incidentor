// IMPORTS
import { NavigationItem } from "@/shared/types/navigation";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { Link } from "react-router-dom";
import { BASE_URL } from "@/constants/urls";

export const navigationRenderer = (items: NavigationItem[]) => {
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
          <Link
            to={item.link ? item.link : "/"}
            replace={item.link === BASE_URL ? true : false}
          >
            <div className="nav__item-title">
              {item.bullet && <CircleRoundedIcon sx={{ fontSize: "12px" }} />}
              <span className={item.bullet ? "nav__item-title--wrap" : ""}>
                {item.name}
              </span>
            </div>
          </Link>
        </li>
      );
    }
  });
};

export const plansRenderer = (items: NavigationItem[]) => {
  return items.map((item) => {
    if (item.children) {
      return (
        <li
          key={item.id}
          className={`plans__item ${item.main ? "has-sub-main" : "has-sub"} ${
            item.main && "plans__item-main"
          }`}
        >
          <div className="plans__item-title">
            {item.bullet && !item.main && (
              <CircleRoundedIcon sx={{ fontSize: "12px" }} />
            )}
            <span className={item.bullet ? "plans__item-title--wrap" : ""}>
              {item.name}
            </span>
            {item.main ? (
              <div id="rotate">
                <ArrowLeftRoundedIcon />
              </div>
            ) : (
              <ChevronLeftRoundedIcon fontSize="small" />
            )}
          </div>

          <div className="plans__item-panel">
            <ul className="plans__item-panel--list border-2 border-blue-500">
              {plansRenderer(item.children)}
            </ul>
          </div>
        </li>
      );
    } else {
      return (
        <li key={item.id} className="plans__item">
          <Link
            to={item.link ? item.link : "/"}
            replace={item.link === BASE_URL ? true : false}
          >
            <div className="plans__item-title">
              {item.bullet && <CircleRoundedIcon sx={{ fontSize: "12px" }} />}
              <span className={item.bullet ? "plans__item-title--wrap" : ""}>
                {item.name}
              </span>
            </div>
          </Link>
        </li>
      );
    }
  });
};
