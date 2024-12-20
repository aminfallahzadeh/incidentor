// IMPORTS
import {
  ROW_NO,
  ACTION_TITLE,
  SCORE,
  FIELD_ID,
  SUB_ACTIVITY_TITLE,
} from "@/constants/consts";

export const subActivityColumns = () => [
  {
    accessorKey: "subActivityRowNo",
    header: ROW_NO,
    size: 20,
    enableSorting: false,
    enableColumnActions: false,
  },
  {
    accessorKey: "subActivityID",
    header: FIELD_ID,
    size: 20,
  },
  {
    accessorKey: "subActivityTitle",
    header: SUB_ACTIVITY_TITLE,
    size: 20,
  },
  {
    accessorKey: "subActivityActionTitle",
    header: ACTION_TITLE,
    size: 20,
  },
  {
    accessorKey: "subActivityScore",
    header: SCORE,
    size: 20,
  },
];
