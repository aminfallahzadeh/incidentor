// IMPORTS
import { DataGrid } from "@/shared/components/DataGrid";
import { activityColumns } from "./columns";
import { activityData } from "./data";
import { activityRowActions } from "./rowActions";

export const ActivityGrid = () => {
  const columns = activityColumns();
  const data = activityData();
  return (
    <DataGrid
      columns={columns}
      data={data}
      scroll={false}
      rowActions={activityRowActions}
    />
  );
};
