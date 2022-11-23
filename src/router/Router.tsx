import { memo, VFC } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import {} from "./HomeRoutes";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
});
