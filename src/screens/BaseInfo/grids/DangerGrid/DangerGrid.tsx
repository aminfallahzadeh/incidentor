// IMPORTS
import { DataGrid } from "@/shared/components/DataGrid";
import { dangerColumns } from "./columns";
import { dangerData } from "./data";
import { dangerRowActions } from "./rowActions";

export const DangerGrid = () => {
  const columns = dangerColumns();
  const data = dangerData();
  return (
    <DataGrid
      columns={columns}
      data={data}
      scroll={false}
      rowActions={dangerRowActions}
    />
  );
};
