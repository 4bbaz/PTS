import Avatar from "./Avatar";
import style from "./listtrainees.module.scss";
import PropTypes from "prop-types";

function ListTrainees({ trainees }) {
  const listTrainees = trainees.map((trainee) => (
    <ul className={style.table_content} key={trainee.id}>
      <li>{trainee.id}</li>
      <li>
        <Avatar photo={trainee.photo} alt={trainee.name} />
      </li>
      <li>{trainee.firstName + trainee.lastName}</li>
      <li>{trainee.degree}</li>
      <li>
        <div className={style.mange}>
          <a href="#">
            <span className={`${style.mange_view} ${style.icon}`}></span>
          </a>
          <a href="#">
            <span className={`${style.mange_edit} ${style.icon}`}></span>
          </a>
          <a href="#">
            <span className={`${style.mange_delete} ${style.icon}`}></span>
          </a>
        </div>
      </li>
    </ul>
  ));

  return (
    <div className={style.table}>
      <ul className={style.table_header}>
        <li>No</li>
        <li>Photo</li>
        <li>Name</li>
        <li>Degree</li>
        <li>View & Edit</li>
      </ul>
      {listTrainees}
    </div>
  );
}

ListTrainees.propTypes = {
  trainees: PropTypes.any,
};
export default ListTrainees;
