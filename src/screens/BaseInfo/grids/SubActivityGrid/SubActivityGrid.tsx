// IMPORTS
import { DataGrid } from "@/shared/components/DataGrid";
import { subActivityColumns } from "./columns";
import { subActivityData } from "./data";
import { subActivityRowActions } from "./rowActions";

export const SubActivityGrid = () => {
  const columns = subActivityColumns();
  const data = subActivityData();

  return (
    <DataGrid
      columns={columns}
      data={data}
      scroll={false}
      rowActions={subActivityRowActions}
    />
  );
};
