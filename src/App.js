import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import Registered from "./pages/users/Registered";
import Selected from "./pages/users/Selected";
import Rejected from "./pages/users/Rejected";
import Performing from "./pages/users/Performing";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<Users newPage={true} />} />
              <Route path=":userId" element={<Single />} />
              <Route path="registered" element={<Registered />} />
              <Route path="selected" element={<Selected />} />
              <Route path="not-selected" element={<Rejected />} />
              <Route path="performing" element={<Performing />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
