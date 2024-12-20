// IMPORTS
import { DataGrid } from "@/shared/components/DataGrid";
import { executivesColumns } from "./columns";
import { executivesData } from "./data";
import { executivesRowActions } from "./rowActions";

export const ExecutivesGrid = () => {
  const columns = executivesColumns();
  const data = executivesData();
  return (
    <DataGrid
      columns={columns}
      data={data}
      scroll={false}
      rowActions={executivesRowActions}
    />
  );
};
