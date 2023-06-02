import Button from "./Button";
import Input from "./Input";
import Uploadphoto from "./Uploadphoto";
import style from "./filloutdetails.module.scss";
import PropsTypes from "prop-types";
import { useState } from "react";
function FillOutDetails({ onNextStep, formData }) {
  const [firstName, setFirstName] = useState(formData.firstName || "");
  const [lastName, setLastName] = useState(formData.lastName || "");
  const [email, setEmail] = useState(formData.email || "");
  const [degree, setDegree] = useState(formData.degree || "");
  const [place, setPlace] = useState(formData.place || "");
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || "");
  const [parentPhoneNum, setParentPhoneNum] = useState(
    formData.parentPhoneNum || ""
  );
  const [disabilityType, setDisabilityType] = useState(
    formData.disabilityType || ""
  );
  const [parentEmail, setParentEmail] = useState(formData.parentEmail || "");
  const [teacherEmail, setTeacherEmail] = useState(formData.teacherEmail || "");
  const [photo, setPhoto] = useState(formData.photo || "");

  const handleNext = (e) => {
    e.preventDefault();

    const traineeDetails = {
      firstName,
      lastName,
      email,
      degree,
      place,
      phoneNumber,
      parentPhoneNum,
      disabilityType,
      parentEmail,
      teacherEmail,
      photo,
    };

    onNextStep({
      traineeDetails: traineeDetails,
    });
  };

  return (
    <div className={style.gird}>
      <div className={style.header}>
        <h3>Fill out Trainee Details</h3>
      </div>
      <div className={style.item1}>
        <Input
          label="First Name"
          type="text"
          value={firstName}
          onChange={setFirstName}
        />
        <Input label="Email" type="email" value={email} onChange={setEmail} />
        <Input label="Degree" type="text" value={degree} onChange={setDegree} />
        <Input label="Place" type="text" value={place} onChange={setPlace} />
        <Input
          label="Parent Phone Number"
          type="text"
          value={parentPhoneNum}
          onChange={setParentPhoneNum}
        />
      </div>
      <div className={style.item2}>
        <Input
          label="Last Name"
          type="text"
          value={lastName}
          onChange={setLastName}
        />
        <Input
          label="Phone Number"
          type="text"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        <Input
          label="Type of Disability"
          type="text"
          value={disabilityType}
          onChange={setDisabilityType}
        />
        <Input
          label="Parent Email ID"
          type="text"
          value={parentEmail}
          onChange={setParentEmail}
        />
        <Input
          label="Teacher Email ID"
          type="text"
          value={teacherEmail}
          onChange={setTeacherEmail}
        />
      </div>
      <div className={style.item3}>
        <Uploadphoto onUpload={setPhoto} />
      </div>
      <div className={style.item4}>
        <Button name="Next" size="large" click={handleNext} />
      </div>
    </div>
  );
}

FillOutDetails.propTypes = {
  onNextStep: PropsTypes.func.isRequired,
  formData: PropsTypes.shape({
    firstName: PropsTypes.string,
    lastName: PropsTypes.string,
    email: PropsTypes.string,
    degree: PropsTypes.string,
    place: PropsTypes.string,
    phoneNumber: PropsTypes.string,
    parentPhoneNum: PropsTypes.string,
    disabilityType: PropsTypes.string,
    parentEmail: PropsTypes.string,
    teacherEmail: PropsTypes.string,
    photo: PropsTypes.string,
  }),
};

export default FillOutDetails;
