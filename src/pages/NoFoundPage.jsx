import style from "./nofoundpage.module.scss";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function NoFoundPage() {
  const navigateTo = useNavigate();

  const handleLogin = () => {
    navigateTo("/");
  };
  return (
    <div className={style.nofound}>
      <div className={style.box}>
        <div className={style.box_content}>
          <h1 className={style.title}>404 </h1>
          <h2>Not Found Page</h2>
          <h3>Would like to return login page? </h3>
          <div className={style.button}>
            <Button name="login" size="large" click={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}
