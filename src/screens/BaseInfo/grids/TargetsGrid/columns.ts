// IMPORTS
import {
  ROW_NO,
  FIELD_ID,
  OPERATIONAL_DOMAIN,
  TARGET_TITLE,
  WEIGHT,
} from "@/constants/consts";

export const targetsColumns = () => [
  {
    accessorKey: "targetRowNo",
    header: ROW_NO,
    size: 20,
    enableSorting: false,
    enableColumnActions: false,
  },
  {
    accessorKey: "targetID",
    header: FIELD_ID,
    size: 20,
  },
  {
    accessorKey: "targetTitle",
    header: TARGET_TITLE,
    size: 20,
  },
  {
    accessorKey: "operationalDomain",
    header: OPERATIONAL_DOMAIN,
    size: 20,
  },
  {
    accessorKey: "weight",
    header: WEIGHT,
    size: 20,
  },
];
