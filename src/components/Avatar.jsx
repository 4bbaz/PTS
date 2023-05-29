import style from "./avatar.module.scss";
import PropTypes from "prop-types";
function Avatar({ photo, alt }) {
  return (
    <div>
      <img className={style.avatar} src={photo} alt={alt} />
    </div>
  );
}

Avatar.propTypes = {
  photo: PropTypes.string,
  alt: PropTypes.string,
};

export default Avatar;
