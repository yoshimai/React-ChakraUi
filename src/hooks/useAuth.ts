import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMassage } from "./useMassage";
import { useLoginUser } from "../hooks/useLoginUser";

import { User } from "../types/api/User";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMassage } = useMassage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            showMassage({ title: "ログインしました", status: "success" });
            navigate("/home");
          } else {
            showMassage({ title: "ユーザーが見つかりません", status: "error" });
            setLoading(false);
          }
        })
        .catch(() => {
          showMassage({ title: "ログインできません", status: "error" });
          setLoading(false);
        });
    },
    [navigate, showMassage, setLoginUser]
  );
  return { login, loading };
};
