import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManegement } from "../components/pages/UserManagement";

export const HomeRoutes = [
  {
    path: "/",
    children: <Home />
  },
  {
    path: "/user_manegement",
    children: <UserManegement />
  },
  {
    path: "/setting",
    children: <Setting />
  }
];
