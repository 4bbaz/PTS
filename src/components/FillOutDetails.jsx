import Button from "./Button";
import Input from "./Input";
import Uploadphoto from "./Uploadphoto";
import style from "./filloutdetails.module.scss";
import PropTypes from "prop-types";
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

  const [formErrors, setFormErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateNumber = (number) => {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(number);
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!firstName) {
      validationErrors.firstName = "Please enter a first name";
    }

    if (!lastName) {
      validationErrors.lastName = "Please enter a last name";
    }

    if (!email) {
      validationErrors.email = "Please enter an email";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!degree) {
      validationErrors.degree = "Please enter a degree";
    }

    if (!place) {
      validationErrors.place = "Please enter a place";
    }

    if (!phoneNumber) {
      validationErrors.phoneNumber = "Please enter a phone number";
    } else if (!validateNumber(phoneNumber)) {
      validationErrors.phoneNumber = "Invalid phone number format";
    }

    if (!parentPhoneNum) {
      validationErrors.parentPhoneNum = "Please enter a parent phone number";
    } else if (!validateNumber(parentPhoneNum)) {
      validationErrors.parentPhoneNum = "Invalid phone number format";
    }

    if (!disabilityType) {
      validationErrors.disabilityType = "Please enter a type of disability";
    }

    if (!parentEmail) {
      validationErrors.parentEmail = "Please enter a parent email ID";
    } else if (!validateEmail(parentEmail)) {
      validationErrors.parentEmail = "Invalid email format";
    }

    if (!teacherEmail) {
      validationErrors.teacherEmail = "Please enter a teacher email ID";
    } else if (!validateEmail(teacherEmail)) {
      validationErrors.teacherEmail = "Invalid email format";
    }

    if (!photo) {
      validationErrors.photo = "Please upload a photo";
    }
    console.log("Validation Errors:", validationErrors); // Added console log

    return validationErrors;
  };

  const handleNext = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setFormErrors(validationErrors);
    console.log("Form Errors:", validationErrors);

    if (Object.keys(validationErrors).length === 0) {
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
        traineeDetails,
      });
    }
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
          error={formErrors.firstName}
        />
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          error={formErrors.email}
        />
        <Input
          label="Degree"
          type="select"
          select="degree"
          value={degree}
          onChange={setDegree}
          error={formErrors.degree}
        />
        <Input
          label="Place"
          type="text"
          value={place}
          onChange={setPlace}
          error={formErrors.place}
        />
        <Input
          label="Parent Phone Number"
          type="text"
          value={parentPhoneNum}
          onChange={setParentPhoneNum}
          error={formErrors.parentPhoneNum}
        />
      </div>
      <div className={style.item2}>
        <Input
          label="Last Name"
          type="text"
          value={lastName}
          onChange={setLastName}
          error={formErrors.lastName}
        />
        <Input
          label="Phone Number"
          type="text"
          value={phoneNumber}
          onChange={setPhoneNumber}
          error={formErrors.phoneNumber}
        />
        <Input
          label="Type of Disability"
          type="select"
          select="disability"
          value={disabilityType}
          onChange={setDisabilityType}
          error={formErrors.disabilityType}
        />
        <Input
          label="Parent Email ID"
          type="text"
          value={parentEmail}
          onChange={setParentEmail}
          error={formErrors.parentEmail}
        />
        <Input
          label="Teacher Email ID"
          type="text"
          value={teacherEmail}
          onChange={setTeacherEmail}
          error={formErrors.teacherEmail}
        />
      </div>
      <div className={style.item3}>
        <Uploadphoto onUpload={setPhoto} error={formErrors.photo} />
      </div>
      <div className={style.item4}>
        <Button name="Next" size="large" click={handleNext} />
      </div>
    </div>
  );
}

FillOutDetails.propTypes = {
  onNextStep: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    degree: PropTypes.string,
    place: PropTypes.string,
    phoneNumber: PropTypes.string,
    parentPhoneNum: PropTypes.string,
    disabilityType: PropTypes.string,
    parentEmail: PropTypes.string,
    teacherEmail: PropTypes.string,
    photo: PropTypes.string,
  }),
};

export default FillOutDetails;
