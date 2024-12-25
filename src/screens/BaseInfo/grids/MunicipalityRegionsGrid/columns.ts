// IMPORTS
import { ROW_NO, FIELD_ID, REGION_TITLE, WEIGHT } from "@/constants/consts";

export const municipalityRegionsColumns = () => [
  {
    accessorKey: "municipalityRegionsRowNo",
    header: ROW_NO,
    size: 20,
    enableSorting: false,
    enableColumnActions: false,
  },
  {
    accessorKey: "municipalityRegionsID",
    header: FIELD_ID,
    size: 20,
  },
  {
    accessorKey: "municipalityRegionsTitle",
    header: REGION_TITLE,
    size: 20,
  },
  {
    accessorKey: "municipalityRegionsWeight",
    header: WEIGHT,
    size: 20,
  },
];
