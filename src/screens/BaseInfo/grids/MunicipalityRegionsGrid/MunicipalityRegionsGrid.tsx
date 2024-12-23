// IMPORTS
import { DataGrid } from "@/shared/components/DataGrid";
import { municipalityRegionsColumns } from "./columns";
import { municipalityRegionsData } from "./data";
import { municipalityRegionsRowActions } from "./rowActions";

export const MunicipalityRegionsGrid = () => {
  const columns = municipalityRegionsColumns();
  const data = municipalityRegionsData();
  return (
    <DataGrid
      columns={columns}
      data={data}
      scroll={false}
      rowActions={municipalityRegionsRowActions}
    />
  );
};
