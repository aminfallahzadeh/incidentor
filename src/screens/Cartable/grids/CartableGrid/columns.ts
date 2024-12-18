// IMPORTS
import {
  ROW_NO,
  ACTION_CREATOR,
  ISSUE_DATA,
  RESILIENCE,
  ACTION_TITLE,
  ACTION_AREA,
} from "@/constants/consts";

export const cartableColumns = () => [
  {
    accessorKey: "requestRowNo",
    header: ROW_NO,
    size: 20,
    enableSorting: false,
    enableColumnActions: false,
  },
  {
    accessorKey: "actionCreator",
    header: ACTION_CREATOR,
    size: 20,
  },
  {
    accessorKey: "issueDate",
    header: ISSUE_DATA,
    size: 20,
  },
  {
    accessorKey: "resilience",
    header: RESILIENCE,
    size: 20,
  },
  {
    accessorKey: "title",
    header: ACTION_TITLE,
    size: 20,
  },
  {
    accessorKey: "area",
    header: ACTION_AREA,
    size: 20,
  },
];
