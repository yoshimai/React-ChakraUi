/* eslint-disabled react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../types/api/User";
import { useMassage } from "./useMassage";

export const useAllUsers = () => {
  const { showMassage } = useMassage();

  const [loading, setloading] = useState(false);
  const [users, setusers] = useState<Array<User>>([]);

  const getusers = useCallback(() => {
    setloading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setusers(res.data))
      .catch(() => {
        showMassage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  return { getusers, loading, users };
};
