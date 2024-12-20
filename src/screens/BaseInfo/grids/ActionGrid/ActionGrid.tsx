// IMPORTS
import { DataGrid } from "@/shared/components/DataGrid";
import { actionColumns } from "./columns";
import { actionData } from "./data";
import { actionRowActions } from "./rowActions";

export const ActionGrid = () => {
  const columns = actionColumns();
  const data = actionData();
  return (
    <DataGrid
      columns={columns}
      data={data}
      scroll={false}
      rowActions={actionRowActions}
    />
  );
};
