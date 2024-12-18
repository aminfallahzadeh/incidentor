// IMPORTS
import { NavigationItem } from "@/shared/types/navigation";
import { PLANS, ACTION_AREA } from "@/constants/consts";
import { BASE_INFO_URL } from "@/constants/urls";

export const baseInfoItems: NavigationItem[] = [
  {
    id: 100,
    name: PLANS,
    link: `${BASE_INFO_URL}?tab=plans`,
    bullet: true,
  },
  {
    id: 200,
    name: ACTION_AREA,
    link: `${BASE_INFO_URL}?tab=action-area`,
    bullet: true,
  },
];
