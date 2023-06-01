import Button from "./Button";
import Input from "./Input";
import InputFile from "./InputFile";
import style from "./filloutdetails.module.scss";
import PropsTypes from "prop-types";

function FillOutDetails({ onNextStep }) {
  return (
    <div className={style.gird}>
      <div className={style.header}>
        <h3>Fill out Trainee Details</h3>
      </div>
      <div className={style.item1}>
        <Input label="First Name" type="text" />
        <Input label="Email" type="email" />
        <Input label="Degree" type="text" />
        <Input label="Place" type="text" />
        <Input label="Parent Phone Number" type="text" />
      </div>
      <div className={style.item2}>
        <Input label="Last Name" type="text" />
        <Input label="Phone Number" type="number" />
        <Input label="Type of Disability" type="text" />
        <Input label="Parent Email ID" type="text" />
        <Input label="Teacher Email ID" type="text" />
      </div>
      <div className={style.item3}>
        <InputFile />
      </div>
      <div className={style.item4}>
        <Button name="Next" size="large" click={onNextStep} />
      </div>
    </div>
  );
}

FillOutDetails.propTypes = {
  onNextStep: PropsTypes.func.isRequired,
};

export default FillOutDetails;
