// IMPORTS
import { FormStructure } from "@/shared/types/form";
import { FIELD_ID, REGION_TITLE } from "@/constants/consts";

export const municipalityRegionsFormSchema = (): FormStructure[] => [
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
    label: REGION_TITLE,
    required: true,
    type: "input",
  },
];
