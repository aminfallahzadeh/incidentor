// IMPORTS
import { useForm, FieldValues } from "react-hook-form";
import { SelectInput } from "@/shared/components/SelectInput";
import { Input } from "@/shared/components/Input";
import { LoadingButton } from "@mui/lab";
import {
  RELEVANT_DANGER,
  FIELD_ID,
  PLAN_TITLE,
  UP_HAND_DOCUMENT,
  WEIGHT,
  UPLOAD_EXCEL,
  SAVE,
} from "@/constants/consts";

export const PlansForm = () => {
  // STATES
  // CONSTS
  const { control, handleSubmit } = useForm<FieldValues>();

  // HANDLERS
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  const content = (
    <section className="flex-col">
      <form
        method="post"
        className="flex-col u-form-container"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="grid grid-cols-4">
          <Input
            name="id"
            control={control}
            label={FIELD_ID}
            required={true}
            type="text"
          />

          <Input
            name="title"
            control={control}
            label={PLAN_TITLE}
            required={true}
            type="text"
          />

          <Input
            name="document"
            control={control}
            label={UP_HAND_DOCUMENT}
            required={true}
            type="text"
          />

          <Input
            name="weight"
            control={control}
            label={WEIGHT}
            required={true}
            type="text"
          />

          <SelectInput
            name="genderID"
            control={control}
            label={RELEVANT_DANGER}
            required={true}
            isMulti={false}
            isClearable={true}
            options={[
              { value: "1", label: "test" },
              { value: "2", label: "test" },
              { value: "3", label: "test" },
            ]}
          />
        </div>

        {/* Submit Section */}
        <div className="flex flex-row mr-auto gap-x-2">
          <LoadingButton dir="ltr" variant="contained" color="warning">
            <span>{UPLOAD_EXCEL}</span>
          </LoadingButton>

          <LoadingButton
            dir="ltr"
            variant="contained"
            type="submit"
            color="success"
          >
            <span>{SAVE}</span>
          </LoadingButton>
        </div>
      </form>
    </section>
  );
  return content;
};
