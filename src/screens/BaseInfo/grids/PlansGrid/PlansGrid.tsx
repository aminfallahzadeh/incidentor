// IMPORTS
import { DataGrid } from "@/shared/components/DataGrid";
import { plansColumns } from "./columns";
import { plansData } from "./data";
import { plansRowActions } from "./rowActions";

export const PlansGrid = () => {
  const columns = plansColumns();
  const data = plansData();

  return (
    <DataGrid
      columns={columns}
      data={data}
      scroll={false}
      rowActions={plansRowActions}
    />
  );
};
