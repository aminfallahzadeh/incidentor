// IMPORTS
import { ROW_NO, FIELD_ID, DOMAIN_TITLE } from "@/constants/consts";

export const operationalDomainColumns = () => [
  {
    accessorKey: "domainRowNo",
    header: ROW_NO,
    size: 20,
    enableSorting: false,
    enableColumnActions: false,
  },
  {
    accessorKey: "domainID",
    header: FIELD_ID,
    size: 20,
  },
  {
    accessorKey: "domainTitle",
    header: DOMAIN_TITLE,
    size: 20,
  },
];
