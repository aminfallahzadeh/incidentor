// IMPORTS
import { useForm, FieldValues } from "react-hook-form";
import { FormGroup } from "@/shared/components/FormGroup";
import { plansFormSchema } from "@/schemas/base-info/plans.schema";
import { LoadingButton } from "@mui/lab";
import { UPLOAD_EXCEL, SAVE } from "@/constants/consts";

export const PlansForm = () => {
  // STATES
  // CONSTS
  const { control, handleSubmit } = useForm<FieldValues>();

  // HANDLERS
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  const structure = plansFormSchema();

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
