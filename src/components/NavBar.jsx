import style from "./navbar.module.scss";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const loacton = useLocation();
  return (
    <div className={style.navbar}>
      {loacton.pathname !== "/admin" ? (
        <Link className={style.link} to="/dashboard">
          <h3 className={style.name}>Progress Tracker System</h3>
        </Link>
      ) : (
        <Link className={style.link} to="/admin">
          <h3 className={style.name}>Progress Tracker System Adminstractor</h3>
        </Link>
      )}

      <Link to="/" className={style.logout}>
        Logout
      </Link>
    </div>
  );
}
