// IMPORTS
import { ROW_NO, FIELD_ID, DANGER_TITLE, WEIGHT } from "@/constants/consts";

export const dangerColumns = () => [
  {
    accessorKey: "dangerRowNo",
    header: ROW_NO,
    size: 20,
    enableSorting: false,
    enableColumnActions: false,
  },
  {
    accessorKey: "dangerID",
    header: FIELD_ID,
    size: 20,
  },
  {
    accessorKey: "dangerTitle",
    header: DANGER_TITLE,
    size: 20,
  },
  {
    accessorKey: "dangerWeight",
    header: WEIGHT,
    size: 20,
  },
];
