import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import router from './routes/Traineeroutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));



app.use('/api', router);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({ storage: storage })

app.post('/api/trainees', upload.single('avatar'), (req, res) => {
    // Access the uploaded file using req.file
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
});


const mongodbURL = "mongodb+srv://test:root@test.6uo1xls.mongodb.net/PTS";

async function connectToDatabase() {
    try {
        await mongoose.connect(mongodbURL);
        console.log('connected to MongoDB');
    } catch (err) {
        console.log('Error connecting to MongoDB:', err);
    }
}

connectToDatabase();
app.listen(3000, () => {
    console.log('Server started on port 3000');
})