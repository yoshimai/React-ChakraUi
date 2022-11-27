import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMassage } from "./useMassage";

import { User } from "../types/api/User";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMassage } = useMassage();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMassage({ title: "ログインしました", status: "success" });
            navigate("/home");
          } else {
            showMassage({ title: "ユーザーが見つかりません", status: "error" });
          }
        })
        .catch(() =>
          showMassage({ title: "ログインできません", status: "error" })
        )
        .finally(() => setLoading(false));
    },
    [navigate, showMassage]
  );
  return { login, loading };
};
