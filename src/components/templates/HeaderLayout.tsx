import { memo, VFC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../organisms/layout/Header";

export const HeaderLayout: VFC = memo(() => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
});
