import style from "./traineecount.module.scss";
import PropTypes from "prop-types";
export default function TraineeCount({ count }) {
  return (
    <div className={style.count}>
      <h2 className={style.count_trainee}>{count}</h2>
      <h3 className={style.count_title}>Trainees</h3>
    </div>
  );
}

TraineeCount.propTypes = {
  count: PropTypes.string,
};
