import style from "./inputfile.module.scss";
function InputFile() {
  return (
    <div className={style.input_content}>
      <span className={style.label_name}>Upload Photo</span>
      <label htmlFor="fileInput" className={style.label_input}>
      </label>
      <input className={style.inputfile} id="fileInput" type="file" accept="image/*" />
    </div>
  );
}

export default InputFile;
