// IMPORTS
import { DataGrid } from "@/shared/components/DataGrid";
import { complicationsColumns } from "./columns";
import { complicationsData } from "./data";
import { complicationsRowActions } from "./rowActions";

export const ComplicationsGrid = () => {
  const columns = complicationsColumns();
  const data = complicationsData();
  return (
    <DataGrid
      columns={columns}
      data={data}
      scroll={false}
      rowActions={complicationsRowActions}
    />
  );
};
