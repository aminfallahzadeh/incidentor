// IMPORTS
import { NavigationItem } from "@/shared/types/navigation";
import { CARTABLE, PLANS, REPORTS, MAP } from "@/constants/consts";
import { plansSchema } from "@/schemas/navigation";

const renderPlansPanel = (data: NavigationItem[]): NavigationItem[] => {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    bullet: item.bullet,
    children: item.children ? renderPlansPanel(item.children) : undefined,
  }));
};

export const navigationItems: NavigationItem[] = [
  {
    id: 1,
    name: CARTABLE,
    link: "/",
    main: true,
  },
  {
    id: 2,
    name: PLANS,
    main: true,
    children: renderPlansPanel(plansSchema),
  },
  {
    id: 3,
    name: REPORTS,
    main: true,
    link: "/",
  },
  {
    id: 4,
    name: MAP,
    main: true,
    link: "/",
  },
];
