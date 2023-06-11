import CourseDetail from '../models/coursedetail.js';
import Trainee from '../models/trainee.js';

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

export const getCourseDetails = async (req, res) => {
    try {
        const courseDetails = await CourseDetail.find();
        res.status(200).json(courseDetails);
    } catch (error) {
        console.log("Failed to get course details: ", error);
        res.status(500).json({ error: "Failed to get course details" });
    }
};



export const getCourse = async (req, res) => {
    try {
        const { id } = req.params;

        const course = await CourseDetail.findById(id);

        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }

        res.status(200).json(course);
    } catch (error) {
        console.log("Failed to get course: ", error);
        res.status(500).json({ error: "Failed to get course" });
    }
};



export const deleteCourseDetail = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the course detail by ID
        const courseDetail = await CourseDetail.findById(id);

        if (!courseDetail) {
            return res.status(404).json({ error: "Course detail not found" });
        }

        // Delete the course detail
        await CourseDetail.findByIdAndRemove(id);

        res.status(200).json({ message: "Course detail deleted successfully" });
    } catch (error) {
        console.log("Failed to delete course detail:", error);
        res.status(500).json({ error: "Failed to delete course detail" });
    }
};
