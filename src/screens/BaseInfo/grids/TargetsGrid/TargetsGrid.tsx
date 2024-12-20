// IMPORTS
import { DataGrid } from "@/shared/components/DataGrid";
import { targetsColumns } from "./columns";
import { targetsData } from "./data";
import { targetsRowActions } from "./rowAction";

export const TargetsGrid = () => {
  const columns = targetsColumns();
  const data = targetsData();

  return (
    <DataGrid
      columns={columns}
      data={data}
      scroll={false}
      rowActions={targetsRowActions}
    />
  );
};
