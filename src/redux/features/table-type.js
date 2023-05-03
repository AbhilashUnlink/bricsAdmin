import { createSlice } from "@reduxjs/toolkit";

export const tableTypeSlice = createSlice({
  name: "tableType",
  initialState: {
    tableType: "RegisteredUsers",
  },
  reducers: {
    setTableType: (state, action) => {
      state.tableType = action?.payload;
    },
    clearTableType: (state) => {
      state.tableType = "RegisteredUsers";
    },
  },
});
export const { setTableType, clearTableType } = tableTypeSlice?.actions;
export default tableTypeSlice.reducer;
