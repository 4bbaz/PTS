import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import style from "./login.module.scss";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);

  const navigateTo = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigateTo("/dashboard");
      setValid(true);
    } else {
      setValid(false);
    }
  };
  return (
    <div className={style.login_content}>
      <div className={style.title}>
        <h1>Hello Trainer! </h1>
        <h2>Welcome to Progress Tracker System</h2>
      </div>
      <div className={style.login}>
        <Input
          label="Username"
          type="text"
          value={username}
          onChange={setUsername}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        <div className={style.btn}>
          <Button name="Login" size="normal" click={handleLogin} />
        </div>
      </div>
      {!valid && (
        <p className={style.error}>password and username are invalid</p>
      )}
    </div>
  );
}
