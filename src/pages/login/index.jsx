import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem("user", JSON.stringify({ username }));
      navigate("/");
    } else {
      alert("ユーザー名とパスワードを入力してください");
    }
  };

  return (
    <>
      <div className={styles.login}>
        <h2>ログイン</h2>

        <div className={styles.form__group}>
          <label>ユーザ名</label>
          <input
            placeholder="ユーザー名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className={styles.form__group}>
          <label>ユーザ名</label>
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className={styles.form__btn} onClick={handleLogin}>
          ログイン
        </button>
      </div>
    </>
  );
};

export default Login;