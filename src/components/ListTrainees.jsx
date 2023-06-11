import { useEffect, useState } from "react";
import api from "../service/api";
import Avatar from "./Avatar";
import style from "./listtrainees.module.scss";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import getAllTrainees from "../data/Trainees";
import TraineeCount from "./TraineeCount";

function ListTrainees() {
  const location = useLocation();
  const [trainees, setTrainees] = useState([]);
  useEffect(() => {
    const fetchTrainees = async () => {
      try {
        const traineesData = await getAllTrainees();
        setTrainees(traineesData);
      } catch (error) {
        console.error("Failed to fetch trainees:", error);
      }
    };
    fetchTrainees();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/delete/${id}`);
    setTrainees((prevCourseList) =>
      prevCourseList.filter((trainee) => trainee._id !== id)
    );
  };

  const listTrainees = trainees.map((trainee, index) => (
    <>
      <ul
        // onClick={() => handleViewTrainee(trainee._id)}
        className={style.table_content}
        key={trainee._id}
      >
        <li>{index + 1}</li>
        <li>
          <Avatar photo={trainee.photoPath} />
        </li>
        <li>{trainee.firstName + " " + trainee.lastName}</li>
        <li>{trainee.degree}</li>
        <li>
          <div className={style.mange}>
            <Link to={`/viewtrainee/${trainee._id}`}>
              <span className={`${style.mange_view} ${style.icon}`}></span>
            </Link>
            <Link to={`/update/${trainee._id}`}>
              <span className={`${style.mange_edit} ${style.icon}`}></span>
            </Link>
            {location.pathname === "/admin" ? (
              <span
                onClick={() => handleDelete(trainee._id)}
                className={`${style.mange_delete} ${style.icon}`}
              ></span>
            ) : (
              <Link to={`/addcourse/${trainee._id}`}>
                <span
                  className={`${style.mange_addcourse} ${style.icon}`}
                ></span>
              </Link>
            )}
          </div>
        </li>
      </ul>
    </>
  ));

  return (
    <>
      <TraineeCount count={trainees.length} />
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
    </>
  );
}

ListTrainees.propTypes = {
  trainees: PropTypes.any,
};
export default ListTrainees;
