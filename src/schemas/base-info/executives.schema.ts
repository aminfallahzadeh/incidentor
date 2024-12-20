// IMPORTS
import { FormStructure } from "@/shared/types/form";
import { FIELD_ID, EXECUTIVE_TITLE } from "@/constants/consts";

export const executivesFormSchema = (): FormStructure[] => [
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
    label: EXECUTIVE_TITLE,
    required: true,
    type: "input",
  },
];
