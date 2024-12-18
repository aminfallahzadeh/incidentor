// IMPORTS
import { NavigationItem } from "@/shared/types/navigation";
import { CARTABLE, PLANS, REPORTS, MAP, BASE_INFO } from "@/constants/consts";
import { BASE_URL, PLANS_URL } from "@/constants/urls";
import { baseInfoItems } from "./base-info";

const renderSubPanels = (data: NavigationItem[]): NavigationItem[] => {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    bullet: item.bullet,
    link: item.link,
    children: item.children ? renderSubPanels(item.children) : undefined,
  }));
};

export const mainNavItems: NavigationItem[] = [
  {
    id: 1,
    name: CARTABLE,
    link: BASE_URL,
    main: true,
  },
  {
    id: 2,
    name: PLANS,
    main: true,
    link: PLANS_URL,
  },
  {
    id: 3,
    name: REPORTS,
    main: true,
    link: BASE_URL,
  },
  {
    id: 4,
    name: BASE_INFO,
    main: true,
    children: renderSubPanels(baseInfoItems),
  },
  {
    id: 5,
    name: MAP,
    main: true,
    link: BASE_URL,
  },
];
