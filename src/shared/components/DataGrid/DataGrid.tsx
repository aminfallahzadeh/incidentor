// IMPORTS
import { useState, ReactNode } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_RowSelectionState,
  MRT_ColumnDef,
  MRT_RowData,
  MRT_SortingState,
} from "material-react-table";
import { MRT_Localization_FA } from "material-react-table/locales/fa";
import { PaginationItem } from "@mui/material";
import { useTheme } from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  FirstPage,
  LastPage,
} from "@mui/icons-material";

export const DataGrid = <T extends MRT_RowData>({
  columns,
  data,
  topBarActions,
  bottomBarActions,
  sorting,
  scroll,
  highlightActive = false,
  props,
  isLoading,
  isFetching,
  rowActions,
}: {
  columns: MRT_ColumnDef<T>[];
  data: T[];
  topBarActions?: ReactNode;
  bottomBarActions?: ReactNode;
  scroll: boolean;
  props?: object;
  sorting?: MRT_SortingState;
  isLoading?: boolean;
  isFetching?: boolean;
  highlightActive?: boolean;
  rowActions?: (id: string) => ReactNode;
}) => {
  // STATES
  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});
  // CONSTS
  const theme = useTheme();

  // CUSTOMIZATION
  const baseBackgroundColor =
    theme.palette.mode === "light" ? "#e4f0ff" : "rgba(46, 52, 86)";
  const borderColor = theme.palette.mode === "light" ? "#2e3456" : "#e4f0ff";
  const hoverColor = theme.palette.mode === "light" ? "#e4f0ff" : "#2e3456";

  const table = useMaterialReactTable({
    columns,
    data,
    renderTopToolbarCustomActions: () => topBarActions,
    renderBottomToolbarCustomActions: () => bottomBarActions,
    renderRowActions: rowActions
      ? ({ row }) => {
          return rowActions(row.original.id);
        }
      : undefined,
    muiLinearProgressProps: {
      color: "info",
      sx: {
        height: 2,
      },
    },
    muiCircularProgressProps: {
      color: "info",
    },
    muiBottomToolbarProps: {
      sx: {
        boxShadow: "none",
      },
    },
    muiTableHeadRowProps: {
      sx: {
        boxShadow: "none",
      },
    },
    muiTopToolbarProps: topBarActions
      ? {
          sx: {
            overflow: "none",
          },
        }
      : undefined,
    muiTableHeadProps: topBarActions
      ? {
          sx: {
            zIndex: 0,
          },
        }
      : undefined,
    muiTableBodyRowProps: ({ row }) => ({
      // IMPLEMENT ROW SELECTION MANUALLY
      //   onClick: () =>
      //     setRowSelection(() => ({
      //       [row.id]: true,
      //     })),
      //   selected: rowSelection[row.id],
      sx: {
        cursor: "pointer",
        color: row.original.isActive && highlightActive ? "#087a30" : "",
        "& td": {
          color: row.original.isActive && highlightActive ? "#087a30" : "",
        },
      },
    }),
    muiTableBodyProps: {
      sx: {
        '& tr:nth-of-type(odd):not([data-selected="true"]):not([data-pinned="true"]) > td':
          {
            backgroundColor: baseBackgroundColor,
          },
        '& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]):hover > td':
          {
            backgroundColor: hoverColor,
          },
      },
      //   sx: (theme) => ({
      //     '& tr:nth-of-type(odd):not([data-selected="true"]):not([data-pinned="true"]) > td':
      //       {
      //         backgroundColor: baseBackgroundColor,
      //       },
      //     // '& tr:nth-of-type(odd):not([data-selected="true"]):not([data-pinned="true"]):hover > td':
      //     //   {
      //     //     backgroundColor: darken(baseBackgroundColor, 0.2),
      //     //   },
      //     // '& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]) > td':
      //     //   {
      //     //     backgroundColor: lighten(baseBackgroundColor, 0.1),
      //     //   },
      //     '& tr:nth-of-type(even):not([data-selected="true"]):not([data-pinned="true"]):hover > td':
      //       {
      //         backgroundColor: hoverColor,
      //       },
      //   }),
    },
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        // borderRadius: "0",
        border: `1px solid ${borderColor}`,
      },
    },
    mrtTheme: (theme) => ({
      baseBackgroundColor: theme.palette.background.default,
      draggingBorderColor: theme.palette.secondary.main,
    }),
    localization: MRT_Localization_FA,
    enableFullScreenToggle: false,
    positionToolbarAlertBanner: "none",
    enableStickyHeader: true,
    enableStickyFooter: true,
    enableDensityToggle: false,
    enableRowActions: !!rowActions,
    positionActionsColumn: "last",
    // enableColumnResizing: true,
    columnResizeDirection: "rtl",
    // enableFilterMatchHighlighting: false,
    muiTableBodyCellProps: {
      align: "center",
      sx: {
        fontFamily: "IranYekan",
        fontWeight: "300",
        // borderRight: "1px solid #cfcfcf",
      },
    },
    muiTableHeadCellProps: {
      align: "center",
      sx: {
        // borderRight: "1px solid #cfcfcf",
        fontFamily: "IranYekan",
        fontWeight: "600",
      },
    },
    initialState: {
      density: "compact",
      sorting: sorting ? sorting : [],
    },
    enablePagination: scroll ? false : true,
    enableBottomToolbar: scroll ? false : true,
    muiTableContainerProps: scroll ? { sx: { height: "300px" } } : undefined,
    paginationDisplayMode: "pages",
    muiPaginationProps: !scroll
      ? {
          size: "small",
          shape: "rounded",
          rowsPerPageOptions: [5, 10, 20],
          variant: "outlined",
          renderItem: (item) => (
            <PaginationItem
              {...item}
              slots={{
                previous: ChevronRight,
                next: ChevronLeft,
                first: LastPage,
                last: FirstPage,
              }}
            />
          ),
        }
      : undefined,
    getRowId: (originalRow) => originalRow.id,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection, isLoading: isLoading, showProgressBars: isFetching },
    ...props,
  });

  return <MaterialReactTable table={table} />;
};
