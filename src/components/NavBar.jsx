import style from "./navbar.module.scss";

export default function NavBar() {
  return (
    <div className={style.navbar}>
      <h3 className={style.name}>Progress Tracker System</h3>
      <a className={style.logout} href="#">
        Logout
      </a>
    </div>
  );
}
