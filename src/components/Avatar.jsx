import style from "./avatar.module.scss";
import PropTypes from "prop-types";
function Avatar({ photo, alt, size }) {
  return (
    <div>
      <img className={`${style.avatar} ${style[size]}`} src={photo} alt={alt} />
    </div>
  );
}

Avatar.propTypes = {
  photo: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.string,
};

export default Avatar;
