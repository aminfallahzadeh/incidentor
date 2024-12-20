// IMPORTS
import {
  ROW_NO,
  FIELD_ID,
  ACTION_TITLE,
  WEIGHT,
  TARGET_TITLE,
} from "@/constants/consts";

export const actionColumns = () => [
  {
    accessorKey: "actionRowNo",
    header: ROW_NO,
    size: 20,
    enableSorting: false,
    enableColumnActions: false,
  },
  {
    accessorKey: "actionID",
    header: FIELD_ID,
    size: 20,
  },
  {
    accessorKey: "actionTitle",
    header: ACTION_TITLE,
    size: 20,
  },
  {
    accessorKey: "actionTargetTitle",
    header: TARGET_TITLE,
    size: 20,
  },
  {
    accessorKey: "actionWeight",
    header: WEIGHT,
    size: 20,
  },
];
