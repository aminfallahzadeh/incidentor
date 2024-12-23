// IMPORTS
import { ROW_NO, FIELD_ID, REGION_TITLE } from "@/constants/consts";

export const municipalityRegionsColumns = () => [
  {
    accessorKey: "regionsRowNo",
    header: ROW_NO,
    size: 20,
    enableSorting: false,
    enableColumnActions: false,
  },
  {
    accessorKey: "regionsID",
    header: FIELD_ID,
    size: 20,
  },
  {
    accessorKey: "executiveTitle",
    header: REGION_TITLE,
    size: 20,
  },
];
