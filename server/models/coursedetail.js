import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CourseDetailSchema = new Schema({
    courseName: { type: String, required: true },
    assignmentMark: { type: String, required: true },
    demoMark: { type: String, required: true },
    mockInterviewMark: { type: String, required: true },
});

const CourseDetail = mongoose.model("coursedetail", CourseDetailSchema);
export default CourseDetail;