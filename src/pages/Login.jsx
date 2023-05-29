import Button from "../components/Button";
import Input from "../components/Input";
import style from "./login.module.scss";

export default function Login() {
  return (
    <div className={style.login_content}>
      <div className={style.title}>
        <h1>Hello Trainer! </h1>
        <h1>Welcome to Progress Tracker System</h1>
      </div>
      <div className={style.login}>
        <Input label="Username" type="text" />
        <Input label="Password" type="password" />
        <Button name="Login" size="normal" />
      </div>
    </div>
  );
}
