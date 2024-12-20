// IMPORTS
import { DataGrid } from "@/shared/components/DataGrid";
import { operationalDomainColumns } from "./columns";
import { operationalDomainData } from "./data";
import { operationalDomainRowActions } from "./rowActions";

export const OperationalDomainGrid = () => {
  const columns = operationalDomainColumns();
  const data = operationalDomainData();
  return (
    <DataGrid
      columns={columns}
      data={data}
      scroll={false}
      rowActions={operationalDomainRowActions}
    />
  );
};
