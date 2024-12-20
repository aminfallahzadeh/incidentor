// IMPORTS
import { FormStructure } from "@/shared/types/form";
import {
  FIELD_ID,
  SUB_ACTIVITY_TITLE,
  RELEVANT_ACTION_TITLE,
  SCORE,
} from "@/constants/consts";

export const subActivityFormSchema = (): FormStructure[] => [
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
    label: SUB_ACTIVITY_TITLE,
    required: true,
    type: "input",
  },
  {
    id: 3,
    name: "relevantActionTitle",
    label: RELEVANT_ACTION_TITLE,
    required: true,
    type: "select",
    options: [],
  },
  {
    id: 4,
    name: "score",
    label: SCORE,
    required: true,
    type: "input",
  },
];
