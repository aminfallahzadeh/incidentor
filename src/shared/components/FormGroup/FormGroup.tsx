// IMPORTS
import { FormGroupProps } from "./types";
import { FormStructure } from "@/shared/types/form";
import { Input } from "../Input";
import { SelectInput } from "../SelectInput";

/**
 *
 * @param {structure} structure A list of form data which will be iterated
 * @param {control} control A react-hook-form control object
 * @param {errors} errors A react-hook-form errors object
 * @param {setValue} setValue A react-hook-form setValue function
 * @returns {JSX.Element}
 *
 * @description This component creates a form based on structure array input
 */
export const FormGroup = ({ structure, control, errors }: FormGroupProps) => {
  const renderForm = (item: FormStructure): JSX.Element | null => {
    if ("type" in item) {
      switch (item.type) {
        case "input":
          return (
            <Input
              control={control}
              name={item.name}
              label={item.label}
              required={item.required}
              type={"text"}
            />
          );
        case "select":
          return (
            <SelectInput
              control={control}
              name={item.name}
              label={item.label}
              options={item.options}
              required={item.required}
              errors={errors}
            />
          );
        default:
          return null;
      }
    } else if ("children" in item && Array.isArray(item.children)) {
      return (
        <div className="nested-form">
          {item.children.map((child) => (
            <div key={child.name}>{renderForm(child)}</div>
          ))}
        </div>
      );
    }

    return null; // fallback
  };

  return (
    <div className="grid grid-cols-4">
      {structure.map((item) => (
        <div key={item.id} className="h-full w-full">
          {renderForm(item)}
        </div>
      ))}
    </div>
  );
};
