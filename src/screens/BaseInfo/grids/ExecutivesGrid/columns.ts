// IMPORTS
import { ROW_NO, FIELD_ID, EXECUTIVE_TITLE } from "@/constants/consts";

export const executivesColumns = () => [
  {
    accessorKey: "executiveRowNo",
    header: ROW_NO,
    size: 20,
    enableSorting: false,
    enableColumnActions: false,
  },
  {
    accessorKey: "executiveID",
    header: FIELD_ID,
    size: 20,
  },
  {
    accessorKey: "executiveTitle",
    header: EXECUTIVE_TITLE,
    size: 20,
  },
];
