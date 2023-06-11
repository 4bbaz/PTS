import CourseDetail from "../models/coursedetail.js";
import Trainee from "../models/trainee.js";
CourseDetail


// Controller function for adding a new trainee
export const addTrainee = async (req, res) => {
    try {
        // Access the uploaded file using req.file
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Extract trainee details from req.body
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
            teacherEmail
        } = req.body;

        // Create a new Trainee object
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
            photoPath: `../../server/${req.file.path}` // Assign the file path to the Trainee object
        });

        // Save the newTrainee to the database
        const savedTrainee = await newTrainee.save();

        res.status(201).json(savedTrainee);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add trainee' });
    }
};

export const getAllTrainees = async (req, res) => {
    try {
        const trainees = await Trainee.find();
        res.status(201).json(trainees);
    } catch (error) {
        console.error("Failed to fetch trainees:", error);
        res.status(500).json({ error: "Failed to fetch trainees" });
    }
};


export const getTraineeById = async (req, res) => {
    const { id } = req.params;

    try {
        const trainee = await Trainee.findById(id);
        if (!trainee) {
            return res.status(404).json({ error: "Trainee not found" });
        }
        res.status(200).json(trainee);
    } catch (error) {
        console.error("Failed to fetch trainee:", error);
        res.status(500).json({ error: "Failed to fetch trainee" });
    }
};


export const updateTrainee = async (req, res) => {

    try {
        const { id } = req.params;
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
            teacherEmail
        } = req.body;

        let updatedTrainee = {
            firstName,
            lastName,
            email,
            degree,
            place,
            phoneNumber,
            parentPhoneNum,
            disabilityType,
            parentEmail,
            teacherEmail
        };

        if (req.file) {
            updatedTrainee.photoPath = `../../server/${req.file.path}`;
        }

        const updatedTraineeResponse = await Trainee.findByIdAndUpdate(id, updatedTrainee, { new: true });

        if (!updatedTraineeResponse) {
            return res.status(404).json({ error: "Trainee not found" });
        }

        res.status(200).json(updatedTraineeResponse);
    } catch (error) {
        console.log("Failed to update trainee: ", error);
        res.status(500).json({ error: "Failed to update trainee" });
    }
};


export const getTraineeCourseDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const traineeCourse = await Trainee.findById(id).populate('courseDetails');
        if (!traineeCourse) {
            return res.status(404).json({ error: "course not found" });
        }
        res.status(200).json(traineeCourse.courseDetails)

    } catch (error) {
        console.error('Failed to get trainee course details:', error);
        throw error;
    }
};

// export const deleteTraineeDetails = async (req, res) => {
//     const { id } = req.params;

//     try {
//         await Trainee.findByIdAndRemove(id);

//         await CourseDetail.deleteMany({ trainee: id });

//         return res.status(200).json({ message: 'Trainee details deleted successfully' });
//     } catch (error) {
//         console.error('Failed to delete trainee details:', error);
//         return res.status(500).json({ message: 'Failed to delete trainee details' });
//     }
// };

export const deleteTrainee = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find the trainee by ID
      const trainee = await Trainee.findById(id);
  
      if (!trainee) {
        return res.status(404).json({ message: "Trainee not found" });
      }
  
      // Delete the trainee
      await trainee.deleteOne();
  
      // Delete the associated course details
      await CourseDetail.deleteMany({ _id: { $in: trainee.courseDetails } });
  
      return res.json({ message: "Trainee and associated course details deleted successfully" });
    } catch (error) {
      console.error("Failed to delete trainee:", error);
      return res.status(500).json({ message: "Failed to delete trainee" });
    }
  };