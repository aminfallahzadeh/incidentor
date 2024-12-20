// IMPORTS
import { FormStructure } from "@/shared/types/form";
import {
  RELEVANT_DANGER,
  FIELD_ID,
  PLAN_TITLE,
  UP_HAND_DOCUMENT,
  WEIGHT,
} from "@/constants/consts";

export const plansFormSchema = (): FormStructure[] => [
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
    label: PLAN_TITLE,
    required: true,
    type: "input",
  },
  {
    id: 3,
    name: "document",
    label: UP_HAND_DOCUMENT,
    required: true,
    type: "input",
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
    name: "danger",
    label: RELEVANT_DANGER,
    required: true,
    type: "select",
    options: [],
  },
];
