// IMPORTS
import { RegisterOptions } from "react-hook-form";
import { OptionType } from "@/shared/types/options";

export type FlatFormStructure =
  | {
      id: number;
      name: string;
      label: string;
      type: "select";
      required: boolean;
      rules?: RegisterOptions;
      options: OptionType[];
      value?: OptionType;
      editable?: boolean;
      isLoading?: boolean;
    }
  | {
      id: number;
      name: string;
      label: string;
      type: "input" | "checkbox" | "radio" | "date";
      required: boolean;
      rules?: RegisterOptions;
      value?: string;
      options?: never;
      editable?: boolean;
    };

export type SubListFormStructure = {
  id: number;
  children: FlatFormStructure[];
};

export type FormStructure = FlatFormStructure | SubListFormStructure;
