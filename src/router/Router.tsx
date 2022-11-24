import { memo, VFC } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Page404 } from "../components/pages/Page404";
// import { homeRoutes } from "../HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home">
        <Route
          path="/home"
          element={
            <HeaderLayout>
              <Home />
            </HeaderLayout>
          }
        />
        <Route
          path="user_management"
          element={
            <HeaderLayout>
              <UserManagement />
            </HeaderLayout>
          }
        />
        <Route
          path="setting"
          element={
            <HeaderLayout>
              <Setting />
            </HeaderLayout>
          }
        />
        <Route
          path="*"
          element={
            <HeaderLayout>
              <Page404 />
            </HeaderLayout>
          }
        />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
