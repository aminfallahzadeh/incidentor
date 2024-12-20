// IMPORTS
import { FormStructure } from "@/shared/types/form";
import { FIELD_ID, DOMAIN_TITLE } from "@/constants/consts";

export const operationalDomainFormSchema = (): FormStructure[] => [
  {
    id: 1,
    name: "id",
    label: FIELD_ID,
    required: true,
    type: "input",
  },
  {
    id: 2,
    name: "title",
    label: DOMAIN_TITLE,
    required: true,
    type: "input",
  },
];
