// IMPORTS
import { FormStructure } from "@/shared/types/form";
import {
  FIELD_ID,
  WEIGHT,
  RELEVANT_ACTION_TITLE,
  ACTIVITY_TITLE,
  SCORE,
} from "@/constants/consts";

export const activityFormSchema = (): FormStructure[] => [
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
    label: ACTIVITY_TITLE,
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
    name: "weight",
    label: WEIGHT,
    required: true,
    type: "input",
  },
  {
    id: 5,
    name: "score",
    label: SCORE,
    required: true,
    type: "input",
  },
];
