// IMPORTS
import { FormStructure } from "@/shared/types/form";
import { FIELD_ID, COMPLICATION_TITLE } from "@/constants/consts";

export const complicationsFormSchema = (): FormStructure[] => [
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
    label: COMPLICATION_TITLE,
    required: true,
    type: "input",
  },
];
