import { memo, VFC } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Page404 } from "../components/pages/Page404"; // import { homeRoutes } from "../HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<HeaderLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="user_management" element={<UserManagement />} />
          <Route path="setting" element={<Setting />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
