// IMPORTS
import { useState, useEffect } from "react";
import Select, { StylesConfig, SingleValue } from "react-select";
import { OptionType } from "@/shared/types/options";
import { Controller, useWatch } from "react-hook-form";
import { FC } from "react";
import makeAnimated from "react-select/animated";
import { SelectInputProps } from "./types";
import merge from "lodash.merge";
import { NO_OPTION_MESSAGE, LOADING_MESSAGE } from "@/constants/messages";

export const SelectInput: FC<SelectInputProps> = ({
  name,
  label,
  required,
  isDisabled,
  isClearable,
  options,
  isMulti = false,
  customStyles,
  isLoading,
  rules,
  control,
  onValueChange,
  errors,
}) => {
  const value = useWatch({
    control,
    name,
  });

  useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  const [hasValue, setHasValue] = useState<boolean>(!!value);

  const selectStyles: StylesConfig = {
    container: (base) => ({
      ...base,
      position: "relative",
      height: "100%",
    }),
    control: (base, state) => ({
      ...base,
      fontFamily: "IranYekan",
      cursor: "pointer",
      fontSize: "12px",
      height: "100%",
      maxWidth: "100%",
      maxHeight: "100%",
      overflow: "auto",
      textOverflow: "ellipsis",
      borderRadius: 2,
      position: "relative",
      outline: state.isFocused ? "1px solid var(--color-primary)" : "none",
      boxShadow: "none",
      borderColor: state.isDisabled
        ? "var(--color-disabled-input)"
        : "var(--color-tertiary)",
      "&:hover": {
        border: state.isFocused
          ? "1px solid var(--color-primary)"
          : "1px solid var(--color-tertiary)",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "var(--color-primary)",
      fontSize: "11px",
    }),
    menu: (base) => ({
      ...base,
      fontFamily: "IranYekan",
      zIndex: "5",
      fontSize: "12px",
    }),
    option: (base, state) => ({
      ...base,
      cursor: "pointer",
      backgroundColor: state.isSelected ? "var(--color-primary)" : "",
      "&:hover": {
        backgroundColor: state.isSelected ? "" : "var(--color-secondary)",
      },
      "&:active": {
        backgroundColor: "var(--color-primary)",
        color: "var(--color-white)",
      },
    }),
    menuList: (base) => ({
      ...base,
      fontFamily: "IranYekan",
      zIndex: "5",
    }),
  };

  const animatedComponents = makeAnimated();
  const mergedStyles = merge({}, selectStyles, customStyles);

  return (
    <div className="relative w-full h-full">
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            id={name}
            value={value}
            components={animatedComponents}
            isClearable={isClearable}
            isDisabled={isDisabled || isLoading}
            isLoading={isLoading}
            onChange={(val) => {
              setHasValue(!!val);
              onValueChange?.(val as SingleValue<OptionType>);
              onChange(val);
            }}
            placeholder={
              <div className="react-select-placeholder">
                {isLoading ? (
                  LOADING_MESSAGE
                ) : (
                  <>
                    {required && <span>*</span>} {label}
                  </>
                )}
              </div>
            }
            options={options}
            isMulti={isMulti}
            closeMenuOnSelect={!isMulti}
            styles={mergedStyles}
            noOptionsMessage={() => NO_OPTION_MESSAGE}
            loadingMessage={() => LOADING_MESSAGE}
          />
        )}
      />

      <label
        htmlFor={name}
        className={hasValue ? "label--selected" : "label--unselected"}
      >
        {required && <span>*</span>} {label}
      </label>

      {errors && (
        <span className="error-form">{errors?.[name]?.message as string}</span>
      )}
    </div>
  );
};
