import style from "./uploadphoto.module.scss";
import PropTypes from "prop-types";

function Uploadphoto({ onUpload, error }) {
  const handleUpload = (e) => {
    const uploadedFile = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png"];

    if (!uploadedFile) {
      alert("Please choose a file to upload.");
      return;
    }
    console.log("Uploaded File:", uploadedFile);

    if (!allowedTypes.includes(uploadedFile.type)) {
      alert("Please upload a valid image file (JPEG/PNG).");
      return;
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (uploadedFile.size > maxSize) {
      alert("Please upload an image file smaller than 5MB.");
      return;
    }

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
        name="avatar"
        type="file"
        accept="image/*"
        
      />
      {error && <p className={style.error}>{error}</p>}
      {/* {!error && <p className={style.error}>Please upload a photo</p>} */}
    </div>
  );
}

Uploadphoto.propTypes = {
  onUpload: PropTypes.any,
  error: PropTypes.string,
};

export default Uploadphoto;
