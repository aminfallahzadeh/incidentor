// IMPORTS
import { DataGrid } from "@/shared/components/DataGrid";
import { cartableColumns } from "./columns";
import { cartableData } from "./data";
import { cartableRowActions } from "./rowActions";

export const CartableGrid = () => {
  const columns = cartableColumns();
  const data = cartableData();

  return (
    <DataGrid
      columns={columns}
      data={data}
      scroll={false}
      rowActions={cartableRowActions}
    />
  );
};
