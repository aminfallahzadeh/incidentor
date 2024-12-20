// IMPORTS
import {
  ROW_NO,
  FIELD_ID,
  RELEVANT_ACTION_TITLE,
  WEIGHT,
  SCORE,
  ACTION_TITLE,
} from "@/constants/consts";

export const activityColumns = () => [
  {
    accessorKey: "activityRowNo",
    header: ROW_NO,
    size: 20,
    enableSorting: false,
    enableColumnActions: false,
  },
  {
    accessorKey: "activityID",
    header: FIELD_ID,
    size: 20,
  },
  {
    accessorKey: "activityTitle",
    header: ACTION_TITLE,
    size: 20,
  },
  {
    accessorKey: "relevantActionTitle",
    header: RELEVANT_ACTION_TITLE,
    size: 20,
  },
  {
    accessorKey: "activityWeight",
    header: WEIGHT,
    size: 20,
  },
  {
    accessorKey: "activityScore",
    header: SCORE,
    size: 20,
  },
];
