import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TraineeSchema = Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    degree: { type: String, required: true },
    place: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    parentPhoneNum: { type: String, required: true },
    disabilityType: { type: String, required: true },
    parentEmail: { type: String, required: true },
    teacherEmail: { type: String, required: true },
    photoPath: { type: String, required: true },
    courseDetails: [{ type: Schema.Types.ObjectId, ref: "coursedetail" }]
});


TraineeSchema.virtual("name").get(function () {
    return `${this.firstName} ${this.lastName}`;
});


const Trainee = mongoose.model("trainee", TraineeSchema);
export default Trainee;