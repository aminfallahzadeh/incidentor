// IMPORTS
import { useForm, FieldValues } from "react-hook-form";
import { FormGroup } from "@/shared/components/FormGroup";
import { activityFormSchema } from "@/schemas/base-info/activity.schema";
import { SAVE } from "@/constants/consts";
import { LoadingButton } from "@mui/lab";

export const ActivityForm = () => {
  // STATES
  // CONSTS
  const { control, handleSubmit } = useForm<FieldValues>();

  // HANDLERS
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  const structure = activityFormSchema();

  const content = (
    <section className="flex-col">
      <form
        method="post"
        className="flex-col u-form-container"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {/* Form Fields */}
        <FormGroup structure={structure} control={control} />

        {/* Submit Section */}
        <div className="flex flex-row mr-auto gap-x-2">
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