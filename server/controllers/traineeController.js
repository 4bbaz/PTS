import Trainee from "../models/trainee.js";
import CourseDetail from "../models/coursedetail.js";

// Controller function for adding a new trainee
export const addTrainee = async (req, res) => {
    try {
        const {
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
        } = req.body;

        const photoPath = req.file.path;

        const newTrainee = new Trainee({
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
            photoPath,
        });

        const savedTrainee = await newTrainee.save();

        res.status(201).json(savedTrainee);
    } catch (error) {
        res.status(500).json({ error: "Failed to add trainee" });
    }
};

// Controller function for adding a new course detail to a trainee
export const addCourseDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const { courseName, assignmentMark, demoMark, mockInterviewMark } = req.body;

        const trainee = await Trainee.findById(id);

        if (!trainee) {
            return res.status(404).json({ error: "Trainee not found" });
        }

        const newCourseDetail = new CourseDetail({
            courseName,
            assignmentMark,
            demoMark,
            mockInterviewMark,
        });

        const savedCourseDetail = await newCourseDetail.save();

        trainee.courseDetails.push(savedCourseDetail);

        const savedTrainee = await trainee.save();

        res.status(201).json(savedTrainee);
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to add course detail to trainee" });
    }
};

// Other controller functions for getting, updating, and deleting trainees
// ...
