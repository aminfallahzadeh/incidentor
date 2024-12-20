// IMPORTS
import { ROW_NO, FIELD_ID, COMPLICATION_TITLE } from "@/constants/consts";

export const complicationsColumns = () => [
  {
    accessorKey: "complicationRowNo",
    header: ROW_NO,
    size: 20,
    enableSorting: false,
    enableColumnActions: false,
  },
  {
    accessorKey: "complicationID",
    header: FIELD_ID,
    size: 20,
  },
  {
    accessorKey: "complicationTitle",
    header: COMPLICATION_TITLE,
    size: 20,
  },
];
