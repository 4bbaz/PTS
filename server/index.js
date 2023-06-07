import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());

const mongodbURL = "mongodb+srv://test:root@test.6uo1xls.mongodb.net/";

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