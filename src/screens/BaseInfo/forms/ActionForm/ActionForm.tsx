// IMPORTS
import { useForm, FieldValues } from "react-hook-form";
import { FormGroup } from "@/shared/components/FormGroup";
import { LoadingButton } from "@mui/lab";
import { SAVE } from "@/constants/consts";
import { actionFormSchema } from "@/schemas/base-info/action.schema";

export const ActionForm = () => {
  // STATES
  // CONSTS
  const { control, handleSubmit } = useForm<FieldValues>();

  // HANDLERS
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  const structure = actionFormSchema();

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
