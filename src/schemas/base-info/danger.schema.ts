// IMPORTS
import { FormStructure } from "@/shared/types/form";
import { FIELD_ID, WEIGHT, DANGER_TITLE } from "@/constants/consts";

export const dangerFormSchema = (): FormStructure[] => [
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
    label: DANGER_TITLE,
    required: true,
    type: "input",
  },
  {
    id: 3,
    name: "weight",
    label: WEIGHT,
    required: true,
    type: "input",
  },
];
