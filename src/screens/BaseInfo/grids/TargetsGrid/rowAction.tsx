// IMPORTS
import { OBSERVE } from "@/constants/consts";
import { LoadingButton } from "@mui/lab";

export const targetsRowActions = (id: string) => (
  <LoadingButton variant="contained" color="primary" onClick={() => alert(id)}>
    <span>{OBSERVE}</span>
  </LoadingButton>
);