import style from "./navbar.module.scss";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={style.navbar}>
      <Link className={style.link} to="/dashboard">
        <h3 className={style.name}>Progress Tracker System</h3>
      </Link>

      <Link to="/" className={style.logout}>
        Logout
      </Link>
    </div>
  );
}
