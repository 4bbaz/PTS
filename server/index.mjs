import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/Traineeroutes.js';

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', router);
const mongodbURL = "mongodb+srv://test:root@test.6uo1xls.mongodb.net/PTS";
async function connectToDatabase() {
    try {
        await mongoose.connect(mongodbURL);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log('Error connecting to MongoDB:', err);
    }
}

connectToDatabase();

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
