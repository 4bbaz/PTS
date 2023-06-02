import style from "./uploadphoto.module.scss";
import PropTypes from "prop-types";

function Uploadphoto({onUpload}) {
  const handleUpload = (e) => {
    const uploadedFile = e.target.files[0];
    onUpload(uploadedFile);
    console.log(uploadedFile);
  };
  return (
    <div className={style.input_content}>
      <span className={style.label_name}>Upload Photo</span>
      <label htmlFor="fileInput" className={style.label_input}>
        {" "}
        Choose File
      </label>
      <input
        onChange={handleUpload}
        className={style.inputfile}
        id="fileInput"
        type="file"
        accept="image/*"
      />
    </div>
  );
}

Uploadphoto.propTypes = {
  onUpload: PropTypes.any,
};

export default Uploadphoto;
