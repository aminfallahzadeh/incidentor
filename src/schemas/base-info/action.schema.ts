// IMPORTS
import { FormStructure } from "@/shared/types/form";
import {
  FIELD_ID,
  WEIGHT,
  ACTION_TITLE,
  TARGET_TITLE,
} from "@/constants/consts";

export const actionFormSchema = (): FormStructure[] => [
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
    label: ACTION_TITLE,
    required: true,
    type: "input",
  },
  {
    id: 3,
    name: "targetTitle",
    label: TARGET_TITLE,
    required: true,
    type: "select",
    options: [],
  },
  {
    id: 4,
    name: "weight",
    label: WEIGHT,
    required: true,
    type: "input",
  },
];
