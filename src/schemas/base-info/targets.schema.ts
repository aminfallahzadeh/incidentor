// IMPORTS
import { FormStructure } from "@/shared/types/form";
import {
  FIELD_ID,
  TARGET_TITLE,
  OPERATIONAL_DOMAIN,
  WEIGHT,
  PLAN_TITLE,
} from "@/constants/consts";

export const targetsFormSchema = (): FormStructure[] => [
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
    label: TARGET_TITLE,
    required: true,
    type: "input",
  },
  {
    id: 3,
    name: "domain",
    label: OPERATIONAL_DOMAIN,
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
    name: "weight",
    label: PLAN_TITLE,
    required: true,
    type: "select",
    options: [],
  },
];
