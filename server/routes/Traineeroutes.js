import express from 'express';
import multer from 'multer';
import path from 'path';
import { addTrainee, deleteTrainee, getAllTrainees, getTraineeById, getTraineeCourseDetails, updateTrainee } from '../controllers/traineeController.js';
import { addCourseDetail, deleteCourseDetail, updateCourse } from '../controllers/courseController.js';
import { getAdminById } from '../controllers/adminController.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.post('/addtrainee', upload.single('avatar'), addTrainee);

router.get('/trainees', getAllTrainees);

router.get("/trainee/:id", getTraineeById);

router.delete("/delete/:id", deleteTrainee);

router.post("/addcourse/:id", addCourseDetail);

router.put("/update/:id", upload.single('avatar'), updateTrainee);

router.get("/course/:id", getTraineeCourseDetails);

router.put("/update/course/:id", updateCourse);

router.delete("/deletecourse/:id", deleteCourseDetail)

router.get("/admin/:id", getAdminById);

export default router;
