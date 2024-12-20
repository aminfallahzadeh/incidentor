// IMPORTS
import { NavigationItem } from "@/shared/types/navigation";
import {
  PLANS,
  ACTION_AREA,
  TARGETS,
  DANGER,
  ACTION,
  ACTIVITY,
  SUB_ACTIVITY,
  COMPLICATIONS,
  EXECUTIVES,
} from "@/constants/consts";
import { BASE_INFO_URL } from "@/constants/urls";

export const baseInfoItems: NavigationItem[] = [
  {
    id: 100,
    name: PLANS,
    link: `${BASE_INFO_URL}?tab=plans&title=${PLANS}`,
    bullet: true,
  },
  {
    id: 200,
    name: ACTION_AREA,
    link: `${BASE_INFO_URL}?tab=operational-domain&title=${ACTION_AREA}`,
    bullet: true,
  },
  {
    id: 300,
    name: TARGETS,
    link: `${BASE_INFO_URL}?tab=targets&title=${TARGETS}`,
    bullet: true,
  },
  {
    id: 400,
    name: DANGER,
    link: `${BASE_INFO_URL}?tab=danger&title=${DANGER}`,
    bullet: true,
  },
  {
    id: 500,
    name: ACTION,
    link: `${BASE_INFO_URL}?tab=action&title=${ACTION}`,
    bullet: true,
  },
  {
    id: 600,
    name: ACTIVITY,
    link: `${BASE_INFO_URL}?tab=activity&title=${ACTIVITY}`,
    bullet: true,
  },
  {
    id: 700,
    name: SUB_ACTIVITY,
    link: `${BASE_INFO_URL}?tab=sub-activity&title=${SUB_ACTIVITY}`,
    bullet: true,
  },
  {
    id: 800,
    name: COMPLICATIONS,
    link: `${BASE_INFO_URL}?tab=complications&title=${COMPLICATIONS}`,
    bullet: true,
  },
  {
    id: 900,
    name: EXECUTIVES,
    link: `${BASE_INFO_URL}?tab=executives&title=${EXECUTIVES}`,
    bullet: true,
  },
];
