import { motion } from "framer-motion";

import style from "./filloutdetails.module.scss";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import api from "../service/api.js";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import Uploadphoto from "../components/Uploadphoto";
import Warning from "../components/Warning";

function FillOutDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [place, setPlace] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [parentPhoneNum, setParentPhoneNum] = useState("");
  const [disabilityType, setDisabilityType] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [activeForm, setActiveForm] = useState(1);

  const navigateTo = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (location.pathname === `/update/${id}`) {
      const fetchTraineeDetails = async () => {
        try {
          const response = await api.get(`/trainee/${id}`);
          const traineeData = response.data;
          setFirstName(traineeData.firstName);
          setLastName(traineeData.lastName);
          setEmail(traineeData.email);
          setDegree(traineeData.degree);
          setPlace(traineeData.place);
          setPhoneNumber(traineeData.phoneNumber);
          setParentPhoneNum(traineeData.parentPhoneNum);
          setDisabilityType(traineeData.disabilityType);
          setParentEmail(traineeData.parentEmail);
          setTeacherEmail(traineeData.teacherEmail);
          setPhoto(traineeData.photoPath);
        } catch (error) {
          console.log("Failed to fetch trainee details: ", error);
        }
      };

      fetchTraineeDetails();
    }
  }, [id, location.pathname]);

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

  const handleBackEdit = () => {
    setActiveForm(1);
  };

  const handleNext = () => {
    const validationErrors = validateForm();
    setFormErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setActiveForm(2);
    }
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("avatar", photo);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("degree", degree);
      formData.append("place", place);
      formData.append("phoneNumber", phoneNumber);
      formData.append("parentPhoneNum", parentPhoneNum);
      formData.append("disabilityType", disabilityType);
      formData.append("parentEmail", parentEmail);
      formData.append("teacherEmail", teacherEmail);

      console.log("Trainees: ", formData);

      if (location.pathname === `/update/${id}`) {
        const response = await api.put(`/update/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Trainee details updated successfully: ", response.data);
      } else {
        const response = await api.post("/addtrainee", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Trainee added successfully");
        console.log("Response:", response.data);
      }
      navigateTo("/dashboard");
    } catch (error) {
      console.log("Failed to add/update trainee:", error);
    }
  };

  return (
    <div className={style.addTcontent}>
      <motion.form
        onSubmit={handleSubmit}
        className={style.addtrainee}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/dashboard">
          {" "}
          <span className={style.closebutton}></span>
        </Link>
        {activeForm === 1 && (
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
              <Button name="Save" size="large" click={handleNext} />
            </div>
          </div>
        )}
        {activeForm === 2 && <Warning onBackEdit={handleBackEdit} />}
      </motion.form>
      
    </div>
  );
}

export default FillOutDetails;
