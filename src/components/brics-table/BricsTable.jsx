import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CustomFooter from "./CustomFooter";


export default function BricsTable({
  columns,
  skip,
  setSkip,
  take,
  setTake,
  initialRowCount,
  newPage = true,
  users,
  userData,
}) {
  // total entries
  let count = users.length;


  return (
    <>
      <div className="table-icons"></div>

      <div className="brics-table">
        <DataGrid
          getRowClassName={() => `super-app-theme--bricstable`}
          rowHeight={40}
          headerHeight={40}
          disableColumnMenu
          rows={users || []}
          columns={columns}
          autoHeight={true}
          getRowId={({ id }) => id}
          components={{
            Footer: CustomFooter,
            Toolbar: GridToolbar,
          }}
          disableDensitySelector={true}
          disableColumnSelector={true}
          disableColumnFilter={newPage ? false : true}
          disableIgnoreModificationsIfProcessingProps={true}
          componentsProps={{
            toolbar: {
              csvOptions: { disableToolbarButton: false },
              printOptions: { disableToolbarButton: newPage ? true : false },
            },
            footer: {
              count,
              take,
              setTake,
              skip,
              setSkip,
              initialRowCount,
            },
          }}
        />
      </div>
    </>
  );
}
