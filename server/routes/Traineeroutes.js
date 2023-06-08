import express from "express";
import {
    addTrainee,
    // getAllTrainees,
    // getTraineeById,
    // updateTrainee,
    // deleteTrainee,
} from "../controllers/traineeController.js";

const router = express.Router();

// Route for adding a new trainee
router.post("/trainees", addTrainee);

// Route for getting all trainees
// router.get("/trainees", getAllTrainees);

// // Route for getting a specific trainee by ID
// router.get("/trainees/:id", getTraineeById);

// // Route for updating a trainee
// router.put("/trainees/:id", updateTrainee);

// // Route for deleting a trainee
// router.delete("/trainees/:id", deleteTrainee);

export default router;
