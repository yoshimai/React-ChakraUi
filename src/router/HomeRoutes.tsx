import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    children: [
      {
        psth: "/home",
        element: <Home />
      },
      {
        psth: "/user_management",
        element: <UserManagement />
      },
      {
        psth: "/setting",
        element: <Setting />
      },
      {
        psth: "*",
        element: <Page404 />
      }
    ]
  }
];
