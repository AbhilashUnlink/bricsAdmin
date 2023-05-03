import { combineReducers, configureStore } from "@reduxjs/toolkit";


import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import localStorage from "reduxjs-toolkit-persist/lib/storage/index";
// import { authSlice } from "./features/auth";
// import { loaderSlice } from "./features/loader";
import { tableTypeSlice } from "./features/table-type";

let persistConfig = {
  key: "root",
  storage: localStorage,
  blacklist: ["loader", "table"],
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
//   loader: loaderSlice.reducer,
//   auth: authSlice.reducer,
//   table:tableSlice.reducer,
  tableType:tableTypeSlice.reducer

});

let persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export default store;
