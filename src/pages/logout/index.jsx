import React, { useEffect } from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //MEMO: ログアウト処理（localStorageから削除）
    localStorage.removeItem("user");

    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div className={styles.logout}>
        <p>ログアウトしました</p>
        <a href="/login">再ログイン</a>
      </div>
    </>
  );
};

export default Logout;