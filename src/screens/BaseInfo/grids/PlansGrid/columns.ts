// IMPORTS
import {
  ROW_NO,
  PLAN_TITLE,
  UP_HAND_DOCUMENT,
  FIELD_ID,
  WEIGHT,
} from "@/constants/consts";

export const plansColumns = () => [
  {
    accessorKey: "planRowNo",
    header: ROW_NO,
    size: 20,
    enableSorting: false,
    enableColumnActions: false,
  },
  {
    accessorKey: "planID",
    header: FIELD_ID,
    size: 20,
  },
  {
    accessorKey: "planTitle",
    header: PLAN_TITLE,
    size: 20,
  },
  {
    accessorKey: "planDocument",
    header: UP_HAND_DOCUMENT,
    size: 20,
  },
  {
    accessorKey: "planWeight",
    header: WEIGHT,
    size: 20,
  },
];
