// IMPORTS
import { FormStructure } from "@/shared/types/form";
import { FieldErrors, UseFormReturn } from "react-hook-form";

export type FormGroupProps = {
  structure: FormStructure[];
  errors?: FieldErrors;
  control: UseFormReturn["control"];
  setValue?: UseFormReturn["setValue"];
};
